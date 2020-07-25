import React, {Component} from "react";
import styled from "styled-components";

import NewsService from "../../services/news";

const ArticleImg = styled.img`
    display: inline-block;
    width: 200px;
    height: 150px;
    object-fit: cover;
`;

const ArticleList = styled.ul`
    list-style:none;
    width:50%;
    margin 30px auto;

`;

const ArticleListItem = styled.li`
    display: flex;
    margin-bottom: 25px;
`;
const ArticleContentWrap = styled.div`
    margin-left: 10px;
    padding-right: 20px;
`;

const ArticleSplit = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
`;

const ArticleAuthor = styled.span`
    font-size: 14px;
    padding: 4px 8px;
    border-left: 4px solid rgba(188, 51, 16);
`;

const ArticleTitle = styled.h4`
    display: inline-block;
    padding: 4px;
    font-size: 18px;
    border-bottom: 2px solid rgba(188, 51, 16);
`;

const ArticleDescr = styled.article`
    font-style: italic;
    font-size: 16px;
`;

export default class articleList extends Component {
    state = {
        articles: [],
    };
    componentDidMount() {
        const ns = new NewsService();
        ns.getUkrainianNews().then((res) => {
            this.setState({
                articles: res.articles,
            });
        });
    }

    render() {
        const {articles} = this.state;
        console.log(articles);
        return (
            <div>
                <ArticleList>
                    {articles.map((article, idx) => (
                        <ArticleListItem key={idx}>
                            <ArticleImg src={article.urlToImage} alt={article.title} />
                            <ArticleContentWrap>
                                <ArticleTitle>{article.title}</ArticleTitle>
                                <ArticleDescr>{article.description}</ArticleDescr>
                                <ArticleSplit>
                                    <ArticleAuthor>{article.author}</ArticleAuthor>
                                    <a href={article.url} target="_blank">
                                        Check Source
                                    </a>
                                </ArticleSplit>
                            </ArticleContentWrap>
                        </ArticleListItem>
                    ))}
                </ArticleList>
            </div>
        );
    }
}
