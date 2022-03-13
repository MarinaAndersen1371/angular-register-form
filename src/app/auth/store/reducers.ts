import { Action, createReducer, on } from '@ngrx/store';

import { AuthStateInterface } from 'src/app/auth/types/authState.interface';
import {
  registerAction,
  registerSuccessAction,
  registerFailureAction,
} from 'src/app/auth/store/actions/register.action';

const initialState: AuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null,
};

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })
  ),

  on(
    registerSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      currentUser: action.currentUser,
      isLoggedIn: true,
    })
  ),

  on(
    registerFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  )
);

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
