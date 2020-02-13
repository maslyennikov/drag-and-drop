import React from 'react';
import RGL, { WidthProvider } from 'react-grid-layout';

import BoxContainer from '../../common/Box';
import { translations } from "../../../config/config";

const ReactGridLayout = WidthProvider(RGL);

const LayoutViewContent = (props) => {
    const content = (
        <ReactGridLayout {...props.rglProps}>
            {props.domContent}
        </ReactGridLayout>
    );

    return (
        <BoxContainer
            title={translations.layoutPageTitle}
            content={content}
        />
    );
};

export default LayoutViewContent;
