const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

function handleSignUp() {
      const name = document.getElementById('signUpName').value.trim();
      const email = document.getElementById('signUpEmail').value.trim();
      const password = document.getElementById('signUpPassword').value.trim();

      if (!name || !email || !password) {
        alert('Por favor, preencha todos os campos para se cadastrar.');
      } else {
        window.location.href = '/weather-forecast-main/index.html';
      }
    }

    function handleSignIn() {
      const email = document.getElementById('signInEmail').value.trim();
      const password = document.getElementById('signInPassword').value.trim();

      if (!email || !password) {
        alert('Please fill in all fields to enter.');
      } else {
        window.location.href = '/weather-forecast-main/index.html';
      }
    };