<template>
  <div class="edit-wrap">
    <yz-tip>edit编辑框</yz-tip> 

    <yz-tip class="mb-0">edit编辑框</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-edit></yz-edit>
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
  name: 'editWrap'
}
</script>

<style lang="scss" scoped>

</style>