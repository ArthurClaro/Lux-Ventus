"use client"
import React from 'react';
import 'primeicons/primeicons.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import styles from './style.module.scss';
import { hostsData } from '../../../data/host';
import Image from "next/image";
import Link from "next/link";
import { useAuth } from '@/contexts/authContext';
import arrowInHot from "../../../assets/icons/arrow-small-right.svg";
import facebook from "../../../assets/WebSocials/facebook.svg";
import twitter from "../../../assets/WebSocials/twitter.svg";
import linkedin from "../../../assets/WebSocials/linkedin.svg";
import youtube from "../../../assets/WebSocials/youtube.svg";
import instagram from "../../../assets/WebSocials/instagram.svg";
import { topRatedData } from '../../../data/topRated.js';
import DataViewTemplate from '@/components/dataView';

const PublishSec = () => {
    const { allPublish, setVisibleModal, publishHot, categoryCounts, firstTwoArrays, lastThreeArrays } = useAuth()

    return (
        <>
            <section className={styles.sec}>
                <article >
                    <DataViewTemplate value={allPublish} />

                    {publishHot.map((publishItem) => (
                        <div key={publishItem.id} className={styles.articleInComming}>
                            <div className={styles.articleInCommingDivTop}>
                                <img src={publishItem.image} ></img>
                                <p>{publishItem.category}</p>
                            </div>
                            <div className={styles.articleInCommingDivMiddle}>
                                <img src={hostsData[0].img.src} alt="hostImage" />
                                <h3>{hostsData[0].name}</h3>
                                <span>{publishItem.createdAt}</span>
                                <p>COMING IN HOT!</p>
                            </div>
                            <div className={styles.articleInCommingDivBottom}>
                                <h1>{publishItem.title}</h1>
                                <h4>{publishItem.description}</h4>
                                <Link href={`public/${publishItem.id}`} >
                                    <Image src={arrowInHot} alt="arrow" width={20} height={20}></Image>
                                    <p>READ MORE</p>
                                </Link>
                            </div>
                        </div>
                    ))}
                    <h1>Trending</h1>
                    <div className={styles.articleTrending}>
                        {firstTwoArrays.map((publishItem) => (
                            <div key={publishItem.id} >
                                <div className={styles.articleTrendingDivTop}>
                                    <img src={publishItem.image} ></img>
                                    <p>{publishItem.category}</p>
                                </div>
                                <div className={styles.articleTrendingDivMiddle}>
                                    <img src={hostsData[0].img.src} alt="hostImage" />
                                    <h3>{hostsData[0].name}</h3>
                                    <span>{publishItem.createdAt}</span>
                                </div>
                                <div className={styles.articleTrendingDivBottom}>
                                    <h1>{publishItem.title}</h1>
                                    <h4>{publishItem.description}</h4>
                                    <Link href={`public/${publishItem.id}`} >
                                        <Image src={arrowInHot} alt="arrow" width={20} height={20}></Image>
                                        <p>READ MORE</p>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.articleLastTree}>
                        {lastThreeArrays.map((publishItem) => (
                            <div key={publishItem.id} >
                                <div className={styles.articleLastTreeDivTop}>
                                    <img src={publishItem.image} ></img>
                                    <p>{publishItem.category}</p>
                                </div>
                                <div className={styles.articleLastTreeRight}>
                                    <div className={styles.articleLastTreeDivMiddle}>
                                        <img src={hostsData[0].img.src} alt="hostImage" />
                                        <h3>{hostsData[0].name}</h3>
                                        <span>{publishItem.createdAt}</span>
                                    </div>
                                    <h1>{publishItem.title}</h1>
                                    <h4>{publishItem.description}</h4>
                                    <Link href={`public/${publishItem.id}`}  >
                                        <Image src={arrowInHot} alt="arrow" width={20} height={20}></Image>
                                        <p>READ MORE</p>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </article>

                <aside >
                    <div className={styles.asideYourHost}>
                        <img src={hostsData[0].img.src} alt="hostImage" />
                        <h4>YOUR HOST</h4>
                        <h3>{hostsData[0].name}</h3>
                        <hr />
                        <p>{hostsData[0].description}</p>
                        <button>Let´s Chat</button>
                        <div>
                            <Image src={facebook} alt="facebook" width={20} height={20}></Image>
                            <Image src={twitter} alt="twitter" width={20} height={20}></Image>
                            <Image src={linkedin} alt="linkedin" width={20} height={20}></Image>
                            <Image src={youtube} alt="youtube" width={20} height={20}></Image>
                            <Image src={instagram} alt="instagram" width={20} height={20}></Image>
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
                        <ul className={styles.asideTopsRatedAlls}>
                            {topRatedData.map((publishItem) => (
                                <li key={publishItem.id} >
                                    <img src={publishItem.img.src} alt="tops" />
                                    <div>
                                        <h3>{publishItem.title}</h3>
                                        <Link href={"/"} >
                                            <Image src={arrowInHot} alt="arrow" width={20} height={20}></Image>
                                            <p>READ MORE</p>
                                        </Link>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.asideCategories}>
                        <span>Most Searched . . .
                            <button onClick={() => setVisibleModal(true)} >
                                <i className="pi pi-search" style={{ color: '#4CE0D7' }}></i>
                            </button>
                        </span>
                        <h1>Categories</h1>
                        <ul >
                            {categoryCounts.map((category, index) => (
                                <li key={index}>
                                    <Link href={`category/${category.name}`} >
                                        <h3>{category.name}</h3>
                                        <span>{category.count}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

            </section>
        </>
    );
};

export default PublishSec;