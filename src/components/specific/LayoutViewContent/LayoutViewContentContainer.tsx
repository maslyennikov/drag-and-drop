import React from 'react';

import LayoutViewContent from './LayoutViewContent';
import { generateDOM } from './utils';


const LayoutViewContentContainer = () => {
    const domContent = generateDOM();

    return (
        <LayoutViewContent
            domContent={domContent}
        />
    );
};

export default LayoutViewContentContainer;
