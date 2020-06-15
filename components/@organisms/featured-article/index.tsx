import React from 'react';

const FeaturedArticle = () => (
    <React.Fragment>
        <div className="featured-article">
            <div className="container">
                <article>
                    <h2 className="article-title">The Next Generation of TypicalBot</h2>
                    <div className="article-date">
                        <span>June 14th 2020</span>
                    </div>
                    <div className="article-authors">
                        <div className="author">
                            <img src="https://cdn.discordapp.com/avatars/187342661060001792/103798a6382efcdf4831b7dc0399ab15?format=png&size=32" />
                            <span className="name">
                                <span className="real-name">Nicholas Sylke</span>
                                <a href="https://twitter.com/nsylke" className="twitter">@nsylke</a>
                            </span>
                        </div>
                        <div className="author">
                            <img src="https://cdn.discordapp.com/avatars/176610059684544512/8d941ed80b3c524508f01e8fc720c224.png?format=png&size=32" />
                            <span className="name">
                                <span className="real-name">Tyler Richards</span>
                                <a href="https://twitter.com/tjrgg" className="twitter">@tjrgg</a>
                            </span>
                        </div>
                    </div>
                    <div className="article-content">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam consequuntur, enim quisquam praesentium magnam laudantium amet in ipsam repellat doloremque odit porro cumque ab iure molestias libero nisi nostrum at. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat doloribus tempore a autem eum, excepturi itaque amet laudantium voluptatem voluptates aspernatur pariatur impedit quos atque voluptatibus enim suscipit obcaecati explicabo.</p>
                        <ul>
                            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore odio at quia impedit placeat, ex sint laborum iure sequi! Reiciendis facilis impedit, a culpa magnam nisi tempore incidunt omnis veniam!</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente facere natus iste itaque odio, deserunt recusandae consectetur soluta quas! Obcaecati, quas! Vel, et corporis? Possimus accusantium hic nostrum molestias provident?</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolorem quasi assumenda est? Deleniti nobis ducimus, necessitatibus voluptatem labore, repudiandae maiores qui quis assumenda sequi cumque! At veritatis possimus totam.</li>
                        </ul>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam consequuntur, enim quisquam praesentium magnam laudantium amet in ipsam repellat doloremque odit porro cumque ab iure molestias libero nisi nostrum at. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat doloribus tempore a autem eum, excepturi itaque amet laudantium voluptatem voluptates aspernatur pariatur impedit quos atque voluptatibus enim suscipit obcaecati explicabo.</p>
                    </div>
                </article>
                <div className="button-container">
                    <a href="#" className="read-more">Read more</a>
                </div>
            </div>
        </div>
        <style jsx>{`
            .featured-article {
                width: 100%;
                background-color: #1B1E24;
                font-family: Arial, sans-serif;
            }

            .container {
                max-width: 80em;
                margin-left: auto;
                margin-right: auto;
                background-color: #fff;
            }

            article {
                padding: 3em 3em 0;
            }

            .article-title {
                margin: 0;
                font-weight: normal;
                text-align: center;
            }

            .article-date {
                text-align: center;
                margin-top: 1em;
                color: #696969;
            }

            .article-authors {
                margin: 1.5em 0 0;
                text-align: center;
            }

            .article-authors > .author {
                display: inline-flex;
                align-items: center;
                padding: 0 1em;
                margin-bottom: 0.5em;
                white-space: nowrap;
            }

            .article-authors > .author > img {
                width: 2em;
                height: 2em;
                margin-right: 0.5em;
                border-radius: 50%;
                background: #efefef;
            }

            .article-authors > .author .name {
                line-height: 1.1em;
                text-align: left;
                font-size: 0.8888888888888888em;
            }

            .article-authors > .author .real-name {
                display: block;
            }

            .article-authors > .author .twitter {
                font-size: 12px;
                color: #0074de;
                text-decoration: none;
            }

            .article-content {
                margin: 0;
                padding: 1em;
            }

            .button-container {
                text-align: center;
                padding: 0 0 3em;
            }

            .read-more {
                color: #0074de;
                text-decoration: none;
                font-size: 14px;
            }
        `}</style>
    </React.Fragment>
)

export default FeaturedArticle;
