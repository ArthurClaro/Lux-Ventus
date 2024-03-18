import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../services/api";
import { useOutclick } from "../hooks/useOutclick";
import { useKeydown } from "../hooks/useKeydown";
import { toast } from "react-toastify";
import { boolean } from "zod";
import { trainingExamples } from "../data/cards";

export const ExampleContext = createContext({})

export const ExampleProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const [isOpen, setIsOpen] = useState(false)

    const [isOpenClient, setIsOpenClient] = useState(false)

    const [editingClient, seteditingClient] = useState(null)

    const navigate = useNavigate();

    const [lista, setLista] = useState([])


    function toastSuccess(message, time) {
        toast.success(message, {
            position: "top-right",
            autoClose: time,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            style: {
                background: '#343B41',
                color: '#F8F9FA'
            }
        });
    }
    function toastErro(message, time) {
        toast.error(message, {
            position: "top-right",
            autoClose: time,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            style: {
                background: '#343B41',
                color: '#F8F9FA'
            }
        });
    }



    const userLogout = () => {
        // localStorage.removeItem()
        localStorage.clear()
        setUser(null)
        navigate('/')
    }


    // useEffect(() => {
    //     const loadUser = async () => {
    //         const localToken = localStorage.getItem("@TOKEN")

    //         if (localToken) {
    //             toastSuccess("Usuário já logado .", 2000)
    //             navigate("/dash")
    //         } else {
    //             navigate("/")
    //             toastErro("Usuário não logado .", 2000)
    //         }
    //     }
    //     loadUser()
    //     getUser()
    // }, [])

    const modalRef = useOutclick(() => {
        setIsOpen(false);
        setIsOpen2(false);
    })

    const buttonRef = useKeydown('Escape', (element) => {
        element.click()
    })

    const [isOpen2, setIsOpen2] = useState(false)


    const clientPost = async (formData) => {
        try {
            const { data } = await api.post('/clients', formData);
            toastSuccess('Redirecionando para página de login.', 2000)
            setTimeout(() => {
                navigate('/')
            }, 2000);

        } catch (error) {
            console.log(error.message)
            toastErro('E-mail já cadastrado !', 3000)
        }
    }

    const clientLogin = async (formData) => {
        try {
            const { data } = await api.post('/login', formData);
            localStorage.setItem('@TOKEN', data.token)
            localStorage.setItem('@EMAIL', JSON.stringify(formData.email))

            toastSuccess('Redirecionando para Dashboard!', 2000)
            setTimeout(() => {
                navigate('/dash')
            }, 2000);

        } catch (error) {
            console.log(error.message)
            toastErro('Senha ou e-mail incorretos !', 3000)
        }
    }

    const [userClient, setUserClient] = useState({});

    // useEffect(() => {
    //     (async () => {
    //         await getUser()
    //     })()

    // }, []);

    const getUser = async () => {
        try {
            const token = localStorage.getItem('@TOKEN')

            const { data } = await api.get('/clients', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            localStorage.setItem('@IDUSER', JSON.stringify(data.id))

            setUserClient(data);
            seteditingClient(data)
        } catch (error) {
            console.log(error);
        }
    };

    const pacthClients = async (formData) => {
        const token = localStorage.getItem('@TOKEN')
        const idUser = localStorage.getItem('@IDUSER')
        try {
            const { data } = await api.patch(`/clients/${idUser}`, formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            toastSuccess('Usuário atualizado !', 2000)
            getUser()
        } catch (error) {
            console.log(error)
        }
    }

    const delClient = async (formData) => {
        const token = localStorage.getItem('@TOKEN')

        try {
            const { data } = await api.delete(`/clients/${formData}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            toastSuccess('Usuário Deletado !', 2000)
            setTimeout(() => {
                navigate('/')
            }, 2000);

            await getUser()

        } catch (error) {
            console.log(error)
        }
    }


    // ///////////////////////////////////////////////////////////////////

    const userPost = async (formData) => {
        try {
            const { data } = await api.post('/users', formData);
            // console.log(data)

            toastSuccess('Redirecionando para página de login.', 3000)
            setTimeout(() => {
                navigate('/')
            }, 2000);
        } catch (error) {
            console.log(error.message)
            toastErro('E-mail já cadastrado !', 3000)
        }
    }

    const [userMETA, setuserMETA] = useState([]);

    const userGet = async () => {
        try {
            const token = localStorage.getItem('@TOKEN')
            const emailUnique = localStorage.getItem('@EMAIL')
            // console.log(emailUnique)
            const { data } = await api.get('/users', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            // console.log(data)
            const arrayUnique = data.find(element => element.email === emailUnique);
            // console.log(arrayUnique)

            // setuserMETA([...arrayUnique])
            setuserMETA([{ ...arrayUnique }])
            // [{...}]

            // localStorage.setItem('@IDUSER', JSON.stringify(user.id))
            // setUserClient(data);
            // seteditingClient(data)
        } catch (error) {
            console.log(error);
        }
    };
    // useEffect(() => {
    //     (async () => {
    //         await userGet();
    //     })();
    // }, []);
    // console.log(userMETA)















    const [groups, setgroups] = useState([]);

    // useEffect(() => {
    //     (async () => {
    //         // await userGet();
    //         await getGroups()

    //     })()

    // }, []);

    const getGroups = async () => {
        try {
            const { data } = await api.get('/groups-muscles');
            setgroups(data);
        } catch (error) {
            console.log(error);
        }
    };




    const userLogin = async (formData) => {
        try {
            const { data } = await api.post('/login', formData);
            localStorage.setItem('@TOKEN', data.token)
            localStorage.setItem('@EMAIL', formData.email)
            // localStorage.setItem('@EMAIL', JSON.stringify(formData.email))
            // console.log(data)

            toastSuccess('Redirecionando para Room.', 4000)
            setTimeout(() => {
                navigate('/room')
                getGroups()
                // await userGet(); DPSSSS
            }, 2000);
        } catch (error) {
            console.log(error.message)
            toastErro('Senha ou e-mail incorretos !', 3000)
        }
    }

    const loadUser = async () => {
        const localToken = localStorage.getItem("@TOKEN");
        const categoyParam = localStorage.getItem("@CATEGORYPARAM");

        if (localToken) {
            toastSuccess("Usuário já logado.", 2000);
            navigate(`/room/`);
            if (localToken && categoyParam) {
                navigate(`/room/${categoyParam}`);
            }
        } else {
            navigate("/");
            toastErro("Usuário não logado.", 2000);
        }
    };

    // useEffect(() => {
    //     loadUser();
    // }, []);





    const [days, setdays] = useState([]);

    const createDay = async (formData) => {
        // console.log(formData)
        try {
            const token = localStorage.getItem('@TOKEN')
            const { data } = await api.post(`/days`, formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            localStorage.setItem('@DAYTOKEN', data.id)

            toastSuccess('Dia para treino criado !', 5000)
            setdays(data)
        } catch (error) {
            // console.log(error.message)
            // toastErro('Token  não encontrado  !!!!!!!!!!', 3000)
        }
    }

    const [training, settraining] = useState([]);

    const createTraining = async (formData, id) => {
        // console.log("----------", formData, id)
        try {
            try {
                const { data } = await api.get(`/days/${id}`);

                const trainingInDay = data.filter((day) => day.createdAt == new Date().toLocaleDateString())
                trainingInDay.forEach(element => {
                    localStorage.setItem('@DAYTOKEN', element.id)
                });
                // toastSuccess('deu certo createTraining!', 2000)

            } catch (error) {
                console.log(error.message)
                // toastErro('Category don`t exist  !', 3000)
            }
            const token = localStorage.getItem('@TOKEN')
            const dayIdToken = localStorage.getItem('@DAYTOKEN')

            const { data } = await api.post(`/training/${dayIdToken}`, formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            // console.log(data)
            settraining(data)
            takeDayGet(id)
            clickDayCalendar()

            // takeTrainingCategoryDay()
            toastSuccess('Treino cirado com sucesso !', 2000)
        } catch (error) {
            console.log(error.message)
            loadUser()
            // toastErro('Token not found', 3000)
        }
    }







    const [daysAll, setdaysAll] = useState([]);

    const [trainingAll, settrainingAll] = useState([]);
    // console.log(trainingAll)

    const [diaAtual, setdiaAtual] = useState({});

    const takeDayGet = async (id) => {

        try {
            const token = localStorage.getItem('@TOKEN')
            const { data } = await api.get(`/days/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            //  == DIAS 
            // console.log(data)
            localStorage.setItem('@CATEGORYPARAM', id)
            setdaysAll(data)

            // clickDayCalendar()
            const diaAtual2 = data.find(element => element.createdAt === new Date().toLocaleDateString());
            setdiaAtual(diaAtual2);
            // takeTrainingCategoryDay()

            let trainingInDay = data.filter((day) => day.createdAt == new Date().toLocaleDateString())
            trainingInDay.forEach(element => {
                // console.log(element)
                // console.log(element.training)
                localStorage.setItem('@DAYTOKEN', element.id)
                settrainingAll(element.training)
            });

            takeTrainingCategoryDay()
            // toastSuccess('deu certo takeDayGet!', 8000)
        } catch (error) {
            console.log(error.message)
            loadUser()
            // toastErro('Token not found in TakeDay ', 4000)
        }

    }



    const [atualizou, setatualizou] = useState(false)

    // useEffect(() => {
    //     const diaAtual2 = daysAll.find(element => element.createdAt === new Date().toLocaleDateString());
    //     setdiaAtual(diaAtual2);

    //     // console.log("mudou")
    // }, [atualizou]);

    // console.log(daysAll)
    // console.log(diaAtual)






























    let datas = [];
    datas = daysAll.map(element => element.createdAt);
    // datas = daysVtt.map(element => element.createdAt);
    // daysAll == daysVtt(tem mais coisa, Vtt, BateuMeta)

    // //////////

    // console.log(daysAll)
    // console.log(daysVtt)
    // console.log(datas)


    datas.sort()
    // console.log(datas)
    let datasFormatadas = [];

    datas.forEach((data, index) => {
        const metaB = daysAll.find(e => e.createdAt == data)
        // console.log(metaB)

        let [dia, mes, ano] = data.split('/');

        let dataFormatada = {
            day: parseInt(dia),
            month: parseInt(mes),
            year: parseInt(ano),
            meta: metaB.BateuMeta
        };


        if (index == 0) {
            dataFormatada.type = "initialDay";
        } else if (index == datas.length - 1) {
            dataFormatada.type = "endDay";
        } else {
            dataFormatada.type = "otherDay";
        }

        datasFormatadas.push(dataFormatada);

    });
    // console.log(datasFormatadas)





    // const [date, setDate] = useState(false);
    const [date, setDate] = useState(new Date().toLocaleDateString());
    // console.log(new Date(date).toLocaleDateString())

    const clickDayCalendar = () => {
        const dateClickOne = daysAll.find(element => element.createdAt === new Date(date).toLocaleDateString());
        // const categoryParam = localStorage.getItem('@CATEGORYPARAM')
        if (dateClickOne) {
            setdiaAtual(dateClickOne);
            localStorage.setItem('@DAYTOKEN', dateClickOne.id)


        } else {
            // takeDayGet(categoryParam)
            // console.log(dateClickOne)
            // const diaAtual2 = daysAll.find(element => element.createdAt === new Date().toLocaleDateString());
            // setdiaAtual(diaAtual2);
            setdiaAtual({});
            localStorage.setItem('@DAYTOKEN', null)
        }
    }
    // console.log(diaAtual,"------")

    // useEffect(() => {

    //     clickDayCalendar()
    //     takeTrainingCategoryDay()
    // }, [date]);






    const dateTemplate = (date) => {

        let result = date.day;
        datasFormatadas.forEach((element) => {
            const currentDate = { ...date };
            currentDate.month += 1;
            if ((element.type === "initialDay" || element.type === "endDay" || element.type === "otherDay")
                && element.day === currentDate.day
                && element.month === currentDate.month
                && element.year === currentDate.year) {
                result = (
                    <strong style={{ color: 'blue' }}>{date.day}</strong>
                    // <strong style={{ textDecoration: 'line-through' }}>{date.day}</strong>
                    // /////////////// !!!!!
                );
            }
            if ((element.type === "initialDay" || element.type === "endDay" || element.type === "otherDay")
                && element.day === currentDate.day
                && element.month === currentDate.month
                && element.year === currentDate.year
                && element.meta == false) {
                result = (
                    <strong style={{ color: 'red' }}>{date.day}</strong>
                );
            }
        });
        return result;

    }




    const [treinosDoDia, settreinosDoDia] = useState([]);
    // console.log(treinosDoDia)
    // mesmo que trainingAll

    const takeTrainingCategoryDay = async () => {

        try {
            const dayIdToken = localStorage.getItem('@DAYTOKEN')
            // console.log(dayIdToken)

            const { data } = await api.get(`/training/${dayIdToken}`);
            // console.log(data)
            // settotal2(data.TotalVol)

            settreinosDoDia(data)

            // toastSuccess('deu certo takeTrainingCategoryDay!', 8000)
        } catch (error) {
            console.log(error.message)
            toastErro('Training  exist  !', 3000)
        }

    }

    // useEffect(() => {
    //     (async () => {
    //         await takeTrainingCategoryDay()
    //     })()
    // }, []);

    // console.log(treinosDoDia)






    // /////////////// PATCH
    const [isOpenTrainingFill, setisOpenTrainingFill] = useState(false)

    const [editingTraining, seteditingTraining] = useState(null)

    // console.log(editingTraining)


    const patchTrainingDay = async (formData) => {

        try {
            const trainingId = localStorage.getItem('@ID_TRAINING')
            const token = localStorage.getItem('@TOKEN')
            const categoryParam = localStorage.getItem('@CATEGORYPARAM')

            // const dayId = localStorage.getItem('@DAYTOKEN')

            const { data } = await api.patch(`/training/${trainingId}`, formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            // console.log(data)

            const daysAll2 = await api.get(`/days/${categoryParam}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            setdaysAll(daysAll2.data)
            // console.log(daysAll2)

            // setatualizou(!atualizou)
            // takeTrainingCategoryDay()

            clickDayCalendar()
            takeDayGet(categoryParam)

            // takeTrainingCategoryDay()

            toastSuccess('Treino atualizado !', 2000)
        } catch (error) {
            console.log(error.message)
            loadUser()
            // toastErro('Token not found in Pacth Training', 4000)
        } finally {
            setatualizou(!atualizou)
        }

    }



    const delTrainingDay = async (formData) => {
        const token = localStorage.getItem('@TOKEN')
        const categoryParam = localStorage.getItem('@CATEGORYPARAM')

        try {
            const { data } = await api.delete(`/training/${formData}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });

            toastSuccess('Treino deletado !', 2000)
            takeTrainingCategoryDay()
            // clickDayCalendar()
            takeDayGet(categoryParam)

        } catch (error) {
            console.log(error)
            loadUser()
            // toastErro('Token not found in Pacth Training', 4000)
        }
    }

    const userLogoutClearDay = () => {
        localStorage.removeItem('@DAYTOKEN')
        localStorage.removeItem('@CATEGORYPARAM')
    }
    const goOutRoom = () => {
        localStorage.clear()
    }






    // //////////////////////GOOOOOOOO///////////////////////////////////////////////////////////////////////////////////////////////////////////
    // //////////////////////GOOOOOOOO///////////////////////////////////////////////////////////////////////////////////////////////////////////
    // //////////////////////GOOOOOOOO///////////////////////////////////////////////////////////////////////////////////////////////////////////
    // //////////////////////GOOOOOOOO///////////////////////////////////////////////////////////////////////////////////////////////////////////


    const [publish, setPublish] = useState([]);

    const getPublish = async () => {
        try {
            const { data } = await api.get('/publish');
            setPublish(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        (async () => {
            await getPublish()
        })()
    }, []);

    console.log(publish)

    return (
        <ExampleContext.Provider value={{


            clickDayCalendar, delTrainingDay, diaAtual,
            goOutRoom, takeTrainingCategoryDay, patchTrainingDay, editingTraining, seteditingTraining,
            isOpenTrainingFill, setisOpenTrainingFill, takeTrainingCategoryDay, treinosDoDia, dateTemplate,
            date, setDate, daysAll, trainingAll, takeDayGet, userLogoutClearDay, createTraining, training, days,
            createDay, groups, userLogin, userPost, delClient, clientLogin, editingClient, seteditingClient, pacthClients,
            setIsOpenClient, isOpenClient, getUser, userClient, clientPost, toastSuccess, toastErro, setLista, user, userLogout,
            isOpen, setIsOpen, modalRef, buttonRef, isOpen2, setIsOpen2, setUser, lista, userMETA, publish


        }}>
            {children}
        </ExampleContext.Provider>
    )
}


export const allContext = () => useContext(ExampleContext)