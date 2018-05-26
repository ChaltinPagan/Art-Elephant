import React from 'react';

const Alert = ({ submit, message }) => {
    return(
        <div>
            {submit === false ? 
                <div className="alert alert-danger" role="alert">
                    {message}
                </div> : ""
            }
        </div>
    )
}

export default Alert;