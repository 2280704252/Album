<template>

<div v-if="loginS.loginState">
    <nav class="navbar">
      <div class="nav-container">
        <a href="#" class="nav-logo">主页</a>
        <ul class="nav-menu">
          <li class="nav-item">
              <router-link to="/upload" class="nav-link">上传图片</router-link>
            <!-- <a href="#" class="nav-link">上传图片</a> -->
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">个人相册</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" @click="exitLgoin">退出登陆</a>
          </li>
        </ul>
      </div>
    </nav>
  <div class="gallery">
    <div v-for="(col, colIndex) in store.card_columns" :key="colIndex" class="column">
      <section v-for="card in col.cards" :key="card.id" class="card-section">
        <div v-show="col.load" class="card">
          <a :href="card.url" @click.prevent="handleCardClick(card)">
            <img
              :src="card.url"
              class="image"
              @load="handleLoad(card)"
              alt=""
            />
          </a>
          <div class="card-content">
            <div class="card-title">
              <span class="title-text">{{card.description}}</span>
            </div>
            <div class="card-bottom">
              <el-row class="row">
                <div class="username">用户名</div>
              </el-row>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  <div v-if="selectedImage" class="overlay" @click="hideImage">
    <div class="modal" @click.stop>
      <span class="close" @click="hideImage">&times;</span>
      <img :src="selectedImage.url" :alt="selectedImage.alt">
    </div>
  </div>

</div>


</template>


<script setup>
import { onMounted, ref } from 'vue';

import {store} from '/src/stores/store.js'

import {loginStore} from '/src/stores/constant.js'

import {useRouter} from "vue-router"

import router from '@/router';

import { ElMessage } from 'element-plus';
 

const loginS=loginStore()


const selectedImage = ref(null);

const handleLoad = (card) => {
  card.load = true;
};

const handleCardClick = (card) => {
  selectedImage.value = card;
};

const hideImage = () => {
  selectedImage.value = null;
};

const exitLgoin=()=>{

    loginS.loginState=false

    router.push({path:"/login"})

    ElMessage({
        message:'退出登陆',
        type:'success'
    })

}



onMounted(()=>{

    if(!loginS.loginState){
        router.push({path:"/login"})
    }

})
</script>

<style scoped>


.navbar {

  width: 100%;
  height: 45px;
  background-color: hwb(135 98% 0%);
  display: flex;
  justify-content: center;
  
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 100;
  border-radius: 1%;
  
}
.nav-container {
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}
.nav-logo {
  color: rgb(17, 17, 17);
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
}
.nav-menu {
  list-style: none;
  display: flex;
  gap: 20px;
}
.nav-item {
  display: flex;
}
.nav-link {
  color: rgb(22, 21, 21);
  text-decoration: none;
  font-size: 18px;
}
.nav-link:hover {
  text-decoration: underline;
}



.gallery {
  display: flex;
  gap: 20px;
  padding-block-start: 4%;
  justify-content: center;
}
.column {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.card-section {
  break-inside: avoid; /* 防止卡片被分割在两列中 */
}
.card {
  border-radius: 0.8rem;
  background-color: transparent;
}
.image {
  width: 400px;
  border-radius: 0.8rem;
  object-fit: fill;
}
.image:hover {
  opacity: 0.7;
}
.card-content {
  padding: 10px;
}
.card-title {
  margin-bottom: 10px;
  height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.title-text {
  font-size: 1.0rem;
}
.card-bottom .row {
  align-items: center;
}
.username {
  margin-left: 10px;
  font-weight: 200;
  font-size: 0.5rem;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal {
  background-color: white;
  padding: 20px;
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
  position: relative;
}
.modal img {
  max-width: 100%;
  max-height: 100%;
}
.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
  color: #333;
}
</style>
