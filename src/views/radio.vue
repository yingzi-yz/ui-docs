<template>
  <div class="radio-wrap">
    <yz-tip>radio单选框</yz-tip> 

    <yz-tip class="mb-0">radio单选框</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-radio v-model="radioData"></yz-radio>
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
  name: 'radioWrap',
  data() {
    return {
      radioData: ''
    }
  }
}
</script>

<style lang="scss" scope>

</style>