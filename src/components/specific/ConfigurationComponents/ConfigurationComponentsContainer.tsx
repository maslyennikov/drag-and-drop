import React from 'react';

import ConfigurationComponents from './ConfigurationComponents';
import { map, range } from 'lodash';
import constants from '../../../constants';
import { ComponentWrapper } from './style';

interface IConfigurationComponentsContainer {

}

const generateConfigurationComponentsDOM = () => {
    const components = constants.configurationComponents;

    return map(range(components.length), (i: number) => (
        <div key={i}>
            <ComponentWrapper draggable>
                {components[i]}
            </ComponentWrapper>
        </div>)
    );
};


const ConfigurationComponentsContainer = (props: IConfigurationComponentsContainer) => (
    <ConfigurationComponents
        configurationComponentsDOM={generateConfigurationComponentsDOM()}
    />
);

export default ConfigurationComponentsContainer;
