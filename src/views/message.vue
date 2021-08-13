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
      <div class="code">
        <pre>
          <code class="vue">
            &lt;div&gt;&lt;/div&gt;
          </code>
        </pre>
      </div>
      <template v-slot:footer>
      </template>
    </yz-card> 
  </div>
</template>

<script>
export default {
  name: 'messageWrap',
  data() {
    return {
      
    }
  },
  methods: {
    showInfoMessage() {
      this.$message({
        type: 'info',
        message: '这是info提示'
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