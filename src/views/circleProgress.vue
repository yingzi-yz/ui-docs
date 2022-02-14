<template>
  <div class="circle-progress-wrap">
    <yz-tip>circleProgress圆形进度条</yz-tip>

    <yz-tip class="mb-0">circleProgress圆形进度条使用方法</yz-tip>
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-circle-progress v-model="circleProgressData"></yz-circle-progress>
        </div>
      </template>
      <div class="show-code">
        <pre class="line-numbers">
          <code class="language-xml line-numbers" v-text="circleProgressCodeHtml"></code>
        </pre>
        <pre class="line-numbers">
          <code class="language-javascript line-numbers" v-text="circleProgressCodeJs"></code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card>

    <yz-tip class="mb-0">circleProgress属性</yz-tip> 
    <yz-collapse v-model="circleProgressAttribute">
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
  name: 'circleProgressWrap',
  mixins: [commonMixins],
  data() {
    return {
      circleProgressData: 50,
      circleProgressAttribute: ['1', '2'],
      circleProgressCodeHtml:
`
<template>
  <yz-circle-progress v-model="circleProgressData"></yz-circle-progress>
</template>

`,       
      circleProgressCodeJs:
`
export default {
  data() {
    return {
      circleProgressData: 50,
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