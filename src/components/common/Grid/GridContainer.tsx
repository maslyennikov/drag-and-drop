import React from 'react';

import Grid from './Grid';
import { GridType } from '../../../constants/constants';
import { gridTypes } from './utils';

interface IGridContainer {
    children?: any;
    gridType: GridType;
}

const GridContainer = (props: IGridContainer) => {

    return (
        <Grid rglProps={gridTypes[props.gridType]}>
            {props.children}
        </Grid>
    );
};

export default GridContainer;
