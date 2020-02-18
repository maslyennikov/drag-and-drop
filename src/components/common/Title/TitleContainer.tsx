import React from 'react';
import Title from './Title';

interface IProps {
    title: string;
}

const TitleContainer = (props: IProps) => (
    <Title title={props.title} />
);

export default TitleContainer;
