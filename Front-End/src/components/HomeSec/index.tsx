"use client"

import React from 'react';
import { useAuth } from "@/contexts/authContext";
import Header from '../Header/index.tsx';
import Footer from '../Footer/index.tsx';
import PublishSec from './PublishSec/index.tsx';
import Loading from '../../app/loading.tsx';
import styles from './style.module.scss';
import 'primeicons/primeicons.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Carousel } from 'primereact/carousel';
import { topicsData } from '../../data/topics.js';

interface Product {
    img: {
        src: string;
    };
    category: string;
}

const HomeSec: React.FC = () => {
    const { loader } = useAuth();

    const responsiveOptions = [
        {
            breakpoint: '1380px',
            numVisible: 2,
            numScroll: 1
        },
    ];

    const productTemplate = (product: Product) => (
        <div className="cardsCategories border-1 surface-border border-round m-2 text-center py-5 px-3">
            <img src={product.img.src} alt={product.category} className="w-6 shadow-2" />
            <h1 className="w-6 shadow-2" >{product.category}</h1>
            <button>View More</button>
        </div>
    );

    return (
        <>
            {loader ? (
                <Loading />
            ) : (
                <>
                    <Header paramsCateg={undefined} />
                    <main className="containerMain">
                        <section className={styles.sec}>
                            <div>
                                <h5>LUX VENTUS MAGAZINE</h5>
                                <h2>We Are the <span>Ventus Fashion</span></h2>
                                <p>We like to gossip about everything, but we will never forget the daily fashion dose.</p>
                            </div>
                        </section>

                        <article className={styles.article}>
                            <h3>Topics</h3>
                            <div className="card">
                                <Carousel
                                    value={topicsData}
                                    circular
                                    numVisible={6}
                                    numScroll={1}
                                    responsiveOptions={responsiveOptions}
                                    autoplayInterval={3000}
                                    itemTemplate={productTemplate}
                                />
                            </div>
                        </article>

                        <hr className="divisor" />

                        <PublishSec />
                    </main>

                    <Footer />
                </>
            )}
        </>
    );
};

export default HomeSec;
