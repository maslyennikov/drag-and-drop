import React from 'react';

import { ContentWrapper } from './style';

interface IView {
    header: React.ReactElement;
    content: React.ReactElement;
}

const View = (props: IView) => (
    <>
        {props.header}
        <ContentWrapper>
            {props.content}
        </ContentWrapper>
    </>
);

export default View;
