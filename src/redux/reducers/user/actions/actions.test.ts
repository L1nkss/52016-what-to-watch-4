import ActionCreator from "@redux/reducers/user/actions/actions";
import {ActionType, AuthorizationStatus} from "@redux/reducers/user/constants/constants";

describe(`User action creators work correctly`, () => {
  it(`Action creator for require authorization should return correct action`, () => {
    expect(ActionCreator.authorizationRequest()).toEqual({
      type: ActionType.AUTHORIZATION_REQUEST
    });
    expect(ActionCreator.authorizationSuccess(AuthorizationStatus.AUTH)).toEqual({
      type: ActionType.AUTHORIZATION_SUCCESS,
      payload: AuthorizationStatus.AUTH
    });
    expect(ActionCreator.saveUserInformation({email: `test@mail.ru`, password: `1234`})).toEqual({
      type: ActionType.SAVE_USER_INFORMATION,
      payload: {email: `test@mail.ru`, password: `1234`}
    });
  })
});
