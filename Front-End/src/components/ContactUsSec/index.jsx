"use client"
import { ContactSchema } from "@/schemas/user.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Header from '../Header/index.jsx';
import Footer from '../Footer/index.jsx';
import Image from "next/image";
import styles from './style.module.scss';
import contactIconEMAIL from "../../assets/icons/contactIconEMAIL.svg";
import contactIconPHONE from "../../assets/icons/contactIconPHONE.svg";
import contactIconLOCATION from "../../assets/icons/contactIconLOCATION.svg";
import Toast from "@/components/toast";

const ContactUsSec = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(ContactSchema)
    });

    const onFormSubmit = (formData) => {
        // Envie o formulário
        Toast({ message: "Mensagem enviada com sucesso", isSuccess: true });
    };

    return (
        <>
            <Header />
            <main className={`containerMain contactUs ${styles.main}`}>
                <section className={styles.sec}>
                    <p>TELL US SOMETHING</p>
                    <h1>Contact Ventus</h1>
                </section>
                <section className={styles.messageSec}>
                    <article>
                        <h2>Send Us A Message</h2>
                        <p>Your email address will not be published. Required fields are marked <span>*</span></p>
                        <form onSubmit={handleSubmit(onFormSubmit)}>
                            <div className={styles.divInput}>
                                <div>
                                    <label htmlFor="name">Your Name <span>*</span></label>
                                    <input {...register("name")} type="text" id="name" placeholder="Full Name" required />
                                    {errors.name && <p>{errors.name.message}</p>}
                                </div>
                                <div>
                                    <label htmlFor="email">Your Email <span>*</span></label>
                                    <input {...register("email")} type="email" id="email" placeholder="Email Address" required />
                                    {errors.email && <p>{errors.email.message}</p>}
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message">Topic</label>
                                <input {...register("message")} type="message" id="message" placeholder="Message Subject" required />
                                {errors.message && <p>{errors.message.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="comment">Your Message <span>*</span></label>
                                <textarea {...register("description")} id="comment" cols="30" rows="10" placeholder="Tell us something." required></textarea>
                                {errors.description && <p>{errors.description.message}</p>}
                            </div>
                            <button type="submit">SEND</button>
                        </form>
                    </article>
                    <ul>
                        <li>
                            <Image src={contactIconEMAIL} alt="arrow" width={82} height={71} />
                            <div>
                                <p>EMAIL</p>
                                <h3>Mallory@lux-ventus.com</h3>
                            </div>
                        </li>
                        <li>
                            <Image src={contactIconPHONE} alt="arrow" width={82} height={71} />
                            <div>
                                <p>PHONE</p>
                                <h3>+1 (403) 163-0264</h3>
                            </div>
                        </li>
                        <li>
                            <Image src={contactIconLOCATION} alt="arrow" width={82} height={71} />
                            <div>
                                <p>LOCATION</p>
                                <h3>CA - San Diego, USA</h3>
                            </div>
                        </li>
                    </ul>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default ContactUsSec;
