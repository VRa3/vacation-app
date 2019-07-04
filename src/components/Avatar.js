import React from 'react';


class Avatar extends React.Component {
    render() {
        return (
            <div className="avatar">
                <img className='avatar__img' src={this.props.gender} alt=""/>
            </div>
        )
    }
}

export default Avatar;