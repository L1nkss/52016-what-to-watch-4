import {TUserInfo} from "../../../../constants/types";

interface IUserState {
  authorizationStatus: string,
  authorizationUserInfo: TUserInfo,
  loading: boolean
}

export default IUserState;
