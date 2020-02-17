import React from 'react';
import { isEmpty } from 'lodash';
import { Layout } from 'react-grid-layout';

import { texts } from '../../../constants/constants';
import Title from '../../common/Title';


interface IConfigurationViewContent {
    activeConfigurationLayout: Layout[]
}

const ConfigurationViewContent = (props: IConfigurationViewContent) => (
    <>
        <Title title={texts.configurationPageTitle} />
        {isEmpty(props.activeConfigurationLayout) ? 'Please select layout first' : console.log(props.activeConfigurationLayout)}
    </>

);

export default ConfigurationViewContent;
