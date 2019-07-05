import React from 'react';
import Navigation from '../Navigation/'
import { Link } from 'react-router-dom'

class nameBox extends React.Component {
    state = {
        name: ''
    };

    handleChange = (e) => {
        this.setState({name: e.target.value})
    };

    sendUserData = () => {
        this.props.sendUserData(this.state.name);
    };

    render() {

        return (
            <div className='page'>
                <h5 className="section-title">
                    What's your name?
                </h5>

                <div className='d-flex justify-content-around'>
                    <input onChange={this.handleChange} type="text"/>
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