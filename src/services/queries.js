import http from "./http";
import { API } from "./api";
import axios from "axios";

import { Articles, Article, CreactEmail } from '../gql/Query'

class queries {

    getArticles(offset) {
        return axios.post(API + '/graphql', { query: Articles(offset) })
    }



    getArticle(slug) {
        //const reformatId=id.replace('-',' ')
        //console.log(reformatId);
        return axios.post(API + '/graphql', { query: Article(slug) })
    }

    creactEmail(email) {
        return axios.post(API + '/graphql', { query: CreactEmail(email) })
    }
}




export default new queries()