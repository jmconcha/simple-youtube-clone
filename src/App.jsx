/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */

import React, { useState } from 'react';

import { css } from '@emotion/react';
import Box from '@mui/material/Box'

import VideoDetail from './VideoDetail';
import SearchBar from './SearchBar';
import VideoList from './VideoList';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleTermChange = e => {
    setSearchTerm(e.target.value);
  }

  const handleTermSubmit = e => {
    e.preventDefault();

    console.log('submitting: ', searchTerm);
  };

  return (
    <Box css={css`
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 60px;
    `}>
      <SearchBar
        term={searchTerm}
        onChange={handleTermChange}
        onSubmit={handleTermSubmit}
      />
      <Box css={css`
        display: flex;
      `}>
        <VideoDetail />
        <VideoList />
      </Box>
    </Box>
  );
}

export default App;