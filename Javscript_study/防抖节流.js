/**
 * 防抖debounce
 * 触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间
 * 防止事件重复触发
 * */
function debounce(fun,wait){
  let timer;
  return (...args)=>{
    if (timer){
        clearTimeout(timer);
      }
      timer = setTimeout(()=>{
        fun(...args);
      },wait)
  }
}

window.onresize = debounce(()=>{
	console.log(1);
},1000);


/**
 * 节流 throttle
 * 高频事件触发，但在n秒内只会执行一次，节流会稀释函数的执行频率
 */