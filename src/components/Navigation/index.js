import React from 'react';

const Navigation = (props) => {
    return (
        <nav className="navigation">
            {props.children}
        </nav>
    );
};

export default Navigation;
