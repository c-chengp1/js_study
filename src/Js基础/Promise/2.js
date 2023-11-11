function Promise(executor) {
    this.PromiseState = "pending"
    this.PromiseResult = null
    this.callback = []
    const self = this

    function resolve(data) {
        if (self.PromiseState !== "pending") return
        // 1、修改对象的状态
        self.PromiseState = "fulfilled"
        // 2、修改对象的结果
        self.PromiseResult = data
        // 调用成功的回调函数
        self.callback.forEach((item) => {
            item.onResolved(data)
        })
    }
    function reject(data) {
        if (self.PromiseState !== "pending") return
        // 1、修改对象的状态
        self.PromiseState = "rejected"
        // 2、修改对象的结果
        self.PromiseResult = data
        // 调用成功的回调函数
        self.callback.forEach((item) => {
            item.onReject(data)
        })

    }
    try {
        executor(resolve, reject)
    } catch (error) {
        console.log(222, error)
        reject(error)
    }
}




Promise.prototype.then = function (onResolved, onReject) {
    const self = this
    return new Promise((resolve, reject) => {
        if (this.PromiseState === "fulfilled") {
            try {
                let res = onResolved(this.PromiseResult)
                if (res instanceof Promise) {
                    res.then((v) => {
                        resolve(v)
                    }, (e) => {
                        reject(e)
                    })
                }
            } catch (error) {
                reject(error)
            }

        }
        if (this.PromiseState === "rejected") {
            onReject(this.PromiseResult)
        }
        if (this.PromiseState === "pending") {
            // 保存回调函数
            this.callback.push({
                onResolved: function () {
                    onResolved(self.PromiseResult)
                },
                onReject: function () {
                    console.log(self.PromiseResult)
                },
            })

        }
    })
}




let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("ok")
    }, 1000)
})


const result = p.then(
    value => {
        console.log(value)
    },
    err => {
        console.log(111, err)
    }
)

console.log(result)


