/* eslint-disable */
export function logIn(email, password) {
  const MY_MAILID = 'rkpawan321@gmail.com';
  const MY_PASSWORD = 'rkpawan321';
  // ... hit an API endpoint somehow
  // and assume we get back a list of errors
  const errors = [
    "Error Message 1",
    "Error Message 2"
    // ... could be any nuber of errors
  ];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === MY_MAILID && password === MY_PASSWORD) {
        resolve();
      }
      reject(errors);
    }, 1000);
  });
}

export default logIn;
