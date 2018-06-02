import React, { Component } from 'react';
import elephant_gif from '../../Descriptive_Zoopraxography_Elephant_Ambling_Animated_13.gif';

class Opportunities extends Component {
    constructor(){
        super();
        this.state = {

        };
    }

    render(){
        return(
            <div className='content'>
                <h1>Opportunities</h1>
                <h4>Coming soon</h4>
                <img className="marching-elephants" alt="marching elephants" src={elephant_gif} />
            </div>
        )
    }
}

export default Opportunities;