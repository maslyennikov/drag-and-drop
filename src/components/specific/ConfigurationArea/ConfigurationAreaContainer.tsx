import React from 'react';
import { map, range } from 'lodash';
import { connect } from 'react-redux';
import { Layout } from 'react-grid-layout';

import ConfigurationArea from './ConfigurationArea';
import { ItemWrapper } from './style';
import IStore from '../../../redux/store';
import selectors from '../../../redux/selectors';

interface IConfigurationAreaContainer {
    activeConfigurationLayout: Layout[];
}

const generateConfigurationGridDOM = (length: number) =>
    map(range(length), (i: number) => (
        <div key={i}>
            <ItemWrapper />
        </div>)
    );

const ConfigurationAreaContainer = (props: IConfigurationAreaContainer) => (
    <ConfigurationArea
        activeConfigurationLayout={props.activeConfigurationLayout}
        configurationGridDOM={generateConfigurationGridDOM(props.activeConfigurationLayout.length)}
    />
);

const mapStateToProps = (store: IStore) => ({
    activeConfigurationLayout: selectors.getActiveConfigurationLayout(store)
});

export default connect(mapStateToProps)(ConfigurationAreaContainer);
