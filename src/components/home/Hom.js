import React, { Component } from 'react';
class Hom extends Component {
    render() {
        return (
            <div className="Footer">
                <h1>Hello, {this.props.title}</h1>
            </div>
        );
    }
}

export default Hom;