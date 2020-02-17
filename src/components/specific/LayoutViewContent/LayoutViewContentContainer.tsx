import React from 'react';
import { map, range } from 'lodash';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import LayoutViewContent from './LayoutViewContent';
import { GridType } from '../../../config';

import { ConfigurationScreenWrapper } from './style';
import GridContainer from '../../common/Grid';
import { configurationScreenOptionLayouts } from '../../common/Grid/layouts';
import { setActiveConfigurationLayout } from '../../../redux/modules/app';
import { AnyAction } from 'redux';
import { Layout } from 'react-grid-layout';

interface ILayoutViewContentContainer {
    setActiveConfigurationLayout: (layout: Layout[]) => AnyAction
}

class LayoutViewContentContainer extends React.PureComponent<ILayoutViewContentContainer>{
    // TODO: Add function description
    private generateDOM = () => map(range(configurationScreenOptionLayouts.length), (i: number) => {
        const configurationScreenOptionDOM = map(range(configurationScreenOptionLayouts[i].length), (j: number) => (
            <ConfigurationScreenWrapper key={j} />
        ));
        const onConfigurationGridClick = () => {
            this.props.setActiveConfigurationLayout(configurationScreenOptionLayouts[i]);
        };

        const configurationScreenOptionGrid = (
            <GridContainer
                type={GridType.configurationScreenOption}
                customLayout={configurationScreenOptionLayouts[i]}
            >
                {configurationScreenOptionDOM}
            </GridContainer>
        );

        return (
            <div key={i} onClick={() => {onConfigurationGridClick()}}>
                <Link to={'/configuration'}>
                    {configurationScreenOptionGrid}
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
