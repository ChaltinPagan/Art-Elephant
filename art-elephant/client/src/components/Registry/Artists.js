import React from 'react';
import { Link } from 'react-router-dom';

const Artists = ({artists}) => {
    return(
        <div>
            {artists.map( el =>
                <Link to={`/registry/${el.id}`} key={el.id}>
                    <div className="card artist-card">
                        <img className="card-img-top" src={el.images[0]} alt="art" />
                        <div className="card-body">
                            <h5 className="card-title">{`${el.first_name} ${el.last_name}`}</h5>
                        </div>
                    </div>
                </Link>
            )}
        </div>
    )
}

export default Artists;