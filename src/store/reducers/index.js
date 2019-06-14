import userReducer from "./userReducer";
import trainingSeriesReducer from "./trainingSeriesReducer";
import messagesReducer from "./messagesReducer";
import stripeReducer from "./stripeReducer";
import notificationsReducer from "./notificationsReducer";
import responsesReducer from "./responsesReducer";
import classesReducer from "./classesReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  userReducer,
  trainingSeriesReducer,
  classesReducer,
  messagesReducer,
  stripeReducer,
  notificationsReducer,
  responsesReducer
});

export default rootReducer;
