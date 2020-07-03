import {ActionType} from "./utils/constans";

const ActionCreate = {
  changeFilter: (type) => ({
    type: ActionType.CHANGE_FILTER_TYPE,
    payload: type
  })
};


export {ActionCreate};
