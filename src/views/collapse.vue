<template>
  <div class="collapse-wrap">
    <yz-tip>collapse</yz-tip> 

    <yz-tip class="mb-0">collapse</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-collapse></yz-collapse>
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
  name: 'collapseWrap'
}
</script>

<style lang="scss" scoped>

</style>