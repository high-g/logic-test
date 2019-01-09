<template>
  <section class="container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="User" name="first">User</el-tab-pane>
      <el-tab-pane label="Config" name="second">Config</el-tab-pane>
      <el-tab-pane label="Role" name="third">Role</el-tab-pane>
      <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
    </el-tabs>

    <div>
      <el-button type="primary">Primary</el-button>
    </div>
    <div>
      <i class="el-icon-edit"></i>
    </div>
    <div>
      <i class="el-icon-loading"></i>
    </div>
    <div>
      <el-radio v-model="radio" label="1">Option A</el-radio>
      <el-radio v-model="radio" label="2">Option B</el-radio>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      radio: 1,
      activeName: 'first'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
</style>

