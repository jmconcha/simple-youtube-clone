/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

function SearchBar({ term, onChange, onSubmit }) {
  return (
    <Box noValidate autoComplete="off" css={css`
      width: 500px;
    `}>
      <Paper>
        <form
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 8px;
          `}
          onSubmit={onSubmit}
        >
          <TextField
            variant="outlined"
            size="small"
            css={css`
              width: 100%;
            `}
            value={term}
            onChange={onChange}
          />
          <Button
            variant="contained"
            css={css`
              margin-left: 8px;
            `}
            type="submit"
          >
            Search
          </Button>
        </form>
      </Paper>
    </Box>
  );
}

export default SearchBar;