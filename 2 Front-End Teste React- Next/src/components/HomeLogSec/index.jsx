import { useEffect, useRef, useState } from 'react';
import Contact from '../../assets/Contacts.svg'
import BoxForm from './BoxForm'
import styles from './style.module.scss'
import { DatePicker } from '@mui/x-date-pickers';

// import MinMaxExample from './date';


import { Steps } from 'primereact/steps';
import { Toast } from 'primereact/toast';
import { Password } from 'primereact/password';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { InputMask } from "primereact/inputmask";
import { Divider } from 'primereact/divider';


function HomeLogSec() {


    // ///////////////////////////////////////////////7
    const [activeIndex, setActiveIndex] = useState(1);
    const toast = useRef(null);
    const items = [
        {
            label: 'Personal',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: 'First Step', detail: event.item.label });
            }
        },
        {
            label: 'Seat',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: 'Second Step', detail: event.item.label });
            }
        },
        {
            label: 'Payment',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: 'Third Step', detail: event.item.label });
            }
        },
        {
            label: 'Confirmation',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: 'Last Step', detail: event.item.label });
            }
        }
    ];

    const [other, setOther] = useState('');
    const [contato, setContato] = useState('');



    return (
        <>
            <section className='container '>
                <br />
                
                <div className="card flex justify-content-center">
                    <span className="p-float-label">
                        <InputText value={contato} onChange={(e) => setContato(e.target.value)} />
                        <label htmlFor="ssn_input" >Cõntato</label>
                    </span>
                </div>
                <br />
                <div className="p-inputgroup flex-1">
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-user"></i>
                    </span>
                    <InputText placeholder="Username" />
                    <label htmlFor="Username">conta</label>
                </div>

                <br /><br />
                <div className="card flex justify-content-center">
                    <span className="p-float-label">
                        <Password inputId="password2" value={other} onChange={(e) => setOther(e.target.value)}
                            feedback={false} tabIndex={1} toggleMask />
                        <label htmlFor="password2">Password</label>
                    </span>
                </div>
                <br />


                <div className="card h-[108px] w-[507px] ">
                    <Toast ref={toast}></Toast>
                    <Steps model={items} activeIndex={activeIndex} onSelect={(e) => setActiveIndex(e.index)} readOnly={false} />
                </div>


                <br />
                <DatePicker />
                {/* <MinMaxExample /> */}
                <br />
                <img src={Contact} className={styles.contact} alt="" />


                <BoxForm />
            </section>
        </>
    )
}
export default HomeLogSec
