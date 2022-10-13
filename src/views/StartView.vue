
<template>
  <el-row :gutter="10">
    <el-col :xs="12" :sm="5" :md="6" :lg="7" :xl="8"
      ><div class="grid-content ep-bg-purple"
    />
    test1
    </el-col>
    <el-col :xs="0" :sm="7" :md="6" :lg="5" :xl="4"
      ><div class="grid-content ep-bg-purple-light"
    />
    test2
    </el-col>
  </el-row>
</template>

<style>
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
