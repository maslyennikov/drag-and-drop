import React from 'react';

import StaticGrid from '../StaticGrid';
import { GridType } from '../../../constants/constants';

interface IViewGrid {
    header: any;
    content: any;
}

const ViewGrid = (props: IViewGrid) => (
    <StaticGrid gridType={GridType.view}>
        <div key={'header'}>
            {props.header}
        </div>
        <div key={'content'}>
            {props.content}
        </div>
    </StaticGrid>
);

export default ViewGrid;
