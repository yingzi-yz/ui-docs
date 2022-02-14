<template>
  <div class="input-num-wrap">
    <yz-tip>inputNum增减器</yz-tip>

    <yz-tip class="mb-0">inputNum增减器使用方法</yz-tip>
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-input-num v-model="inputNumData" :steps="2"></yz-input-num>
        </div>
      </template>
      <div class="show-code">
        <pre class="line-numbers">
          <code class="language-xml line-numbers" v-text="inputNumCodeHtml"></code>
        </pre>
        <pre class="line-numbers">
          <code class="language-javascript line-numbers" v-text="inputNumCodeJs"></code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card>

    <yz-tip class="mb-0">inputNum属性</yz-tip> 
    <yz-collapse v-model="inputNumAttribute">
      <yz-collapse-item title="v-model" name="1">
        <div><span class="attribute-title">用处：</span>用于双向绑定值</div>
        <div><span class="attribute-title">类型：</span>number</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>1</div>
      </yz-collapse-item>
      <yz-collapse-item title="steps" name="2">
        <div><span class="attribute-title">用处：</span>用于控制每次增加减少步数</div>
        <div><span class="attribute-title">类型：</span>number</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>1</div>
      </yz-collapse-item>
    </yz-collapse>        
  </div>
</template>

<script>
import {commonMixins}  from '@/mixins/index.js'
export default {
  name: 'inputNumWrap',
  mixins: [commonMixins],
  data() {
    return {
      inputNumData: 1,
      inputNumAttribute: ['1', '2'],
      inputNumCodeHtml:
`
<template>
  <yz-input-num v-model="inputNumData" :steps="2"></yz-input-num>
</template>

`,       
      inputNumCodeJs:
`
export default {
  data() {
    return {
      inputNumData: 1,
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