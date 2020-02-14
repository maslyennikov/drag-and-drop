import React from 'react';
import { ReactGridLayoutProps } from 'react-grid-layout';

import ViewGrid from './ViewGrid';

interface IViewGridContainer {
    header: any;
    content: any;
}

const ViewGridContainer = (props: IViewGridContainer) => {
    const layout = [
        { x: 0, y: 0, w: 1, h: 1, i: 'header' },
        // Since h property is number I can't set it up to auto(so it will take the height of children).
        // h: Infinity is a workaround to obtain height: auto;
        { x: 0, y: 0, w: 1, h: Infinity, i: 'content' }
    ];
    const RGLProps: ReactGridLayoutProps = {
        className: 'layout',
        isDraggable: false,
        isResizable: false,
        cols: 1,
        rowHeight: 64,
        margin: [0, 0],
        autoSize: true,
        layout
    };

    return (
        <ViewGrid
            {...props}
            rglProps={RGLProps}
        />
    );
};

export default ViewGridContainer;
