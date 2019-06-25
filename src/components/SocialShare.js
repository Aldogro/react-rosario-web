import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookSquare,
  faGithub,
  faInstagram,
  faTwitter,
  faSlack,
} from '@fortawesome/free-brands-svg-icons'

const SocialShare = () => (
  <SocialShareWrapper>
    {/* TODO: change to as="a" */}
    <Link href="https://www.facebook.com/React-Rosario-359696574659484/">
      <FontAwesomeIcon icon={faFacebookSquare} />
    </Link>
    <Link href="https://github.com/reactrosario">
      <FontAwesomeIcon icon={faGithub} />
    </Link>
    <Link href="https://www.instagram.com/reactrosario/">
      <FontAwesomeIcon icon={faInstagram} />
    </Link>
    <Link href="https://twitter.com/reactrosario">
      <FontAwesomeIcon icon={faTwitter} />
    </Link>
    <Link href="https://meetupjs.slack.com/">
      <FontAwesomeIcon icon={faSlack} />
    </Link>
  </SocialShareWrapper>
)

const SocialShareWrapper = styled.div`
  margin: 0 2%;
  display: flex;
  font-size: 22px;  
`;

const Link = styled.a`
  margin: 0 12%;
`

export default SocialShare