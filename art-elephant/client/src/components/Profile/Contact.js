import React from 'react';

const Contact = ({ email }) => {
    return (
        <form className="contact" encType="text/plain" method="post" action={`mailto:${email}`}>
            
            <div className="form-group">
                <label htmlFor="sender_name">Name</label>
                <input type="text" className="form-control" id="sender_name" aria-describedby="emailHelp" />
            </div>

            <div className="form-group">
                <label htmlFor="sender_email">Email</label>
                <input type="email" className="form-control" id="sender_email"  />
            </div>

            <div className="form-group">
                <label htmlFor="sender_message">Message</label>
                <textarea type="text" className="form-control" id="sender_message"></textarea>
            </div>
            
            <button type="submit" className="btn btn-outline-dark">Submit</button>
        </form>
    )
}

export default Contact;