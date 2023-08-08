<template>
  <div class="container">
      <img class="img1" src="../assets/illustration-sign-up-mobile.svg">
    <div class="writeup">
       <h1>Stay updated !</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <div class="list">
          <li> <img class="list" src= "../assets/icon-list.svg">
          Product discovery and building what matters</li>
          <li><img class="list" src= "../assets/icon-list.svg">
          Measuring to ensure updates are a success</li>
          <li><img class="list" src= "../assets/icon-list.svg">
          And much more!</li>
        </div>

        <form @submit.prevent = "verify" >
          <label>
            Email Address
             <div v-if="error">
              <p class="error">{{error}}</p>
            </div>
          </label>
             <input class="input" type="text" v-model= "email" placeholder="email@company.com" :class= "inputError" @input= "nullForm" @blur= "outfocus">
            <div v-if= "verify"> 
              <button :disabled = "!email.length" class="btn" >Subscibe to monthly newsletter</button>
            </div> 
        </form>
    </div>
      <img class="img2" src= "../assets/illustration-sign-up-desktop.svg" alt="" srcset="">
     
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
  const inputError = ref(false);

// const checkinputValidity = () => {
//   inputError = !verify();
// }

  const verify = () => {
    if (regx.value.test(email.value)){
      // console.log("Email confirmed");
      router.push({name:'congrats', params:{value:email.value}});
      inputError.value = false;
     
    }else{     
      //  console.log("Email wrong");
       error.value = "Valid email required"
       console.log(error.value);
     inputError.value = true;
     
    }
  }

  const nullForm = () => {
    if(email.value.length === 0){
      inputError.value = false;
      error.value = "Input Email";
    }
  }
  const outfocus = () =>{
     if(email.value.length === 0){
      inputError.value = false;
      error.value = "";
    }
  }
  
  return { email, verify, error,inputError,nullForm, outfocus}
  }
}
</script>
<style scoped>
 @media screen and (max-width:722px ){
   *{
    box-sizing: border-box;
    margin: 0 ;
    padding: 0;
    align-items: center center;
    justify-content: center center;
  
}
html, body{
  display: block;
  position: relative;
  background-color: rgb(72, 76, 131);
  align-items: center center;
  justify-content: center;
  margin: 0 ;
  padding: 0;
  height:100%;
  width: 100%;
}
  .container{
    margin: 0;
    padding: 0;
    background-color: white;
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;
    text-align: left;
  
  }
  .writeup{
    margin: 0;
    height: 75vh;
    width: 100%;
    padding: 30px;
    position: relative;
    font-size: 16px;
     text-align: left; 
    line-height: 20px;
    list-style: none;
  }
  p{
    font-size: 16px;
    text-align: left;
    /* padding:5vh 00px 5vh 0px ; */
    /*t l b r  */
  }
  .img1{
    display: flex;
    top: 0%;
    padding: 0;
    position: relative;
    margin: 0;
    height: 100%;
    width: 100%;
  }
  .img2{
    /* width: 295px; */
    /* height: 100%;
    margin-left: 5px;
    margin-right: 5px;
    position: relative; */
    display: none;
}
img.list{
  text-align: left;
  width: 15px;
  margin: 0;
}
form{
  position: relative;
  padding: 4vh 0vh 2vh 0vh;
  /*t l b r  */
  justify-content: center;
  align-items: center;
  height: 20rem;
}
h1{
  margin-top: 50px;
  margin-bottom: 20px;
  font-size: 35px;
}
.list{
  line-height: 1.5rem;
}
form .input{
  height: 45px;
  width: 100%;
  border: none;
  border-radius: 5px 5px;
  position: relative;
  box-shadow: 1px 1px 1px 0 rgba(154, 160, 185, 0.05),
    1px 1px 15px rgba(0 ,0, 0, 0.3);
  cursor: pointer;
  margin-top:0;
}
form .btn{
  height: 45px;
  width: 100%;
  margin-top: 16px;
  border-radius: 5px 5px;
  background-color: hsl(4, 100%, 67%);
  color: white;
  position: relative;
  margin-right: 12px;
  cursor: pointer;
  border: none;
}
.btn:disabled{
  background-color:  hsl(234, 29%, 20%);
  color: #fff;
  border: none;
}

label{
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  
}

label .error{
  color: red;
  font-size: 12px;
}

input.inputError{
    outline: 2px solid red;
    background: rgba(217, 33, 33, 0.264) ;
   
  }

 }
</style>
<style >
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap');

@media screen and (min-width: 723px) and (max-width:1440px){
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    align-items:  center;
    justify-content:  center;
  
}
html, body{
  display: flex;
  position: inherit;
  background-color: rgb(72, 76, 131);
  align-items: center center;
  justify-content: center;
  margin: 0;
  height: 100%;
  padding: 20px;
 
}
  .container{
    background-color: white;
    position: relative;
    display: inline-flex;
    padding: 15px;
    width: 40rem;
    height: 30rem;

    text-align: left;
    border-radius: 5%;
  }
  .writeup{
    height: 100%;
    width: 40vw;
    position: relative;
    font-size: 16px;
     text-align: left; 
    line-height: 20px;
    margin-left: 5px;
    margin-right: 5px;
    list-style: none;
  }
  p{
    font-size: 16px;
    text-align: left;
  }
  .img1{
    display: none;
  }
  .img2{
    /* width: 295px; */
    height: 100%;
    margin-left: 5px;
    margin-right: 5px;
    position: relative;
}
img.list{
  text-align: left;
  width: 15px;
  margin: 0;
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
  margin-top: 50px;
  margin-bottom: 20px;
  font-size: 35px;
}
.list{
  margin-top: 20px;
}
input{
  height: 35px;
  width: 270px;
  border: none;
  border-radius: 5px 5px;
  position: inherit;
  box-shadow: 1px 1px 1px 0 rgba(154, 160, 185, 0.05),
    1px 1px 15px rgba(0 ,0, 0, 0.3);
    cursor: pointer;
    padding-left: 12px;
}
.btn{
  height: 35px;
  width: 270px;
  margin-top: 16px;
  border-radius: 5px 5px;
  background-color: hsl(234, 29%, 20%);
  color: white;
  position: inherit;
  margin-right: 12px;
  cursor: pointer;
  border: none;
}
.btn:disabled{
  background-color:  hsl(234, 29%, 20%);
  color: #fff;
  border: none;
}
.btn:hover{
  background-color: hsl(4, 100%, 67%);
  border: none;
}
label{
  display: flex;
  justify-content: space-between;
}

label .error{
  color: red;
  font-size: 12px;
}

input.inputError{
    outline: 2px solid red;
    background: rgba(217, 33, 33, 0.264) ;
   
  }
  
}


</style>
