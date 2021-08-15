<template>
  <div class="update-wrap">
    <yz-tip>更新日期</yz-tip>
    <yz-collapse v-model="versionData">
      <yz-collapse-item title="0.16版本" name="2">
        <div>发布时间：2021-08-14</div>
        <div>修改了部分组件样式</div>
      </yz-collapse-item>      
      <yz-collapse-item title="0.15版本" name="1">
        <div>发布时间：2021-08-09</div>
        <div>更新了若干组件</div>
      </yz-collapse-item>
    </yz-collapse>
  </div>
</template>

<script>
export default {
  name: 'updateWrap',
  data() {
    return {
      versionData: ['2']
    }
  }
}
</script>

<style>

</style>