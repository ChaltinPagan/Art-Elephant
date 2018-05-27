import React, { Component } from 'react';
import axios from 'axios';
// import checkboxes from './Checkboxes';

class MyArtistProfile extends Component {
    constructor(props){
        super(props);
        this.media = ["Painting", "Drawing", "Sculpture", "Mixed Media", "Performance", "Video", "Printmaking", "Installation"];
        this.state = {
            user_id: this.props.user.id,
            id: "",
            medium: [],
            statement: "",
            address: ""
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
                        medium: ["Painting"],
                        statement: res.data.artist[0].statement,
                        address: res.data.artist[0].address
                    });
                }
            })
            .catch( err => {
                console.log("error:", err);
            })
    }

    componentDidMount = () => {
        this.getArtistData();
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    handleMedia = e => {
        const { medium } = this.state;
        // Add medium if not present in "medium".
        if(!medium.includes(e.target.value)) {
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

    render(){
        const { id, medium, statement, address } = this.state;
        console.log("state:", this.state);
        console.log("media:", medium)
        if (!id) {
            return <div>Loading</div>
        } else {
            return(
                <form className="artist-profile">
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

                    <div className="form-group">
                        <label htmlFor="last_name">Statement</label>
                        <small id="emailHelp" className="form-text text-muted">Max 1000 characters.</small>
                        <textarea type="text" className="form-control" id="statement" 
                            value={statement} onChange={this.handleChange}></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Studio Address</label>
                        <small id="emailHelp" className="form-text text-muted">Optional.</small>
                        <input type="email" className="form-control" id="adress" 
                            value={address} onChange={this.handleChange} />
                    </div>

                    {id ? <button type="button" className="btn btn-outline-dark" onClick={this.handleSubmit} >Update</button> : 
                        <button type="button" className="btn btn-outline-dark" onClick={this.handleSubmit} >Add Artist Info</button> }
                
                </form>
            )
        }
    }
}

export default MyArtistProfile;