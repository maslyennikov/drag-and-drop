import React from 'react';
import { isUndefined } from 'lodash';

import Grid from './Grid';
import { GridType } from '../../../config';
import { gridTypes } from './utils';
import { Layout } from 'react-grid-layout';


interface IProps {
    type: GridType;
    customLayout?: Layout[]
    children?: any;

    onClick?: () => void;
}

const GridContainer = (props: IProps) => {
    const rglProps = isUndefined(props.customLayout)
        ? gridTypes[props.type]
        : { ...gridTypes[props.type], layout: props.customLayout };

    return (
        <Grid rglProps={rglProps}>
            {props.children}
        </Grid>
    );
};

export default GridContainer;
