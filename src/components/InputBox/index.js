import React from 'react';
import { Link } from 'react-router-dom'

class nameBox extends React.Component {
    render() {

        return (
            <div className='page'>
                <h5 className="section-title section-title--mb-big">
                    What's your name?
                </h5>

                <div className='d-flex justify-content-around'>
                    <input type="text"/>
                </div>

                <Link to="/">Back</Link>
                <Link to="/confirm">Confirm</Link>
            </div>
        )
    }
}

export default nameBox;