import React from 'react';
import { Link } from 'react-router-dom';
import Filters from './Filters';

const Artists = ({artists}) => {
    return(
        <div>
            <Filters />
            {/* {artists.map( el => 
                <Link to={`/registry/${el.id}`} key={el.id}>
                    <p>{`${el.first_name} ${el.last_name}, ${el.medium}`}</p>
                </Link>)} */}

            {artists.map( el =>
                <Link to={`/registry/${el.id}`} key={el.id}>
                    <div className="card artist-card">
                        <img className="card-img-top" src={el.images[0]} alt="Card img cap" />
                        <div className="card-body">
                            <h5 className="card-title">{`${el.first_name} ${el.last_name}`}</h5>
                            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                </Link>
            )}

                {/* <div className="card">
                    <img className="card-img-top" src="..." alt="Card img cap" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div> */}
        </div>
    )
}

export default Artists;