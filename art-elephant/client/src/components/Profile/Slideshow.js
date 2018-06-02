import React, { Component } from 'react';

class Slideshow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: this.props.images
        };
    }

    render() {
        const { images } = this.state;
        if(!images){
            return <div>No images</div>
        } else {
            return (
                <div className="col-sm-5 slideshow">
                    <div id="carouselIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src={images[0]} alt="art" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={images[1]} alt="art" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={images[2]} alt="art" />
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
}

export default Slideshow;