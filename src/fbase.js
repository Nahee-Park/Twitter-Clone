import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

firebase.initializeApp(firebaseConfig);

// 여기서 firebase에서 불러올 것 한 번만 불러온 이후에 다른 곳에서는 얘네를 임포트해서 씀
// auth와 관련된 애들은 얘를 임포트해서 접근할 수 있음
export const authService = firebase.auth();

// 호출 한번만 하기 위해서 따로 저장해둠
export const firebaseInstance = firebase;
