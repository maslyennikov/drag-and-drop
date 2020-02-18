import React from 'react';

import View from '../../components/common/View';
import Header from '../../components/common/Header';
import LayoutViewContentContainer from '../../components/specific/LayoutViewContent';

const LayoutView = () => (
    <View
        header={<Header />}
        content={<LayoutViewContentContainer />}
    />
);

export default LayoutView;
