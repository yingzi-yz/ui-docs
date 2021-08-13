<template>
  <div class="pagination-wrap">
    <yz-tip>pagination分页</yz-tip> 

    <yz-tip class="mb-0">pagination分页</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-pagination></yz-pagination>
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
  name: 'paginationWrap'
}
</script>

<style lang="scss" scoped>

</style>