import React from 'react';
import { Transition } from 'react-transition-group';

const duration = 500;

const defaultStyle = {
    transform: `translate(-50%, 100%)`,
    transition: `transform ${duration}ms ease-in-out, background ${duration}ms`
};

const transitionStyles = {
    entering: { transform: `translate(-50%, 100%)` },
    entered:  { transform: `translate(-50%, 0)` },
    exiting:  { transform: `translate(-50%, 100%)` },
    exited:  { transform: `translate(-50%, 0)` },
};


class ErrorBox extends React.Component {

    render() {
        let message = 'error';

        let errorBoxClass = 'error-box';

        const checkError = () => {
            const error = this.props.errorType;

            switch(error) {
                case 0:
                    message = 'Thank You';
                    errorBoxClass = 'error-box error-box--success';
                    break;
                case 1:
                    message = 'First choose your avatar';
                    break;
                case 2:
                    message = 'Write your name';
                    break;
                default: message = 'Unknown error'
            }
        };

        checkError();

        return (
            <>
                <Transition unmountOnExit={true} in={this.props.showError} timeout={duration}>
                    {state => (
                        <div style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }}
                             className={errorBoxClass}
                        >
                            {message}
                        </div>
                    )}
                </Transition>
            </>
        )
    }
}

export default ErrorBox;