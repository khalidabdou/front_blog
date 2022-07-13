import React, { Component } from 'react';
import queries from '../services/queries';
import Blog from './blog';
import Subscribe from './subscribe';
import ShowShimmer from './shimmer'
import { withRouter } from "react-router";


class Blogs extends Component {

    constructor(props) {
        super(props)
        console.log(props);
        this.state = {
            blogs: [],
            offset: this.props.match.params.offset
        }
        //let para = useParams()
    }
    componentDidMount() {
        //console.log(this.props)

        //const { offset } = useParams();
        let offset = this.props.match.params.offset
        if (offset)
            try {
                offset = parseInt(offset);
            } catch (err) {
                console.log('err');
            }
        else offset = 0

        this.setState({ offset: offset })
    
        queries.getArticles(offset).then(response => {
            
            this.setState({ blogs: response.data.data.articles.data })
        })
    }



    shimmer() {
        if (this.state.blogs.length === 0)
            return <ShowShimmer />
    }

    offset(){
        const current=parseInt(this.state.offset);
    
        return current +10
    }
    render() {

        return (<div className="main-wrapper">
            <Subscribe />
            <section className="blog-list px-3 py-5 p-md-5">
                <div className="container single-col-max-width">
                    {this.shimmer()}
                    {this.state.blogs.map(article => (
                        <Blog key={article.id} article={article} />
                    ))}
                    <nav className="blog-nav nav nav-justified my-5">
                        <a className="nav-link-next nav-item nav-link rounded" href={'/' + this.offset()} >
                            Next
                            <i className="arrow-next fas fa-long-arrow-alt-right" />
                        </a>
                    </nav>
                </div>
            </section>
        </div>);
    }
}

export default withRouter(Blogs);