<template>
  <div v-if="loginS.loginState">


    <h1 class="title">Upload-imag</h1>
    
    <input type="file" @change="handleFileUpload" accept="image/*" class="input" />
    <div v-if="previewImage" class="preview">
      <img :src="previewImage" alt="Preview" class="preview-image" />
      <input type="text" v-model="newImageDescription" placeholder="Add a description" />
      <input type="text" v-model="newImageTags" placeholder="Add tags (comma separated)" />
      <button @click="addImage"> Add Image</button>

    </div>

    <div >
        <button  @click="returnHome" class="returnButton">返回首页</button> 
    </div>

    
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

import {store} from '/src/stores/store.js';

import {countIndex,loginStore} from '/src/stores/constant.js'


import request from '@/utils/request.js'

import { ElMessage } from "element-plus";


import { useRouter } from 'vue-router';



const router=useRouter()




const counts=countIndex()

const loginS=loginStore()


const previewImage = ref(null);
const newImageDescription = ref('');
const newImageTags = ref('');
const selectFile=ref(null)

const userID =ref('')



onMounted(()=>{

  if(!loginS.loginState)

  router.push("/login")

})



const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
      selectFile.value=file
    const reader = new FileReader();
    reader.onload = (e) => {
      previewImage.value = e.target.result;
    };
    reader.readAsDataURL(file);

  }
};



const uploadImage =async()=>{
    if(selectFile.value && newImageDescription.value&&newImageTags.value){
        const formData=new FormData();

        formData.append('file',selectFile.value);
        formData.append('description',newImageDescription.value);
        formData.append('tags',newImageTags.value)
        formData.append('userID',userID.value)

    try{
        const response =await request.post('/upload',formData);
        console.log(response)
        if(response){
            ElMessage({

              message:"图片上传成功",
              type:'success'
            })


            previewImage.value=null;
            newImageDescription.value='';
            newImageTags.value='';
        }else{

          ElMessage(
             {

               message:"图片上传失败",
               type:'warning'
             }

          )
           
        }
        

    }catch(error){
        console.error('上传错误',error);
    }
    
    }

    

}

const addImage = () => {
  if (previewImage.value && newImageDescription.value && newImageTags.value) {
    const newCard = {
      id: Date.now(),
      url: previewImage.value,
      description: newImageDescription.value,
      tags: newImageTags.value.split(',').map(tag => tag.trim()),
      load: true,
    };

    userID.value=loginS.userID

    uploadImage()
    if(counts.count>2){
        counts.count=0
    }
    store.card_columns[counts.count].cards.push(newCard);
    console.log(counts.count)
    counts.increment()
    
    
    previewImage.value = null;
    newImageDescription.value = '';
    newImageTags.value = '';
  }
};
</script>

<style scoped>
/* 上传部分样式同之前 */

/* 上传部分样式 */

.title{
    font-size: 50px;
    margin-bottom: 20px;
}


.input {
  
  right: 10px;
  padding:  0.5rem;
  color: white;
  background-color: rgb(24, 157, 209);
  border: 0;
  border-radius: 0.8rem;
}


.preview {
  margin-top: 20px;
}
.preview-image {
  max-width: 100%;
  height: auto;
}
input[type="text"] {
  display: block;
  margin-top: 10px;
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
}
button {
  margin-top: 10px;
  padding: 10px 10px;
  background-color: rgb(24, 157, 209);
  border: 0;
  border-radius: 0.5rem;
}

.returnButton{



    
}
</style>
