import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import styled from "styled-components";
import "../../services/unsplash";

import ArticleList from "../articleList/articleList";
import ImagesList from "../imagesList/ImagesList";

const Header = styled.header`
    padding: 8px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(218, 183, 133, 0.1);
    border-bottom: 1px solid rgb(188, 51, 16);
`;

const LogoTitle = styled.h2`
    display: inline-block;
    color: rgb(188, 51, 16);
`;

const LogoutButton = styled.button`
    padding: 8px 20px;
    border: none;
    outline: none;
    background-color: rgba(188, 51, 16);
    border-radius: 24px;
    margin-right: 10px;
    color: white;
`;

const ImagesTitle = styled.h4`
    font-size: 28px;
    padding: 4px 8px;
    color: rgba(188, 51, 16);
    text-align: center;
    font-weight: 700;
`;

export default class Home extends Component {
    logOut = () => {
        localStorage.clear("authenticated");
        this.props.history.push("/");
    };

    render() {
        const access = JSON.parse(localStorage.getItem("authenticated"));

        if (access) {
            return (
                <div>
                    <Header>
                        <LogoTitle>LOGO</LogoTitle>
                        <LogoutButton onClick={this.logOut}>Logout</LogoutButton>
                    </Header>
                    <ArticleList />
                    <ImagesTitle>Recomended Photos :)</ImagesTitle>
                    <ImagesList />
                </div>
            );
        } else {
            return <Redirect to="/" />;
        }
    }
}
