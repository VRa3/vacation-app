import React from 'react';
import Navigation from '../Navigation/'
import { Link } from 'react-router-dom'

class nameBox extends React.Component {
    render() {

        return (
            <div className='page'>
                <h5 className="section-title">
                    What's your name?
                </h5>

                <div className='d-flex justify-content-around'>
                    <input type="text"/>
                </div>

                <Navigation>
                    <Link to="/">Back</Link>
                    <Link to="/confirm">Confirm</Link>
                </Navigation>
            </div>
        )
    }
}

export default nameBox;