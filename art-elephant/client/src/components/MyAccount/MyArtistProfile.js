import React, { Component } from 'react';
import axios from 'axios';
// import checkboxes from './Checkboxes';
// import MyImages from './MyImages';
import Alert from './Alert';

class MyArtistProfile extends Component {
    constructor(props){
        super(props);
        this.media = ["Painting", "Drawing", "Sculpture", "Mixed Media", "Performance", "Video", "Printmaking", "Installation", "Photography"];
        this.state = {
            user_id: this.props.user.id,
            id: "",
            medium: [],
            statement: "",
            address: "", 
            image_1: "",
            image_2: "",
            image_3: "",
            message: "", 
            submit: null
        };
    }

    getArtistData = () => {
        const { user_id } = this.state;
        axios.post(`/artists/${user_id}`)
            .then( res => {
                console.log("get artist:", res)
                if (res.status === 200){
                    this.setState({
                        id: res.data.artist[0].id,
                        medium: res.data.artist[0].medium,
                        statement: res.data.artist[0].statement,
                        address: res.data.artist[0].address,
                        image_1: res.data.artist[0].images[0],
                        image_2: res.data.artist[0].images[1],
                        image_3: res.data.artist[0].images[2]
                    });
                }
            })
            .catch( err => {
                console.log("Error: User does not have an Artist Profile.", err);
            })
    }

    componentDidMount = () => {
        this.getArtistData();
    }

    // Updates statement and address for artist profile.
    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    // Updates medium for artist profile.
    handleMedia = e => {
        const { medium } = this.state;
        // Add medium if not present in "medium".
        if (!medium.includes(e.target.value)) {
            this.setState({
                medium: [...medium, e.target.value]
            });
        } 

        // Remove medium if user unchecks box.
        if (!e.target.checked){
            let remove = medium.indexOf(e.target.value);
            console.log("remove:", remove);
            medium.splice(remove, 1)
            this.setState({
                medium: [...medium]
            })
        }
    };

    handleImage = e => {
        const { images } = this.state;

        if (!images[e.target.key]) {
            images.splice(e.target.key, 0, e.target.value)
            this.setState({
                images: [...images]
            })
        }
        
        images.splice(e.target.key, 1, e.target.value);
        this.setState({
            images: [...images]
        })
    };

    // Axios call to update to user's existing profile.
    updateArtistProfile = () => {
        const { user_id, medium, statement, address, images } = this.state;

        if (!medium.length) {
            this.setState({
                submit: false,
                message: "Choose a medium."
            })
            return;
        } 
        
        if (!statement || statement.length > 1000) {
            this.setState({
                submit: false,
                message: "Statement required. Statement cannot exceed 1000 characters."
            })
            return;
        } 
        
        axios.put(`artists/${user_id}`, {
            medium: medium.sort(),
            statement: statement,
            address: address,
            images: images
        }).then( res => {
                this.setState({
                    submit: true,
                    message: res.data.message
                })
            })
            .catch( err => {
                this.setState({
                    submit: false,
                    message: "Error updating artist profile."
                })
            })
    }

    addArtistProfile = () => {
        const { user_id, medium, statement, address, image_1, image_2, image_3 } = this.state;
        axios.post('/artists/new', {
            user_id: user_id,
            medium: medium.sort(),
            statement: statement,
            address: address,
            images: [image_1, image_2, image_3]
        }).then( res => {
            console.log("new res:", res);
            this.setState({
                submit: true,
                message: res.data.message
            })
        })
        .catch( err => {
            this.setState({
                submit: false,
                message: "Error adding artist profile."
            })
        })
    }

    render(){
        const { id, medium, statement, address, image_1, image_2, image_3, message, submit } = this.state;
        console.log("state:", this.state);
        // console.log("images:", images);
        return(
            <form className="artist-profile">
                {/* Medium. Choose all that apply. Must choose one. */}
                <div className="form-group">
                    <label htmlFor="first_name">Medium</label><br />
                    <small id="emailHelp" className="form-text text-muted">Choose all that apply.</small>
                    <div id='medium'>    
                        {this.media.map( (el, i) =>
                            <div className="form-check form-check-inline" key={i}>
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" 
                                    value={el} checked={medium.includes(el)} onChange={this.handleMedia} />
                                <label className="form-check-label" htmlFor="inlineCheckbox1">{el}</label>
                            </div>
                        )}
                    </div>
                </div>

                {/* Artist Statement. 1000 charcaters max. */}
                <div className="form-group">
                    <label htmlFor="last_name">Statement</label>
                    <small id="emailHelp" className="form-text text-muted">Maximum 1000 characters.</small>
                    <textarea type="text" className="form-control" id="statement" 
                        value={statement} onChange={this.handleChange}></textarea>
                </div>

                {/* Studio Address. Full address or City, State, Country. Optional. */}
                <div className="form-group">
                    <label htmlFor="email">Studio Address</label>
                    <small id="emailHelp" className="form-text text-muted">
                        Optional.
                    </small>
                    <input type="email" className="form-control" id="address" 
                        value={address} placeholder="Example: 123 State Street, NY, NY 10001 or New York, NY." onChange={this.handleChange} />
                </div>

                {/* Images. Must have three. Submit URLs. */}
                {/* <MyImages images={images}/> */}
                <div className="form-group">
                    <label htmlFor="images">Images</label>
                    <small id="emailHelp" className="form-text text-muted">
                        Submit three(3) image URLs.
                    </small>
                        <input className="form-control" type="text" id="image_1"
                            value={image_1} placeholder="http://www.image.com" key={0} onChange={this.handleChange} />
                        <input className="form-control" type="text" id="image_2" 
                            value={image_2} placeholder="http://www.image.com" key={1} onChange={this.handleChange} />
                        <input className="form-control" type="text" id="image_3" 
                            value={image_3} placeholder="http://www.image.com" key={2} onChange={this.handleChange} />
                    
                </div>

                {/* If no artist profile, button will be "Add Artist."
                    If profile exists, button will be "Update." */}
                {id || submit ? <button type="button" className="btn btn-outline-dark" onClick={this.updateArtistProfile} >Update</button> : 
                    <button type="button" className="btn btn-outline-dark" onClick={this.addArtistProfile} >Add Artist Info</button> }

                <Alert submit={submit} message={message} />
            
            </form>
        )
    }
}

export default MyArtistProfile;