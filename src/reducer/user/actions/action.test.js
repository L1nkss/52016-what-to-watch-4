import ActionCreator from "./actions";
import {ActionType} from "../constants/constants.js";
import {AuthorizationStatus} from "../constants/constants.js";

describe(`User action creators work correctly`, () => {
  it(`Action creator for require authorization should return correct action`, () => {
    expect(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH
    });
    expect(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH
    });
  });
});
