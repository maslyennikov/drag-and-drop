import React from 'react';

import ConfigurationComponents from './ConfigurationComponents';
import { map, range } from 'lodash';
import constants from '../../../constants';
import { GridItem } from '../ConfigurationViewContent/style';

interface IConfigurationComponentsContainer {

}

const generateConfigurationComponentsDOM = () =>
    map(range(constants.configurationComponents.length), (i: number) => (
        <GridItem key={i}>
            {i}
        </GridItem>)
    );


const ConfigurationComponentsContainer = (props: IConfigurationComponentsContainer) => (
    <ConfigurationComponents
        configurationComponentsDOM={generateConfigurationComponentsDOM()}
    />
);

export default ConfigurationComponentsContainer;
