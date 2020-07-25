import React from "react";
import styled from "styled-components";
import badwayIcon from "./badWay.gif";
import {Link} from "react-router-dom";

const AcessWrap = styled.div`
    height: 100vh;
    width: 100%;
    text-align: center;
    padding-top: 100px;
`;
const BackAuthButton = styled.button`
    padding: 12px 30px;
    background-color: #333333;
    border: 3px solid red;
    outline: none;
    border-radius: 24px;
    color: white;
`;

const AcessTitle = styled.h2`
    font-size: 32px;
    margin-top: 22px;
    margin-bottom: 22px;
`;

export default function Forbiden() {
    return (
        <AcessWrap>
            <img src={badwayIcon} alt="badWay" />
            <AcessTitle>ACCESS DENIED</AcessTitle>
            <BackAuthButton>
                <Link to="/">Go Back</Link>
            </BackAuthButton>
        </AcessWrap>
    );
}
