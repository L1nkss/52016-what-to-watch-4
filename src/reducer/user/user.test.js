import {reducer} from "./user";
import {ActionType, AuthorizationStatus} from "./constants/constants.js";

describe(`User reducer test`, () => {
  it(`Should return the initial state`, () => {
    expect(reducer(undefined, {})).toEqual(
        {
          authorizationStatus: AuthorizationStatus.NO_AUTH,
          authorizationUserInfo: null,
          loading: false
        });
  });
  it(`Should change authorization status correctly`, () => {
    expect(reducer({authorizationStatus: AuthorizationStatus.NO_AUTH}, {
      type: ActionType.AUTHORIZATION_SUCCESS,
      payload: AuthorizationStatus.AUTH
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
      loading: false
    });
    expect(reducer({authorizationStatus: AuthorizationStatus.NO_AUTH}, {
      type: ActionType.AUTHORIZATION_SUCCESS,
      payload: AuthorizationStatus.NO_AUTH
    })).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      loading: false
    });
    expect(reducer({authorizationStatus: AuthorizationStatus.AUTH}, {
      type: ActionType.AUTHORIZATION_SUCCESS,
      payload: AuthorizationStatus.NO_AUTH
    })).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      loading: false
    });
    expect(reducer({authorizationStatus: AuthorizationStatus.AUTH}, {
      type: ActionType.AUTHORIZATION_SUCCESS,
      payload: AuthorizationStatus.AUTH
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
      loading: false
    });
  });
});
