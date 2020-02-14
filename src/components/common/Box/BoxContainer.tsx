import React from 'react';

import Box from './Box';

interface IBox {
    title?: string;
    content: any;
}

const BoxContainer = (props: IBox) => (
    <Box
        {...props}
    />
);

export default BoxContainer;
