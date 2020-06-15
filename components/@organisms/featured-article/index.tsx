import React from 'react';

const FeaturedArticle = () => (
    <React.Fragment>
        <div className="featured-article">
            <div className="container">
                <h2 className="title">Read the latest article from our blog!</h2>
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
                                <a href="#" className="twitter">@nsylke</a>
                            </span>
                        </div>
                        <div className="author">
                            <img src="https://cdn.discordapp.com/avatars/176610059684544512/8d941ed80b3c524508f01e8fc720c224.png?format=png&size=32" />
                            <span className="name">
                                <span className="real-name">Tyler Richards</span>
                                <a href="#" className="twitter">@tjrgg</a>
                            </span>
                        </div>
                    </div>
                    <div className="article-content">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam consequuntur, enim quisquam praesentium magnam laudantium amet in ipsam repellat doloremque odit porro cumque ab iure molestias libero nisi nostrum at. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat doloribus tempore a autem eum, excepturi itaque amet laudantium voluptatem voluptates aspernatur pariatur impedit quos atque voluptatibus enim suscipit obcaecati explicabo.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam consequuntur, enim quisquam praesentium magnam laudantium amet in ipsam repellat doloremque odit porro cumque ab iure molestias libero nisi nostrum at. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat doloribus tempore a autem eum, excepturi itaque amet laudantium voluptatem voluptates aspernatur pariatur impedit quos atque voluptatibus enim suscipit obcaecati explicabo.</p>
                        <a href="#" className="continue">Continue reading <i className="fal fa-long-arrow-right" /></a>
                    </div>
                </article>
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

            .title {
                margin: 0;
                padding: 1em 0;
                background-color: rgba(0, 0, 0, 0.015);
                text-align: center;
            }

            article {
                padding: 2em 3em;
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

            .continue {
                color: #0074de;
                text-decoration: none;
            }

            .continue > svg {
                line-height: 1.5;
            }
        `}</style>
    </React.Fragment>
)

export default FeaturedArticle;
