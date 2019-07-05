import React from 'react';
import Navigation from '../Navigation/'
import Avatar from '../Avatar'
import Woman from '../../static/images/woman.svg'
import Man from '../../static/images/man.svg'
import { Link } from 'react-router-dom'


class AvatarBox extends React.Component {
    state = {
        gender: '',
    };

    handleClick = (element) => {
        this.setState({gender: element.props.genderName})
    };

    sendUserData = () => {
      this.props.sendUserData(this.state.gender);
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
            <div className='page'>
                <h5 className="section-title">
                    Choose your avatar
                </h5>

                <div className='avatars-wrapper d-flex justify-content-around'>
                    {AvatarsList()}
                </div>

                <Navigation>
                    <Link onClick={this.sendUserData} className="ml-auto" to="/name">Next</Link>
                </Navigation>
            </div>
        )
    }
}

export default AvatarBox;