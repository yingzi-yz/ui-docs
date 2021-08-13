<template>
  <div class="preview-wrap">
    <yz-tip>preview</yz-tip> 

    <yz-tip class="mb-0">preview</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-preview></yz-preview>
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
  name: 'previewWrap'
}
</script>

<style lang="scss" scoped>

</style>