import React from 'react';
import RGL, { WidthProvider } from 'react-grid-layout';

const ReactGridLayout = WidthProvider(RGL);

const ViewGrid = (props) => {
    const layout = [
        { x: 0, y: 0, w: 1, h: 1, i: 'header' },
        // Since h property is number I can't set it up to auto(so it will take the height of children).
        // h: Infinity is a workaround to obtain height: auto;
        { x: 0, y: 0, w: 1, h: Infinity, i: 'content' }
    ];
    const RGLProps = {
        className: 'layout',
        isDraggable: false,
        isResizable: false,
        cols: 1,
        rowHeight: 64,
        margin: [0, 0],
        items: 2,
        autoSize: true,
        layout
    };

    return (
        <ReactGridLayout
            {...RGLProps}
        >
            <div key={'header'}>
                {props.header}
            </div>
            <div key={'content'}>
                {props.content}
            </div>
        </ReactGridLayout>
    );
};

export default ViewGrid;
