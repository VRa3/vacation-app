import React from 'react';
import AvatarBox from './AvatarBox/'
import InputBox from './InputBox/'
import ConfirmationBox from './ConfirmationBox/'
import ErrorBox from './ErrorBox'
import { Route, Switch } from 'react-router-dom'
import {
    CSSTransition,
    TransitionGroup
} from 'react-transition-group';

class BaseBox extends React.Component {
    state = {
        userGender: '',
        userName: '',
        errorType: 0
    };

    setUserGender = data => {
        this.setState({userGender: data})
    };

    setUserName = data => {
        this.setState({userName: data})
    };

    checkErrors = data => {
      this.setState({errorType: data})
    };

    render() {
        console.log(this.state);

        const showErrorBox = () => {
            return this.state.errorType !== 0 ? <ErrorBox errorType={this.state.errorType} /> : null
        };

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
                                                    render={()=> <AvatarBox checkErrors={this.checkErrors} sendUserData={this.setUserGender}/>}
                                                />
                                                <Route
                                                    path="/name"
                                                    render={()=> <InputBox checkErrors={this.checkErrors} sendUserData={this.setUserName}/>}

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

                <div>
                    {showErrorBox()}
                </div>
            </section>
        )
    }
}

export default BaseBox;