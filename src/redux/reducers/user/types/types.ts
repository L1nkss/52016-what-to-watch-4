type TUserInfo = {
  id: number,
  email: string,
  name: string,
  avatarUrl: string
}

interface IInitialState {
  authorizationStatus: string,
  authorizationUserInfo: TUserInfo,
  loading: boolean
}

export default IInitialState
