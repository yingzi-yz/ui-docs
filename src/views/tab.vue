<template>
  <div class="tab-wrap">
    <yz-tip>tab</yz-tip> 

    <yz-tip class="mb-0">tab</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-tab></yz-tab>
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
  name: 'tabWrap'
}
</script>

<style lang="scss" scoped>

</style>