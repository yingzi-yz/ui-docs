<template>
  <div class="tooltip-wrap">
    <yz-tip>tooltip提示框</yz-tip> 

    <yz-tip class="mb-0">tooltip提示框使用方法</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-tooltip :placement="'bottom'" :trigger="'click'" :width="300" content='我是tooltip'>
            <yz-tag radius="15px" label-text="文字"></yz-tag>   
          </yz-tooltip>
        </div>
      </template>
      <div class="show-code">    
        <pre class="line-numbers">
          <code class="language-xml line-numbers" v-text="tooltipCodeOne"></code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card> 

    <yz-tip class="mb-0">tooltip提示框使用方法</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-tooltip :placement="'bottom'" :trigger="'hover'" :width="300">
            <yz-tag radius="15px" label-text="文字"></yz-tag>
            <template slot="content">
              <div class="tooltip-content">
                <p>我是tooltip我是tooltip</p>
                <p>我是tooltip我是tooltip</p>
                <p>我是tooltip我是tooltip</p>
              </div>
            </template>
          </yz-tooltip>
        </div>
      </template>
      <div class="show-code">    
        <pre class="line-numbers">
          <code class="language-xml line-numbers" v-text="tooltipCodeTwo"></code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card> 

    <yz-tip class="mb-0">tooltip属性</yz-tip> 
    <yz-collapse v-model="tooltipAttribute">
      <yz-collapse-item title="trigger" name="1">
        <div><span class="attribute-title">用处：</span>用于控制点击或者触摸显示tooltip</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>hover / click</div>
        <div><span class="attribute-title">默认值：</span>hover</div>
      </yz-collapse-item>
      <yz-collapse-item title="content" name="2">
        <div><span class="attribute-title">用处：</span>用于显示内容</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>tooltip</div>
      </yz-collapse-item>
      <yz-collapse-item title="placement" name="3">
        <div><span class="attribute-title">用处：</span>用于设置tooltip显示的位置</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>top / right/ bottom / left</div>
        <div><span class="attribute-title">默认值：</span>bottom</div>
      </yz-collapse-item>
      <yz-collapse-item title="width" name="4">
        <div><span class="attribute-title">用处：</span>用于设置tooltip宽度</div>
        <div><span class="attribute-title">类型：</span>number</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>200px</div>
      </yz-collapse-item>
    </yz-collapse>    

    <yz-tip class="mb-0">tooltip插槽</yz-tip> 
    <yz-collapse v-model="tooltipSlots">
      <yz-collapse-item title="content" name="1">
        <div><span class="attribute-title">用处：</span>用于tooltip显示内容</div>
      </yz-collapse-item>
    </yz-collapse>    
  </div>
</template>

<script>
import {commonMixins}  from '@/mixins/index.js'
export default {
  name: 'tooltipWrap',
  mixins: [commonMixins],
  data() {
    return {
      tooltipAttribute: ['1', '2', '3', '4'],
      tooltipSlots: ['1', '2'],
      tooltipCodeOne: 
`
<template>
  <yz-tooltip :placement="'bottom'" :trigger="'click'" :width="300" content='我是tooltip'>
    <yz-tag radius="15px" label-text="文字"></yz-tag>  
  </yz-tooltip>
</template>  
`,
      tooltipCodeTwo:
`
<template>
  <yz-tooltip :placement="'bottom'" :trigger="'hover'" :width="300">
    <yz-tag radius="15px" label-text="文字"></yz-tag>
    <template slot="content">
      <div class="tooltip-content">
        <p>我是tooltip我是tooltip</p>
        <p>我是tooltip我是tooltip</p>
        <p>我是tooltip我是tooltip</p>
      </div>
    </template>
  </yz-tooltip>
</template>
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