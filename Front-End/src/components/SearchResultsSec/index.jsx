"use client"

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { classNames } from 'primereact/utils';
import { Ripple } from 'primereact/ripple';
import { DataView } from 'primereact/dataview';
import { useAuth } from '@/contexts/authContext';
import { topRatedData } from '../../data/topRated';
import { hostsData } from '@/data/host';
import Header from '../Header';
import Footer from '../Footer';
import Toast from '../toast';
import DataViewTemplate from '../dataView';
import arrowInHot from '../../assets/icons/arrow-small-right.svg';
import facebook from '../../assets/WebSocials/facebook.svg';
import twitter from '../../assets/WebSocials/twitter.svg';
import linkedin from '../../assets/WebSocials/linkedin.svg';
import youtube from '../../assets/WebSocials/youtube.svg';
import instagram from '../../assets/WebSocials/instagram.svg';
import styles from './style.module.scss';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import { redirect } from 'next/navigation.js';

const ListItem = ({ publishItem }) => (
    <li>
        <img src={publishItem.img.src} alt="tops" />
        <div>
            <h3>{publishItem.title}</h3>
            <Link href={"/"} >
                <Image src={arrowInHot} alt="arrow" width={20} height={20} />
                <p>READ MORE</p>
            </Link>
        </div>
    </li>
);

const TopRatedList = ({ topRatedData }) => (
    <ul className={styles.asideTopsRatedAlls}>
        {topRatedData.map((publishItem) => (
            <ListItem key={publishItem.id} publishItem={publishItem} />
        ))}
    </ul>
);

const CategoriesList = ({ categoryCounts, setVisibleModal }) => (
    <ul>
        {categoryCounts.map((category, index) => (
            <li key={index}>
                <Link href={`/category/${category.name}`} >
                    <h3>{category.name}</h3>
                    <span>{category.count}</span>
                </Link>
            </li>
        ))}
    </ul>
);

const SearchResultsSec = ({ params }) => {
    const { postsRender, categoryCounts, setVisibleModal } = useAuth()

    useEffect(() => {
        if (postsRender.length == 0) {
            Toast({ message: "Bem-vindo !", isSuccess: true })
            redirect('/')
        }
    }, [postsRender]);


    const itemTemplate = (product, index) => {
        return (
            <div key={product.id} className="articleHiddenCategory" >
                <div className="articlearticleHiddenDivTop" >
                    <img src={product.image} ></img>
                    <p>{product.category}</p>
                </div>
                <div className="articlearticleHiddenDivMiddle"  >
                    <img src={hostsData[0].img.src} alt="hostImage" />
                    <h3>{hostsData[0].name}</h3>
                    <span>{product.createdAt}</span>
                </div>
                <div className="articlearticleHiddenDivBottom" >
                    <h1>{product.title}</h1>
                    <h4>{product.description}</h4>
                    <Link href={`/public/${product.id}`} >
                        <Image src={arrowInHot} alt="arrow" width={20} height={20}></Image>
                        <p>READ MORE</p>
                    </Link>
                </div>
            </div>
        );
    };

    const listTemplate = (items) => (
        <div className="grid grid-nogutter">
            {items && items.map((product) => itemTemplate(product))}
        </div>
    );

    const template2 = {
        layout: ' PrevPageLink PageLinks NextPageLink ',
        PrevPageLink: (options) => {
            return (
                <button type="button" className={classNames(options.className, 'border-round')} onClick={options.onClick} disabled={options.disabled}>
                    <i className="pi pi-chevron-left"></i>
                    <Ripple />
                </button>
            );
        },
        NextPageLink: (options) => {
            return (
                <button type="button" className={classNames(options.className, 'border-round')} onClick={options.onClick} disabled={options.disabled}>
                    <i className="pi pi-chevron-right"></i>
                    <Ripple />
                </button>
            );
        },
    };


    return (
        <>
            <Header />
            <main className="containerMain">
                <section className={styles.sec}>
                    <article>
                        <p>You have searched for “<span>{params.name}</span>”</p>
                        <h1>We have found <span>{postsRender.length}</span> Article(s)</h1>

                        <div className='showDivSearchPage'>
                            <DataView value={postsRender} listTemplate={listTemplate} paginator rows={6} paginatorTemplate={template2} />
                        </div>

                        <DataViewTemplate value={postsRender} />
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
                            <input type="email" placeholder='Email Address' required />
                            <button type='submit'>Subscribe</button>
                            <p>Rest assured! You’re gonna have a lot of fun when you press this</p>
                        </div>

                        <div className={styles.asideTopsRated}>
                            <h1>Top Rated</h1>
                            <span>This Week</span>
                            <TopRatedList topRatedData={topRatedData} />
                        </div>

                        <div className={styles.asideCategories}>
                            <span>Most Searched . . .
                                <button onClick={() => setVisibleModal(true)}>
                                    <i className="pi pi-search" style={{ color: '#4CE0D7' }}></i>
                                </button>
                            </span>
                            <h1>Categories</h1>
                            <CategoriesList categoryCounts={categoryCounts} setVisibleModal={setVisibleModal} />
                        </div>
                    </aside>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default SearchResultsSec;