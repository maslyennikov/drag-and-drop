import React from 'react';
import { Link } from 'react-router-dom';

import { ConfigurationAreaWrapper } from './style';
import Grid from '../../common/Grid';
import { GridType, routes } from '../../../config';
import { isEmpty } from 'lodash';
import { Layout } from 'react-grid-layout';

interface IProps {
    activeConfigurationLayout: Layout[];
    configurationGridDOM: React.ReactElement[];
}

const ConfigurationArea = (props: IProps) => {
    const configurationGrid = (
        <Grid
            type={GridType.configurationScreen}
            customLayout={props.activeConfigurationLayout}
        >
            {props.configurationGridDOM}
        </Grid>);

    const selectLayout = (
        <>
            Please select layout first <Link to={routes.layout}>here</Link>
        </>
    );

    return (
        <ConfigurationAreaWrapper>
            {isEmpty(props.activeConfigurationLayout) ? selectLayout : configurationGrid}
        </ConfigurationAreaWrapper>
    );
};


export default ConfigurationArea;
