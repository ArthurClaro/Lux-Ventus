import { useContext } from "react"
import styles from './style.module.scss'
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ExampleContext } from "../../../providers/UserContext";


function CardsTrainings({ trn, id }) {

    const { setisOpenTrainingFill, takeDayGet, seteditingTraining, diaAtual } = useContext(ExampleContext)
    // const {  seteditingContacts, delContacts } = useContext(ContactContext)

    // const clickIdLocalStorage = (productId) => {
    //     localStorage.setItem('@ID_CONTACTS', productId)
    //     seteditingContacts(contacts)
    //     setIsOpen2(true)
    // }

    // const clickDel = (formData) => {
    //     delContacts(formData)
    //     setIsOpen2(false)
    // }
    // console.log(trn)
    // const dayIdToken = localStorage.getItem('@DAYTOKEN')
    // const dayToday = new Date().toLocaleDateString()

    // console.log(diaAtual)
    
    const clickIdLocalStorage = (trainingId) => {
        // console.log(trn)
        localStorage.setItem('@ID_TRAINING', trainingId)
        setisOpenTrainingFill(true)
        seteditingTraining(trn)
        takeDayGet(id)
        // seteditingContacts(contacts)
        // abrir com as informações já 
    }

    return (

        <>
            {/* <li className={styles.li}>
                <button className={styles.buttonClick} >
                    <h2>{contacts.name}</h2>
                    <div>
                        <p>{contacts.phone}</p>
                        <button className={styles.btnEditt} onClick={() => clickIdLocalStorage(contacts.id)}>
                            <FiEdit2 size={13} color="rgb(0 170 255)" />
                        </button>
                        <button className={styles.btnEditt} onClick={() => clickDel(contacts.id)}>
                            <RiDeleteBin6Line size={13} color="white" />
                        </button>
                    </div>
                </button>
            </li> */}


            {/* <li key={trn.id}>
                <p>{trn.name}</p>
                <p>{trn.kg}</p>
                <p>{trn.repetitions}</p>
                <p>{trn.serie}</p>
                <p>Volume: {trn.volume}</p>
                <button onClick={() => clickIdLocalStorage(trn.id)} >Editar Dia</button>
            </li> */}


            {diaAtual == undefined || diaAtual.length == 0 ? (
                <li>Sem treinos</li>
            ) : (
                diaAtual.createdAt == new Date().toLocaleDateString() || diaAtual == undefined || diaAtual.length == 0 ? (
                    <li key={trn.id}>
                        <p>{trn.name}</p>
                        <p>{trn.kg}</p>
                        <p>{trn.repetitions}</p>
                        <p>{trn.serie}</p>
                        <p>Volume: {trn.volume}</p>
                        <button onClick={() => clickIdLocalStorage(trn.id)} >Editar Dia</button>
                    </li>
                ) : (
                    <li key={trn.id}>
                        <p>{trn.name}</p>
                        <p>{trn.kg}</p>
                        <p>{trn.repetitions}</p>
                        <p>{trn.serie}</p>
                        <p>Volume: {trn.volume}</p>
                    </li>
                )
            )}

        </>
    )
}
export default CardsTrainings
