import React from 'react';


class Avatar extends React.Component {
    render() {
        return (
            <div className="avatar">
                <img className='avatar__img' src={this.props.image} alt=""/>
            </div>
        )
    }
}

export default Avatar;