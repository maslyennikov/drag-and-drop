import React from 'react';
import RGL, { ReactGridLayoutProps, WidthProvider } from 'react-grid-layout';

interface IProps {
    rglProps: ReactGridLayoutProps;
    children?: React.ReactElement;

    onClick?: () => void;
}

const ReactGridLayout = WidthProvider(RGL);

const Grid = (props: IProps) => (
    <div onClick={() => {props.onClick && props.onClick()}}>
        <ReactGridLayout
            {...props.rglProps}
        >
            {props.children}
        </ReactGridLayout>
    </div>
);

export default Grid;
