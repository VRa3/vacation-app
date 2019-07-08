import React from 'react';

const Navigation = (props) => {
    let elementClass = 'navigation';

    if (props.paddingTopBig) {
        elementClass = 'navigation navigation--pt-big';
    }

    return (
        <nav className={elementClass}>
            {props.children}
        </nav>
    );
};

export default Navigation;
