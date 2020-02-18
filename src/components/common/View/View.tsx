import React from 'react';

import { ContentWrapper } from './style';

interface IProps {
    header: React.ReactElement;
    content: React.ReactElement;
}

const View = (props: IProps) => (
    <>
        {props.header}
        <ContentWrapper>
            {props.content}
        </ContentWrapper>
    </>
);

export default View;
