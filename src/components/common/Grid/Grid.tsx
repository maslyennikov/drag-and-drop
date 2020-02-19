import React from 'react';
import RGL, { Layout, WidthProvider } from 'react-grid-layout';
import { isUndefined } from 'lodash';

import { gridTypes } from './utils';
import { GridType } from '../../../config';

interface IProps {
    type: GridType;
    customLayout?: Layout[]
    children?: React.ReactElement[];

    onClick?: () => void;
}

const ReactGridLayout = WidthProvider(RGL);

const Grid = (props: IProps) => {
    const rglProps = isUndefined(props.customLayout)
        ? gridTypes[props.type]
        : { ...gridTypes[props.type], layout: props.customLayout };

    return (
        <div onClick={() => {
            props.onClick && props.onClick()
        }}>
            <ReactGridLayout
                {...rglProps}
            >
                {props.children}
            </ReactGridLayout>
        </div>
    );
};

export default Grid;
