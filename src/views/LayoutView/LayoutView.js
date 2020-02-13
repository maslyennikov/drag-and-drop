import React from 'react';

import ViewGrid from '../../components/common/ViewGrid';
import HeaderContainer from '../../components/common/Header';
import LayoutViewContentContainer from '../../components/specific/LayoutViewContent';

const LayoutView = () => (
    <ViewGrid
        header={<HeaderContainer />}
        content={<LayoutViewContentContainer />}
    />
);

export default LayoutView;
