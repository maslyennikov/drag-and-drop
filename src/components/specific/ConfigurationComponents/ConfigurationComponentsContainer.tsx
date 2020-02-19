import React from 'react';
import { map, range } from 'lodash';
import { connect } from 'react-redux';

import ConfigurationComponents from './ConfigurationComponents';
import { setConfigurationComponents } from '../../../redux/modules/app';
import selectors from '../../../redux/selectors';
import IStore from '../../../redux/store';
import { AnyAction } from 'redux';
import { configurationComponents } from '../../../constants';
import ComponentCard from '../../common/ComponentCard';

interface IState {
    components: string[];
}

interface IProps {
    configurationComponents: string[];

    setConfigurationComponents: (configurationComponents: string[]) => AnyAction;
}

const onDragStart = (event: React.DragEvent, componentName: string) => {
    event.dataTransfer.setData("componentName", componentName);
};

class ConfigurationComponentsContainer extends React.PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            components: configurationComponents
        }
    }

    componentDidMount() {
        this.props.setConfigurationComponents(configurationComponents);
    }

    componentDidUpdate(prevProps: IProps) {
        if (prevProps.configurationComponents !== this.props.configurationComponents) {
            this.setState({
                components: this.props.configurationComponents
            });
        }
    }

    render() {
        return <ConfigurationComponents
            configurationComponentsDOM={this.generateConfigurationComponentsDOM()}
        />
    }

    private generateConfigurationComponentsDOM = () => {
        const { components } = this.state;

        return map(range(components.length), (i: number) => (
            <div key={i}>
                <ComponentCard
                    content={components[i]}
                    draggable={true}
                    onDragStart={(event) => onDragStart(event, components[i])}
                />
            </div>
        ));
    };
}

const mapStateToProps = (store: IStore) => ({
    configurationComponents: selectors.getConfigurationComponents(store)
});

const mapDispatchToProps = {
    setConfigurationComponents
};


export default connect(mapStateToProps, mapDispatchToProps)(ConfigurationComponentsContainer);
