/**
 * use finally
 */

const promise = Promise.resolve(43);
promise
  .finally(() => {
    console.log("Finally called.");
  })
  .then((value) => {
    console.log(value); // 43
  });

// finally return ignored

promise
  .finally(() => {
    // settlement handler
    return 44;
  })
  .then((value) => {
    // fulfillment handler
    console.log(value);
    // ignored!
    // 43
  });
