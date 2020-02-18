import React from 'react';

import View from './View';

interface IProps {
    header: React.ReactElement;
    content: React.ReactElement;
}

const ViewContainer = (props: IProps) => {
    return (
        <View {...props} />
    );
};

export default ViewContainer;
