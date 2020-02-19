import React from 'react';
import { Link } from 'react-router-dom';

import { ConfigurationAreaWrapper } from './style';
import GridContainer from '../../common/Grid';
import { GridType, routes } from '../../../config';
import { isEmpty } from 'lodash';
import { Layout } from 'react-grid-layout';

interface IProps {
    activeConfigurationLayout: Layout[];
    configurationGridDOM: React.ReactElement[];
}

const ConfigurationArea = (props: IProps) => {
    const configurationGrid = (
        <GridContainer
            type={GridType.configurationScreen}
            customLayout={props.activeConfigurationLayout}
        >
            {props.configurationGridDOM}
        </GridContainer>);

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
