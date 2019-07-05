import React from 'react';

class ErrorBox extends React.Component {
    constructor(props) {
        super(props);

        this.errorBoxRef = React.createRef();

        this.timeout = null;
    }

    componentDidMount() {
        this.timeout = setTimeout(() => {
            this.errorBoxRef.current.classList.add('show')
        }, 1);

        this.timeout = setTimeout(() => {
            this.errorBoxRef.current.classList.remove('show')
        }, 3000);
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    render() {
        let message = 'error';

        const checkError = () => {
            const error = this.props.errorType;

            switch(error) {
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
                <div ref={this.errorBoxRef} className='error-box'>
                    {message}
                </div>
            </>
        )
    }
}

export default ErrorBox;