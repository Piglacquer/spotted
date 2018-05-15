import firebase from "firebase";
import { Actions } from "react-native-router-flux";
import { SPOTS_FETCH_SUCCESS, SPOT_CREATE } from "./types";

// export const spotsFetch = () => {
//   console.log("its some spots");
// };

export const spotSave = ({ title, description, location }) => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`${currentUser.uid}/employees/${uid}`)
      .set({ title, description, location })
      .then(() => {
        dispatch({ type: SPOTS_SAVE_SUCCESS });
        Actions.pop();
      });
  };
};
