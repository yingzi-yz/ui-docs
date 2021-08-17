<template>
  <div class="radio-wrap">
    <yz-tip>radio单选框</yz-tip> 

    <yz-tip class="mb-0">radio单选框使用用法</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-radio label="0" v-model="gender">男</yz-radio>  
          <yz-radio label="1" v-model="gender">女</yz-radio>  
        </div>
      </template>
      <div class="show-code">
        <pre>
          <code>
            <div v-text="radioCode"></div>
          </code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card>       

    <yz-tip class="mb-0">radio单选框组使用方法</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-radio-group v-model="fruit">
            <yz-radio label="0">芒果</yz-radio>  
            <yz-radio label="1">葡萄</yz-radio>  
            <yz-radio label="2">百香果</yz-radio>  
          </yz-radio-group>
        </div>
      </template>
      <div class="show-code">
        <pre>
          <code>
            <div v-text="radioGroupCode"></div>
          </code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card>

    <yz-tip class="mb-0">radio属性</yz-tip> 
    <yz-collapse v-model="radioAttribute">
      <yz-collapse-item title="v-model" name="1">
        <div><span class="attribute-title">用处：</span>用于双向绑定radio值</div>
        <div><span class="attribute-title">类型：</span>-</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>- </div>
      </yz-collapse-item>
      <yz-collapse-item title="label" name="2">
        <div><span class="attribute-title">用处：</span>用于设置radio的值，若radio无包裹内容，label会成为文本内容</div>
        <div><span class="attribute-title">类型：</span>string / number / boolean</div>
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

    <yz-tip class="mb-0">radio-group属性</yz-tip> 
    <yz-collapse v-model="radioGroupAttribute">
      <yz-collapse-item title="v-model" name="1">
        <div><span class="attribute-title">用处：</span>用于双向绑定radio-group值</div>
        <div><span class="attribute-title">类型：</span>-</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>- </div>
      </yz-collapse-item>
    </yz-collapse>  
  </div>
</template>

<script>
export default {
  name: 'radioWrap',
  data() {
    return {
      gender: '0',
      fruit: '0',
      radioAttribute: ['1', '2', '3'],
      radioGroupAttribute: ['1'],
      radioCode: 
`
<template>
  <yz-radio label="0" v-model="gender">男</yz-radio>  
  <yz-radio label="1" v-model="gender">女</yz-radio>  
</template>

export default {
  data() {
    return {
      gender: '0',
    }
  }
}`,
      radioGroupCode: 
`
<template>
  <yz-radio-group v-model="fruit">
    <yz-radio label="0">芒果</yz-radio>  
    <yz-radio label="1">葡萄</yz-radio>  
    <yz-radio label="2">百香果</yz-radio>  
  </yz-radio-group>
</template>

export default {
  data() {
    return {
      fruit: '0',
    }
  }
}`
    }
  }
}
</script>

<style lang="scss" scope>

</style>