import React, {Component} from "react";
import styled from "styled-components";

import Spinner from "../spinner/Spinner";
import ImageListItem from "./ImageListItem";

import ImagesService from "../../services/unsplash";

const ImageWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    justify-content: center;
`;

export default class ImagesList extends Component {
    state = {
        images: [],
        count: 1,
        start: 7,
    };
    componentDidMount() {
        const {start, count} = this.state;
        const is = new ImagesService();
        is.getUkrainianImages(start, count).then((images) => {
            this.setState({images});
        });
    }

    render() {
        const {images} = this.state;
        return (
            <div>
                <ImageWrap>
                    {images.map((img) => {
                        return <ImageListItem key={img.id} img={img} />;
                    })}
                </ImageWrap>
                <Spinner />
            </div>
        );
    }
}
