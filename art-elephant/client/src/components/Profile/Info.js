import React, { Component } from 'react';
import Map from './Map';

import Contact from './Contact';

class Info extends Component {
    constructor(props){
        super(props);
        this.state = {
            profile: this.props.profile,
        };
    }

    render(){
        const { profile } = this.state;
        return(
            <div className="col-sm info">
                <div id="accordion">
                    {/* Artist statement */}
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <button className="btn btn-outline-dark collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    Statement
                                </button>
                            </h5>
                        </div>
                        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                            <div className="card-body">
                                <p>{profile.statement}</p>
                            </div>
                        </div>
                    </div>

                    {/* Studio location with map */}
                    <div className="card">
                        <div className="card-header" id="headingTwo">
                            <h5 className="mb-0">
                                <button className="btn btn-outline-dark collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Studio Location
                                </button>
                            </h5>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div className="card-body">
                                <Map location={profile.address}/>
                            </div>
                        </div>
                    </div>

                    {/* Contact form */}
                    <div className="card">
                        <div className="card-header" id="headingThree">
                            <h5 className="mb-0">
                                <button className="btn btn-outline-dark collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Contact
                                </button>
                            </h5>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                            <div className="card-body">
                                <Contact email={profile.email} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Info;