import React from 'react';
import Navigation from '../Navigation/'

import { Link } from 'react-router-dom'

class ConfirmationBox extends React.Component {
    render() {

        return (
            <div className='page'>
                <h5 className="section-title section-title--mb-big">
                    Is this correct?
                </h5>

                <h3 className='text-center mb-3'>
                    Placeholder
                </h3>

                <Navigation>
                    <Link to="/">Start again</Link>
                    <Link to="/confirm">Next</Link>
                </Navigation>
            </div>
        )
    }
}

export default ConfirmationBox;