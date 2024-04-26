"use client"

import React, { useEffect } from 'react';
import { useAuth } from "@/contexts/authContext";
import Header from '../Header';
import Footer from '../Footer';
import PublishSecCategory from './PublishSecCategory';
import styles from './style.module.scss';
import 'primeicons/primeicons.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";

const CategorySec = ({ params }) => {
    const { getCategoryName, publishCategory } = useAuth();

    useEffect(() => {
        const fetchCategoryName = async () => {
            await getCategoryName(params);
        };

        fetchCategoryName();
    }, [getCategoryName, params]);

    const formattedParams = params.charAt(0).toUpperCase() + params.slice(1).toLowerCase();

    return (
        <>
            <Header paramsCateg={params} />

            <main className="containerMain categoryTemplate">
                <section className={styles.sec}>
                    <div>
                        <p>CATEGORY</p>
                        <h2>{formattedParams}</h2>
                    </div>
                    <h3>
                        TOPICS
                        <span>{publishCategory.length}</span>
                    </h3>
                </section>

                <PublishSecCategory params={params} />
            </main>

            <Footer />
        </>
    );
};

export default CategorySec;
