import { initializeApp } from 'firebase/app';
import "firebase/database"
const firebaseConfig = {
    apiKey: "AIzaSyBZRi1FzjLAYrKSEjspi_xuXMTJIS4vNvY",
    authDomain: "ayus-ayurveda.firebaseapp.com",
    databaseURL: "https://ayus-ayurveda-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "ayus-ayurveda",
    storageBucket: "ayus-ayurveda.appspot.com",
    messagingSenderId: "449799681631",
    appId: "1:449799681631:web:89a30eb84da070490dcdea",
    measurementId: "G-GQMW0ERC9J"
  };
  const firebase = initializeApp(firebaseConfig);
export default firebase