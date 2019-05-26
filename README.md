# vuex-history

> a history plugin for vuex that allows you to undo or redo the store history.

## installation
``` bash
npm i --save-dev vuex-history
```
## module
``` bash
import VuexHistory from 'vuex-history';
```
## usage
use it as same as vue plugin, and pass the store as a params of plugin.
``` js
import store from './store'
Vue.use(history, store)
```
you must, of course, add the mutation of updatehistory in your vuex store,like this:
``` js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  mutations: {
    updateHistory (state, data) {
      if (data) {
        // change
        for (let key in data) {
          Vue.set(state, key, data[key])
        }
        // delete
        for (let key in state) {
          if (typeof data[key] === 'undefined') {
            Vue.delete(state, key)
          }
        }
      }
    }
  }
})
export default store
```
whenever you need to create a record of history you need to call the method of `update` manual.
in the majority of cases we need to record the initial history of our application,like:
 ``` js
 mounted () {
    this.$history.update()
 }
 ```
## Api
#### Methods
`update` record the history
`undo` undo the history
`redo` redo the history
`hasUndo` check if has undo steps
`hasRedo` check if has undo steps
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
