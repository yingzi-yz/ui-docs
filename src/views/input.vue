<template>
  <div class="input-wrap">
    <yz-tip>input输入框</yz-tip>

    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-input></yz-input>
        </div>
      </template>
      <div>代码片段</div>
      <template v-slot:footer></template>
    </yz-card>
  </div>
</template>

<script>
export default {
  name: 'inputWrap'
}
</script>

<style lang="scss" scope>

</style>