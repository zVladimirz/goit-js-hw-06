const form = document.querySelector('.login-form');
form.addEventListener('submit', onTargetformSubmit);
function onTargetformSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === '' || password.value === '') {
    alert('Please fill in all the fields!');
    return;
  }
  const FormValue = {};
  const formData = new FormData(event.currentTarget);
  formData.forEach((value, name) => {
    FormValue[name] = value;
  });
  console.log(FormValue);
  event.currentTarget.reset();
}
