<template>
  <div class="date-picker-wrap">
    <yz-tip>date-picker选择器</yz-tip> 

    <yz-tip class="mb-0">date-picker选择器使用方法</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-date-picker></yz-date-picker>
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
  name: 'datePickerWrap'
}
</script>

<style lang="scss" scoped>

</style>