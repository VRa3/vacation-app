import React from 'react';
import AvatarBox from './AvatarBox/'
import InputBox from './InputBox/'
import { Route, Switch } from 'react-router-dom'
import {
    CSSTransition,
    TransitionGroup
} from 'react-transition-group';

class BaseBox extends React.Component {
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
                                                    component={AvatarBox}
                                                />
                                                <Route
                                                    path="/name"
                                                    component={InputBox}
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