import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

//图片先按行填充
export const countIndex = defineStore('counter', () => {
  const count = ref(0)
  
  function increment() {
    
    count.value++

  }

  return { count,increment }
})


//登陆页面状态

export const loginStore=defineStore('login',()=>{

  const loginState=ref(false)

  const userID=ref("0")

  const changeState=(newState)=>{ loginState.value=newState}


  return {loginState,userID,changeState}

})


//登陆用户的id
