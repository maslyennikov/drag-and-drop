import React from 'react';
import { texts } from "../../../constants";
import { GridType } from "../../../config";

import Title from '../../common/Title';
import Grid from '../../common/Grid';
import { ContentWrapper } from './style';

interface IProps {
    domContent: React.ReactElement[];
}

const LayoutViewContent = (props: IProps) => (
    <>
        <Title
            title={texts.layoutPageTitle}
        />

        <ContentWrapper>
            <Grid type={GridType.layoutViewContent}>
                {props.domContent}
            </Grid>
        </ContentWrapper>
    </>
);

export default LayoutViewContent;
