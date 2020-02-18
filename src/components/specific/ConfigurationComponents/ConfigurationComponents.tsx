import React from 'react';

import GridContainer from '../../common/Grid';
import { GridType } from '../../../config';
import { ComponentsWrapper, Title } from './style';

interface IProps {
    configurationComponentsDOM: React.ReactElement[];
}

const ConfigurationComponents = (props: IProps) => (
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
