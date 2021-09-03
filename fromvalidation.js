const contactMe = document.getElementById('contactme-form');

function isLowerCase(str) {
  return !/[A-Z]/.test(str);
}

contactMe.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;

  const user = { name, email, message };
  localStorage.setItem('userData', JSON.stringify(user));
  const displayErrorMessge = document.getElementById('validate-message');
  if (isLowerCase(emai)) {
    contactMe.submit();
  } else {
    displayErrorMessge.innerHTML = `Email address should be in lower case, try to re-enter email like this : ${email.toLowerCase()}`;
  }
});

window.addEventListener('load', () => {
  if (localStorage.length > 0) {
    const userata = JSON.parse(localStorage.getItem('userData'));
    document.getElementById('email').value = userData.email;
    document.getElementById('name').value = userData.name;
    document.getElementById('message').value = userData.message;
  }
});