<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
    router="True"
  >
    <el-menu-item index="0">清华大学计算机系图形学实验室</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1">刘永进课题组</el-menu-item>
    <el-sub-menu index="2">
      <template #title>动作生成</template>
      <el-menu-item index="2-1" route="/gestures/ysflow">基于流模型的音频驱动风格化手势生成</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>说话人</template>
      <el-menu-item index="3-1">item one</el-menu-item>
      <el-menu-item index="3-2">item two</el-menu-item>
      <el-menu-item index="3-3">item three</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="4">联系我们</el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>