import React from 'react';
import { map, range } from "lodash";

import LayoutViewContent from './LayoutViewContent';
import { layoutsNumber } from "../../../config/config";

const generateLayout = () => map(new Array(layoutsNumber), (item, i) => ({
        x: i * 4 % 12,
        y: 4,
        w: 3.8,
        h: 5,
        i: i.toString()
    }
));

const generateDOM = () => map(range(layoutsNumber), (i) => (
    <div key={i} style={{ border: '1px solid #3f51b5', margin: '10px' }}>
        <span>{i}</span>
    </div>
));

const LayoutViewContentContainer = () => {
    const layout = generateLayout();
    const RGLProps = {
        className: 'layout',
        isDraggable: false,
        isResizable: false,
        cols: 12,
        rowHeight: 64,
        margin: [10, 10],
        items: layoutsNumber,
        layout
    };
    const domContent = generateDOM();

    return (
        <LayoutViewContent
            domContent={domContent}
            rglProps={RGLProps}
        />
    );
};

export default LayoutViewContentContainer;
