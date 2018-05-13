import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

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
            <Carousel interval={null}>
                <Carousel.Item>
                    <img height={500} alt="painting" src="https://static1.squarespace.com/static/576e96ed2994cae381d021af/t/576e9eb959cc68de01607f44/1466865973436/Scissors?format=500w" />
                    <Carousel.Caption>
                    <h3>Scissors</h3>
                    <p>Egg tempera on panel</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img height={500} alt="painting" src="https://static1.squarespace.com/static/576e96ed2994cae381d021af/576e9751f5e231ddf3c2b309/576e9fe1cd0f68ce8dccc195/1495396422242/PaganChaltin_RedDress%282012%29_eggTemperaOnPanel_24x15in%28high-res%29.jpg?format=300w" />
                    <Carousel.Caption>
                    <h3>Green and Blue</h3>
                    <p>Egg tempera on panel</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img height={500} alt="painting" src="https://static1.squarespace.com/static/576e96ed2994cae381d021af/576e9751f5e231ddf3c2b309/576e9fedcd0f68ce8dccc1c6/1495396448242/PaganChaltin_GreenAndBlue%282012%29_EggTemperaOnPanel_20x20in%28high-res%29.jpg?format=300w" />
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