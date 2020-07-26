import React from "react";
import styled from "styled-components";
const Image = styled.img`
    width: 400px;
    height: 320px;
    object-fit: cover;
    padding: 0 5px 15px;
`;

export default function ImageListItem({img}) {
    return <Image src={img.urls.raw} alt={img.alt_description} />;
}
