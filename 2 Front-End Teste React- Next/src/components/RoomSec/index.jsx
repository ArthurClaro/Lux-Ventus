import { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ExampleContext } from "../../providers/UserContext";

import 'primeicons/primeicons.css';
import { InputText } from 'primereact/inputtext';
import { Knob } from 'primereact/knob';
import { MultiStateCheckbox } from 'primereact/multistatecheckbox';
import { ToggleButton } from 'primereact/togglebutton';
import { SpeedDial } from 'primereact/speeddial';
import { Toast } from 'primereact/toast';
import { Card } from 'primereact/card';
import { Fieldset } from 'primereact/fieldset';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import { Chip } from 'primereact/chip';


function RoomSec() {

    const { goOutRoom, groups, userMETA } = useContext(ExampleContext)

    // console.log(userMETA)


    const [value, setValue] = useState(0);
    // console.log(value)

    const [valueDark, setvalueDark] = useState('public');
    const options = [
        { value: 'public', icon: 'pi pi-globe' },
        { value: 'protected', icon: 'pi pi-lock-open' },
        { value: 'private', icon: 'pi pi-lock' }
    ];
    // console.log(valueDark)
    const [checked, setChecked] = useState(false);

    const toast = useRef(null);
    // const router = useRouter();
    const items = [
        {
            label: 'Add',
            icon: 'pi pi-pencil',
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });
            }
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: () => {
                toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                router.push('/fileupload');
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://react.dev/';
            }
        }
    ];
    const [visible, setVisible] = useState(false);

    // https://primereact.org/sidebar/

    const toast2 = useRef(null);

    const onUpload = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    };
    return (
        <>
            <section className='container '>
                <h1>Módulos :</h1>
                <br />
                <div className="card flex flex-wrap gap-2">
                    <Chip label="Apple" icon="pi pi-apple" />
                    <Chip label="Facebook" icon="pi pi-facebook" />
                    <Chip label="Google" icon="pi pi-google" />
                    <Chip label="Microsoft" icon="pi pi-microsoft" removable />
                </div>
                <br />
                <div className="flex-auto">
                    <Avatar className="p-overlay-badge" icon="pi pi-user" shape="circle" size="xlarge">
                        <Badge value="4" />
                    </Avatar>
                </div>
                <br />

                <div className="card flex justify-content-center">
                    <Toast ref={toast2}></Toast>
                    <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" maxFileSize={1000000} onUpload={onUpload} />
                </div>

                <br />
                <div className="card flex justify-content-center">
                    <Sidebar visible={visible} onHide={() => setVisible(false)}>
                        <h2>Sidebar</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </Sidebar>
                    <Button icon="pi pi-arrow-right" onClick={() => setVisible(true)} />
                </div>
                <br />
                <div className="card">
                    <Fieldset legend="Header">
                        <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </Fieldset>
                </div>
                <br />
                <div className="card">
                    <Card title="Simple Card">
                        <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                        </p>
                    </Card>
                </div>
                <br />
                <div className="card">
                    <div style={{ position: 'relative', height: '100px' }}>
                        <Toast ref={toast} />
                        <SpeedDial model={items} direction="right" transitionDelay={80}
                            showIcon="pi pi-bars"
                            // showIcon="pi pi-user"
                            hideIcon="pi pi-times"
                            buttonClassName="p-button-outlined"
                            style={{ top: 'calc(50% - 2rem)', right: 0 }} />
                    </div>
                </div>

                <br />
                <div className="card flex flex-column align-items-center gap-3">
                    <MultiStateCheckbox value={valueDark} onChange={(e) => setvalueDark(e.value)} options={options} optionValue="value" />
                    <span>{valueDark || 'no value'}</span>
                    <ToggleButton checked={checked} onChange={(e) => setChecked(e.value)} className="w-8rem" />
                    <ToggleButton onLabel="I confirm" offLabel="I reject" onIcon="pi pi-check" offIcon="pi pi-times"
                        checked={checked} onChange={(e) => setChecked(e.value)} className="w-9rem" />
                </div>
                <br />

                <div className="p-inputgroup flex-1">
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-user"></i>
                    </span>
                    <InputText placeholder="Username" />
                </div>
                <br />

                <div className="card flex justify-content-center">
                    <Knob value={value} onChange={(e) => setValue(e.value)} valueTemplate={'{value}%'} />
                </div>

                <br />

                <ul>
                    {Array.isArray(userMETA) && userMETA.length > 0 ? (
                        userMETA.map((user) => (
                            <li key={user.id}>

                                {/* fazer um Card pra ele */}
                                <h2>{user.name}</h2>
                                {/* <h2>{user.email}</h2> */}
                                {/* <h2> {user.gender}</h2> */}
                                {/* <h2>Peso: {user.weight}</h2> */}
                                {/* <h2>Altura {user.height}</h2> */}
                                <button>Edit</button>
                            </li>
                        ))
                    ) : (
                        <p>Nenhum usuário encontrado.</p>
                    )}
                </ul>

                {/* ///////////////////////////////////////////////// */}

                {groups.map(group => {
                    return <li key={group.id}>
                        <Link to={`/room/${group.nome}`}>
                            <h2>{group.nome}</h2>
                        </Link>

                    </li>
                })}


                <br /><br />
                <input type="date" color="#1111" />

                <Link to='/'>
                    <button className="backBtn dash" onClick={goOutRoom}>Sair</button>
                </Link>
                <br />


            </section>
        </>
    )
}
export default RoomSec
