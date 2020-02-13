import React from 'react';

import Box from './Box';

const BoxContainer = (props) => {
    const layout = [
        { x: 0, y: 0, w: 1, h: 1, i: 'title' },
        // Since h property is number I can't set it up to auto(so it will take the height of children).
        // h: Infinity is a workaround to obtain height: auto;
        { x: 0, y: 0, w: 1, h: Infinity, i: 'content' }
    ];
    const RGLProps = {
        className: 'layout',
        isDraggable: false,
        isResizable: false,
        cols: 1,
        rowHeight: 60,
        margin: [0, 0],
        items: 2,
        autoSize: true,
        layout
    };

    return (
        <Box
            {...props}
            rglProps={RGLProps}
        />
    );
};

export default BoxContainer;
