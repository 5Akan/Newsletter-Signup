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
             <p><input type="text" v-model= "email" placeholder="email@company.com" :class= "inputError ?'inputError':false" @input= "nullForm"></p>
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
      router.push({name:'congrats'});
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
      error.value = "";
    }
    
  }
  
  return { email, verify, error,inputError,nullForm}
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap');

@media screen and (min-width: 720px) and (max-width:1440px){
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  
}
body{
  display: flex;
  flex-direction: column;
  background-color: rgb(72, 76, 131);
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
}

input.inputError{
    outline: 2px solid red;
    background: rgba(217, 33, 33, 0.264) ;
   
  }
  
}
 @media screen and (min-width: 425px) and (max-width:720px ){
   *{
    box-sizing:content-box;
    margin: 0;
    padding: 0;
  
}
   body{
  background-color: grey;
  justify-content: center;
  margin: 0;
  padding: 0;
  max-width: 740px;
  height: 1788px;
  position: relative;

}
.container{
      margin-top: -230px;
      margin-left: 50px;
      padding: 0px;
       background-color: white;
      width: 768px;
      height: 2020px;
      position: relative;
      border-radius: 0;
      display: inline-block;
      justify-content: center;
      align-items: center;
       /* white-space: nowrap;Doesnt allow divs to wrap when the page is reduced */
        /* display: flex; */
      flex-direction: column;
    }
.writeup{
    margin-top: 70px;
    padding: 25px;  
    width: 720px;
    height: 900px;
    justify-content: center;
    align-items: center;
    line-height: 30px;
    list-style: none; 
    /* margin: 10px; */
    text-align: left;
    /* width: 40vw;
    position: relative;
    font-size: 16px;
     text-align: left; 
    margin-left: 5px;
    margin-right: 5px;
    */
  }

  .list{
  margin-top: 50px;
  margin-bottom: 60px;
  font-size: 35px;
}
img.list{
  text-align: left;
  width: 35px;
  margin: 0;
}
.img1{
     margin-top: 230px;
     padding: 0;
    top: 0%;
    /* margin-left: 5px;
    margin-right: 5px; */
    display: inline-block;
    width: 770px;
    }
.img2{
      display: none;
    }
 p{
    font-size: 35px;
    text-align: left;
    
  }
h1{
  margin-top: 70px;
  margin-bottom: 90px;
  font-size: 70px;
}
form{
  position: relative;
  /* margin-right: 2px; */
  margin-top: 30px;
  padding: 5px;
  padding-top: 60px;
  justify-content: center;
  align-items: center;
  width: 720px;
  height: 400px;
  margin-bottom: 30px;
}
input{
   height: 90px;
  width: 700px;
  border: none;
  border-radius: 5px 5px;
  position: inherit;
  box-shadow: 1px 1px 1px 0 rgba(154, 160, 185, 0.05),
    1px 1px 15px rgba(0 ,0, 0, 0.3);
    cursor: pointer;
    padding-left: 25px;
}
input::placeholder{
  font-size: 30px;
}

.btn{
  height: 90px;
  width: 700px;
  margin-top: 16px;
  border-radius: 5px 5px;
  background-color: hsl(234, 29%, 20%);
  color: white;
  position: relative;
  margin-right: 12px;
  cursor: pointer;
  border: none;
  font-size: 30px;
  font-weight: 400;
}

label{
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  font-weight: 700;
  margin: 10px;
}
label .error{
  color: red;
  font-size: 30px;
  font-weight: 300;
}
input.inputError{
    outline: 2px solid red;
    background: rgba(217, 33, 33, 0.264) ;
   
  }

 }
  /* For Phone */
  @media screen and (min-width: 375px) and (max-width:425px ){
*{
    box-sizing:content-box;
    margin: 0;
    padding: 0;
  
}
   body{
  background-color: white;
  justify-content: center;
  margin: 0;
  padding: 0;
  max-width: 400px;
   height: 900px;
   position: relative;

}
.container{
      margin-left: 50px;
      padding: 0px;
       background-color: white;
      width: 430px;
      height: 950px;
      position: relative;
      border-radius: 0;
      display: inline-block;
      justify-content: center;
      align-items: center;
       /* white-space: nowrap;Doesnt allow divs to wrap when the page is reduced */
        /* display: flex; */
        flex-direction: column;
    }
.writeup{
     padding: 25px;  
    width: 375px;
    height: 400px;
    justify-content: center;
    align-items: center;
    line-height: 30px;
    list-style: none; 
    /* margin: 10px; */
    text-align: left;
    /* width: 40vw;
    position: relative;
    font-size: 16px;
     text-align: left; 
    margin-left: 5px;
    margin-right: 5px;
    */
  }
.img1{
     margin-top: 160px;
     padding: 0;
    top: 0%;
    /* margin-left: 5px;
    margin-right: 5px; */
    display: inline-block;
    width: 425px;
    }
.img2{
      display: none;
    }
 p{
    font-size: 16px;
    text-align: left;
    
  }
h1{
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 35px;
}
form{
  position: relative;
  /* margin-right: 2px; */
  margin-top: 0px;
  padding: 2px;
  justify-content: center;
  align-items: center;
}
input{
  height: 50px;
  width: 380px;
  border: none;
  border-radius: 5px 5px;
  position: inherit;
  box-shadow: 1px 1px 1px 0 rgba(154, 160, 185, 0.05),
    1px 1px 15px rgba(0 ,0, 0, 0.3);
    cursor: pointer;
    padding-left: 25px;
}

.btn{
  height: 50px;
  width: 380px;
  margin-top: 16px;
  border-radius: 5px 5px;
  background-color: hsl(234, 29%, 20%);
  color: white;
  position: relative;
  margin-right: 12px;
  cursor: pointer;
  border: none;
}
label{
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 800;
}
label .error{
  color: red;
    font-size: 12px;
    font-weight: 100;
}
input.inputError{
    outline: 2px solid red;
    background: rgba(217, 33, 33, 0.264) ;
   
  }
  }
