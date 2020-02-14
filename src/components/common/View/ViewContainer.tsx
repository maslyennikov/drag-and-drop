import React from 'react';

import View from './View';

interface IViewContainer {
    header: React.ReactElement;
    content: React.ReactElement;
}

const ViewContainer = (props: IViewContainer) => {
    return (
        <View {...props} />
    );
};

export default ViewContainer;
