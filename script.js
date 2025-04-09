
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function register() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  auth.createUserWithEmailAndPassword(email, pass)
    .then(() => {
      document.getElementById("message").innerText = "Регистрация успешна!";
    })
    .catch(error => {
      document.getElementById("message").innerText = error.message;
    });
}

function login() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  auth.signInWithEmailAndPassword(email, pass)
    .then(() => {
      document.getElementById("message").innerText = "Вход выполнен!";
    })
    .catch(error => {
      document.getElementById("message").innerText = error.message;
    });
}
