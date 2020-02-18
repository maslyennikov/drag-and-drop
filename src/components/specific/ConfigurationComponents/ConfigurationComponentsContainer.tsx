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


interface IState {
    components: string[];
}

interface IProps {
    configurationComponents: string[];

    setConfigurationComponents: (configurationComponents: string[]) => AnyAction;
}

const onDragStart = (event: React.DragEvent, componentName: string) => {
    console.log('dragstart on div', componentName);

    event.dataTransfer.setData("componentName", componentName);
};

class ConfigurationComponentsContainer extends React.PureComponent
    <IProps, IState> {

    constructor(props: IProps) {
        super(props);

        this.state = {
            components: constants.configurationComponents
        }
    }

    componentDidMount() {
        this.props.setConfigurationComponents(constants.configurationComponents);
    }

    componentDidUpdate() {
        this.setState({
            components: this.props.configurationComponents
        });
    }

    private generateConfigurationComponentsDOM = () => {
        const components = this.state.components;

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
