import React, { useState, useEffect } from 'react';
// import Blocks, { ParagraphOutput } from 'editorjs-blocks-react-renderer';
import ShowShimmer from './shimmer'


import ReactHtmlParser, { domToReact } from 'html-react-parser';
import ReactGA from 'react-ga';

import { useParams } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
// import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';


import queries from '../services/queries';


// const data =
// { "time": 1656796204524, "blocks": [{ "id": "LtKBvI9ioK", "type": "paragraph", "data": { "text": "<b>test</b> tile" } }, { "id": "60PgSKw2OW", "type": "paragraph", "data": { "text": "okk" } }, { "id": "LrZ4ppTDTw", "type": "paragraph", "data": { "text": "test" } }, { "id": "GG4ftrUTya", "type": "code", "data": { "code": "test code = ijdj;" } }], "version": "2.23.2" }



function Post() {

    let { slug } = useParams();
    //console.log(slug);
    const [body, setBody] = useState(null)
    const [found, setfound] = useState('wait')
    const [publsihed, setPubshished] = useState(null)
    const [authore, setAuthor] = useState([])
    const [image, setImage] = useState(null)
    const [introduction, setIntroduction] = useState(null)
    const [article, setArticle] = useState([])


    const CustomParagraphRenderer = ({ data, style }) => {
        // validate props here...or not :)

        let content = null;
        //console.log('content para ' + data);
        if (typeof data === 'string') content = data;
        else if (typeof data === 'object' && data.text && typeof data.text === 'string') content = data.text;

        return content ? <p style={style} className=''>{ReactHtmlParser(content)}</p> : '';
    };

    const options = {
        replace: ({ attribs, children }) => {
            if (!attribs) {
                return;
            }
            //if attribs.class start with ''
            if (attribs.class && attribs.class.startsWith('language')) {
                return <SyntaxHighlighter
                    language=""
                    style={darcula}
                    showLineNumbers={true}
                    className={'mt-4 mb-4'}
                    lineProps={''}
                >{domToReact(children, options)}</SyntaxHighlighter>
            }
        }
    };

    const content = () => {
        if (body !== null && found !== null) {
            return ReactHtmlParser(body, options);
        } else if (found === null) {
            return <div className='text-center'>
                <img src="empty.png" className='img-fluid mt-4 mb-4' alt="" />
                <h3>not found</h3>
            </div>
        }
        else return <ShowShimmer />
    }



    useEffect(() => {
        if (body == null)
            queries.getArticle(slug).then(response => {
                //console.log(response.data.data.articles.data[0].attributes);
                const res = response.data.data.articles.data
                console.log(res);

                const article = response.data.data.articles.data[0].attributes

                //const js = JSON.parse(article.content)
                //console.log(js);
                setArticle(article.content)
                setBody(article.content)
                //console.log(response.data.data.users_permissions_user);
                //console.log(body);
                //const blogTiltle = response.data.data.title
                //console.log(blogTiltle);
                //setTitle(blogTiltle)
                //setImage(response.data.data.image)
                //setIntroduction(response.data.data.introduction)

                const [dateRelated, timeRelated] = article.publishedAt.split('T');

                //const [month, day, year] = dateRelated.split('-');
                //const [hours, minutes, seconds] = timeRelated.split(':');
                //const date2 = new Date(+year, month - 1, +day, +hours, +minutes, +seconds);

                setPubshished(dateRelated)
                if (response.data.data.articles.data[0].attributes.users_permissions_user.data)
                    setAuthor(response.data.data.articles.data[0].attributes.users_permissions_user.data.attributes)
                ReactGA.pageview(window.location.pathname + window.location.search);

                // console.log(authore);

            })
    })



    const authorelabel = () => {
        if (authore.length != 0)
            return <div className='text-center m-4 p-4'>
                <img src={authore.profile} className="rounded-circle mb-3 author"
                    alt="Avatar" />
                <h5 className="mb-2"><strong>{authore.username}</strong></h5>
                <p className="text-muted">Android Devloper <span className="badge bg-primary">PRO</span></p>
                <span className='meta'>published at {publsihed}</span>
            </div>
    }



    return (
        <div className="main-wrapper text-start p-4">
            <article className="blog-post px-3 py-5 p-md-5">
                <div className="container single-col-max-width">
                    <header className="blog-post-header">
                        <h2 className="title mb-2">{article.title}</h2>
                    </header>
                    <p>{article.introduction}</p>
                    {content()}
                </div>

                <hr />
                {/* <a className="nav-link text-center">
                    <img src='clap.png' className="navbar-toggler-icon" />
                    <span>{article.clap}</span>
                </a> */}
                {authorelabel()}
            </article>

        </div>

    );

}

export default Post;