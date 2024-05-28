<template>
<div class="login-body">


    <div class="login-panel">
        <div class = "login-title">用户注册</div>

        <el-form 
        :model="formData" 
        :rules="rules" 
        class="demo-ruleForm"
        ref="formDataRef" 
        style="max=width: 600px"
        
        >


        <el-form-item  prop="username">
                <el-input placeholder="请输入用户名" v-model="formData.username" size="large" type="text">
                    <template #prefix >
                        <el-icon>
                            <i-ep-user/>
                        </el-icon>
                    </template>

                </el-input>

            </el-form-item>

            <el-form-item  prop="username">
                <el-input placeholder="请输入账号" v-model="formData.account" size="large" type="text">
                    <template #prefix >
                        <el-icon>
                            <i-ep-user/>
                        </el-icon>
                    </template>

                </el-input>

            </el-form-item>


            <el-form-item  prop="password">
                <el-input placeholder="请输入密码" v-model="formData.password" @keyup.enter="login()" size="large">

                    <template #prefix>
                    
                        <el-icon>
                            <i-ep-user/>
                        </el-icon>

                    </template>

                </el-input>

            </el-form-item>


            <el-form-item label="" style="padding-left:40px" >
                <el-button type="primary" @click="returnLogin()" size="large" style="width:40%">返回</el-button>
                <el-button type="primary" @click="register()" size="large" style="width:40%" >注册</el-button>
            </el-form-item>
           
        </el-form>

    </div>


</div>
  
</template>



<script setup> 

    import {ref,reactive} from 'vue'
    import { useRouter } from 'vue-router';

    import request from '@/utils/request.js'


   
    
    import { ElMessage } from 'element-plus';

    import {loginStore} from '/src/stores/constant.js'

    const formDataRef=ref();


    const loginS=loginStore()



    let formData = reactive({


        

        account:'',
        username:'',
        password:''

    })


    const rules={


        username: [
            {
                required:true,
                message:"请输入用户名"
            }
        ],

        account: [
            {
                required:true,
                message:"请输入账号"
            }
        ],
        password: [{
            required:true,
            message:"请输入密码"
        }]
    }



    const router =useRouter();



    const returnLogin=()=>{

        router.push({path:"/login"})


    }

    


    const register= async()=>{

        var form_obj=JSON.parse(JSON.stringify(formData))

        console.log(form_obj)
        console.log(form_obj.username)
        console.log(form_obj.password)

        try {

            var response = await request.post("/register",form_obj);
            console.log(response)

            if(response.data!==''){
                ElMessage({
                    message:'注册成功',
                    type:'success',
                })


                console.log(typeof response.data)

                loginS.userID=response.data
                loginS.loginState=true
                router.push({path:"/"})
                
                console.log(loginS.loginState)
                console.log(loginS.userID)
               
            }else{

                console.log(typeof response.data)

                ElMessage.error('注册失败,该账号已经存在！！！')
            }
            
        } catch (error) {

            console.error('There was an error making the login request:', error)
            
        }

    
    }

    

    


</script>


<style lang="scss" scoped>

.login-body{

    background: rgb(139, 171, 230);

    height: 100%;
    width: 100%;
    background-size: cover;
    position: absolute;
    left: 0;
    top: 0;


    .login-panel {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        padding: 25px;
        width: 26%;
        min-width: 460px;
        height: 30%;
        min-height: 340px;
        background: rgba(255, 255, 255, 0.6);
        border-radius: 5%;
        box-shadow: 2px 2px 10px #ddd;
        .login-title{
            font-size: 30px;
            text-align: center;
            margin-bottom: 20px;

        }
    }

}
</style>