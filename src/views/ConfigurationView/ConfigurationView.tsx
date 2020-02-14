import React from 'react';

import View from "../../components/common/View";
import HeaderContainer from "../../components/common/Header";
import ConfigurationViewContent from '../../components/specific/ConfigurationViewContent';

const ConfigurationView = () => (
    <View
        header={<HeaderContainer />}
        content={<ConfigurationViewContent />}
    />
);

export default ConfigurationView;
