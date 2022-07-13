import React, { Component } from 'react';




class Blog extends Component {


    constructor(props) {
        super(props)
        this.state = {
            article: props.article.attributes
        }
    }


    image() {
        if (this.state.article.image.data != null)
            return (<img
                className="img-fluid post-thumb "
                src={process.env.REACT_APP_API_STRAPI + this.state.article.image.data.attributes.url}
                alt="image"
            />)
        else return (<img
            className="img-fluid post-thumb "
            src={'blog.jpeg'}
            alt="image"
        />)
    }
    componentDidMount() {
       
    }
    render() {
        const [dateRelated, timeRelated] = this.state.article.publishedAt.split('T');

        return (

            <>
                {/*//item*/}
                <div className="item mb-5 ">
                    <div className="row g-3 g-xl-0 ">
                        <div className="col-2 col-xl-3">
                            {this.image()}
                        </div>
                        <div className="col text-start">
                            <h3 className="title mb-1">
                                <a className="text-link" href={"/blog/" + this.state.article.slug}>
                                    {this.state.article.title}
                                </a>
                            </h3>

                            <div className="meta mb-1">
                                <span className="date">Published {dateRelated}</span>

                                <span className="comment">
                                   
                                </span>
                            </div>
                            <div className="intro">
                                {this.state.article.introduction}
                            </div>
                            <a className="text-link" href={"/blog/" + this.state.article.slug}>
                                Read more →
                            </a>
                        </div>
                        {/*//col*/}
                    </div>
                    {/*//row*/}
                </div>
                {/*//item*/}
            </>
        );
    }
}

export default Blog;