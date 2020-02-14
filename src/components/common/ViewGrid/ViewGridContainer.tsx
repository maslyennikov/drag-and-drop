import React from 'react';

import ViewGrid from './ViewGrid';

interface IViewGridContainer {
    header: any;
    content: any;
}

const ViewGridContainer = (props: IViewGridContainer) => {
    return (
        <ViewGrid {...props} />
    );
};

export default ViewGridContainer;
