import React from 'react';

import GridContainer from '../../common/Grid';
import { GridType } from '../../../constants/constants';
import { ComponentsWrapper, Title } from './style';

interface IConfigurationComponents {
    configurationComponentsDOM: React.ReactElement[];
}

const ConfigurationComponents = (props: IConfigurationComponents) => (
    <>
        <Title>Components</Title>
        <ComponentsWrapper>
            <GridContainer type={GridType.configurationComponents}>
                {props.configurationComponentsDOM}
            </GridContainer>
        </ComponentsWrapper>
    </>
);

export default ConfigurationComponents;
