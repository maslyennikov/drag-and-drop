import React from 'react';
import RGL, { ReactGridLayoutProps, WidthProvider } from 'react-grid-layout';

interface IStaticGrid {
    rglProps: ReactGridLayoutProps;
    children?: any;
}

const ReactGridLayout = WidthProvider(RGL);

const StaticGrid = (props: IStaticGrid) => (
    <ReactGridLayout
        {...props.rglProps}
    >
        {props.children}
    </ReactGridLayout>
);

export default StaticGrid;
