import {reducer} from "@redux/reducers/user/user";
import {ActionType, AuthorizationStatus} from "@redux/reducers/user/constants/constants";

describe(`User reducer test`, () => {
  it(`Should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      authorizationUserInfo: null,
      loading: false
    });
  });
  it(`Should change authorization status correctly`, () => {
    // Запрос на получение информации о статусе пользователя
    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      authorizationUserInfo: null,
      loading: false
    }, {
      type: ActionType.AUTHORIZATION_REQUEST
    })).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      authorizationUserInfo: null,
      loading: true
    });
    // Запрос успешен, статус изменен с NO_AUTH на AUTH
    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      authorizationUserInfo: null,
      loading: true
    }, {
      type: ActionType.AUTHORIZATION_SUCCESS,
      payload: AuthorizationStatus.AUTH
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
      authorizationUserInfo: null,
      loading: false
    });
    // Запрос успешен, статус не изменяется
    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      authorizationUserInfo: null,
      loading: true
    }, {
      type: ActionType.AUTHORIZATION_SUCCESS,
      payload: AuthorizationStatus.NO_AUTH
    })).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      authorizationUserInfo: null,
      loading: false
    });
    // Сохранить информацию о пользователе
    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      authorizationUserInfo: null,
      loading: true
    }, {
      type: ActionType.SAVE_USER_INFORMATION,
      payload: {email: `test@mail.ru`, password: `1234`}
    })).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      authorizationUserInfo: {email: `test@mail.ru`, password: `1234`},
      loading: false
    });
  });
});
