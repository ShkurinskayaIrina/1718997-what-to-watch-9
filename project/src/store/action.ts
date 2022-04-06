import { createAction } from '@reduxjs/toolkit';

export const redirectToRoute = createAction<string>('films/redirectToRoute');

export const setError = createAction<string>('films/setError');

