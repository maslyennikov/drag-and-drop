import React from 'react';
import RGL, { ReactGridLayoutProps, WidthProvider } from 'react-grid-layout';
import { Divider } from '@material-ui/core';

import { BoxTitle } from './style';

const ReactGridLayout = WidthProvider(RGL);

interface IBoxContainer {
    title?: string;
    rglProps: ReactGridLayoutProps;
    content: any;
}

const Box = (props: IBoxContainer) => (
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
