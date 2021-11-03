import React, { Component } from 'react';
import { ArticleList } from '../presentation/ArticleList';
import fetchApi from '../utils/fetchApi';

class NewsSearch extends Component {
    state = { 
        loading: true,
        articles: [],
    }

    componentDidMount = async () => {
        const articles = await fetchApi();
        this.setState({ articles, loading: false })
    }
    render(){
        const { articles } = this.state
        if (this.state.loading) return <h1>Loading...</h1>
        return (
            <ArticleList articles={articles}/>
        )
    }
}

export default NewsSearch;