import React from 'react';
import { connect } from 'react-redux';

import selectors from '../../../redux/selectors';
import IStore from '../../../redux/store';
import ConfigurationViewContent from './ConfigurationViewContent';
import { Layout } from 'react-grid-layout';

interface IConfigurationViewContentContainer {
    activeConfigurationLayout: Layout[]
}

const ConfigurationViewContentContainer = (props: IConfigurationViewContentContainer) => {
    return <ConfigurationViewContent
        activeConfigurationLayout={props.activeConfigurationLayout}
    />;
};

const mapStateToProps = (store: IStore) => ({
    activeConfigurationLayout: selectors.getActiveConfigurationLayout(store)
});

export default connect(mapStateToProps)(ConfigurationViewContentContainer);
