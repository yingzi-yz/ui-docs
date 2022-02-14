<template>
  <div class="upload-wrap">
    <yz-tip>upload上传</yz-tip>

    <yz-tip class="mb-0">upload上传使用方法</yz-tip>
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-upload upload-limit="2" upload-size="1" @successUpload="successUpload"></yz-upload>
        </div>
      </template>
      <div class="show-code">
        <pre class="line-numbers">
          <code class="language-xml line-numbers" v-text="uploadCodeHtml"></code>
        </pre>
        <pre class="line-numbers">
          <code class="language-javascript line-numbers" v-text="uploadCodeJs"></code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card>

    <yz-tip class="mb-0">upload属性</yz-tip> 
    <yz-collapse v-model="uploadAttribute">
      <yz-collapse-item title="uploadType" name="1">
        <div><span class="attribute-title">用处：</span>指定上传类型</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>img / video</div>
        <div><span class="attribute-title">默认值：</span>img</div>
      </yz-collapse-item>
      <yz-collapse-item title="uploadLimit" name="2">
        <div><span class="attribute-title">用处：</span>指定上传数量</div>
        <div><span class="attribute-title">类型：</span>number</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>9</div>
      </yz-collapse-item>       
      <yz-collapse-item title="uploadSize" name="3">
        <div><span class="attribute-title">用处：</span>指定上传大小，单位为m</div>
        <div><span class="attribute-title">类型：</span>number</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>-</div>
      </yz-collapse-item>     
    </yz-collapse>     

    <yz-tip class="mb-0">upload事件</yz-tip> 
    <yz-collapse v-model="uploadEvent">
      <yz-collapse-item title="successUpload" name="1">
        <div><span class="attribute-title">用处：</span>成功上传的回调函数，返回formdata对象</div>
      </yz-collapse-item>
      <yz-collapse-item title="successDelete" name="2">
        <div><span class="attribute-title">用处：</span>成功删除的回调函数，返回索引</div>
      </yz-collapse-item>
    </yz-collapse>        
  </div>
</template>

<script>
import {commonMixins}  from '@/mixins/index.js'
export default {
  name: 'uploadWrap',
  mixins: [commonMixins],
  data() {
    return {
      uploadAttribute: ['1', '2', '3'],
      uploadEvent: ['1', '2'],
      uploadCodeHtml:
`
<template>
  <yz-upload upload-limit="2" upload-size="1" @successUpload="successUpload"></yz-upload>
</template>

`,       
      uploadCodeJs:
`
export default {
  data() {
    return {
      
    }
  },  
  methods: {
    successUpload(form) {
      this.$message({
        type: 'success',
        message: '上传成功了'+form
      })
    },
  }
}
`,              
    }
  },
  methods: {
    successUpload(form) {
      this.$message({
        type: 'success',
        message: '上传成功了'+form
      })
    },
  }
}
</script>

<style lang="scss" scope>

</style>