import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';


const StyledImg = styled(Img)`
    display: block;
    grid-row: 1 / -1;

`;

const Image = (props) => {
    const data = useStaticQuery(graphql`
    query {
        allImageSharp {
            edges {
                node {
                    fluid {
                        #query grabs all images from folder
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }
`);

    return (
        <StyledImg
            //then returns only the requested image
            fluid={data.allImageSharp.edges.find(element => (element.node.fluid.src.split('/').pop() === props.src)).node.fluid}
            imgStyle={{
                width: (props.width && !props.height ? props.width : `inherit`),
                height: props.height ? props.height : 'inherit',
            }}
        />
    );
}

export default Image;