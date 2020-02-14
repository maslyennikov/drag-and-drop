import React from 'react';
import { map, range } from 'lodash';

import { configurationScreenLayouts, GridType } from '../../../constants/constants';
import { ConfigurationScreenWrapper } from './style';
import GridContainer from '../../common/Grid';

//TODO: Add functin description
export const generateDOM = () => map(range(configurationScreenLayouts.length), (i: number) => {
    const configurationScreenDOM = map(range(configurationScreenLayouts[i].length), (j: number) => {
        return <ConfigurationScreenWrapper key={j} />;
    });

    const configurationScreenGrid = (
        <GridContainer gridType={GridType.configurationScreen} customLayout={configurationScreenLayouts[i]}>
            {configurationScreenDOM}
        </GridContainer>
    );

    return (
        <div key={i} style={{ border: '1px solid #3f51b5' }}>
            {configurationScreenGrid}
        </div>
    );
});
