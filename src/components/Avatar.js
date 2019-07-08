import React from 'react';


class Avatar extends React.Component {

    clickResponse = () => {
        this.props.clickHandler(this);
    };

    render() {

        let avatarClass = 'avatar';

        const classHandler = () => {
          if (this.props.isSelected) {
              avatarClass += ' avatar--selected'
          } else if (this.props.minimized) {
              avatarClass += ' avatar--minimized'
          }
        };
        classHandler();

        return (
            <div className={avatarClass}>
                <img onClick={this.clickResponse} className='avatar__img' src={this.props.image} alt=""/>
            </div>
        )
    }
}

export default Avatar;