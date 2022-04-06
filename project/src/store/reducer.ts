import { createReducer } from '@reduxjs/toolkit';
import { setError } from './action';

type Props = {
  error: string,
}

const initialState: Props = {
  error: '',
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

