import React from 'react';
import Navigation from '../Navigation/'
import { Link } from 'react-router-dom'

class nameBox extends React.Component {
    state = {
        name: ''
    };

    handleChange = e => {
        this.setState({name: e.target.value})
    };

    sendUserData = e => {
        const {name} = this.state;
        const {sendUserData, checkErrors} = this.props;

        sendUserData(name);

        if (name === '') {
            e.preventDefault();
            checkErrors(2);
        } else {
            checkErrors(0);
        }
    };

    render() {

        return (
            <div className='page'>
                <h5 className="section-title">
                    What's your name?
                </h5>

                <div className='d-flex justify-content-around'>
                    <input className='form-control rounded-0 w-75' onChange={this.handleChange} type="text"/>
                </div>

                <Navigation>
                    <Link to="/">Back</Link>
                    <Link onClick={this.sendUserData} to="/confirm">Next</Link>
                </Navigation>
            </div>
        )
    }
}

export default nameBox;