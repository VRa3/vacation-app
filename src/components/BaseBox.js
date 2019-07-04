import React from 'react';
import Avatar from './Avatar'
import Woman from '../static/images/woman.svg'
import Man from '../static/images/man.svg'

class BaseBox extends React.Component {
    state = {
        gender: '',
        name: '',
    };


    render() {
        return (
            <section className='base-box'>
                Hello iam Base box

                <div className='d-flex justify-content-around'>
                    <Avatar genderName='Woman' image={Woman}/>
                    <Avatar genderName='Man' image={Man}/>
                </div>
            </section>
        )
    }
}

export default BaseBox;