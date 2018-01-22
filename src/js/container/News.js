import React, { PropTypes } from 'react';
import axios from 'axios';
import '../../css/Home.css';

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

    render() {
        /*const data = { news: [{
                title: 'Die Seite ist in der Bearbeitung',
                link: 'http://uachurch.de',
                contentSnippet: 'Інтернет сторінка находиться на стадії розвитку' }, {
                title: 'Служба Божа 15 січня відбудетьcя як завжди о 10:00',
                link: 'http://uachurch.de',
                contentSnippet: 'В цей день також Храм у нашій церкві у Магдебурзі' }, {
                title: 'Молодь буде ходити із колядою 13.01, 14.01',
                link: 'http://uachurch.de',
                contentSnippet: 'Хто бажає, щоб до них зайшла коляда повідомте отця Сергія' }] };
        */
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




    /*render() {
        const newsArray = this.state.news.map(item => {
            return <div>
                <div>{item.titel}</div>
                <div>{item.text}</div>
                <div>{item.foto}</div>
                <div>{item.author}</div>
            </div>
        });
        return (
            <div>
                <h1>Новини</h1>
                {newsArray}
            </div>
        );
    }*/
}

export default News;