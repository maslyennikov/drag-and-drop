import React from 'react';
import { Divider } from '@material-ui/core';

import { BoxTitle } from './style';
import StaticGridContainer from '../StaticGrid';
import { GridType } from '../../../constants/constants';

interface IBoxContainer {
    title?: string;
    content: any;
}

const Box = (props: IBoxContainer) => (
    props.title
        ? (
            <StaticGridContainer gridType={GridType.boxWithTitle}>
                <div key={'title'}>
                    {props.title && (
                        <>
                            <BoxTitle>{props.title}</BoxTitle>
                            <Divider variant="middle" style={{ backgroundColor: 'blue' }} />
                        </>
                    )}
                </div>
                <div key={'content'}>
                    {props.content}
                </div>
            </StaticGridContainer>
        )
        : (
            <StaticGridContainer gridType={GridType.box}>
                <div key={'content'}>
                    {props.content}
                </div>
            </StaticGridContainer>
        )
);

export default Box;
