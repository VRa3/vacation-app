import React from 'react';

class nameBox extends React.Component {
    state = {
        gender: '',
        name: '',
    };

    handleClick = (element) => {
        this.setState({gender: element.props.genderName})
    };

    render() {

        return (
            <>
                <h5 className="section-title">
                    What's your name?
                </h5>

                <div className='d-flex justify-content-around'>
                    <input type="text"/>
                </div>
            </>
        )
    }
}

export default nameBox;