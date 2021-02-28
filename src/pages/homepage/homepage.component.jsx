import React from 'react';

import './homepage.styles.scss';
import { HomePageContainer } from './homepage.styles';

import '../../components/directory/directory.component';
import Directory from '../../components/directory/directory.component';

const HomePage = () => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

export default HomePage;
