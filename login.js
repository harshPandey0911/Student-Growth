document.querySelector('.img__btn').addEventListener('click', function () {
    document.querySelector('.cont').classList.toggle('s--signup');
    clearMessages();
  });
 
  function handleSignup() {
    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value.trim();
    const msg = document.getElementById('signup-message');
 
    if (!name || !email || !password) {
      msg.textContent = "Please fill all fields.";
      msg.classList.add('error');
      return;
    }
 
    if (localStorage.getItem(email)) {
      msg.textContent = "You are already signed up.";
      msg.classList.add('error');
    } else {
      localStorage.setItem(email, JSON.stringify({ name, password }));
      msg.textContent = "Signed up successfully. Please log in.";
      msg.classList.remove('error');
    }
  }
 
  function handleLogin() {
 const email = document.getElementById('login-email').value.trim();
 const password = document.getElementById('login-password').value.trim();
 const msg = document.getElementById('login-message');
 
 const user = JSON.parse(localStorage.getItem(email));
 if (!user) {
  msg.textContent = "No account found. Please sign up.";
  msg.classList.add('error');
 } else if (user.password !== password) {
  msg.textContent = "Incorrect password.";
  msg.classList.add('error');
 } else {
  // Redirect to blue background page
  window.location.href = "home.html";
 }
 }
 
 
  function clearMessages() {
    document.getElementById('signup-message').textContent = '';
    document.getElementById('signup-message').classList.remove('error');
    document.getElementById('login-message').textContent = '';
    document.getElementById('login-message').classList.remove('error');
  }

