<template>
  <div class="signup">
    <form @submit.prevent = "verify">
       <label>Email Address</label>
      <p><input type="text" v-model= "email" placeholder="email@company.com"></p>
       <button :disabled = "!email.length">Submit</button>
    </form>
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
