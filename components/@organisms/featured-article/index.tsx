import React from 'react';
import classes from './index.module.scss';

const FeaturedArticle = () => (
    <div className={classes.featuredArticle}>
        <div className={classes.container}>
            <article className={classes.article}>
                <h2 className={classes.articleTitle}>The Next Generation of TypicalBot</h2>
                <div className={classes.articleDate}>
                    <span>June 14th 2020</span>
                </div>
                <div className={classes.articleAuthors}>
                    <div className={classes.author}>
                        <img src="https://cdn.discordapp.com/avatars/187342661060001792/103798a6382efcdf4831b7dc0399ab15?format=png&size=32" />
                        <span className={classes.name}>
                            <span className={classes.realName}>Nicholas Sylke</span>
                            <a href="https://twitter.com/nsylke" className={classes.twitter}>@nsylke</a>
                        </span>
                    </div>
                    <div className={classes.author}>
                        <img src="https://cdn.discordapp.com/avatars/176610059684544512/8d941ed80b3c524508f01e8fc720c224.png?format=png&size=32" />
                        <span className={classes.name}>
                            <span className={classes.realName}>Tyler Richards</span>
                            <a href="https://twitter.com/tjrgg" className={classes.twitter}>@tjrgg</a>
                        </span>
                    </div>
                </div>
                <div className={classes.articleContent}>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam consequuntur, enim quisquam praesentium magnam laudantium amet in ipsam repellat doloremque odit porro cumque ab iure molestias libero nisi nostrum at. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat doloribus tempore a autem eum, excepturi itaque amet laudantium voluptatem voluptates aspernatur pariatur impedit quos atque voluptatibus enim suscipit obcaecati explicabo.</p>
                    <ul>
                        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore odio at quia impedit placeat, ex sint laborum iure sequi! Reiciendis facilis impedit, a culpa magnam nisi tempore incidunt omnis veniam!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente facere natus iste itaque odio, deserunt recusandae consectetur soluta quas! Obcaecati, quas! Vel, et corporis? Possimus accusantium hic nostrum molestias provident?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolorem quasi assumenda est? Deleniti nobis ducimus, necessitatibus voluptatem labore, repudiandae maiores qui quis assumenda sequi cumque! At veritatis possimus totam.</li>
                    </ul>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam consequuntur, enim quisquam praesentium magnam laudantium amet in ipsam repellat doloremque odit porro cumque ab iure molestias libero nisi nostrum at. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat doloribus tempore a autem eum, excepturi itaque amet laudantium voluptatem voluptates aspernatur pariatur impedit quos atque voluptatibus enim suscipit obcaecati explicabo.</p>
                </div>
            </article>
            <div className={classes.buttonContainer}>
                <a href="#" className={classes.readMore}>Read more</a>
            </div>
        </div>
    </div>
);

export default FeaturedArticle;
