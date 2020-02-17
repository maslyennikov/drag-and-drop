import React from 'react';
import RGL, { ReactGridLayoutProps, WidthProvider } from 'react-grid-layout';

interface IGrid {
    rglProps: ReactGridLayoutProps;
    children?: React.ReactElement;

    onClick?: () => void;
}

const ReactGridLayout = WidthProvider(RGL);

const Grid = (props: IGrid) => (
    <div onClick={() => {props.onClick && props.onClick()}}>
        <ReactGridLayout
            {...props.rglProps}
        >
            {props.children}
        </ReactGridLayout>
    </div>
);

export default Grid;
