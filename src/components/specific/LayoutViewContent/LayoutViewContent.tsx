import React from 'react';
import { texts } from "../../../constants/constants";
import { GridType } from "../../../config";

import Title from '../../common/Title';
import Grid from '../../common/Grid';
import { ContentWrapper } from './style';

interface ILayoutViewContent {
    domContent: React.ReactElement[];
}

const LayoutViewContent = (props: ILayoutViewContent) => (
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
