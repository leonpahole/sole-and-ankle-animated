import React from "react";
import styled from "styled-components/macro";

import { WEIGHTS } from "../../constants";

const HeaderNavLink = ({ href, children }) => {
  return (
    <NavLinkWrapper href={href}>
      <NavLink>{children}</NavLink>
      <NavLinkBold aria-hidden={true}>{children}</NavLinkBold>
    </NavLinkWrapper>
  );
};

const NavLinkWrapper = styled.a`
  position: relative;

  text-decoration: none;

  color: var(--color-gray-900);

  &:first-of-type {
    color: var(--color-secondary);
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: transform 150ms ease-in;

    &:hover {
      transform: translateY(-100%);
      transition: transform 100ms ease-out;
    }
  }
`;

const NavLink = styled.span`
  display: block;
  font-size: 1.125rem;
  text-transform: uppercase;
  font-weight: ${WEIGHTS.medium};
`;

const NavLinkBold = styled(NavLink)`
  font-weight: ${WEIGHTS.bold};
  position: absolute;
`;

export default HeaderNavLink;
