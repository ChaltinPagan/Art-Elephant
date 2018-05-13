import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class Slideshow extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleSelect = this.handleSelect.bind(this);
    
        this.state = {
          index: 0,
          direction: null
        };
      }
    
      handleSelect(selectedIndex, e) {
        // alert(`selected=${selectedIndex}, direction=${e.direction}`);
        this.setState({
          index: selectedIndex,
          direction: e.direction
        });
      }

    render() {
        return (
            <div className="slideshow">
            {/* <img alt="art" src="https://static1.squarespace.com/static/576e96ed2994cae381d021af/t/576e9eb959cc68de01607f44/1466865973436/Scissors?format=500w" /> */}
            <Carousel interval={null}>
                <Carousel.Item>
                    <img width={500} alt="painting" src="https://static1.squarespace.com/static/576e96ed2994cae381d021af/t/576e9eb959cc68de01607f44/1466865973436/Scissors?format=500w" />
                    <Carousel.Caption>
                    <h3>Scissors</h3>
                    <p>Egg tempera on panel</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={500} alt="painting" src="https://static1.squarespace.com/static/576e96ed2994cae381d021af/576e9751f5e231ddf3c2b309/576e9fe1cd0f68ce8dccc195/1495396422242/PaganChaltin_RedDress%282012%29_eggTemperaOnPanel_24x15in%28high-res%29.jpg?format=300w" />
                    <Carousel.Caption>
                    <h3>Green and Blue</h3>
                    <p>Egg tempera on panel</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={500} alt="painting" src="https://static1.squarespace.com/static/576e96ed2994cae381d021af/576e9751f5e231ddf3c2b309/576e9fedcd0f68ce8dccc1c6/1495396448242/PaganChaltin_GreenAndBlue%282012%29_EggTemperaOnPanel_20x20in%28high-res%29.jpg?format=300w" />
                    <Carousel.Caption>
                    <h3>Red Dress</h3>
                    <p>Egg tempera on panel</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {/* <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="https://static1.squarespace.com/static/576e96ed2994cae381d021af/t/576e9eb959cc68de01607f44/1466865973436/Scissors?format=500w" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="https://static1.squarespace.com/static/576e96ed2994cae381d021af/576e9751f5e231ddf3c2b309/576e9fe1cd0f68ce8dccc195/1495396422242/PaganChaltin_RedDress%282012%29_eggTemperaOnPanel_24x15in%28high-res%29.jpg?format=300w" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="https://static1.squarespace.com/static/576e96ed2994cae381d021af/576e9751f5e231ddf3c2b309/576e9fedcd0f68ce8dccc1c6/1495396448242/PaganChaltin_GreenAndBlue%282012%29_EggTemperaOnPanel_20x20in%28high-res%29.jpg?format=300w" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
        </div>
        )
    }
}

export default Slideshow;