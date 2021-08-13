<template>
  <div class="card-wrap">
    <yz-tip>card</yz-tip> 

    <yz-tip class="mb-0">card</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-card></yz-card>
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
  name: 'cardWrap'
}
</script>

<style lang="scss" scoped>

</style>