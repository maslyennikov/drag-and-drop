import { map } from 'lodash';
import { configurationComponents } from '../../../constants/constants';

export const configurationScreenOptionLayouts = [
    [
        { x: 0, y: 0, w: 6, h: 4.5, i: '0' },
        { x: 6, y: 0, w: 6, h: 4.5, i: '1' },
    ],
    [
        { x: 0, y: 0, w: 6, h: 1, i: '0' },
        { x: 6, y: 0, w: 6, h: 1, i: '1' },
        { x: 0, y: 1, w: 12, h: 1.5, i: '2' },
        { x: 0, y: 2, w: 6, h: 2, i: '3' },
        { x: 6, y: 2, w: 6, h: 2, i: '4' }
    ],
    [
        { x: 0, y: 0, w: 4, h: 1, i: '0' },
        { x: 4, y: 0, w: 4, h: 1, i: '1' },
        { x: 8, y: 0, w: 4, h: 1, i: '2' },
        { x: 0, y: 1, w: 12, h: 1.5, i: '3' },
        { x: 0, y: 2, w: 6, h: 2, i: '4' },
        { x: 6, y: 2, w: 6, h: 2, i: '5' }

    ],
    [
        { x: 0, y: 0, w: 3, h: 2, i: '0' },
        { x: 3, y: 0, w: 3, h: 2, i: '1' },
        { x: 6, y: 0, w: 3, h: 2, i: '2' },
        { x: 9, y: 0, w: 3, h: 2, i: '3' },
        { x: 0, y: 1, w: 12, h: 1, i: '4' },
        { x: 0, y: 2, w: 6, h: 1.5, i: '5' },
        { x: 6, y: 2, w: 6, h: 1.5, i: '6' }
    ],
    [
        { x: 0, y: 0, w: 12, h: 2.5, i: '0' },
        { x: 0, y: 0, w: 12, h: 2, i: '1' }
    ],
    [
        { x: 0, y: 0, w: 6, h: 2.5, i: '0' },
        { x: 6, y: 0, w: 6, h: 2.5, i: '1' },
        { x: 0, y: 1, w: 6, h: 2, i: '2' },
        { x: 6, y: 1, w: 6, h: 2, i: '3' }
    ],
];

export const generateLayoutViewContentLayout = () => {
    const length = configurationScreenOptionLayouts.length;

    return map(new Array(length), (item, i) => ({
            x: i * 4 % 12,
            y: 0,
            w: 4,
            h: 5,
            i: i.toString()
        }
    ));
};

export const generateConfigurationComponentsLayout = () => {
    const length = configurationComponents.length;

    return map(new Array(length), (item, i) => ({
            x: 0,
            y: i,
            w: 12,
            h: 1.5,
            i: i.toString()
        }
    ));
};
