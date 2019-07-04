import React from 'react';
import AvatarBox from './AvatarBox/'

class BaseBox extends React.Component {
    render() {

        return (
            <section className='base-box'>
                <AvatarBox/>
            </section>
        )
    }
}

export default BaseBox;