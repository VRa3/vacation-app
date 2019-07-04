import React from 'react';
import AvatarBox from './AvatarBox/'
import InputBox from './InputBox/'
import { Route } from 'react-router-dom'

class BaseBox extends React.Component {
    render() {

        return (
            <section className='base-box'>
                <Route exact path="/" component={AvatarBox}/>
                <Route path="/name" component={InputBox}/>
            </section>
        )
    }
}

export default BaseBox;