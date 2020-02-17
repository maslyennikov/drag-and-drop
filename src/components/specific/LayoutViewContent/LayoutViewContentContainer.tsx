import React from 'react';
import { map, range } from 'lodash';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import LayoutViewContent from './LayoutViewContent';
import { configurationScreenLayouts, GridType } from '../../../constants/constants';
import { ConfigurationScreenWrapper } from './style';
import GridContainer from '../../common/Grid';
import { setActiveConfigurationLayout } from '../../../redux/modules/app';
import { AnyAction } from 'redux';
import { Layout } from 'react-grid-layout';

interface ILayoutViewContentContainer {
    setActiveConfigurationLayout: (layout: Layout[]) => AnyAction
}

class LayoutViewContentContainer extends React.PureComponent<ILayoutViewContentContainer>{
    // TODO: Add function description
    private generateDOM = () => map(range(configurationScreenLayouts.length), (i: number) => {
        const configurationScreenDOM = map(range(configurationScreenLayouts[i].length), (j: number) => (
            <ConfigurationScreenWrapper key={j} />
        ));
        const onConfigurationGridClick = () => {
            this.props.setActiveConfigurationLayout(configurationScreenLayouts[i]);
        };

        const configurationScreenGrid = (
            <GridContainer
                gridType={GridType.configurationScreen}
                customLayout={configurationScreenLayouts[i]}
            >
                {configurationScreenDOM}
            </GridContainer>
        );

        return (
            <div key={i} onClick={() => {onConfigurationGridClick()}}>
                <Link to={'/configuration'}>
                    {configurationScreenGrid}
                </Link>
            </div>
        );
    });

    render() {
        const domContent = this.generateDOM();

        return (
            <LayoutViewContent
                domContent={domContent}
            />
        );
    }
}

const mapDispatchToProps = {
    setActiveConfigurationLayout
};

export default connect(null, mapDispatchToProps)(LayoutViewContentContainer);
