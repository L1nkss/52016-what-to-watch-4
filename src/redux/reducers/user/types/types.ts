import {TUserInfo} from "../../../../constants/types";

interface IInitialState {
  authorizationStatus: string,
  authorizationUserInfo: TUserInfo,
  loading: boolean
}

export default IInitialState;
