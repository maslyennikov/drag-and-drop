import React from 'react';
import RGL, { WidthProvider } from 'react-grid-layout';

const ReactGridLayout = WidthProvider(RGL);

const ViewGrid = (props) => (
    <ReactGridLayout
        {...props.rglProps}
    >
        <div key={'header'}>
            {props.header}
        </div>
        <div key={'content'}>
            {props.content}
        </div>
    </ReactGridLayout>
);

export default ViewGrid;
