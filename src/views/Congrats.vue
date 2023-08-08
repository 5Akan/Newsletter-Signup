<template>

   <div class="contain">
       <img id ="img" src="../assets/icon-success.svg" alt="" srcset="">
      <h1 class="h1">Thanks for subscribing!</h1>
      <p class="p">
        A confirmation email has been sent to <b>{{ $route.params.value}}</b>.
        Please open it and click the button inside to confirm your subscription
      </p>
      <router-link to="/">
        <button type="submit">Dismiss Message</button>
      </router-link>
      
  </div>

</template>



<style scoped>
@media screen and (min-width: 723px) and (max-width:1440px){
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
html,body{
  display: flex;
  flex-direction: column;
  align-items: center center;
  justify-content: center center;
  margin: 0;
  height: 100%;
  background-color:rgb(72, 76, 131);
}
  .contain{
    background-color: white;
    position: relative;
    display: inline-block;
    padding: 24px 40px 60px 60px;
    width: 25rem;
    height: 22rem;
    justify-content: center;
    align-items: center;
    text-align: left;
    border-radius: 5%;
  }
  .h1{
  margin-top: 5px;
  margin-bottom: 20px;
  font-size: 35px;
}
.p{
  margin: 0;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  text-align: left;
  position: relative;
}
button{
  height: 35px;
  width: 258px;
  margin-top: 16px;
  border-radius: 5px 5px;
  background: hsl(234, 29%, 20%);
  color: white;
  position: relative;
  cursor: pointer;
  border: none;

}
button:hover{
  background-color: hsl(4, 100%, 67%);
}
#img{
  width: 45px;
  height: 45px;
  padding: 0;
}

}

@media screen and (max-width:722px){
   *{
    box-sizing: border-box;
    margin: 0 ;
    padding: 0;
    align-items: center center;
    justify-content: center center;
  
}
   
   body{
   background: white;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0 ;
  width: 375px;
   height: 600px;
   position: relative;

}
.contain{
  background-color:white ;
      margin: 0;
      padding: 90px 30px 0px 30px;
      width: 375px;
      height: 600px;
      position: relative;
      border-radius: 0;
      display: inline-block;
      justify-content: center;
      align-items: left;
      text-align: left;
        flex-direction: column;
    }

 button{
  height: 50px;
  width: 100%;
  margin-top: 8.5rem;
  border-radius: 5px 5px;
  background: hsl(234, 29%, 20%);
  color: white;
  position: relative;
  cursor: pointer;
  border: none;
  bottom: -30%;

}   
#img{
  height: 60px;
  margin-right: 15rem;
  margin-bottom: 2rem;
  display: flex;
}
.p{
  line-height: 20px;
  font-size: 14px;
}
 }

</style>