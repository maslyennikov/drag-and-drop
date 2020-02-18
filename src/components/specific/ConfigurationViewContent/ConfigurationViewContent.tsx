import React from 'react';
import { isEmpty } from 'lodash';
import { Layout } from 'react-grid-layout';

import { texts } from '../../../constants/constants';
import { GridType } from '../../../config';
import Title from '../../common/Title';
import GridContainer from '../../common/Grid';
import { ComponentsArea, ConfigurationArea, Content } from './style'
import ConfigurationComponentsContainer from '../ConfigurationComponents';
import { Link } from 'react-router-dom';


interface IConfigurationViewContent {
    activeConfigurationLayout: Layout[];
    configurationGridDOM: React.ReactElement[];
}

const ConfigurationViewContent = (props: IConfigurationViewContent) => {
    const configurationGrid = (
        <GridContainer
            type={GridType.configurationScreen}
            customLayout={props.activeConfigurationLayout}
        >
            {props.configurationGridDOM}
        </GridContainer>);

    const selectLayout = (
        <>
            Please select layout first <Link to={'/'}>here</Link>
        </>
    );

    return (
        <>
            <Title title={texts.configurationPageTitle} />

            <Content>
                <ComponentsArea>
                    <ConfigurationComponentsContainer />
                </ComponentsArea>

                <ConfigurationArea>
                    {isEmpty(props.activeConfigurationLayout) ? selectLayout : configurationGrid}
                </ConfigurationArea>
            </Content>
        </>

    );
};


export default ConfigurationViewContent;
