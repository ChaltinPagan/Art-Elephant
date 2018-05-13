import React from 'react';
import { Link } from 'react-router-dom';
import Filters from './Filters';

const Artists = ({artists}) => {
    return(
        <div>
            <Filters />
            {artists.map( el => 
                <Link to={`/registry/${el.id}`} key={el.id}>
                    <p>{`${el.first_name} ${el.last_name}, ${el.medium}`}</p>
                </Link>)}
        </div>
    )
}

export default Artists;