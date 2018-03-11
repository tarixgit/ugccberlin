import React, { PropTypes } from 'react';
import axios from 'axios'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        };
    }
    async componentDidMount() {
        try {
            const result = await axios.get('/getnews');
            if (result) {
                this.setState({
                    news: result.data
                });
            }
        } catch (err) {
            console.log(err);
        }
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