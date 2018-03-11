import React, { PropTypes } from 'react';
import axios from 'axios';
import '../../css/Home.css';
import {login, logout, isLoggedIn } from '../../Auth/Auth.js';
import { getAccessToken } from '../../Auth/Auth.js';

class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        };
    }
    async componentDidMount() {
        const result = await axios.get('/getnews');
        this.setState({
            news: result.data
        });
    }

    addNews() {
        const url = `${BASE_URL}/api/jokes/celebrity`;
        return axios.post(url, {headers: {Authorization: `Bearer ${getAccessToken()}`}}).then(response => response.data);
    }
    authorize() {
        //const auth = new Auth();
        login();
    }
    //titel text foto author
    render() {
        const news = this.state.news;
        if (!news) throw new Error('Failed to load the news feed.');
        return (
            <div className='root'>
                <div className='maincontainer'>
                    <h1>Новини</h1>
                    <ul className='news'>
                        {news.map((item, index) => (

                            <li key={index} className='newsItem'>
                                <a className='newsTitle'>{item.title}</a>
                                <span
                                    className='newsDesc'
                                    dangerouslySetInnerHTML={{ __html: item.text }}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default News;