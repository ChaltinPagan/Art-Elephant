import React, { Component } from 'react';
import Slideshow from '../Profile/Slideshow';

class FAQ extends Component {
    constructor(){
        super();
        this.state = {

        };
    }

    render(){
        return(
            <div className='content'>
                <h1>FAQ</h1>
                <Slideshow />
            </div>
        )
    }
}

export default FAQ;