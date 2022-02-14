<template>
  <div class="progress-bar-wrap">
    <yz-tip>progressBar进度条</yz-tip>

    <yz-tip class="mb-0">progressBar进度条使用方法</yz-tip>
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-progress-bar v-model="progressBarData"></yz-progress-bar>
        </div>
      </template>
      <div class="show-code">
        <pre class="line-numbers">
          <code class="language-xml line-numbers" v-text="progressBarCodeHtml"></code>
        </pre>
        <pre class="line-numbers">
          <code class="language-javascript line-numbers" v-text="progressBarCodeJs"></code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card>

    <yz-tip class="mb-0">progressBar属性</yz-tip> 
    <yz-collapse v-model="progressBarAttribute">
      <yz-collapse-item title="v-model" name="1">
        <div><span class="attribute-title">用处：</span>用于双向绑定值</div>
        <div><span class="attribute-title">类型：</span>number</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>50</div>
      </yz-collapse-item>
      <yz-collapse-item title="dynamic" name="2">
        <div><span class="attribute-title">用处：</span>用于控制改变进度条</div>
        <div><span class="attribute-title">类型：</span>boolean</div>
        <div><span class="attribute-title">可选值：</span>true / false</div>
        <div><span class="attribute-title">默认值：</span>false</div>
      </yz-collapse-item>
    </yz-collapse>        
  </div>
</template>

<script>
import {commonMixins}  from '@/mixins/index.js'
export default {
  name: 'progressBarWrap',
  mixins: [commonMixins],
  data() {
    return {
      progressBarData: 30,
      progressBarAttribute: ['1', '2'],
      progressBarCodeHtml:
`
<template>
  <yz-progress-bar v-model="progressBarData"></yz-progress-bar>
</template>

`,       
      progressBarCodeJs:
`
export default {
  data() {
    return {
      progressBarData: 30,
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