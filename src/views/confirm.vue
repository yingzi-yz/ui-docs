<template>
  <div class="confirm-wrap">
    <yz-tip>confirm消息框</yz-tip> 

    <yz-tip class="mb-0">confirm消息框使用方法</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-button type="primary" @click="showConfirm">confirm</yz-button>
        </div>
      </template>
      <div class="show-code">
        <pre>
          <code>
            <div v-text="confirmCode"></div>
          </code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card> 

    <yz-tip class="mb-0">confirm属性</yz-tip> 
    <yz-collapse v-model="confirmAttribute">
      <yz-collapse-item title="title" name="1">
        <div><span class="attribute-title">用处：</span>用于显示标题内容</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>提示 </div>
      </yz-collapse-item>
      <yz-collapse-item title="message" name="2">
        <div><span class="attribute-title">用处：</span>用于显示内容区域的内容</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>- </div>
        <div><span class="attribute-title">默认值：</span>- </div>
      </yz-collapse-item>
    </yz-collapse>             
  </div>
</template>

<script>
export default {
  name: 'confirmWrap',
  data() {
    return {
      confirmAttribute: ['1', '2'],
      confirmCode:
`
<template>
  <yz-button type="primary" @click="showConfirm">confirm</yz-button>
</template>

export default {
  methods: {
    showConfirm() {
      this.$confirm({
        title: '这是标题',
        message: '这是内容',
      }).then(() => {
        console.log('success');
      }).catch(() => {
        console.log('error');
      })
    }
  }
}
`,  
    }
  },
  methods: {
    showConfirm() {
      this.$confirm({
        title: '这是标题',
        message: '这是内容',
      }).then(() => {
        console.log('success');
      }).catch(() => {
        console.log('error');
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>