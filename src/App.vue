<template>
  <div id="app">
    <h2>vuex history plugin</h2>
    <div>
      current count: {{ count }} <span @click="add" class="btn-add">+</span>
    </div>
    <div>
      <div class="btn-update" @click="update">更新 update</div>
      <div class="btn-redo" @click="redo">前进 redo</div>
      <div class="btn-undo" @click="undo">回退 undo</div>
    </div>  
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  mounted () {
    this.$history.update()
  },
  methods: {
    add () {
      this.$store.commit('addCount')
    },
    update () {
      this.$history.update()
    },
    redo () {
      this.$history.redo()
    },
    undo () {
      this.$history.undo()
    }
  }
}
</script>

<style>

.btn-update,
.btn-redo,
.btn-undo,
.btn-add {
  margin-left: 30px;
  display: inline-block;
  width: 60px;
  height: 36px;
  line-height: 32px;
  border-radius: 6px;
  font-size: 20px;
  background: #51d67e;
  color: #fff;
  text-align: center;
  -webkit-user-select: none;
  &:hover {
    opacity: .5;
  }
}
.btn-update:hover,
.btn-redo:hover,
.btn-undo:hover,
.btn-add:hover {
    opacity: .8;
    cursor: pointer;
  }
.btn-update,
.btn-redo,
.btn-undo {
  padding: 10px 10px;
  line-height: 1;
  width: auto;
  height: auto;
  margin-left: 10px;
  margin-top: 20px;
  font-size: 14px;
  background: #519bd6;
}
</style>
