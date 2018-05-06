import React, { Component } from 'react';

const Profile = ({ selected }) => {

    return(
        <div>
            <h1>Artist Profile</h1>
            <p>{selected}</p>
        </div>
    )
}

export default Profile;