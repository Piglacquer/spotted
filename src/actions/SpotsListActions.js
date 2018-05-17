import firebase from "firebase";
import _ from "lodash";
import { Actions } from "react-native-router-flux";
import { SPOTS_FETCH_SUCCESS, SPOT_CREATE, SPOTS_FORMAT } from "./types";

export const spotsFetch = () => {
  return dispatch => {
    firebase
      .database()
      .ref(`/users`)
      .on("value", snapshot => {
        dispatch({ type: SPOTS_FETCH_SUCCESS, payload: snapshot.val() });
        spotsFormat(dispatch, snapshot.val());
      });
  };
};

const spotsFormat = (dispatch, data) => {
  const formattedData = _.flatten(
    Object.entries(data).map(current => {
      return Object.values(current[1].spots);
    })
  );
  return dispatch({
    type: SPOTS_FORMAT,
    payload: formattedData
  });
};
