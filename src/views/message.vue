<template>
  <div class="message-wrap">
    <yz-tip>message消息</yz-tip> 

    <yz-tip class="mb-0">message消息使用方法</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-button type="info" @click="showInfoMessage">info</yz-button>
          <yz-button type="success" @click="showSuccessMessage">success</yz-button>
          <yz-button type="warning" @click="showWarningMessage">warning</yz-button>
          <yz-button type="danger" @click="showErrorMessage">error</yz-button>
        </div>
      </template>
      <div class="show-code">      
        <pre class="line-numbers">
          <code class="language-xml line-numbers" v-text="messageCodeHtml"></code>
        </pre>
        <pre class="line-numbers">
          <code class="language-javascript line-numbers" v-text="messageCodeJs"></code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card>

    <yz-tip class="mb-0">message属性</yz-tip> 
    <yz-collapse v-model="messageAttribute">
      <yz-collapse-item title="type" name="1">
        <div><span class="attribute-title">用处：</span>用于控制message类型</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>- </div>
      </yz-collapse-item>
      <yz-collapse-item title="message" name="2">
        <div><span class="attribute-title">用处：</span>用于显示message文本</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>- </div>
        <div><span class="attribute-title">默认值：</span>- </div>
      </yz-collapse-item>
      <yz-collapse-item title="duration" name="3">
        <div><span class="attribute-title">用处：</span>用于控制message显示时间</div>
        <div><span class="attribute-title">类型：</span>number</div>
        <div><span class="attribute-title">可选值：</span>- </div>
        <div><span class="attribute-title">默认值：</span>3000 </div>
      </yz-collapse-item>
    </yz-collapse>     
  </div>
</template>

<script>
import {commonMixins}  from '@/mixins/index.js'
export default {
  name: 'messageWrap',
  mixins: [commonMixins],
  data() {
    return {
      messageAttribute: ['1', '2', '3'],
      messageCodeHtml: 
`
<template>
  <yz-button type="info" @click="showInfoMessage">info</yz-button>
  <yz-button type="success" @click="showSuccessMessage">success</yz-button>
  <yz-button type="warning" @click="showWarningMessage">warning</yz-button>
  <yz-button type="danger" @click="showErrorMessage">error</yz-button>
</template>
`,      
      messageCodeJs: 
`
export default {
  methods: {
    showInfoMessage() {
      this.$message({
        type: 'info',
        message: '这是info提示',
      })
    },
    showSuccessMessage() {
      this.$message({
        type: 'success',
        message: '这是success提示'
      })
    },
    showWarningMessage() {
      this.$message({
        type: 'warning',
        message: '这是warning提示'
      })
    },
    showErrorMessage() {
      this.$message({
        type: 'error',
        message: '这是error提示'
      })
    }
  }
}
`,      
    }
  },
  methods: {
    showInfoMessage() {
      this.$message({
        type: 'info',
        message: '这是info提示',
      })
    },
    showSuccessMessage() {
      this.$message({
        type: 'success',
        message: '这是success提示'
      })
    },
    showWarningMessage() {
      this.$message({
        type: 'warning',
        message: '这是warning提示'
      })
    },
    showErrorMessage() {
      this.$message({
        type: 'error',
        message: '这是error提示'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.message-wrap {
  .yz-button {
    margin-right: 20px;
  }
}
</style>