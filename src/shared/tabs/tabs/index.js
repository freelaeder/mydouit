import React from 'react';

const Tabs = (props) => {
    return (
        <ul className="nav nav-pills outline-active">
            {
                props.children
            }
        </ul>
    );
};

export default Tabs;