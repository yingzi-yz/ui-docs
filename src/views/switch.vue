<template>
  <div class="switch-wrap">
    <yz-tip>switch</yz-tip> 

    <yz-tip class="mb-0">switch</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-switch></yz-switch>
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
  name: 'switchWrap'
}
</script>

<style lang="scss" scoped>

</style>