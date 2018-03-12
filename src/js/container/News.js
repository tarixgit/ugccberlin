import React, { PropTypes } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import axios from 'axios';
import '../../css/Home.css';
import {isLoggedIn, getAccessToken } from '../../Auth/Auth.js';

class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        };
        this.addNews = this.addNews.bind();
    }

    async componentDidMount() {
        const result = await axios.get('/getnews');
        this.setState({
            news: result.data
        });
    }
    addNews() {
        const url = `/addnews`;
        return axios.post(url, {headers: {Authorization: `Bearer ${getAccessToken()}`}}).then(response => response.data);
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
                        {isLoggedIn() && <li key={news.length + 1} className='newsItem'>
                            <form>
                                <FormGroup controlId='formControlsText'>
                                    <ControlLabel>{'Titel'}</ControlLabel>
                                    <FormControl type='text' placeholder='Enter text'/>
                                </FormGroup>
                                <FormGroup controlId="formControlsTextarea">
                                    <ControlLabel>Textarea</ControlLabel>
                                    <FormControl componentClass="textarea" placeholder="textarea" rows='10'/>
                                </FormGroup>
                                <button type='submit' onClick={this.addNews()}>Submit</button>
                            </form>
                        </li>}
                    </ul>
                </div>
            </div>
        );
    }
}

export default News;