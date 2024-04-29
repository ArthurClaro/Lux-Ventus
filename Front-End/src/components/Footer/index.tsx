"use client"
import styles from './style.module.scss';
import Image from "next/image";
import Link from "next/link";
import SvgNav from "../../assets/svg-Nav.svg";
import facebook from "../../assets/WebSocials/facebook.svg";
import twitter from "../../assets/WebSocials/twitter.svg";
import linkedin from "../../assets/WebSocials/linkedin.svg";
import youtube from "../../assets/WebSocials/youtube.svg";
import instagram from "../../assets/WebSocials/instagram.svg";

interface SocialIcon {
    src: string;
    alt: string;
    href: string;
}

const socialIcons: SocialIcon[] = [

    { src: facebook, alt: "facebook", href: "" },
    { src: twitter, alt: "twitter", href: "" },
    { src: linkedin, alt: "linkedin", href: "" },
    { src: youtube, alt: "youtube", href: "" },
    { src: instagram, alt: "instagram", href: "" }
];

const Footer: React.FC = () => {

    return (
        <footer className={`${styles.footer}`}>
            <div>
                <Image src={SvgNav} alt="w" width={234} height={49} />
                <div className={styles.footerSocialsDiv}>
                    <h3>Let’s Hang Out</h3>
                    <nav>
                        {socialIcons.map((icon, index) => (
                            <Link href={icon.href} key={index}>
                                <Image src={icon.src} alt={icon.alt} width={31} height={31} />
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
            <hr className='footerHr' />
            <p className="footerP">© 2023 - Lux Ventus by Zine.E.Falouti</p>
        </footer>
    );
};

export default Footer;