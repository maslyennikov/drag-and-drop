import React from 'react';
import { connect } from 'react-redux';

import selectors from '../../../redux/selectors';
import IStore from '../../../redux/store';
import ConfigurationViewContent from './ConfigurationViewContent';
import { Layout } from 'react-grid-layout';
import { map, range } from 'lodash';
import { GridItem } from './style';

interface IConfigurationViewContentContainer {
    activeConfigurationLayout: Layout[];
}

class ConfigurationViewContentContainer extends React.PureComponent<IConfigurationViewContentContainer> {
    private generateConfigurationGridDOM = () =>
        map(range(this.props.activeConfigurationLayout.length), (i: number) => (
            <GridItem key={i}>
                {i}
            </GridItem>)
        );

    render() {
        return <ConfigurationViewContent
            activeConfigurationLayout={this.props.activeConfigurationLayout}
            configurationGridDOM={this.generateConfigurationGridDOM()}
        />;
    }
}

const mapStateToProps = (store: IStore) => ({
    activeConfigurationLayout: selectors.getActiveConfigurationLayout(store)
});

export default connect(mapStateToProps)(ConfigurationViewContentContainer);
