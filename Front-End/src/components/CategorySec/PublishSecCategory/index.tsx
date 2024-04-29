"use client"
import React, { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@/contexts/authContext';
import { DataView } from 'primereact/dataview';
import { classNames } from 'primereact/utils';
import { Ripple } from 'primereact/ripple';
import { topRatedData } from '../../../data/topRated';
import { hostsData } from '../../../data/host';
import facebook from '../../../assets/WebSocials/facebook.svg';
import twitter from '../../../assets/WebSocials/twitter.svg';
import linkedin from '../../../assets/WebSocials/linkedin.svg';
import youtube from '../../../assets/WebSocials/youtube.svg';
import instagram from '../../../assets/WebSocials/instagram.svg';
import arrowInHot from '../../../assets/icons/arrow-small-right.svg';
import styles from './style.module.scss';
import DataViewTemplate from '@/components/dataView';

interface PublishSecCategoryProps {
    params: string;
}

interface Product {
    id: string;
    image: string;
    category: string;
    createdAt: string;
    publiHot: boolean;
    title: string;
    description: string;
}
const PublishSecCategory: React.FC<PublishSecCategoryProps> = ({ params }) => {

    const { publishCategory, setVisibleModal, categoryCounts } = useAuth();

    const itemTemplate = (product: Product) => (
        <div key={product.id} className="articleHiddenCategory">
            <div className="articlearticleHiddenDivTop">
                <img src={product.image} alt="productImage" />
                <p>{product.category}</p>
            </div>
            <div className="articlearticleHiddenDivMiddle">
                <img src={hostsData[0].img.src} alt="hostImage" />
                <h3>{hostsData[0].name}</h3>
                <span>{product.createdAt}</span>
            </div>
            <div className="articlearticleHiddenDivBottom">
                <h1>{product.title}</h1>
                <h4>{product.description}</h4>
                <Link href={`/public/${product.id}`}>
                    <Image src={arrowInHot} alt="arrow" width={20} height={20} />
                    <p>READ MORE</p>
                </Link>
            </div>
        </div>
    );

    const listTemplate = (items: Product[]) => {
        // if (!items || items.length === 0) return null; 
        const list = items.map((product) => itemTemplate(product))
        return (
            <div className="grid grid-nogutter">
                {list}
            </div>
        );
    };

    const template2 = {
        layout: ' PrevPageLink PageLinks NextPageLink ',
        PrevPageLink: (options: any) => (
            <button
                type="button"
                className={classNames(options.className, 'border-round')}
                onClick={options.onClick}
                disabled={options.disabled}
            >
                <i className="pi pi-chevron-left"></i>
                <Ripple />
            </button>
        ),
        NextPageLink: (options: any) => (
            <button
                type="button"
                className={classNames(options.className, 'border-round')}
                onClick={options.onClick}
                disabled={options.disabled}
            >
                <i className="pi pi-chevron-right"></i>
                <Ripple />
            </button>
        ),
    };

    return (
        <section className={styles.sec}>
            <article>
                <h1>
                    The Latest from <span>{params.charAt(0).toUpperCase() + params.slice(1).toLowerCase()}</span>
                </h1>
                <div className="showDiv">
                    <DataView value={publishCategory} itemTemplate={itemTemplate} paginator rows={6} paginatorTemplate={template2} />
                </div>
                <DataViewTemplate value={publishCategory} />
            </article>

            <aside>
                <div className={styles.asideYourHost}>
                    <img src={hostsData[0].img.src} alt="hostImage" />
                    <h4>YOUR HOST</h4>
                    <h3>{hostsData[0].name}</h3>
                    <hr />
                    <p>{hostsData[0].description}</p>
                    <button>Let´s Chat</button>
                    <div>
                        <Image src={facebook} alt="facebook" width={20} height={20} />
                        <Image src={twitter} alt="twitter" width={20} height={20} />
                        <Image src={linkedin} alt="linkedin" width={20} height={20} />
                        <Image src={youtube} alt="youtube" width={20} height={20} />
                        <Image src={instagram} alt="instagram" width={20} height={20} />
                    </div>
                </div>

                <div className={styles.asideNewsletter}>
                    <h1>Newsletter</h1>
                    <hr />
                    <h5>Join the 36,000 Lux Ventus!</h5>
                    <input type="email" placeholder="Email Address" required />
                    <button type="submit">Subscribe</button>
                    <p>Rest assured! You’re gonna have a lot of fun when you press this</p>
                </div>

                <div className={styles.asideTopsRated}>
                    <h1>Top Rated</h1>
                    <span>This Week</span>
                    <ul className={styles.asideTopsRatedAlls}>
                        {topRatedData.map((publishItem) => (
                            <li key={publishItem.id}>
                                <img src={publishItem.img.src} alt="tops" />
                                <div>
                                    <h3>{publishItem.title}</h3>
                                    <Link href="/">
                                        <Image src={arrowInHot} alt="arrow" width={20} height={20} />
                                        <p>READ MORE</p>
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.asideCategories}>
                    <span>
                        Most Searched . . .
                        <button onClick={() => setVisibleModal(true)}>
                            <i className="pi pi-search" style={{ color: '#4CE0D7' }}></i>
                        </button>
                    </span>
                    <h1>Categories</h1>
                    <ul>
                        {categoryCounts.map((category, index) => (
                            <li key={index}>
                                <Link href={String(params) === String(category.name) ? '' : `${category.name}`}>
                                    <h3>{category.name}</h3>
                                    <span>{category.count}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </section>
    );
};

export default PublishSecCategory;