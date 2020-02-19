import React from 'react';

import Grid from '../../common/Grid';
import { GridType } from '../../../config';
import { ComponentsWrapper, Title } from './style';

interface IProps {
    configurationComponentsDOM: React.ReactElement[];
}

const ConfigurationComponents = (props: IProps) => (
    <>
        <Title>Components</Title>
        <ComponentsWrapper>
            <Grid type={GridType.configurationComponents}>
                {props.configurationComponentsDOM}
            </Grid>
        </ComponentsWrapper>
    </>
);

export default ConfigurationComponents;
