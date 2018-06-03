import React from 'react';
import { Link } from 'react-router-dom';
import registry_img from '../media/elephant-screen-1.png';
import mobile_img from '../media/elephant-screen-4.png';
import profile_img from '../media/elephant-screen-2.png';

const Home = () => {
    return (
        <div className='content'>
            <h1>Welcome to Art Elephant</h1>
            <h3>Art Elephant is an artist registry that aims to connect visual artists with curators, collectors, and art lovers.</h3>
            <h5><Link to="/new-user">Join Today!</Link></h5>

            <div id="carouselIndicators" className="carousel slide home-slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={registry_img} alt="Registry" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Artist Registry</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={profile_img} alt="Artist profile" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Artist Profile</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block h-100 mobile" src={mobile_img} alt="Mobile" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Mobile Friendly</h5>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev arrow" href="#carouselIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </a>
                <a className="carousel-control-next arrow" href="#carouselIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </a>
                </div>
        </div>
    )
    
}

export default Home;