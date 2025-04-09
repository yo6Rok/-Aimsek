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

function register() {
  console.log("Попытка регистрации...");

  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  if (!email || !pass) {
    document.getElementById("message").innerText = "Пожалуйста, заполните все поля!";
    return;
  }

  auth.createUserWithEmailAndPassword(email, pass)
    .then((userCredential) => {
      console.log("Регистрация успешна", userCredential);
      document.getElementById("message").innerText = "Регистрация успешна!";
    })
    .catch((error) => {
      console.error("Ошибка при регистрации:", error);
      document.getElementById("message").innerText = error.message;
    });
}

function login() {
  console.log("Попытка входа...");

  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  if (!email || !pass) {
    document.getElementById("message").innerText = "Пожалуйста, заполните все поля!";
    return;
  }

  auth.signInWithEmailAndPassword(email, pass)
    .then((userCredential) => {
      console.log("Вход успешен", userCredential);
      document.getElementById("message").innerText = "Вход выполнен!";
    })
    .catch((error) => {
      console.error("Ошибка при входе:", error);
      document.getElementById("message").innerText = error.message;
    });
}
