import React from 'react';
import { map, range } from 'lodash';
import { connect } from 'react-redux';

import ConfigurationComponents from './ConfigurationComponents';
import { ComponentWrapper } from './style';
import { setConfigurationComponents } from '../../../redux/modules/app';
import selectors from '../../../redux/selectors';
import IStore from '../../../redux/store';
import { AnyAction } from 'redux';
import constants from '../../../constants';

interface IConfigurationComponentsContainer {
    configurationComponents: string[];

    setConfigurationComponents: (configurationComponents: string[]) => AnyAction;
}

const onDragStart = (event: React.DragEvent, componentName: string) => {
    console.log('dragstart on div', componentName);

    event.dataTransfer.setData("componentName", componentName);
};

class ConfigurationComponentsContainer extends React.PureComponent
    <IConfigurationComponentsContainer> {

    private generateConfigurationComponentsDOM = () => {
        const components = this.props.configurationComponents;

        return map(range(components.length), (i: number) => (
            <div key={i}>
                <ComponentWrapper
                    draggable
                    onDragStart={(event) =>
                        onDragStart(event, components[i])}
                >
                    {components[i]}
                </ComponentWrapper>
            </div>)
        );
    };

    componentDidMount(): void {
        const { configurationComponents } = constants;

        this.props.setConfigurationComponents(configurationComponents);
    }

    render() {
        return <ConfigurationComponents
            configurationComponentsDOM={this.generateConfigurationComponentsDOM()}
        />
    }
}

const mapStateToProps = (store: IStore) => ({
    configurationComponents: selectors.getConfigurationComponents(store)
});

const mapDispatchToProps = {
    setConfigurationComponents
};


export default connect(mapStateToProps, mapDispatchToProps)(ConfigurationComponentsContainer);
