import React from 'react';
import RGL, { WidthProvider } from 'react-grid-layout';
import { Divider } from '@material-ui/core';

import { BoxTitle } from './style';

const ReactGridLayout = WidthProvider(RGL);

const Box = (props) => (
    <ReactGridLayout
        {...props.rglProps}
    >
        <div key={'title'}>
            <BoxTitle>{props.title}</BoxTitle>
            <Divider variant="middle" style={{ backgroundColor: 'blue' }} />
        </div>
        <div key={'content'}>
            {props.content}
        </div>
    </ReactGridLayout>
);

export default Box;
