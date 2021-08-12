<template>
  <div class="tipWrap">
    <yz-tip>tip提示</yz-tip>

    <yz-tip class="mb-0">tip自定义颜色</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-tip>123</yz-tip>
        </div>
      </template>
      <div>代码片段</div>
      <template v-slot:footer>
      </template>
    </yz-card> 
  </div>
</template>

<script>
export default {
  name: 'tipWrap'
}
</script>

<style lang="scss" scoped>

</style>