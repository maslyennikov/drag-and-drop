import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

interface IProps {
    content: string;

    onDragStart?: (event: React.DragEvent) => void;
}

const ComponentCard = (props: IProps) => (
    <Card
        style={{ width: '100px', height: '3rem', margin: '5px', textAlign: 'center' }}
        draggable
        onDragStart={props.onDragStart}
    >
        <CardContent>
            {props.content}
        </CardContent>
    </Card>
);

export default ComponentCard;
