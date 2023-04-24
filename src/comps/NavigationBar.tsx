import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { AppBar, Toolbar, Button } from '@mui/material';
import Profile from '../../public/profile.png';
import Image from 'next/image';

const NavigationBarContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1500px;
  margin: 0 auto;
`;

const NavigationButton = styled(Button)`
  && {
    color: black;
  }
`;

const NavigationAppBar = styled(AppBar)`
  && {
    background-color: transparent;
  }
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
`;

const ProfileImage = styled(Image)`
  border-radius: 50%;
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
`;

export default function NavigationBar() {
  return (
    <NavigationBarContainer>
      <NavigationAppBar position="static">
        <Toolbar>
          <LeftSide>
            <ProfileImage src={Profile} alt={'Profile'} width={40} height={40} />
          </LeftSide>
          <RightSide>
            <Link href="/work">
              <NavigationButton>Work</NavigationButton>
            </Link>
            <Link href="/about">
              <NavigationButton>About</NavigationButton>
            </Link>
            <Link href="/contact">
              <NavigationButton>Contact</NavigationButton>
            </Link>
          </RightSide>
        </Toolbar>
      </NavigationAppBar>
    </NavigationBarContainer>
  );
}