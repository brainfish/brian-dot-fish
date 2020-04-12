import cx from 'classnames';
import React from 'react';
import './ContentBox.scss';

function ContentBox({
    children,
    className
}) {
    return <div className={cx('ContentBox', className)}>
        {children}
    </div>
}

export default ContentBox;