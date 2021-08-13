<template>
  <div class="checkbox-wrap">
    <yz-tip>checkbox</yz-tip> 

    <yz-tip class="mb-0">checkbox</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-checkbox></yz-checkbox>
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
  name: 'checkboxWrap'
}
</script>

<style lang="scss" scoped>

</style>