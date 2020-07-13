import {reducer} from "./user";
import {ActionType, AuthorizationStatus} from "./utils/constants";

describe(`User reducer test`, () => {
  it(`Should return the initial state`, () => {
    expect(reducer(undefined, {})).toEqual(
        {
          authorizationStatus: AuthorizationStatus.NO_AUTH
        });
  });
  it(`Should change authorization status correctly`, () => {
    expect(reducer({authorizationStatus: AuthorizationStatus.NO_AUTH}, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH
    });
    expect(reducer({authorizationStatus: AuthorizationStatus.NO_AUTH}, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH
    })).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH
    });
    expect(reducer({authorizationStatus: AuthorizationStatus.AUTH}, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH
    })).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH
    });
    expect(reducer({authorizationStatus: AuthorizationStatus.AUTH}, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH
    });
  });
});
