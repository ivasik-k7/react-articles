import React from "react";
import styled from "styled-components";
import errorIcon from "./errorIndicator.gif";

const ErrorWrap = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function ErrorIndicator() {
    return (
        <ErrorWrap>
            <img src={errorIcon} alt="error" />
        </ErrorWrap>
    );
}
