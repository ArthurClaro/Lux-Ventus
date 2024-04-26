"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Sidebar } from 'primereact/sidebar';
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { useAuth } from "@/contexts/authContext";
import Toast from "../toast";
import styles from './style.module.scss';
import SvgNav from "../../assets/svg-Nav.svg";
import SeacrhIcon from "../../assets/icons/seacrhIcon.svg";
import closeModal from "../../assets/icons/closeModal.svg";
import HamburgerIconMobile from "../../assets/icons/hamburgerIconMobile.svg";
import 'primeicons/primeicons.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";

const Header = ({ paramsCateg }) => {
    const { allPublish, setPostsRender, visibleModal, setVisibleModal } = useAuth();
    const router = useRouter();
    
    const categories = [
        { key: 'fashion', label: 'Fashion' },
        { key: 'lifestyle', label: 'Lifestyle' },
        { key: 'spiritual', label: 'Spiritual' },
        { key: 'mental health', label: 'Mental Health' },
        { key: 'ContactUs', label: 'Contact Us' }
    ];

    const [activeCategory, setActiveCategory] = useState('');
    const [value, setValue] = useState("");

    const handleClick = (category) => {
        if (category === "ContactUs") {
            router.push("/contactUs");
        }
        setActiveCategory(category);
        setVisibleModal(false);
    };

    const backHome = () => {
        router.push("/");
    };

    const submit = (e) => {
        e.preventDefault();
        setValue("");
        const postResults = allPublish.filter(post =>
            post.title.toLowerCase().includes(value.toLowerCase()) ||
            post.category.toLowerCase().includes(value.toLowerCase())
        );
        const postList = value ? postResults : allPublish;
        if (postList.length === 0) {
            Toast({ message: "Sem resultados.", isSuccess: false });
            setVisibleModal(false);
        } else {
            setPostsRender(postList);
            setVisibleModal(false);
            Toast({ message: `Resultados para: (${value})`, isSuccess: true });
            router.push(`/searchResults/${value}`);
        }
    };

    const renderCategories = () => {
        return categories.map(({ key, label }) => (
            <li key={key} onClick={() => handleClick(key)}   >
                <Link href={`/category/${key}`} className={(activeCategory === key || String(paramsCateg) === key) ? 'active' : ''} >
                    {label}
                </Link>
            </li>
        ));
    };

    return (
        <header className={`${styles.head} `}>
            <Image onClick={backHome} src={SvgNav} alt="w" width={234} height={49}></Image>
            <nav>
                <ul>{renderCategories()}</ul>
                <button onClick={() => setVisibleModal(true)}>
                    <Image src={SeacrhIcon} alt="w" width={47} height={47} />
                    <Image className="hidden" src={HamburgerIconMobile} alt="w" width={47} height={47} />
                </button>
            </nav>
            <Sidebar visible={visibleModal} position="right" onHide={() => setVisibleModal(false)}
                closeIcon={<Image src={closeModal} alt="w" width={65} height={65} />} >
                <ul>{renderCategories()}</ul>
                <h2>Looking for a specific article?</h2>
                <form onSubmit={submit}>
                    <IconField iconPosition="right">
                        <InputIcon className="pi pi-search"> </InputIcon>
                        <InputText value={value} onChange={(e) => setValue(e.target.value)} placeholder="Article title, topic or category" required />
                    </IconField>
                    <button type="submit">SEARCH</button>
                </form>
            </Sidebar>
        </header>
    );
};

export default Header;
