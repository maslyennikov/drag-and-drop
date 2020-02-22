import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { cardStyles } from './style';

interface IProps {
    content: string;
    draggable?: boolean;

    onDragStart?: (event: React.DragEvent) => void;
}

const ComponentCard = (props: IProps) => (
    <Card
        style={cardStyles}
        draggable={props.draggable}
        onDragStart={props.onDragStart}
    >
        <CardContent>
            {props.content}
        </CardContent>
    </Card>
);

export default ComponentCard;
