"use client"
import React from 'react';
import { useAuth } from "@/contexts/authContext";
import { CommentData, CommentSchema } from "@/schemas/user.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Image from "next/image";
import styles from './style.module.scss';
import commentIcon from "../../../assets/icons/comment-icon.svg";
import userCommentIcon from "../../../assets/icons/userComment.svg";
import facebook from "../../../assets/WebSocials/facebook.svg";
import twitter from "../../../assets/WebSocials/twitter.svg";
import linkedin from "../../../assets/WebSocials/linkedin.svg";
import youtube from "../../../assets/WebSocials/youtube.svg";
import instagram from "../../../assets/WebSocials/instagram.svg";
import arrowInHot from "../../../assets/icons/arrow-small-right.svg";
import arrowLeft from "../../../assets/icons/chevron-left.svg";
import arrowRight from "../../../assets/icons/chevron-right.svg";
import { hostsData } from "@/data/host";
import { topRatedData } from "@/data/topRated";

interface Props {
    params: string; 
}

const PostUnicSec: React.FC<Props> = ({ params }) => {

    const { postCreate, commentPost, postUnic, categoryCounts, detailPost, setVisibleModal } = useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm<CommentData>({
        resolver: zodResolver(CommentSchema)
    });

    const onFormSubmit = (formData: any) => {
        const newData = {
            ...formData,
            likes: 0
        };
        postCreate(newData, params);
    };

    return postUnic && (
        <section className={styles.sec}>
            <article>
                <div className={styles.first}>
                    <div className={styles.firstTop}>
                        <p > HOME | {postUnic.category} </p>
                    </div>
                    <div className={styles.firstBottom}>
                        <img src={hostsData[0].img.src} alt="hostImage" />
                        <h4>{hostsData[0].name}</h4>
                        <h5>{postUnic.createdAt}</h5>
                        <div>
                            <Link href='#allComments'>
                                <Image src={commentIcon} alt="arrow" width={35} height={35} />
                            </Link>
                            <p>{postUnic.comments && postUnic.comments.length}</p>
                        </div>
                    </div>
                </div>
                <h1>{postUnic.title}</h1>
                <div className={styles.post}>
                    <img src={postUnic.image} alt="" />
                    <p>{postUnic.description}</p>
                    <ul>
                        {detailPost.map((post) => (
                            <li key={post.id}>
                                <h1>{post.title}</h1>
                                <p>{post.description}</p>
                                <Link href=''>
                                    <h6>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae Vestibulum Vitae.”</h6>
                                    <h5>CHECK THEIR ARTICLE</h5>
                                </Link>
                                <div>
                                    {post.ImagesDetail.map((post: any) => (
                                        <img key={post.id} src={post.images} alt="tops" />
                                    ))}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.middleCategory}>
                    <p>{postUnic.category}</p>
                    <h4>Let’s Share It</h4>
                    <div>
                        <Image src={facebook} alt="facebook" width={46} height={46} />
                        <Image src={twitter} alt="twitter" width={46} height={46} />
                        <Image src={linkedin} alt="linkedin" width={46} height={46} />
                        <Image src={youtube} alt="youtube" width={46} height={46} />
                        <Image src={instagram} alt="instagram" width={46} height={46} />
                    </div>
                </div>
                <div className={styles.pastPrev}>
                    <div className={styles.past}>
                        <Link href=''>
                            <Image src={arrowLeft} alt="left" width={50} height={50} />
                        </Link>
                        <div>
                            <p>PREVIOUS ARTICLE</p>
                            <h4>Things to avoid before starting your collections.</h4>
                        </div>
                    </div>
                    <hr className="postUnicHr" />
                    <div className={styles.prev}>
                        <div>
                            <p>NEXT ARTICLE</p>
                            <h4>Lingerie special. Combo or double?</h4>
                        </div>
                        <Link href=''>
                            <Image src={arrowRight} alt="left" width={50} height={50} />
                        </Link>
                    </div>
                </div>
                <div className={styles.aboutHost}>
                    <img src={hostsData[0].img.src} alt="" />
                    <div className={styles.right}>
                        <h5>ABOUT THE AUTHOR</h5>
                        <h2>{hostsData[0].name}</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel Vitae.</p>
                        <div className={styles.bottom}>
                            <h4>Let’s Chat</h4>
                            <div>
                                <Image src={facebook} alt="facebook" width={32} height={32} />
                                <Image src={twitter} alt="twitter" width={32} height={32} />
                                <Image src={linkedin} alt="linkedin" width={32} height={32} />
                                <Image src={youtube} alt="youtube" width={32} height={32} />
                                <Image src={instagram} alt="instagram" width={32} height={32} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.sendComment}>
                    <h1>Leave A Reply</h1>
                    <h2>Your email address will not be published. Required fields are marked <span>*</span></h2>
                    <form onSubmit={handleSubmit(onFormSubmit)}>
                        <label htmlFor="comment">Comment <span>*</span></label>
                        <textarea placeholder="What do you think about this article?"  {...register("description")} id="comment" cols={30} rows={10} required></textarea>
                        {errors.description ? <p>{errors.description.message}</p> : null}
                        <div>
                            <div className={styles.left}>
                                <label htmlFor="name">Your Name <span>*</span></label>
                                <input  {...register("name")} type="text" id="name" placeholder="Full Name" required />
                                {errors.name ? <p>{errors.name.message}</p> : null}
                            </div>
                            <div className={styles.right}>
                                <label htmlFor="email">Email <span>*</span></label>
                                <input  {...register("email")} type="email" id="email" placeholder="Your Email Address" required />
                                {errors.email ? <p>{errors.email.message}</p> : null}
                            </div>
                        </div>
                        <button type="submit">POST REPLY</button>
                    </form>
                </div>
                <div className={styles.ancor}>
                    <Image src={commentIcon} alt="arrow" width={48} height={48} />
                    <h1>Comments (<span>{postUnic.comments && postUnic.comments.length}</span>)</h1>
                </div>
                <ul id="allComments" className={styles.allComments}>
                    {commentPost.map((post) => (
                        <li key={post.id}>
                            <Image src={userCommentIcon} alt="arrow" width={90} height={90} />
                            <div className={styles.right}>
                                <h1>{post.name}</h1>
                                <h5>{post.createdAt}</h5>
                                <p>{post.description}</p>
                                <div>
                                    <h4>REPLY</h4>
                                    <h3>{post.likes}</h3>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
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
                    <ul className={styles.asideTopsRatedAlls}>
                        {topRatedData.map((publishItem) => (
                            <li key={publishItem.id} >
                                <img src={publishItem.img.src} alt="tops" />
                                <div>
                                    <h3>{publishItem.title}</h3>
                                    <Link href={"/"} >
                                        <Image src={arrowInHot} alt="arrow" width={20} height={20} />
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
                                <Link href={`/category/${category.name}`} >
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

export default PostUnicSec;
