import React from 'react';
import MyContact from './MyContact';
import UpdatePassword from './UpdatePassword';

const ProfileContainer = ({ user, first_name, onChange, submitForm }) => {
    return (
        <div id="accordion" className="my-account">
            {/* User's contact info. */}
            <div className="card">
                <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                        <button className="btn btn-outline-dark" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            My Contact Info
                        </button>
                    </h5>
                </div>
                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body">
                        <MyContact user={user} />
                    </div>
                </div>
            </div>

            {/* Update user's password. */}
            <div className="card">
                <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                        <button className="btn btn-outline-dark collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Change Password
                        </button>
                    </h5>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div className="card-body">
                        <UpdatePassword user={user} />
                    </div>
                </div>
            </div>

            {/* User can add an artist profile. */}
            <div className="card">
                <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                        <button className="btn btn-outline-dark collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Artist Profile
                        </button>
                    </h5>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div className="card-body">
                        Artist form goes here
                    </div>
                </div>
            </div>

        </div>
    )
};

export default ProfileContainer;