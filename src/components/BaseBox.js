import React from 'react';
import AvatarBox from './AvatarBox/'
import InputBox from './InputBox/'
import ConfirmationBox from './ConfirmationBox/'
import { Route, Switch } from 'react-router-dom'
import {
    CSSTransition,
    TransitionGroup
} from 'react-transition-group';

class BaseBox extends React.Component {
    state = {
        userGender: '',
        userName: '',
    };

    setUserGender = data => {
        this.setState({userGender: data})
    };

    setUserName = data => {
        this.setState({userName: data})
    };

    render() {

        return (
            <section className='base-box'>
                <Route
                    render={({location}) => {
                        const {pathname} = location;
                        return (
                            <TransitionGroup>
                                <CSSTransition
                                    key={pathname}
                                    classNames="page"
                                    timeout={{
                                        enter: 1000,
                                        exit: 1000,
                                    }}
                                >
                                    <Route
                                        location={location}
                                        render={() => (
                                            <Switch>
                                                <Route
                                                    exact
                                                    path="/"
                                                    render={()=> <AvatarBox sendUserData={this.setUserGender}/>}
                                                />
                                                <Route
                                                    path="/name"
                                                    render={()=> <InputBox sendUserData={this.setUserName}/>}

                                                />
                                                <Route
                                                    path="/confirm"
                                                    render={()=> <ConfirmationBox name={this.state.userName} gender={this.state.userGender}/>}

                                                />
                                            </Switch>
                                        )}
                                    />
                                </CSSTransition>
                            </TransitionGroup>
                        )
                    }
                    }
                />
            </section>
        )
    }
}

export default BaseBox;