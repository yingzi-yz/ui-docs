<template>
  <div class="notice-wrap">
    <yz-tip>notice</yz-tip> 

    <yz-tip class="mb-0">notice</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-button type="info" @click="showInfoMessage">info</yz-button>
          <yz-button type="success" @click="showSuccessMessage">success</yz-button>
          <yz-button type="warning" @click="showWarningMessage">warning</yz-button>
          <yz-button type="danger" @click="showErrorMessage">error</yz-button>
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
  name: 'noticeWrap'
}
</script>

<style lang="scss" scoped>

</style>