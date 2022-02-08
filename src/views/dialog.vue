<template>
  <div class="dialog-wrap">
    <yz-tip>dialog弹出框</yz-tip> 

    <yz-tip class="mb-0">dialog弹出框使用方法</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-button type="primary" @click="btnClick">打开dialog</yz-button>
          <yz-dialog width="50%" top="30px" :visible.sync="dialogVisible">
            <template v-slot:title>
              <h3>这是标题</h3>
            </template>
            <div> 随意内容都会替代主体区域</div>
            <template v-slot:footer>
              <yz-button type="primary" @click="btnClick">确定</yz-button>
            </template>
          </yz-dialog>
        </div>
      </template>
      <div class="show-code">    
        <pre class="line-numbers">
          <code class="language-xml line-numbers" v-text="dialogCodeHtml"></code>
        </pre>
        <pre class="line-numbers">
          <code class="language-javascript line-numbers" v-text="dialogCodeJs"></code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card> 

    <yz-tip class="mb-0">dialog属性</yz-tip> 
    <yz-collapse v-model="dialogAttribute">
      <yz-collapse-item title="visible" name="1">
        <div><span class="attribute-title">用处：</span>用于控制dialog显示隐藏，需要加.sync修饰符</div>
        <div><span class="attribute-title">类型：</span>boolean</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>false </div>
      </yz-collapse-item>
      <yz-collapse-item title="width" name="2">
        <div><span class="attribute-title">用处：</span>用于设置dialog宽度</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>- </div>
        <div><span class="attribute-title">默认值：</span>30% </div>
      </yz-collapse-item>
      <yz-collapse-item title="top" name="3">
        <div><span class="attribute-title">用处：</span>用于设置dialog距离顶部高度</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>- </div>
        <div><span class="attribute-title">默认值：</span>15vh </div>
      </yz-collapse-item>
      <yz-collapse-item title="title" name="4">
        <div><span class="attribute-title">用处：</span>用于设置dialog标题内容</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>- </div>
        <div><span class="attribute-title">默认值：</span>提示 </div>
      </yz-collapse-item>
    </yz-collapse>    

    <yz-tip class="mb-0">dialog插槽</yz-tip> 
    <yz-collapse v-model="dialogSlots">
      <yz-collapse-item title="title" name="1">
        <div><span class="attribute-title">用处：</span>标题区域的内容</div>
      </yz-collapse-item>
      <yz-collapse-item title="footer" name="2">
        <div><span class="attribute-title">用处：</span>底部区域的内容</div>
      </yz-collapse-item>
    </yz-collapse>    
  </div>
</template>

<script>
import {commonMixins}  from '@/mixins/index.js'
export default {
  name: 'dialogWrap',
  mixins: [commonMixins],
  data() {
    return {
      dialogVisible: false,
      dialogAttribute: ['1', '2', '3', '4'],
      dialogSlots: ['1', '2'],
      dialogCodeHtml:
`
<template>
  <yz-button type="primary" @click="btnClick">打开dialog</yz-button>
  <yz-dialog width="50%" top="30px" :visible.sync="dialogVisible">
    <template v-slot:title>
      <h3>这是标题</h3>
    </template>
    <div> 随意内容都会替代主体区域</div>
    <template v-slot:footer>
      <yz-button type="primary" @click="btnClick">确定</yz-button>
    </template>
  </yz-dialog>
</template>
` ,  
      dialogCodeJs:
`
export default {
  data() {
    return {
      dialogVisible: false,
    }
  }
  methods: {
    btnClick() {
      this.dialogVisible = !this.dialogVisible;
    }
  }
}
` ,  
    }
  },
  methods: {
    btnClick() {
      this.dialogVisible = !this.dialogVisible;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>