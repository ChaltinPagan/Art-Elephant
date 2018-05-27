import React from 'react';

const media = ["Painting", "Drawing", "Sculpture", "Mixed Media", "Performance", "Video", "Printmaking", "Installation"]

const checkboxes = (medium) => {
    media.map( (el, i) => {
        if(medium ===el){
            return (
                <div className="form-check form-check-inline" key={i}>
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" 
                        value={el} checked onChange={this.handleMedia} />
                    <label className="form-check-label" htmlFor="inlineCheckbox1">{el}</label>
                </div>
            )
        }

        return (
            <div className="form-check form-check-inline" key={i}>
                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" 
                    value={el} onChange={this.handleMedia} />
                <label className="form-check-label" htmlFor="inlineCheckbox1">{el}</label>
            </div>
        )

    })
}

export default checkboxes;