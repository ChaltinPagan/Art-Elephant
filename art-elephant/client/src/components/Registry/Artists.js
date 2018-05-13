import React from 'react';
import { Link } from 'react-router-dom';

const Artists = ({artists}) => {
    return(
        <div>
            {artists.map( el => 
                <Link to={`/registry/${el.id}`} key={el.id}>
                    <p>{el.name}, {el.medium}</p>
                </Link>)}
        </div>
    )
}

export default Artists;