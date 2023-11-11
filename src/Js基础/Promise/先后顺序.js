new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 100)
}).then(
    (value) => {
        console.log("2", value)
    },
    reason => {
        console.log("first", reason)
    }
)