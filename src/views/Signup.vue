<template>

  <div class="container">
    <div class="writeup">
       <h1>Stay updated !</h1>
        <p>Join 6000+ product managers receiving monthly updates on:</p>
        <div class="list">
          <li>Product discovery and building what matters</li>
          <li>Measuring to ensure updates are a success</li>
          <li>And much more!</li>
            
        </div>

        <form @submit.prevent = "verify">
          <label>
            Email Address
             <div v-if="error">
              <p class="error">{{error}}</p>
            </div>
          </label>
          <p><input type="text" v-model= "email" placeholder="email@company.com" ></p>
            <div v-if= "verify">
              <button :disabled = "!email.length" class="btn" :class= "{active:isActive}" @click= "isActive = !isActive">Submit</button>
            </div>
           
            
        </form>
    </div>
      <img src= "../assets/signpic.jpg" alt="" srcset="">
     
       
  </div>
 
</template>

<script>
import { ref } from 'vue'
import {useRouter} from 'vue-router'
// @ is an alias to /src
export default {

  name: 'Signup',
  setup(){
  const email = ref("");
  const regx = ref(/^([a-zA-Z0-9\._])+@([a-zA-Z0-9])+\.([a-z]+)(.[a-z]+)?$/);
  const router = useRouter();
  const error = ref();
  const isActive = ref(false);

  const verify = () => {
    if (regx.value.test(email.value)){
      // console.log("Email confirmed");
      router.push({name:'congrats'});
    
    }else{     
      //  console.log("Email wrong");
       error.value = "Valid email required"
       console.log(error.value)
     
    }
  }

  
  return { email, verify, error, isActive}
  }
}
</script>

<style>

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  
}
body{
  display: flex;
  flex-direction: column;
  background-color: rgb(79, 124, 82);
  align-items: center;
  justify-content: center;
  margin: 0;
}
  .container{
    background-color: white;
    position: relative;
    display: inline-flex;
    padding: 15px;
    margin-top: 7rem;
    width: 40rem;
    height: 30rem;
    justify-content: center;
    align-items: center;
    text-align: left;
    border-radius: 5%;
  }
  .writeup{
    height: 100%;
    width: 40vw;
    position: relative;
    font-size: 12px;
    line-height: 20px;
    margin-left: 5px;
    margin-right: 5px;
  }
  img{
    width: 295px;
    height: 100%;
    margin-left: 5px;
    margin-right: 5px;
    position: relative;
}
form{
  position: relative;
  margin-right: 2px;
  margin-top: 40px;
  padding: 2px;
  justify-content: center;
  align-items: center;
}
h1{
  margin-top: 70px;
  margin-bottom: 20px;
  font-size: 35px;
}
.list{
  margin-top: 20px;
}
input{
  height: 35px;
  width: 258px;
  border: none;
  border-radius: 5px 5px;
  position: inherit;
  box-shadow: 1px 1px 1px 0 rgba(154, 160, 185, 0.05),
    1px 1px 15px rgba(0 ,0, 0, 0.3);
}
.btn{
  height: 35px;
  width: 258px;
  margin-top: 16px;
  border-radius: 5px 5px;
  background-color: rgb(58, 142, 64);
  color: white;
  position: inherit;
  margin-right: 12px;
}
.btn:disabled{
  background-color: rgb(95, 152, 111);
  color: #fff
}
label{
  display: flex;
  justify-content: space-between;
}

label .error{
  color: red;
}

a .router-link-active router-link-exact-active{


}
</style>
