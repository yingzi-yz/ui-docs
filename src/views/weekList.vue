<template>
  <div class="week-list-wrap">
    <yz-tip>weekList选择周</yz-tip>

    <yz-tip class="mb-0">weekList选择周使用方法</yz-tip>
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-week-select v-model="weekValue"></yz-week-select>
        </div>
      </template>
      <div class="show-code">
        <pre class="line-numbers">
          <code class="language-xml line-numbers" v-text="weekListCodeHtml"></code>
        </pre>
        <pre class="line-numbers">
          <code class="language-javascript line-numbers" v-text="weekListCodeJs"></code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card>

    <yz-tip class="mb-0">weekList属性</yz-tip> 
    <yz-collapse v-model="weekListAttribute">
      <yz-collapse-item title="v-model" name="1">
        <div><span class="attribute-title">用处：</span>用于双向绑定值</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>-</div>
      </yz-collapse-item>
    </yz-collapse>        
  </div>
</template>

<script>
import {commonMixins}  from '@/mixins/index.js'
export default {
  name: 'weekListWrap',
  mixins: [commonMixins],
  data() {
    return {
      weekValue: '',
      weekListAttribute: ['1'],
      weekListCodeHtml:
`
<template>
  <yz-week-select v-model="weekValue"></yz-week-select>
</template>

`,       
      weekListCodeJs:
`
export default {
  data() {
    return {
      weekValue: '',
    }
  }
}
`,              
    }
  }
}
</script>

<style lang="scss" scope>

</style>