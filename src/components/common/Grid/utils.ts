import { map } from 'lodash';
import { Layout, ReactGridLayoutProps } from 'react-grid-layout';

import { configurationScreenLayouts, GridType } from '../../../constants/constants';


export const generateLayoutViewContent = () => {
    const length = configurationScreenLayouts.length;

    return map(new Array(length), (item, i) => ({
            x: i * 4 % 12,
            y: 4,
            w: 3.8,
            h: 5,
            i: i.toString()
        }
    ));
};

export const gridTypes: ReactGridLayoutProps[] = [];

const layoutViewContentLayout: Layout[] = generateLayoutViewContent();

gridTypes[GridType.layoutViewContent] = {
    className: 'layoutViewContent',
    isDraggable: false,
    isResizable: false,
    cols: 12,
    rowHeight: 45,
    margin: [10, 10],
    layout: layoutViewContentLayout
};
gridTypes[GridType.configurationScreen] = {
    className: 'configurationScreen',
    isDraggable: false,
    isResizable: false,
    cols: 12.5,
    rowHeight: 45,
    layout: configurationScreenLayouts[0]
};
