import React, { Component } from 'react';
import Footer from './home/Footer';
import Hom from './home/Hom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { title: "react redux" };
    }

    handleClick = (e) => {
        console.log('this is:', e.target.value)
        this.setState({
            title: e.target.value
        })
    }

    render() {
        return (
            <div className="Home">
                <Hom title={this.state.title} />
                <div className="Content">
                    <input type="text" onChange={this.handleClick} />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;
