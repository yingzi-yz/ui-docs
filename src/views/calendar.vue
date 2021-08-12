<template>
  <div class="calendar-wrap">
    <yz-tip>calendar日历</yz-tip> 

    <yz-tip class="mb-0">calendar日历使用方法</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-calendar></yz-calendar>
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
  name: 'calendarWrap'
}
</script>

<style lang="scss" scoped>

</style>