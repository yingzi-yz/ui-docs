<template>
  <div class="drawer-wrap">
    <yz-tip>drawer</yz-tip> 

    <yz-tip class="mb-0">drawer</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-drawer></yz-drawer>
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
  name: 'drawerWrap'
}
</script>

<style lang="scss" scoped>

</style>