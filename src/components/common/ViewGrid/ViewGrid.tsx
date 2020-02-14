import React from 'react';
import RGL, { WidthProvider, ReactGridLayoutProps } from 'react-grid-layout';

const ReactGridLayout = WidthProvider(RGL);

interface IViewGrid {
    rglProps: ReactGridLayoutProps;
    header: any;
    content: any;
}

const ViewGrid = (props: IViewGrid) => (
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
