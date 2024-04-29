"use client"
import React from 'react';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import { DataView } from 'primereact/dataview';
import { classNames } from 'primereact/utils';
import { Ripple } from 'primereact/ripple';
import Image from 'next/image';
import Link from 'next/link';
import arrowInHot from '../assets/icons/arrow-small-right.svg';
import { hostsData } from '@/data/host';

interface Product {
    id: string;
    image: string;
    category: string;
    createdAt: string;
    publiHot: boolean;
    title: string;
    description: string;
}

interface DataViewTemplateProps {
    value: Product[];
}

const DataViewTemplate: React.FC<DataViewTemplateProps> = ({ value }) => {

    const itemTemplate = (product: Product) => (

        <div key={product.id} className="articleHidden">
            <div className="articlearticleHiddenDivTop">
                <img src={product.image} alt="productImage" />
                <p>{product.category}</p>
            </div>
            <div className="articlearticleHiddenDivMiddle">
                <img src={hostsData[0].img.src} alt="hostImage" />
                <h3>{hostsData[0].name}</h3>
                <span>{product.createdAt}</span>
                {product.publiHot && <p>COMING IN HOT!</p>}
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

    const listTemplate = (items: Product[]) => (

        <div className="grid grid-nogutter">
            {items.map((product) => itemTemplate(product))}
        </div>
    );

    const paginatorTemplate = {
        layout: 'PrevPageLink NextPageLink',
        PrevPageLink: (options: any) => (
            <button
                type="button"
                className={classNames(options.className, 'border-round')}
                onClick={options.onClick}
                disabled={options.disabled}
            >
                <span className="p-3">
                    <i className="pi pi-chevron-left"></i>
                    PREV
                </span>
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
                <span className="p-3">
                    NEXT
                    <i className="pi pi-chevron-right"></i>
                </span>
                <Ripple />
            </button>
        ),
    };

    return (
        <div className="homeHidden">
            <DataView
                value={value}
                itemTemplate={itemTemplate}
                paginator
                rows={3}
                paginatorTemplate={paginatorTemplate}
            />
        </div>
    );
};

export default DataViewTemplate;
