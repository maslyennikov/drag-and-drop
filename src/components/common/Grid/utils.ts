import { Layout, ReactGridLayoutProps } from 'react-grid-layout';

import { GridType } from '../../../constants/constants';
import { generateConfigurationComponentsLayout, generateLayoutViewContentLayout } from './layouts';

export const gridTypes: ReactGridLayoutProps[] = [];

const layoutViewContentLayout: Layout[] = generateLayoutViewContentLayout();
const configurationComponentsLayout: Layout[] = generateConfigurationComponentsLayout();

gridTypes[GridType.layoutViewContent] = {
    className: 'layoutViewContent',
    isDraggable: false,
    isResizable: false,
    rowHeight: 45,
    layout: layoutViewContentLayout
};
gridTypes[GridType.configurationScreenOption] = {
    className: 'configurationScreenOption',
    isDraggable: false,
    isResizable: false,
    rowHeight: 45,
};
gridTypes[GridType.configurationScreen] = {
    className: 'configurationScreen',
    isDraggable: false,
    isResizable: false,
    rowHeight: 90,
};
gridTypes[GridType.configurationComponents] = {
    className: 'configurationScreen',
    isDraggable: false,
    isResizable: false,
    rowHeight: 45,
    layout: configurationComponentsLayout
};
