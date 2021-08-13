<template>
  <div class="dialog-wrap">
    <yz-tip>dialog</yz-tip> 

    <yz-tip class="mb-0">dialog</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-dialog></yz-dialog>
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
  name: 'dialogWrap'
}
</script>

<style lang="scss" scoped>

</style>