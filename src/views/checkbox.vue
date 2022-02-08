<template>
  <div class="checkbox-wrap">
    <yz-tip>checkbox多选框</yz-tip> 

    <yz-tip class="mb-0">checkbox多选框使用方法</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-checkbox v-model="checkboxData" label="选中"></yz-checkbox>
        </div>
      </template>
      <div class="show-code">       
        <pre class="line-numbers">
          <code class="language-xml line-numbers" v-text="checkboxCodeHtml"></code>
        </pre>
        <pre class="line-numbers">
          <code class="language-javascript line-numbers" v-text="checkboxCodeJs"></code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card>  

    <yz-tip class="mb-0">checkbox多选框组使用方法</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-checkbox-group v-model="checkboxGroupData">
            <yz-checkbox label="吃饭"></yz-checkbox>
            <yz-checkbox label="睡觉"></yz-checkbox>
            <yz-checkbox label="打豆豆"></yz-checkbox>
          </yz-checkbox-group>
        </div>
      </template>
      <div class="show-code">
        <pre class="line-numbers">
          <code class="language-xml line-numbers" v-text="checkboxGroupCodeHtml"></code>
        </pre>
        <pre class="line-numbers">
          <code class="language-javascript line-numbers" v-text="checkboxGroupCodeJs"></code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card> 

    <yz-tip class="mb-0">checkbox属性</yz-tip> 
    <yz-collapse v-model="checkboxAttribute">
      <yz-collapse-item title="v-model" name="1">
        <div><span class="attribute-title">用处：</span>用于双向绑定checkbox值</div>
        <div><span class="attribute-title">类型：</span>boolean</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>false </div>
      </yz-collapse-item>
      <yz-collapse-item title="label" name="2">
        <div><span class="attribute-title">用处：</span>用于设置checkbox的值，若checkbox无包裹内容，label会成为文本内容</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>- </div>
        <div><span class="attribute-title">默认值：</span>- </div>
      </yz-collapse-item>
      <yz-collapse-item title="name" name="3">
        <div><span class="attribute-title">用处：</span>用于原生name属性</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>- </div>
        <div><span class="attribute-title">默认值：</span>- </div>
      </yz-collapse-item>
    </yz-collapse>  

    <yz-tip class="mb-0">checkbox-group属性</yz-tip> 
    <yz-collapse v-model="checkboxGroupAttribute">
      <yz-collapse-item title="v-model" name="1">
        <div><span class="attribute-title">用处：</span>用于双向绑定checkbox-box值</div>
        <div><span class="attribute-title">类型：</span>array</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>- </div>
      </yz-collapse-item>
    </yz-collapse>  
  </div>
</template>

<script>
import {commonMixins}  from '@/mixins/index.js'
export default {
  name: 'checkboxWrap',
  mixins: [commonMixins],  
  data() {
    return {
      checkboxData: true,
      checkboxGroupData: ['吃饭', '睡觉', '打豆豆'],
      checkboxAttribute: ['1', '2', '3'],
      checkboxGroupAttribute: ['1'],
      checkboxCodeHtml: 
`
<template v-slot:header>
  <yz-checkbox v-model="checkboxData" label="选中"></yz-checkbox>
</template> 
`,
      checkboxCodeJs: 
`
export default {
  data() {
    return {
      checkboxData: true,
    }
  }
}  
`,
      checkboxGroupCodeHtml: 
`
<template>
  <yz-checkbox-group v-model="checkboxGroupData">
    <yz-checkbox label="吃饭"></yz-checkbox>
    <yz-checkbox label="睡觉"></yz-checkbox>
    <yz-checkbox label="打豆豆"></yz-checkbox>
  </yz-checkbox-group>
</template>
`,    
      checkboxGroupCodeJs: 
`
export default {
  data() {
    return {
      checkboxGroupData: ['吃饭', '睡觉', '打豆豆'],
    }
  }
} 
`    
    }
  }
}
</script>

<style lang="scss" scoped>

</style>