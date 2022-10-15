<template>
  <el-carousel indicator-position="outside" height="600px" style="min-height:500px;text-align:center" :autoplay="disabled" trigger="click"  arrow="always">
    <el-carousel-item v-for="item in 4" :key="item">
      <el-image v-if="item == 1" src="../ys_1.png" fit="contain" />
      <el-image v-if="item == 2" src="../ys_2.png" fit="contain" />
      <el-image v-if="item == 3" src="../ys_3.png" fit="contain" />
      <video v-if="item == 4" src="../../../ys_4.mp4" controls="controls" style="width: 1200px;">
        your browser does not support the video tag
      </video>

    </el-carousel-item>
  </el-carousel>
  <div class="cardDiv">
   <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>论文</span>
        <span style="font-size:small;">Audio-Driven Stylized Gesture Generation with Flow-Based Model</span>
      
      </div>
    </template>
      <div class="demo-collapse">
        <el-collapse v-model="activeName">
          <el-collapse-item title="作者介绍" name="1">
            <div>
              叶盛，清华大学计算机系媒体所博士一年级在读，研究兴趣：计算机视觉，三维重建，联系邮箱yec22@mails.tsinghua.edu.cn
            </div>
          </el-collapse-item>
          <el-collapse-item title="发表会议" name="2">
            <div>
              ECCV 2022；ECCV的全称是European Conference on Computer Vision(欧洲计算机视觉国际会议)，每两年开一次，是计算机三大视觉会议之一。
            </div>
          </el-collapse-item>
          <el-collapse-item title="摘要" name="3">
            <div>
              近年来，为机器人和虚拟数字人生成带有风格的音频驱动手势，引起了越来越多的关注。现有方法往往需要风格标签或复杂的数据预处理以获取风格控制参数。在本篇工作中，我们提出了一个端到端基于生成流的模型，通过无监督训练，可以生成任意风格的音频驱动手势。为了实现这一目标，我们将TCN全局编码器和手势感知损失函数引入经典生成流模型中，以整合局部和全局信息。我们在两个基准数据集（TED数据集和Trinity数据集）上进行了广泛实验。更多细节详见论文。
            </div>
          </el-collapse-item>
          <el-collapse-item title="如何生成我的例子" name="4">
            <div>
              选择数据集，上传驱动手势的音频文件，等待若干分钟后下载生成结果（或留下邮箱联系）。
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>


  </el-card>

  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>数据集效果展示</span>
      </div>
    </template>
    <video src="../../../ys_6.mp4" controls="controls" style="width:500px;">
        your browser does not support the video tag
    </video>
    <video src="../../../ys_5.mp4" controls="controls" style="width:500px;">
        your browser does not support the video tag
    </video>
  </el-card>
  </div>
  
  <div class="cardDiv">
 
  <el-card class="box-card2">
    <template #header>
      <div class="card-header">
        <span>尝试你自己的例子吧~</span>
      </div>
    </template>
    <div class="card-inside-div">
      <el-form
        ref="form"
        :model="ruleForm"
        :rules="rules"
        label-width="auto"
        label-position="top"
        size="default"
      >
        <el-upload
          class="upload-demo"
          accept="audio/wav"
          drag
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          show-file-list
        >
          <el-icon class="el-icon--upload"><upload-filled /></el-icon>
          <div class="el-upload__text">
            拖拽文件到此处或 <em>点击此处上传</em>
          </div>
          <template #tip>
            <div class="el-upload__tip">
              仅支持wav格式
            </div>
          </template>
        </el-upload>
        <el-form-item label="生成可能需要数分钟，留下邮箱无需等待：" prop="email">
          <el-input v-model="ruleForm.email" />
        </el-form-item>
        <el-form-item label="选择所用数据集：" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio border label="Ted" />
            <el-radio border label="Trinity" />
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button id="startButton" type="primary" @click="onSubmit">开始</el-button>
        </el-form-item>
        
      </el-form>
    </div>
    <div class="card-inside-div">
      <video width="480" height="285" controls="" autoplay="" name="media">
        <source src="type=&quot;video/mp4&quot;">
          Your browser does not support the video tag.
      </video>
    </div>
  </el-card>
  </div>
</template>


<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { UploadFilled } from '@element-plus/icons-vue'

const size = ref('default')
const labelPosition = ref('right')

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  email: '',
  resource: '',
})

const rules = reactive<FormRules>({
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { required: true, min: 3, max:50, message: '邮箱长度过长', trigger: 'blur' },
  ],
  resource: [
    {
      required: true,
      message: '请选择数据集',
      trigger: 'change',
    },
  ],
})


function onSubmit() {
  console.log('submit!')
  //say()
  socket.emit("hello2","client to server");
}

const activeName = ref(['1', '2', '3']);

import { io } from "socket.io-client";
var socket = io.connect('localhost:8888',{
  extraHeaders: {"Access-Control-Allow-Origin":"*"}
  });
// 向服务器发送消息
socket.emit("hello2","client to server");

// 从服务器接收消息
socket.on("hello", (data) => {
  console.log(data);
});


const disabled = ref(false);



</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 45%;
  display: inline-block;
  margin-left: 1%;
  margin-right: 1%;
}

.box-card2 {
  width: 95%;
  display: inline-block;
  margin-left: 1%;
  margin-right: 1%;
}

.el-carousel__item h3 {
  display: flex;
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__container {
    position: relative;
    text-align: center;
}

.el-radio-group {
  margin-right: 12px;
}

.cardDiv {
  display: inline-block;
  width:1200px;
  margin:30px;
}

.card-inside-div {
  display: inline-block;
  width:40%;
  margin:30px;
  float: left;
}

</style>
