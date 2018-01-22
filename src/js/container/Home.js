import React, { PropTypes } from 'react';
import axios from 'axios'

class Home extends React.Component {
    async componentDidMount() {
        const result = await axios.get('/getnews');
        this.setState({
            news: result.data
        });
    }
    render() {
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
    }
}

export default Home;