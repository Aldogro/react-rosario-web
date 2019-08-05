import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled, { createGlobalStyle } from "styled-components"
import { StaticQuery, graphql, Link } from "gatsby"


const Header = () => (
  <HeaderWrapper>
    <GlobalStyle />
    <HeaderContent>
      <StaticQuery
        query={graphql`
          query {
            placeholderImage: file(relativePath: { eq: "LogoRos.png" }) {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => <StyledImg fluid={data.placeholderImage.childImageSharp.fluid} />}
      />
      <NavBar>
        <StyledLink to="/"><span>Inicio</span></StyledLink>
        <StyledLink to="/"><span>Blog</span></StyledLink>
        <StyledLink to="/"><span>Contacto</span></StyledLink>
      </NavBar>
    </HeaderContent>
  </HeaderWrapper>
)

const HeaderWrapper = styled.div`
  margin: 2% 0;
  width: 100%;
  display: flex;

  && {
    background: linear-gradient(45deg, rgba(33,193,251,1) 0%, rgba(129,32,227,1) 100%);
    // background: linear-gradient(45deg, rgba(129,32,227,1) 100%, rgba(33,193,251,1) 0%);
  }
`;

const GlobalStyle = createGlobalStyle`
  div${HeaderWrapper} {
    background: green;
  }
`

const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const StyledImg = styled(Img)`
  height: 100%;
  margin: 0 2%;
  width: 90px;
`
const NavBar = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 35%;
`

const StyledLink = styled(Link)`
  display: flex;
  flex: 1 1 0;
  margin-right: 15px;
  height: 100%;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.25rem;
  text-decoration: none;
  transition: border 1s linear forward;

  span {
    padding: 15px;
    position: relative;
    z-index: 1;
  }
  
  span::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: -0.25em;
    right: -0.25em;
    background-color: #04BBFF;
    transform-origin: center right;
    transform: scaleX(0);
    transition: transform 0.2s ease-in-out;
  }
  
  span:hover::before {
    transform: scaleX(1);
    transform-origin: center left;
  }
  span:active::before{
    background-color: rgb(173, 90, 255);
  }
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header