import React, { Component } from 'react';

class Slideshow extends Component {
    constructor() {
        super();
        this.state = {
        };
      
      }

    render() {
        return (
            <div className="slideshow">
                <div id="carouselIndicators" className="carousel slide" data-ride="carousel" data-interval={false} >
                    <ol className="carousel-indicators">
                        <li data-target="#carouselIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="https://static1.squarespace.com/static/576e96ed2994cae381d021af/t/576e9eb959cc68de01607f44/1466865973436/Scissors?format=500w" alt="art" />
                            <div className="carousel-caption d-none d-md-block">
                                <h3>Scissors</h3>
                                <p>Egg tempera on panel</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://static1.squarespace.com/static/576e96ed2994cae381d021af/576e9751f5e231ddf3c2b309/576e9fe1cd0f68ce8dccc195/1495396422242/PaganChaltin_RedDress%282012%29_eggTemperaOnPanel_24x15in%28high-res%29.jpg?format=300w" alt="art" />
                            <div className="carousel-caption d-none d-md-block">
                                <h3>Green and Blue</h3>
                                <p>Egg tempera on panel</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://static1.squarespace.com/static/576e96ed2994cae381d021af/576e9751f5e231ddf3c2b309/576e9fedcd0f68ce8dccc1c6/1495396448242/PaganChaltin_GreenAndBlue%282012%29_EggTemperaOnPanel_20x20in%28high-res%29.jpg?format=300w" alt="art" />
                            <div className="carousel-caption d-none d-md-block">
                                <h3>Red Dress</h3>
                                <p>Egg tempera on panel</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Slideshow;