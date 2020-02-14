import React from 'react';
import { ReactGridLayoutProps } from 'react-grid-layout';

import StaticGrid from './StaticGrid';
import { GridType } from '../../../constants/constants';
import { layoutWithoutTitle, layoutWithTitle, viewLayout } from './layouts';

interface IStaticGridContainer {
    children?: any;
    gridType: GridType;
}

const StaticGridContainer = (props: IStaticGridContainer) => {
    const gridTypes: ReactGridLayoutProps[] = [];

    gridTypes[GridType.boxWithTitle] = {
        isDraggable: false,
        isResizable: false,
        cols: 1,
        rowHeight: 60,
        margin: [0, 0],
        autoSize: true,
        layout: layoutWithTitle
    };
    gridTypes[GridType.box] = {
        isDraggable: false,
        isResizable: false,
        cols: 1,
        rowHeight: 60,
        margin: [0, 0],
        autoSize: true,
        layout: layoutWithoutTitle
    };
    gridTypes[GridType.view] = {
        className: 'layout',
        isDraggable: false,
        isResizable: false,
        cols: 1,
        rowHeight: 64,
        margin: [0, 0],
        autoSize: true,
        layout: viewLayout
    };

    return (
        <StaticGrid rglProps={gridTypes[props.gridType]}>
            {props.children}
        </StaticGrid>
    );
};

export default StaticGridContainer;
