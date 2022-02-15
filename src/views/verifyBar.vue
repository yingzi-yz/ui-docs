<template>
  <div class="verify-bar-wrap">
    <yz-tip>verifyBar验证进度条</yz-tip>

    <yz-tip class="mb-0">verifyBar验证进度条使用方法</yz-tip>
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-verify-bar :successFun="successFun" :errorFun="errorFun"></yz-verify-bar>
        </div>
      </template>
      <div class="show-code">
        <pre class="line-numbers">
          <code class="language-xml line-numbers" v-text="verifyBarCodeHtml"></code>
        </pre>
        <pre class="line-numbers">
          <code class="language-javascript line-numbers" v-text="verifyBarCodeJs"></code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card>

    <yz-tip class="mb-0">verifyBar属性</yz-tip> 
    <yz-collapse v-model="verifyBarAttribute">
      <yz-collapse-item title="startIcon" name="1">
        <div><span class="attribute-title">用处：</span>开始的图标</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>yz-icon-right</div>
      </yz-collapse-item>
      <yz-collapse-item title="startText" name="2">
        <div><span class="attribute-title">用处：</span>开始的文字</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>拖动滑块到最右边</div>
      </yz-collapse-item>       
      <yz-collapse-item title="successIcon" name="3">
        <div><span class="attribute-title">用处：</span>成功的图标</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>yz-icon-select</div>
      </yz-collapse-item>     
      <yz-collapse-item title="successText" name="4">
        <div><span class="attribute-title">用处：</span>成功文字</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>验证成功</div>
      </yz-collapse-item>
    </yz-collapse>     

    <yz-tip class="mb-0">verifyBar事件</yz-tip> 
    <yz-collapse v-model="verifyBarEvent">
      <yz-collapse-item title="successFun" name="1">
        <div><span class="attribute-title">用处：</span>成功的回调函数</div>
      </yz-collapse-item>
      <yz-collapse-item title="errorFun" name="2">
        <div><span class="attribute-title">用处：</span>失败的回调函数</div>
      </yz-collapse-item>
    </yz-collapse>        
  </div>
</template>

<script>
import {commonMixins}  from '@/mixins/index.js'
export default {
  name: 'verifyBarWrap',
  mixins: [commonMixins],
  data() {
    return {
      verifyBarAttribute: ['1', '2', '3', '4'],
      verifyBarEvent: ['1', '2'],
      verifyBarCodeHtml:
`
<template>
  <yz-verify-bar :successFun="successFun" :errorFun="errorFun"></yz-verify-bar>
</template>

`,       
      verifyBarCodeJs:
`
export default {
  data() {
    return {
      
    }
  },  
  methods: {
    successFun() {
      this.$message({
        type: 'success',
        message: '成功了'
      })
    },
    errorFun() {
      this.$message({
        type: 'error',
        message: '失败了'
      })
    }
  }
}
`,              
    }
  },
  methods: {
    successFun() {
      this.$message({
        type: 'success',
        message: '成功了'
      })
    },
    errorFun() {
      this.$message({
        type: 'error',
        message: '失败了'
      })
    }
  }
}
</script>

<style lang="scss" scope>

</style>