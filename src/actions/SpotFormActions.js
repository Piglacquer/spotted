import firebase from "firebase";
import { Actions } from "react-native-router-flux";
import { SPOT_CREATE, SPOT_UPDATE } from "./types";

export const spotUpdate = ({ prop, value }) => {
  return {
    type: SPOT_UPDATE,
    payload: { prop, value }
  };
};

export const spotCreate = ({ name, description, photos, location }) => {
  const { currentUser } = firebase.auth();
  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/spots`)
      .push({ name, description, photos, location })
      .then(() => {
        dispatch({ type: SPOT_CREATE });
        Actions.pop();
      });
  };
};
