import React from 'react';
import { filter, map, range } from 'lodash';
import { connect } from 'react-redux';
import { Layout } from 'react-grid-layout';
import { AnyAction } from 'redux';

import ConfigurationArea from './ConfigurationArea';
import { ItemWrapper } from './style';
import IStore from '../../../redux/store';
import selectors from '../../../redux/selectors';
import { setConfigurationComponents } from '../../../redux/modules/app';

interface IConfigurationAreaContainer {
    activeConfigurationLayout: Layout[];
    configurationComponents: string[];

    setConfigurationComponents: (configurationComponents: string[]) => AnyAction;
}

class ConfigurationAreaContainer extends React.PureComponent <IConfigurationAreaContainer>{
    render() {
        return <ConfigurationArea
            activeConfigurationLayout={this.props.activeConfigurationLayout}
            configurationGridDOM={
                this.generateConfigurationGridDOM(this.props.activeConfigurationLayout.length)
            }
        />
    }

    private onDrop = (event: React.DragEvent) => {
        const componentName = event.dataTransfer.getData("componentName");

        this.props.setConfigurationComponents(
            filter(this.props.configurationComponents,
                (component: string) => component !== componentName
            )
        );

        console.log('dropped');
        console.log('element is ', componentName);
    };

    private  onDragOver = (event: React.DragEvent) => {
        event.preventDefault();
        console.log('dragged over')
    };

    private generateConfigurationGridDOM = (length: number) =>
        map(range(length), (i: number) => (
            <div key={i}>
                <ItemWrapper
                    onDragOver={this.onDragOver}
                    onDrop={this.onDrop}
                />
            </div>)
        );
}

const mapStateToProps = (store: IStore) => ({
    activeConfigurationLayout: selectors.getActiveConfigurationLayout(store),
    configurationComponents: selectors.getConfigurationComponents(store)
});

const mapDispatchToProps = {
    setConfigurationComponents
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfigurationAreaContainer);
