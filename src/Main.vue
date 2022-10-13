<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MyMenu from './components/MyMenu.vue'
</script>


<template>
  <div class="index">
    <el-container>
      <el-header>
      <MyMenu/>
      </el-header>
      <el-main>
        <div class="router">
            <RouterView />
        </div>
        <el-backtop :right="100" :bottom="100" />
      </el-main>
      <el-footer>
        <div class="footer-div" style="text-align: center;">
            &copy; Graphics Lab
        </div>
      </el-footer>
    </el-container>
  </div>
</template>


<style scoped>
.router{
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 50px;
}
.index {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.el-container {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
}
.el-main {
  height: 100%;
  overflow: hidden;
}
.el-footer {
  display: inline-block;
  height: 4vh;
  width: 100%;
  align-items: center;
}

</style>
