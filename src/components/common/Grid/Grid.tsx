import React from 'react';
import RGL, { ReactGridLayoutProps, WidthProvider } from 'react-grid-layout';

interface IGrid {
    rglProps: ReactGridLayoutProps;
    children?: React.ReactElement;
}

const ReactGridLayout = WidthProvider(RGL);

const Grid = (props: IGrid) => (
    <ReactGridLayout
        {...props.rglProps}
    >
        {props.children}
    </ReactGridLayout>
);

export default Grid;
