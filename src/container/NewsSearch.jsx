import React, { Component } from 'react';
import { ArticleList } from '../presentation/ArticleList';
import { SearchArticles } from '../presentation/SearchArticles';
import { fetchAnyArticle } from '../utils/fetchAnyArticle';
import fetchApi from '../utils/fetchApi';

class NewsSearch extends Component {
    state = { 
        loading: true,
        articles: [],
        search: ''
    }

    componentDidMount = async () => {
        const articles = await fetchApi();
        this.setState({ articles, loading: false })
    }

    handleSearchChange = ({target}) => {
        this.setState({ search: target.value })
    }
    onSearchSubmit = async(event) => {
        event.preventDefault();
        this.setState({loading: true})
        const articles = await fetchAnyArticle(this.state.search);
        this.setState({articles: articles, loading: false})
    }

    render(){
        const { articles, search, loading } = this.state
        if (loading) return <h1>Loading...</h1>
        return (
            <>
                <SearchArticles onSubmit={this.onSearchSubmit} query={search} handleChange={this.handleSearchChange}/>
                <ArticleList articles={articles}/>
            </>
        )
    }
}

export default NewsSearch;