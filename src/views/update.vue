<template>
  <div class="update-wrap">
    <yz-tip>更新日期</yz-tip>
    <yz-collapse v-model="versionData">
      <yz-collapse-item title="0.16版本" name="2">
        发布时间：xxx
      </yz-collapse-item>      
      <yz-collapse-item title="0.15版本" name="1">
        发布时间：xxx
      </yz-collapse-item>
    </yz-collapse>
  </div>
</template>

<script>
export default {
  name: 'updateWrap',
  data() {
    return {
      versionData: ['1']
    }
  }
}
</script>

<style>

</style>