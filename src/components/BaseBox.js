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
    constructor(props) {
        super(props);

        this.timeout = null;
    }

    state = {
        userGender: '',
        userName: '',
        showError: false,
        errorType: 0
    };

    setUserGender = data => {
        this.setState({userGender: data})
    };

    setUserName = data => {
        this.setState({userName: data})
    };

    checkErrors = data => {
        this.setState({
            errorType: data,
        });

        if (data !== 0) {
            this.setState({
                    showError: true
                }, () => {
                if (this.timeout) {
                    clearTimeout(this.timeout);

                    this.timeout = setTimeout(() => {
                        this.setState({showError: false})
                    }, 4000)
                } else {
                    this.timeout = setTimeout(() => {
                        this.setState({showError: false})
                    }, 4000)
                }
            });
        }
    };

    render() {
        console.log(this.state);

        const showErrorBox = () => {
            const {errorType, showError} = this.state;

            if (errorType !== 0 && showError) {
                return <ErrorBox showError={showError} errorType={errorType} />
            } else {
                return null;
            }
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

                {showErrorBox()}
            </section>
        )
    }
}

export default BaseBox;