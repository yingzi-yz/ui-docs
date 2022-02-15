<template>
  <div class="color-board-wrap">
    <yz-tip>colorBoard颜色编辑器</yz-tip>

    <yz-tip class="mb-0">colorBoard颜色编辑器使用方法</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
           <yz-color-board :color.sync="color"></yz-color-board>
        </div>
      </template>
      <div class="show-code">      
        <pre class="line-numbers">
          <code class="language-xml line-numbers" v-text="colorBoardCodeHtml"></code>
        </pre>
        <pre class="line-numbers">
          <code class="language-javascript line-numbers" v-text="colorBoardCodeJs"></code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card> 

    <yz-tip class="mb-0">colorBoard属性</yz-tip> 
    <yz-collapse v-model="colorBoardAttribute">
      <yz-collapse-item title="color" name="1">
        <div><span class="attribute-title">用处：</span>默认颜色 (16进制)</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>#FF0000</div>
      </yz-collapse-item>
    </yz-collapse>   
  </div>
</template>

<script>
import {commonMixins}  from '@/mixins/index.js'
export default {
  name: 'colorBoardWrap',
  mixins: [commonMixins],
  data() {
    return {
      color: '#FF0000',
      colorBoardAttribute: ['1'],
      colorBoardCodeHtml:
`
<template>
  <yz-color-board :color.sync="color"></yz-color-board>
</template>
`,
      colorBoardCodeJs:
`
export default {
  data() {
    return {
      color: '#FF0000',
    }
  }
}
`,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>