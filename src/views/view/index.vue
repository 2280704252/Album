<script setup>
import {ChatRound, Edit} from "@element-plus/icons-vue";
import {onMounted, ref} from "vue";
import {ElMessage} from "element-plus";



const images=[
    
    {url: '/src/assets/1.jpg'},
    {url: '/src/assets/2.jpg'},
    {url: '/src/assets/3.jpg'},


]





</script>

<template>
  <div class="box" >
    <div style="border-radius: 0.8rem;background-color:#fff;">
      <el-row :gutter="50">
        <!-- 图片区 -->
        <el-col :span="50">
          <div class="banner">
            <el-carousel height="620px">
              <el-carousel-item v-for="(image,index) in images" :key="index" >
                <img class="image"
                     :src="image.url">
              </el-carousel-item>
            </el-carousel>
          </div>
        </el-col>



        <el-col :span="50">
            <div class="info" style="width: 500px;margin-top: 10px;">
                <el-row style="align-items: center;width: 500px;">
                  <a :href="''">
                      <el-avatar />
                  </a>

                  <div class="username">用户名</div>
                  <button class="focusOn">已关注</button>
                  <!-- <button class="focusOn"> 关注</button> -->

                </el-row>
            </div>

            <div class="main-content">
                <el-row style="margin-top: 20px;">
                    <h2>标题</h2>
                </el-row>
                <el-row>
                    <div class="content">内容</div>

                </el-row>
                <el-row>
                    <div class="time">创建时间</div>


                </el-row>
            </div>




        </el-col>

     </el-row>
        
    </div>
  </div>
</template>

<style scoped>
.content {
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #333;
  white-space: pre-wrap;
  overflow-wrap: break-word;
}

.more {
  margin-left: 32px;
  margin-top: 16px;
  line-height: 18px;
  color: #13386c;
  cursor: pointer;
}

.commentTitle {
  font-size: 14px;
  line-height: 18px;
  color: #666;
}

.box {
  position: absolute;
  left: 200px;
  top: 40px;
  border-radius: 0.8rem;
  width: 1200px;
  height: 620px;
  margin-top: 5px;
  box-shadow: -16px 28px 28px -3px rgba(0, 0, 0, 0.1), 0px 10px 61px -8px rgba(0, 0, 0, 0.1);
}

.banner {
  width: 600px;
  border-radius: 0.8rem;
}

.username {
  margin-left: 15px;
}

.focusOn {
  position: absolute;
  right: 10px;
  padding: 0.6rem 0.8rem;
  color: white;
  background-color: red;
  border: 0;
  border-radius: 0.8rem;
}

.focusOn:hover {
  background-color: #fd5656;
}

.image {
  width: 100%;
  height: 100%;
  border-radius: 0.8rem 0 0 0.8rem;
  object-fit: cover;
}

.main-content::-webkit-scrollbar {
  width: 0.1em; /* 设置滚动条宽度为0.1em */
  background-color: transparent; /* 设置滚动条背景颜色为透明 */
}

.main-content {
  height: 420px;
  overflow-y: scroll;
}

.time {
  font-size: 12px;
  color: #999;
}

.bottomArea {
  position: absolute;
}

.buttonArea {
  position: relative;
  width: 500px;
  height: 35px;
  bottom: 1em;
}

.warp {
  display: flex;
  align-items: center;
  margin-right: 20px;
}

.comment-input {
  position: relative;
  bottom: 1.5em;
  width: 500px;
}
</style>