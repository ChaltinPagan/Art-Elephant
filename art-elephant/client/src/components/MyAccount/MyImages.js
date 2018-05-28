import React, { Component } from 'react';
import axios from 'axios';

class MyImages extends Component {
    constructor(props){
        super(props);
        this.state = {
            user_id: this.props.user,
            images: []
        };
    }

    getImages = () => {
        const { user_id, images } = this.state;
        axios.get(`artists/images/${user_id}`)
            .then( res => {
                let arr = res.data.images;
                let newArr = arr.map(el => el.url);
                this.setState({
                    images: newArr
                });
            })
            .catch( err => {
                console.log("Error:", err);
            })
    }

    componentDidMount = () => {
        this.getImages();
    }

    handleImage = (e) => {
        const { images } = this.state;
        let remove = images.indexOf(e.target.key);
        
        this.setState({
            images: [...images]
        })
    }

    render(){
        const { user_id, images } = this.state;
        console.log("images:", images);
        if (!images.length) {
            return (
                <div className="form-group">
                    <label htmlFor="images">Images</label>
                    <small id="emailHelp" className="form-text text-muted">
                        Submit three(3) image URLs.
                    </small>
                        <input className="form-control" type="text" id={`image-1`} 
                            placeholder="http://www.image.com" key={1} onChange={this.handleImage} />
                        <input className="form-control" type="text" id={`image-2`} 
                            placeholder="http://www.image.com" key={2} onChange={this.handleImage} />
                        <input className="form-control" type="text" id={`image-3`} 
                            placeholder="http://www.image.com" key={3} onChange={this.handleImage} />
                    
                </div>
            )
        } else {
        return(
                <div className="form-group">
                    <label htmlFor="images">Images</label>
                    <small id="emailHelp" className="form-text text-muted">
                        Submit three(3) image URLs.
                    </small>
                    <div id='images'>    
                        {images.map( (el, i) =>
                            <input className="form-control" type="text" id={`image-${i}`} 
                                value={el} key={i} onChange={this.handleImage} />
                        )}
                    </div>
                </div>
            )
        }
    }
}

export default MyImages;