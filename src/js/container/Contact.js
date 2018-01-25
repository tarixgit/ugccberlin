import React, { PropTypes } from 'react';
import axios from 'axios';
import '../../css/Home.css';

class Contact extends React.Component {
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
        const news = this.state.news;
        if (!news) throw new Error('Failed to load the news feed.');
        return (
            <div className='root'>
                <div className='contact'>
                    <h1>Конткатні дані</h1>
                    <p/>
                    <p>Священик: Сергій Данків</p>
                    <p/>
                    <p>Адресса:</p>
                    <p>Waldstr. 11</p>
                    <p>12487 Berlin (Johannisthal)</p>
                </div>
            </div>
        );
    }

}

export default Contact;