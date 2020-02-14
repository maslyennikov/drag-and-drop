import React from 'react';
import { GridType, texts } from "../../../constants/constants";

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
            <Grid gridType={GridType.layoutViewContent}>
                {props.domContent}
            </Grid>
        </ContentWrapper>
    </>
);

export default LayoutViewContent;
