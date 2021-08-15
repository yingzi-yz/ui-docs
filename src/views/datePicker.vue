<template>
  <div class="date-picker-wrap">
    <yz-tip>date-picker日期选择器</yz-tip> 

    <yz-tip class="mb-0">date-picker日期选择器使用方法</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-date-picker v-model="datePickerData"></yz-date-picker>
        </div>
      </template>
      <div class="show-code">
        <pre>
          <code>
            <div v-text="datePickerCode"></div>
          </code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card> 

    <yz-tip class="mb-0">date-picker属性</yz-tip> 
    <yz-collapse v-model="datePickerAttribute">
      <yz-collapse-item title="v-model" name="1">
        <div><span class="attribute-title">用处：</span>用于双向绑定date-picker的值</div>
        <div><span class="attribute-title">类型：</span>date</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>new Date() </div>
      </yz-collapse-item>
    </yz-collapse>      
  </div>
</template>

<script>
export default {
  name: 'datePickerWrap',
  data() {
    return {
      datePickerData: new Date(),
      datePickerAttribute: [],
      datePickerCode:
`
<template>
  <yz-date-picker v-model="datePickerData"></yz-date-picker>
</template>

export default {
  data() {
    return {
      datePickerData: new Date(),
    }
  }
}
` , 
    }
  }
}
</script>

<style lang="scss" scoped>

</style>