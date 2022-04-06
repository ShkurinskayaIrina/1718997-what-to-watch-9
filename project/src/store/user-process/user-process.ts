import { createSlice } from '@reduxjs/toolkit';

import { NameSpace, AuthorizationStatus, unknownUserData } from '../../consts';
import { UserProcess } from '../../types/state';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: unknownUserData,
};

export const userProcess = createSlice({
  name: NameSpace.user,
  initialState,
  reducers: {
    requireAuthorization: (state, action) => {
      state.authorizationStatus = action.payload;
    },
    fetchUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { requireAuthorization, fetchUserData } = userProcess.actions;
