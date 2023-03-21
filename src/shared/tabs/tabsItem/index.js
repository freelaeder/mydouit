import React from 'react';
import classNames from "classnames";

const TabItems = (props) => {
    const {children,onClick,active} = props
    return (
        <li className="nav-item">
            <a onClick={onClick} className={classNames('nav-link',{active})}>
                {children}
            </a>
        </li>
    );
};

export default TabItems;