import { combineReducers } from "redux";
import { mapReducer } from "./mapReducer";
import { searchReducer } from "./searchReducer";
import { loadingReducer } from "./loadingReducer";
import { xhrReducer } from "./xhrReducer";
import { filterReducer } from "./filterReducer";
import { comparisonReducer } from "./comparisonReducer";

export default combineReducers({
  map: mapReducer,
  search: searchReducer,
  loading: loadingReducer,
  xhr: xhrReducer,
  filter: filterReducer,
  comparison: comparisonReducer,
});