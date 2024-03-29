/*
 * @Description:
 * @Version: 2.0
 * @Author: Yaowen Liu
 * @Date: 2021-07-23 17:57:22
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2022-11-28 14:06:50
 */
const tickers: any[] = []

// 执行动画帧
let startDate = Date.now()
function animate() {
  const interval = Date.now() - startDate

  for (const ticker of tickers)
    ticker.fn.call(ticker.listener, interval)

  startDate = Date.now()

  requestAnimationFrame(animate)
}

animate()

// 添加任务
export function addTicker(fn: Function, listener: any) {
  for (let i = 0; i < tickers.length; i++) {
    const ticker = tickers[i]
    if (ticker.fn === fn && ticker.listener === listener)
      return
  }

  tickers.push({
    fn,
    listener,
  })
}

// 删除任务
export function removeTicker(fn: Function, listener: any) {
  for (let i = 0; i < tickers.length; i++) {
    const ticker = tickers[i]
    if (ticker.fn === fn && ticker.listener === listener)
      tickers.splice(i, 1)
  }
}