@media screen and (min-width: 0px) and (max-width:375px ){
*{
    box-sizing:content-box;
    margin: 0;
    padding: 0;
  
}
   body{
  background-color: white;
  justify-content: center;
  margin: 0;
  padding: 0;
  max-width: 375px;
   height: 900px;
   position: relative;

}
.container{
      margin: 0;
      padding: 0px;
       background-color: white;
      width: 380px;
      height: 950px;
      position: relative;
      border-radius: 0;
      display: inline-block;
      justify-content: center;
      align-items: center;
       /* white-space: nowrap;Doesnt allow divs to wrap when the page is reduced */
        /* display: flex; */
      flex-direction: column;
    }
.writeup{
     padding: 25px;  
    width: 375px;
    height: 400px;
    justify-content: center;
    align-items: center;
    line-height: 30px;
    list-style: none; 
    /* margin: 10px; */
    text-align: left;
    /* width: 40vw;
    position: relative;
    font-size: 16px;
     text-align: left; 
    margin-left: 5px;
    margin-right: 5px;
    */
  }
.img1{
     margin-top: 160px;
     padding: 0;
    top: 0%;
    /* margin-left: 5px;
    margin-right: 5px; */
    display: inline-block;
    width: 380px;
    }
.img2{
      display: none;
    }
 p{
    font-size: 16px;
    text-align: left;
    
  }
h1{
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 35px;
}
form{
  position: relative;
  /* margin-right: 2px; */
  margin-top: 0px;
  padding: 2px;
  justify-content: center;
  align-items: center;
}
input{
  height: 50px;
  width: 325px;
  border: none;
  border-radius: 5px 5px;
  position: inherit;
  box-shadow: 1px 1px 1px 0 rgba(154, 160, 185, 0.05),
    1px 1px 15px rgba(0 ,0, 0, 0.3);
    cursor: pointer;
    padding-left: 25px;
}

.btn{
  height: 50px;
  width: 325px;
  margin-top: 16px;
  border-radius: 5px 5px;
  background-color: hsl(234, 29%, 20%);
  color: white;
  position: relative;
  margin-right: 12px;
  cursor: pointer;
  border: none;
}
label{
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 800;
}
label .error{
  color: red;
    font-size: 12px;
    font-weight: 100;
}
input.inputError{
    outline: 2px solid red;
    background: rgba(217, 33, 33, 0.264) ;
   
  }
  }

</style>
