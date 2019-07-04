import React from 'react';
import Avatar from '../Avatar'
import Woman from '../../static/images/woman.svg'
import Man from '../../static/images/man.svg'

class AvatarBox extends React.Component {
    state = {
        gender: '',
        name: '',
    };

    handleClick = (element) => {
        this.setState({gender: element.props.genderName})
    };

    render() {

        const AvatarsList = () => {
            const arr = [
                ['Woman', Woman],
                ['Man', Man]
            ];

            return arr.map((item, ndx) => {
                if (this.state.gender === item[0]) {
                    return (
                        <Avatar key={ndx} isSelected clickHandler={this.handleClick} genderName={item[0]} image={item[1]}/>
                    )
                } else {
                    return (
                        <Avatar key={ndx} clickHandler={this.handleClick} genderName={item[0]} image={item[1]}/>
                    )
                }
            })
        };

        return (
            <>
                <h5 className="section-title">
                    Choose your avatar
                </h5>

                <div className='d-flex justify-content-around'>
                    {AvatarsList()}
                </div>
            </>
        )
    }
}

export default AvatarBox;