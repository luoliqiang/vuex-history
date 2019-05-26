
/**
 *
 * 历史记录unredo
 * 数据格式遵循[123456]-[7]-[89]的先进后出的格式
 * @author: luoliqiang 2019.04
 */

let store
let curdo = Object.create(null, {}) // 当前记录
let undo = [] // 回退记录
let redo = [] // 前进记录

const isEmptyObject = function (data) {
  if (Object.keys(data).length) {
    return false
  } else {
    return true
  }
}

const pure = function (data) {
  return JSON.parse(JSON.stringify(data))
}

const hasUndo = function () {
  return !!undo.length
}

const hasRedo = function () {
  return !!redo.length
}

const resetHistory = function () {
  redo = []
}
// 更新记录表
const updateHistory = function () {
  // 将更新放在state数据更新后
  setTimeout(() => {
    if (!isEmptyObject(curdo)) {
      undo.push(curdo)
    }
    curdo = pure(store.state) // 更新当前数据
    resetHistory() // 回退中有新更新则舍弃掉前进记录
  }, 0)
}

const undoHistory = function () {
  if (!hasUndo()) {
    return
  }
  redo.unshift(curdo)
  curdo = undo.pop()
  store.commit('updateHistory', pure(curdo))
}

const redoHistory = function () {
  if (!hasRedo()) {
    return
  }
  undo.push(curdo)
  curdo = redo.shift()
  store.commit('updateHistory', pure(curdo))
}

const install = function(Vue, vuexStory) {
    store = vuexStory
    Vue.prototype.$history = {
      update: updateHistory,
      undo: undoHistory,
      redo: redoHistory,
      hasUndo: hasUndo,
      hasRedo: hasRedo
    }
}

export default install
