<template>
  <div class="update-wrap">
    <yz-tip>更新日期</yz-tip>
    <yz-collapse v-model="versionData">
      <yz-collapse-item title="0.2.1版本" name="4">
        <div>发布时间：2022-03-01</div>
        <div>修改inputNum组件双向绑定值</div>
      </yz-collapse-item>      
      <yz-collapse-item title="0.2.0版本" name="3">
        <div>发布时间：2022-02-14</div>
        <div>增加若干组件</div>
      </yz-collapse-item>      
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
      versionData: ['4']
    }
  }
}
</script>

<style>

</style>