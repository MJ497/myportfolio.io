
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getDatabase,set,ref,child,get} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCWg5bwREG0JtNomLO-TwqntYV1jmJts0Q",
    authDomain: "contactform-1c1a1.firebaseapp.com",
    projectId: "contactform-1c1a1",
    storageBucket: "contactform-1c1a1.appspot.com",
    messagingSenderId: "417604817591",
    appId: "1:417604817591:web:0b4f89d7b3e789c3e7f332"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);

  document.getElementById("submitB").addEventListener('click', function(e){
e.preventDefault();
    set(ref(database, 'user/' + document.getElementById("name").value),
    
    {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,

    })
    window.alert("message sent thank you..")
  })
