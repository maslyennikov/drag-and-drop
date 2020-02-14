import React from 'react';

import Title from './Title';

interface IViewTitleContainer {
    title: string;
}

const TitleContainer = (props: IViewTitleContainer) => (
    <Title title={props.title}/>
);

export default TitleContainer;
