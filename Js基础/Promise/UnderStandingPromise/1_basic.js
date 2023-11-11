const promise1 = Promise.resolve(42);

promise1.then((response) => {
  console.log(response);
  // now add another
  promise1.then((response) => {
    console.log(11, response);
  });
});

/**
 * non-promise thenables
 */
const thenable = {
  then(resolve, reject) {
    resolve(42);
  },
};

const promise2 = Promise.resolve(thenable);

promise2.then((value) => {
  console.log(value);
});
