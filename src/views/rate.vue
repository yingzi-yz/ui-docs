<template>
  <div class="rate-wrap">
    <yz-tip>rate评分</yz-tip> 

    <yz-tip class="mb-0">rate评分使用方法</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-rate :score.sync="rateScore" showText/>
        </div>
      </template>
      <div class="show-code">       
        <pre class="line-numbers">
          <code class="language-xml line-numbers" v-text="rateCodeOneHtml"></code>
        </pre>
        <pre class="line-numbers">
          <code class="language-javascript line-numbers" v-text="rateCodeOneJs"></code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card>    

    <yz-tip class="mb-0">rate评分只读使用方法</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-rate :score="3.6" :disabled="true" showText/>
        </div>
      </template>
      <div class="show-code">       
        <pre class="line-numbers">
          <code class="language-xml line-numbers" v-text="rateCodeTwo"></code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card>     

    <yz-tip class="mb-0">rate属性</yz-tip> 
    <yz-collapse v-model="rateAttribute">
      <yz-collapse-item title="score" name="1">
        <div><span class="attribute-title">用处：</span>双向绑定评分分数</div>
        <div><span class="attribute-title">类型：</span>number</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>0</div>
      </yz-collapse-item>     
      <yz-collapse-item title="disabled" name="2">
        <div><span class="attribute-title">用处：</span>是否可改变分数</div>
        <div><span class="attribute-title">类型：</span>boolean</div>
        <div><span class="attribute-title">可选值：</span>true / false</div>
        <div><span class="attribute-title">默认值：</span>false</div>
      </yz-collapse-item>     
      <yz-collapse-item title="showText" name="3">
        <div><span class="attribute-title">用处：</span>是否显示文本</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>true / false</div>
        <div><span class="attribute-title">默认值：</span>false </div>
      </yz-collapse-item>         
    </yz-collapse>                 
  </div>
</template>

<script>
import {commonMixins}  from '@/mixins/index.js'
export default {
  name: 'rateWrap',
  mixins: [commonMixins],
  data() {
    return {
      rateScore: 5,
      rateAttribute: ['1', '2', '3'],
      rateCodeOneHtml:
`
<template>
  <yz-rate :score.sync="rateScore" showText/>
</template>
`,
      rateCodeOneJs:
`
export default {
  data() {
    return {
      rateScore: 5,
    }
  }
}
`,
      rateCodeTwo:
`
<template>
  <yz-rate :score="3.6" :disabled="true" showText/>
</template>
`,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>