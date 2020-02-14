import React from 'react';

import ViewGrid from "../../components/common/ViewGrid";
import HeaderContainer from "../../components/common/Header";
import ConfigurationViewContent from '../../components/specific/ConfigurationViewContent';

const ConfigurationView = () => (
    <ViewGrid
        header={<HeaderContainer />}
        content={<ConfigurationViewContent />}
    />
);

export default ConfigurationView;
