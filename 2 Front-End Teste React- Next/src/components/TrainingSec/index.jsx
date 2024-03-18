import { useContext, useEffect, useRef, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { api } from "../../services/api"
import { useForm } from "react-hook-form";
import { formTraining } from "./formTraining";
import { zodResolver } from "@hookform/resolvers/zod"
import styles from './style.module.scss'
import DateCalendarServerRequest from "./date";
import { peitoDays, trainingExamples, treino } from "../../data/cards";
import { ExampleContext } from "../../providers/UserContext";
import '../../style/index.scss'

// import { Calendar } from "@/components/ui/calendar"

import { Calendar } from 'primereact/calendar';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { addLocale } from 'primereact/api';
import { classNames } from "primereact/utils";
import ModalTrainingFill from "../ModalTrainingFill";
import CardsTrainings from "./CardsTrainings";


import 'primeicons/primeicons.css';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

function TrainingSec() {

    const { days, createDay, total2, seteditingTraining, diaAtual, clickDayCalendar, isOpenTrainingFill, setisOpenTrainingFill, takeTrainingCategoryDay, createTraining, trainingsCard, treinosDoDia, daysVtt, training, userLogoutClearDay, takeDayGet, trainingAll, daysAll, dateTemplate, date, setDate } = useContext(ExampleContext)
    const { id } = useParams()
    // console.log(id)

    // console.log(days, "--------------------", trainingAll)
    // console.log(daysAll)

    useEffect(() => {
        (async () => {
            await takeDayGet(id)
            await takeTrainingCategoryDay()
            // await clickDayCalendar()
            // await takeTrainingCategoryDay()
        })()

    }, []);


    const [date1, setDate1] = useState(new Date())




    addLocale('es', {
        firstDayOfWeek: 1,
        // showMonthAfterYear: true,
        "dayNames": ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
        "dayNamesShort": ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
        "dayNamesMin": ["Do", "Se", "Te", "Qa", "Qi", "Sx", "Sa"],
        "monthNames": ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        "monthNamesShort": ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        today: 'Hoje',
        clear: 'Limpar',

    });



    const [formValues, setFormValues] = useState(null);

    // console.log(formValues)

    const { register, handleSubmit, formState: { errors }, reset, setValue, getValues } = useForm({
        resolver: zodResolver(formTraining),
        defaultValues: formValues, // Inicializa os valores do formulário com formValues
    });

    const suggestTraining = (paramId) => {
        const currentExample = trainingExamples.find(element => element.category === paramId);

        const dataToSend = {
            ...formValues,
            name: currentExample.examples[Math.floor(Math.random() * currentExample.examples.length)].name,
            kg: currentExample.examples[Math.floor(Math.random() * currentExample.examples.length)].kg,
            repetitions: currentExample.examples[Math.floor(Math.random() * currentExample.examples.length)].repetitions,
            serie: currentExample.examples[Math.floor(Math.random() * currentExample.examples.length)].serie,
        };

        setFormValues(dataToSend)
        reset(dataToSend)
        // Fazer um link para descer pros Treinos
    }

    useEffect(() => {
        // Atualiza os valores do formulário quando formValues é alterado
        reset(formValues); // Use reset para garantir que o formulário seja atualizado
    }, [formValues, reset]);

    const subtmit = (formData) => {
        // console.log(formData)

        let category_id = { category: id }
        createDay(category_id)
        createTraining(formData, String(id))

        reset()
    }


    // /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const data = new Date().toLocaleDateString()
    // console.log(data)

    // console.log(diaAtual)
    // /////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const toast = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    }

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }

    const confirm1 = () => {
        confirmDialog({
            message: 'Are you sure you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            defaultFocus: 'accept',
            accept,
            reject
        });
    };

    const confirm2 = () => {
        confirmDialog({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            defaultFocus: 'reject',
            acceptClassName: 'p-button-danger',
            accept,
            reject
        });
    };

    return (
        <>
            <section className='container '>



                {/* == MODAL */}
                <Toast ref={toast} />
                <ConfirmDialog />
                <div className="card flex flex-wrap gap-2 justify-content-center">
                    <Button onClick={confirm1} icon="pi pi-check" label="Confirm" className="mr-2"></Button>
                    <Button onClick={confirm2} icon="pi pi-times" label="Delete"></Button>
                </div>
                <br />
                {isOpenTrainingFill ? <ModalTrainingFill /> : null}
                {/* ///////////////////////////////////////////////////////////////////////////////// */}
                <br />
                {/* <DateCalendarServerRequest /> */}

                {/* <Calendar
                    mode="single"
                    selected={date1}
                    onSelect={setDate1}
                    className="rounded-md border"
                /> */}

                <br /><br />


                {/* dateFormat="dd/mm/yy" , locale="es"  , inline showWeek */}



                <div className={`${styles.divCalendar} card flex justify-content-center`} >
                    <Calendar className={styles.calendar} locale="es" value={date} onChange={(e) => setDate(e.value)}
                        dateTemplate={dateTemplate}


                        inline
                        pt={{
                            header: {
                                className: classNames('flex items-center justify-between', 'p-2 text-gray-700 dark:text-white/80 bg-red dark:bg-gray-900 font-semibold m-0 border-b border-gray-300 dark:border-blue-900/40 rounded-t-lg')
                                // className: classNames('p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4')
                                // className: classNames('')

                            },

                        }}
                    />
                </div>

                <h2>Estastísticas:</h2>

                <ul>
                    {diaAtual && Object.keys(diaAtual).length > 0 ? (
                        <li key={diaAtual.id}>
                            <h1>Dia: {diaAtual.createdAt} - Treino de {id.charAt(0).toUpperCase() + id.slice(1)}</h1>
                            <h2>Volume Total de Treino feito{diaAtual.createdAt === new Date().toLocaleDateString() ? ' hoje' : ''}: {diaAtual.Vtt}</h2>

                            {diaAtual.BateuMeta ? (
                                <p>Meta Batida</p>
                            ) : (
                                <div>
                                    <h2>Quanto falta: {diaAtual.Faltante}</h2>
                                    <p>Meta ainda não Batida</p>
                                    {diaAtual.createdAt === new Date().toLocaleDateString() && (
                                        <button onClick={() => suggestTraining(id)}>Sugerir Treino</button>
                                        // abrir modal de sugestão de treinos DATA.js
                                        // //////////////////////////////////
                                    )}
                                </div>
                            )}
                        </li>
                    ) : (
                        <li>
                            {diaAtual === undefined || diaAtual.length === 0 || new Date().toLocaleDateString() === new Date(date).toLocaleDateString() ? (
                                'Vamos começar? Adicione algum treino ao seu dia.'
                            ) : (
                                'Não corresponde ao dia atual ,espere pelo dia para adicionar novos treinos...'
                            )}
                        </li>
                    )}
                </ul>



                <Link to='/room'>
                    <button className="backBtn dash" onClick={userLogoutClearDay}>Sair</button>
                </Link>
                <br />


                <h2>Exercicios Realizados Hoje:</h2>

                <ul>
                    {treinosDoDia.map((trn, index) => (

                        <CardsTrainings key={index} trn={trn} id={id} />
                    ))}
                </ul>



                {new Date().toLocaleDateString() === date || new Date().toLocaleDateString() === new Date(date).toLocaleDateString() ? (

                    <form className={styles.form} onSubmit={handleSubmit(subtmit)} >
                        <label className="text label" htmlFor="name">Nome do Treino</label>
                        <input className="input" type="text" id="name"  {...register('name')} placeholder="Nome do Treino" />
                        {errors.nome ? <p>{errors.nome.message}</p> : null}

                        <label className="text label" htmlFor="email">Série</label>
                        <input className="input" type="number" min="1" max="30" id="email"  {...register('serie')} placeholder="Digite aqui seu e-mail" />
                        {errors.serie ? <p>{errors.serie.message}</p> : null}

                        <label className="text label" htmlFor="password">Kilos (Kg)</label>
                        <input className="input" type="number" step="00.01" min="2.5" max="1000" id="password" {...register('kg')} placeholder="Digite aqui sua senha" />
                        {errors.kg ? <p>{errors.kg.message}</p> : null}

                        <label className="text label" htmlFor="confirm">Repetições</label>
                        <input className="input" type="number" id="confirm" min="1" max="30"  {...register('repetitions')} placeholder="Digite aqui novamente sua senha" />
                        {errors.repeticoes ? <p>{errors.repeticoes.message}</p> : null}

                        <button className="cadasterBtn" type="submit">Cadastrar</button>
                    </form>
                ) : (
                    null
                )}


                <br />


            </section>
        </>
    )
}
export default TrainingSec



