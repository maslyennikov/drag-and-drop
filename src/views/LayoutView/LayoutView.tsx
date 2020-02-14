import React from 'react';

import View from '../../components/common/View';
import HeaderContainer from '../../components/common/Header';
import LayoutViewContentContainer from '../../components/specific/LayoutViewContent';

const LayoutView = () => (
    <View
        header={<HeaderContainer />}
        content={<LayoutViewContentContainer />}
    />
);

export default LayoutView;
