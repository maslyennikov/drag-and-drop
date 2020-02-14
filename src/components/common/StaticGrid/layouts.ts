import { ILayout } from '../../../interfaces';

// Since h property is number I can't set it up to auto(so it will take the height of children).
// h: Infinity is a workaround to obtain height: auto;

export const layoutWithoutTitle: ILayout[] = [
    { x: 0, y: 0, w: 1, h: Infinity, i: 'content' }
];
export const layoutWithTitle: ILayout[] = [
    { x: 0, y: 0, w: 1, h: 1, i: 'title' },
    { x: 0, y: 0, w: 1, h: Infinity, i: 'content' }
];
export const viewLayout = [
    { x: 0, y: 0, w: 1, h: 1, i: 'header' },
    { x: 0, y: 0, w: 1, h: Infinity, i: 'content' }
];
