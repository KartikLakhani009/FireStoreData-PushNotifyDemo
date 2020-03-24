const validate = values => {
  const errors = {};
  var email = values.Email;
  var pass = values.Password;

  var fname = values.FirstName;

  var lname = values.LastName;

  if (fname === undefined) {
    fname = '';
  }
  if (lname === undefined) {
    lname = '';
  }

  if (email === undefined) {
    email = '';
  }
  if (pass === undefined) {
    pass = '';
  }
  if (fname == '') {
    errors.FirstName = 'Required';
  }
  if (lname == '') {
    errors.LastName = 'Required';
  }

  if (email == '') {
    errors.Email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email.trim())) {
    errors.Email = 'Invalid email address';
  }
  if (pass == '') {
    errors.Password = 'Required';
  } else if (pass.length > 15) {
    errors.Password = 'Must be 15 characters or less';
  }

  return errors;
};

export default validate;
