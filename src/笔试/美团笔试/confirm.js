// import { Modal } from "./lib";

function confirm() {
  //todo
  return new Promise((resovle, reject) => {
    Modal.confirm({
      onOk: (data) => {
        resolve(data);
      },
      onCancel: (err) => {
        resolve(false);
      },
    });
  });
}

async function handle() {
  if (await confirm()) {
    // do ok
  } else {
    // do cancel
  }
}
