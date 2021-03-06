import React from 'react';
import { Divider } from '@material-ui/core';

import { Wrapper, TitleWrapper } from './style';
import { dividerStyles } from './style';

interface IProps {
    title: string;
}

const Title = (props: IProps) => (
    <Wrapper>
        <TitleWrapper>{props.title}</TitleWrapper>
        <Divider
            variant="middle"
            style={dividerStyles}
        />
    </Wrapper>
);

export default Title;
