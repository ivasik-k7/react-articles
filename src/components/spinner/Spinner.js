import React from "react";
import styled from "styled-components";

import loadingIcon from "./loading.gif";
const LoaderWrap = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function Spinner() {
    return (
        <LoaderWrap>
            <img src={loadingIcon} alt="loading" />
        </LoaderWrap>
    );
}
