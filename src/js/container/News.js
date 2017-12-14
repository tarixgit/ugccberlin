import React, { PropTypes } from 'react';
import axios from 'axios';
import '../../css/Home.css';

class Home extends React.Component {

    render() {
        const data = { news: [{
                title: 'Die Seite ist in der Bearbeitung',
                link: 'http://uachurch.de',
                contentSnippet: 'Інтернет сторінка находиться на стадії розвитку' }, {
                title: 'Служба Божа 15 січня відбудетьcя як завжди о 10:00',
                link: 'http://uachurch.de',
                contentSnippet: 'В цей день також Храм у нашій церкві у Магдебурзі' }, {
                title: 'Молодь буде ходити із колядою 13.01, 14.01',
                link: 'http://uachurch.de',
                contentSnippet: 'Хто бажає, щоб до них зайшла коляда повідомте отця Сергія' }] };

        if (!data || !data.news) throw new Error('Failed to load the news feed.');        return (
            <div className='root'>
                <div className='maincontainer'>
                    <h1>Новини</h1>
                    <ul className='news'>
                        {data.news.map((item, index) => (
                            <li key={index} className='newsItem'>
                                <a href={item.link} className='newsTitle'>{item.title}</a>
                                <span
                                    className='newsDesc'
                                    dangerouslySetInnerHTML={{ __html: item.contentSnippet }}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Home;