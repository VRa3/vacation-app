import React from 'react';
import Navigation from '../Navigation/'

import { Link } from 'react-router-dom'
import Woman from '../../static/images/woman.svg'
import Man from '../../static/images/man.svg'
import Avatar from "../Avatar";

class ConfirmationBox extends React.Component {
    render() {

        const generateAvatar = () => {
            if (this.props.gender === 'Woman' ) {
                return <Avatar image={Woman}/>
            } else {
                return <Avatar image={Man}/>
            }
        };

        return (
            <div className='page'>
                <h5 className="section-title section-title--mb-small">
                    Is this correct?
                </h5>

                <div className='d-flex align-items-center'>
                    {generateAvatar()}
                    <h5 className="mb-0">
                        {this.props.name}
                    </h5>
                </div>

                <Navigation>
                    <Link to="/">Start again</Link>
                    <Link to="/confirm">Confirm</Link>
                </Navigation>
            </div>
        )
    }
}

export default ConfirmationBox;