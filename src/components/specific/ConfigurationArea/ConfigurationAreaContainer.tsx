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

interface IProps {
    activeConfigurationLayout: Layout[];
    configurationComponents: string[];

    setConfigurationComponents: (configurationComponents: string[]) => AnyAction;
}

interface IState {
    configurationItemsState: Array<Array<string>>;
}

class ConfigurationAreaContainer extends React.PureComponent <IProps, IState> {
    constructor(props: IProps) {
        super(props);
        const length = this.props.activeConfigurationLayout.length;

        this.state = {
            configurationItemsState: map(new Array(length), (item) => [])
        };
    }

    render() {
        console.log(this.state.configurationItemsState);
        return <ConfigurationArea
            activeConfigurationLayout={this.props.activeConfigurationLayout}
            configurationGridDOM={
                this.generateConfigurationGridDOM(this.props.activeConfigurationLayout.length)
            }
        />
    }

    private onDrop = (event: any) => {
        const componentName = event.dataTransfer.getData("componentName");

        this.props.setConfigurationComponents(
            filter(this.props.configurationComponents,
                (component: string) => component !== componentName
            )
        );

        let itemsClone = this.state.configurationItemsState.slice();
        itemsClone[event.target.id].push(componentName);

        this.setState({
            ...this.state,
            configurationItemsState: itemsClone
        });
    };

    private onDragOver = (event: React.DragEvent) => {
        event.preventDefault();
    };

    private generateConfigurationGridDOM = (length: number) =>
        map(range(length), (i: number) => (
            <div key={i}>
                <ItemWrapper id={i.toString()}
                    onDragOver={this.onDragOver}
                    onDrop={this.onDrop}
                >
                    {this.state.configurationItemsState[i]}
                </ItemWrapper>
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
