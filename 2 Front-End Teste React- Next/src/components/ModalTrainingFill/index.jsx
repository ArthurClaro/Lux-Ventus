import { useContext, useEffect } from "react"
import { ExampleContext } from "../../providers/UserContext"
import styles from './style.module.scss'
import { useForm } from "react-hook-form"
import { ContactContext } from "../../providers/Contacts"



function ModalTrainingFill() {
    const { setIsOpen2, modalRef, clickDayCalendar, delTrainingDay, currentDay1, takeTrainingCategoryDay, buttonRef, delClient, patchTrainingDay, setisOpenTrainingFill, editingTraining, isOpenClient, pacthClients, editingClient, seteditingClient } = useContext(ExampleContext)

    const { register, handleSubmit } = useForm({
        values: {
            name: editingTraining.name,
            kg: editingTraining.kg,
            repetitions: editingTraining.repetitions,
            serie: editingTraining.serie,
        }
    });
        // console.log(editingTraining.id)

    const subtmit = (formData) => {
        // console.log(formData)
        const dataToSend = {
            ...formData,
            kg: Number(formData.kg),
            repetitions: Number(formData.repetitions),
            serie: Number(formData.serie),
            volume: Number((formData.kg * formData.repetitions) * formData.serie),
        };

        console.log(dataToSend)

        patchTrainingDay(dataToSend)
        setisOpenTrainingFill(false)
        clickDayCalendar()
    }
    const clickDel = (formData) => {
        console.log(formData)
        delTrainingDay(formData)
        setisOpenTrainingFill(false)
    }


    return (
        <>
            <div className={styles.modalOverplay}>
                <div ref={modalRef} className={styles.moadlBox}>
                    <div className={styles.div1}>
                        <p>Detalhes do Treino</p>
                        <button ref={buttonRef} onClick={() => setisOpenTrainingFill(false)}>X</button>
                    </div>

                    <form className={styles.form} onSubmit={handleSubmit(subtmit)}>
                        <label className="text label" htmlFor="title">Nome do Treino</label>
                        <input className="input" type="text" id="title" required  {...register('name')} placeholder="Seu Nome de Usuário" />

                        <label className="text label" htmlFor="title">Kilos (Kg)</label>
                        <input className="input" type="number" step="00.01" max="500" required id="title"   {...register('kg')} placeholder="Seu E-mail de Usuário" />

                        <label className="text label" htmlFor="title">Repetições</label>
                        <input className="input" type="number" min="0" max="30" id="title" required  {...register('repetitions')} placeholder="Seu Número de Usuário" />

                        <label className="text label" htmlFor="title">Séries</label>
                        <input className="input" type="number" min="0" max="30" id="title" required  {...register('serie')} placeholder="Seu Número de Usuário" />


                        <div className={styles.divButton}>
                            <button type="submit">Salvar alterações</button>
                            <button onClick={() => clickDel(editingTraining.id)}>Excluir Usuário</button>
                        </div>
                    </form>

                </div>
            </div>

        </>
    )
}
export default ModalTrainingFill
