/*
 * @Description:
 * @Author: ju.rui
 * @Date: 2024-02-14 15:57:42
 */
// requestidlecallback 这个API 他会在浏览器空闲的时候执行，这时候有个疑问什么是浏览器空闲的时候？

// 主流的PC屏幕刷新率（FPS）大多在60Hz，即1秒钟对屏幕进行60次刷新，平均每次刷新耗时大概是16.6ms。
// 第一种情况：在一帧的输入渲染合成完成后才会有空闲时间，就是16.6ms之内完成输入渲染合成，空闲的时间才会留给 requestidlecallback
// 第二种情况：没有任务执行浏览器会有50ms空闲时间，这个时间段也会执行 requestidlecallback
// 一帧内做了什么事呢
// 1.处理用户的事件，就是event 例如 click，input change 等。
// 2.执行定时器任务
// 3.执行 requestAnimationFrame
// 4.执行dom 的回流与重绘
// 5.计算更新图层的绘制指令
// 6.绘制指令合并主线程 如果有空余时间会执行 requestidlecallback
requestIdleCallback((deadline) => {
  console.log(deadline.timeRemaining()); // >0 则表示有空闲时间
});
// requestIdleCallback 有机会是超过20ms执行的。
// settimeout 0 是4ms
// MessageChannel 主要由两个对象组成：MessagePort 对象，它们作为通道的两端。
//当创建一个新的 MessageChannel 实例时，会返回一个包含两个 MessagePort 对象的数组。
//通过将这些端口之一发送到另一个文档（例如，iframe 或者其他 window），
//这两个上下文就可以通过 postMessage() 方法互相发送信息，而不影响主线程的性能。

let { port1, port2 } = new MessageChannel();
port1.onmessage = function (e) {
  console.log('onMessage1', e);
};
port2.onmessage = function (e) {
  console.log('onMessage2', e);
};
port1.postMessage('port1');
port2.postMessage('port2');
