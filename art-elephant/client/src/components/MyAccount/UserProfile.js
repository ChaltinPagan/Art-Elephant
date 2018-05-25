import React from 'react';

const UserProfile = ({ user, onChange }) => {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="first_name">First Name</label>
                <input type="text" className="form-control" id="first_name" 
                    placeholder={user.first_name} onChange={onChange} />
            </div>

            <div className="form-group">
                <label htmlFor="last_name">Last Name</label>
                <input type="text" className="form-control" id="last_name" 
                    value={user.last_name} onChange={onChange} />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" 
                    value={user.email} onChange={onChange} />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" 
                    value={""} onChange={onChange} />
            </div>

            <button type="button" className="btn btn-outline-dark" onClick={this.submitForm} >Update Profile</button>
        </form>
    )
};

export default UserProfile;