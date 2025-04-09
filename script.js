
const firebaseConfig = {
  apiKey: "AIzaSyBAvqbN-VlyGVp64_CVKRC5VGcuA-LLxWc",
  authDomain: "paoginregister.firebaseapp.com",
  projectId: "paoginregister",
  storageBucket: "paoginregister.firebasestorage.app",
  messagingSenderId: "875357802646",
  appId: "1:875357802646:web:826dd6d97ea2346beaf2b7",
  measurementId: "G-60Q17SBQB9"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Регистрация
function register() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  if (!email || !pass) {
    alert("Заполните все поля!");
    return;
  }

  auth.createUserWithEmailAndPassword(email, pass)
    .then((userCredential) => {
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert(error.message);
    });
}

// Вход
function login() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  if (!email || !pass) {
    alert("Заполните все поля!");
    return;
  }

  auth.signInWithEmailAndPassword(email, pass)
    .then((userCredential) => {
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert(error.message);
    });
}
