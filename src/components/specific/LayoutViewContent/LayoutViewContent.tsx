import React from 'react';
import RGL, { WidthProvider, ReactGridLayoutProps } from 'react-grid-layout';

import BoxContainer from '../../common/Box';
import { texts } from "../../../constants/constants";

const ReactGridLayout = WidthProvider(RGL);

interface ILayoutViewContent {
    rglProps: ReactGridLayoutProps;
    domContent: any;
}

const LayoutViewContent = (props: ILayoutViewContent) => {
    const content = (
        <ReactGridLayout {...props.rglProps}>
            {props.domContent}
        </ReactGridLayout>
    );

    return (
        <BoxContainer
            title={texts.layoutPageTitle}
            content={content}
        />
    );
};

export default LayoutViewContent;
