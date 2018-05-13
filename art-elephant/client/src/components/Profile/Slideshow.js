import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import scissors from './scissors.jpg';
import dress from './RedDress.jpg';
import green from './Green.jpg';

class Slideshow extends Component {
    constructor() {
        super();
        this.state = {
        };
      
      }

    render() {
        return (
            <div className="slideshow">
            {/* <img alt="art" src="https://static1.squarespace.com/static/576e96ed2994cae381d021af/t/576e9eb959cc68de01607f44/1466865973436/Scissors?format=500w" /> */}
            <Carousel interval={null} indicators={false}>
                <Carousel.Item>
                    <img height={300} alt="painting" src={scissors} />
                    <Carousel.Caption>
                    <h3>Scissors</h3>
                    <p>Egg tempera on panel</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img height={300} alt="painting" src={dress} />
                    <Carousel.Caption>
                    <h3>Green and Blue</h3>
                    <p>Egg tempera on panel</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img height={300} alt="painting" src={green} />
                    <Carousel.Caption>
                    <h3>Red Dress</h3>
                    <p>Egg tempera on panel</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        )
    }
}

export default Slideshow;