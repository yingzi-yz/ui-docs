<template>
  <div class="form-wrap">
    <yz-tip>form</yz-tip> 

    <yz-tip class="mb-0">form</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-form>
            <yz-form-item></yz-form-item>
            <yz-form-item></yz-form-item>
          </yz-form>
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
  name: 'formWrap'
}
</script>

<style lang="scss" scoped>

</style>