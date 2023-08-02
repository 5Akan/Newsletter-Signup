<template>
     <div class="contain">
      <h1>Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to <b>ash@loremcompany.com</b>.
        Please open it and click the button inside to confirm your subscription
      </p>
      <button type="submit">Dismiss Message</button>
  </div>


</template>

<script>
export default {

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
  .contain{
    background-color: white;
    position: relative;
    display: inline-block;
    padding: 15px;
    margin-top: 7rem;
    width: 25rem;
    height: 20rem;
   
    justify-content: center;
    align-items: center;
    border-radius: 5%;
  }
  h1{
  margin-top: 5px;
  margin-bottom: 20px;
  font-size: 35px;
}
p{
  margin: 0 30px 0 30px;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  text-align: left;
  position: inherit;
}
button{
  height: 35px;
  width: 258px;
  margin-top: 16px;
  border-radius: 5px 5px;
  background-color: rgb(58, 142, 64);
  color: white;
  position: inherit;
  margin-right: 12px;
  cursor: pointer;
}
</style>