<template>
  <div class="login-wrap">
    <yz-tip>login登录</yz-tip> 

    <yz-tip class="mb-0">login登录</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-login></yz-login>
        </div>
      </template>
      <div class="code">

      </div>
      <template v-slot:footer></template>
    </yz-card>     
  </div>
</template>

<script>
export default {
  name: 'loginWrap'
}
</script>

<style>

</style>