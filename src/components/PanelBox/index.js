import React from 'react';
import Avatar from "../Avatar";
import Woman from "../../static/images/woman.svg";
import Man from "../../static/images/man.svg";

class PanelBox extends React.Component {

    render() {
        console.log(this.props.name);

        const generateAvatar = () => {
            if (this.props.gender === 'Woman' ) {
                return <Avatar minimized image={Woman}/>
            } else {
                return <Avatar minimized image={Man}/>
            }
        };

        return (
            <div className='page'>
                <div className='d-flex align-items-center'>
                    {generateAvatar()} <span>{this.props.name}</span>
                </div>

                <h3>
                    Choose destination
                </h3>
            </div>
        )
    }
}

export default PanelBox;