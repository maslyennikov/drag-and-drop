import React from 'react';

import { texts } from '../../../constants/constants';
import Title from '../../common/Title';
import { ComponentsArea, Content } from './style'
import ConfigurationComponentsContainer from '../ConfigurationComponents';
import ConfigurationAreaContainer from '../ConfigurationArea';

const ConfigurationViewContent = () => (
    <>
        <Title title={texts.configurationPageTitle} />

        <Content>
            <ComponentsArea>
                <ConfigurationComponentsContainer />
            </ComponentsArea>

            <ConfigurationAreaContainer />
        </Content>
    </>
);


export default ConfigurationViewContent;
