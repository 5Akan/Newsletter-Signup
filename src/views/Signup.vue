<template>
  <div class="container">
    <div class="writeup">
       <h1>Stay updated !</h1>
        <p>Join 6000+ product managers receiving monthly updates on:</p>
        <div class="list">
          <li>Product discovery and building what matters</li>
          <li>Measuring to ensure updates are a success</li>
          <li>And much more!</li>
         
            <li>
               <router-link to="/">
              iajdegvioj
             </router-link>
            </li>
         
          
        </div>
        <form @submit.prevent = "verify">
          <label>Email Address</label>
          <p><input type="text" v-model= "email" placeholder="email@company.com"></p>
           <router-link :to = "{name: 'Congrats'}">
            <button :disabled = "!email.length" class="btn">Submit</button>
          </router-link> 
          
        </form>
    </div>
      <img src= "../assets/signpic.jpg" alt="" srcset="">
  </div>
</template>

<script>
import { ref } from 'vue'
// @ is an alias to /src
export default {
  name: 'Signup',
  setup(){
  const email = ref("");
  const regx = ref(/^([a-zA-Z0-9\._])+@([a-zA-Z0-9])+\.([a-z]+)(.[a-z]+)?$/);
  const verify = () => {
    if (regx.value.test(email.value)){
      console.log("Email confirmed");
    }else{     
       console.log("Email wrong");
    }
  }
  // const verify = computed(()=>{
  //   return regx.value.test(email.value) ? "Email is correct":"Email is wrong"
  //   })
  return { email, verify}
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
  }
  img{
    width: 295px;
    height: 100%;
    margin-left: 5px;
    margin-right: 5px;
    position: relative;
}
form{
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
  width: 290px;
  border: none;
  border-radius: 5px 5px;
  position: relative;
  box-shadow: 1px 1px 1px 0 rgba(154, 160, 185, 0.05),
    1px 1px 15px rgba(0 ,0, 0, 0.3);
}
.btn{
  height: 35px;
  min-width: 290px;
  margin-top: 16px;
  border-radius: 5px 5px;
 background-color: rgb(79, 124, 82);
 color: white;
  position: relative;
  margin-right: 12px;
}
button :disabled{
  background-color: red;
}
</style>
