import React from 'react';
import { isUndefined } from 'lodash';

import Grid from './Grid';
import { GridType } from '../../../constants/constants';
import { gridTypes } from './utils';
import { Layout } from 'react-grid-layout';


interface IGridContainer {
    gridType: GridType;
    customLayout?: Layout[]
    children?: any;
}

const GridContainer = (props: IGridContainer) => {
    const rglProps = isUndefined(props.customLayout) ? gridTypes[props.gridType]
        : { ...gridTypes[props.gridType], layout: props.customLayout };

    return (
        <Grid rglProps={rglProps}>
            {props.children}
        </Grid>
    );
};

export default GridContainer;
