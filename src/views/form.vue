<template>
  <div class="form-wrap">
    <yz-tip>form表单</yz-tip> 

    <yz-tip class="mb-0">form表单使用方法</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-form :model="formData" label-width="130px">
            <yz-form-item label="用户名">
              <yz-input v-model="formData.username"></yz-input>
            </yz-form-item>
            <yz-form-item label="密码">
              <yz-input v-model="formData.password" type="password" show-password></yz-input>
            </yz-form-item>
          </yz-form>
        </div>
      </template>
      <div class="show-code">
        <pre>
          <code>
            <div v-text="formCode"></div>
          </code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card> 

    <yz-tip class="mb-0">form属性</yz-tip> 
    <yz-collapse v-model="formAttribute">
      <yz-collapse-item title="model" name="1">
        <div><span class="attribute-title">用处：</span>用于绑定form表单的值</div>
        <div><span class="attribute-title">类型：</span>object</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>- </div>
      </yz-collapse-item>
      <yz-collapse-item title="label-width" name="2">
        <div><span class="attribute-title">用处：</span>用于控制表单label宽度</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>80px </div>
      </yz-collapse-item>
    </yz-collapse>      

    <yz-tip class="mb-0">form-item属性</yz-tip> 
    <yz-collapse v-model="formItemAttribute">
      <yz-collapse-item title="label" name="1">
        <div><span class="attribute-title">用处：</span>用于显示表单文本</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>- </div>
      </yz-collapse-item>
    </yz-collapse>      
  </div>
</template>

<script>
export default {
  name: 'formWrap',
  data() {
    return {
      formData: {
        username: 'yingzi',
        password: '',
      },
      formAttribute: [],
      formItemAttribute: [],    
      formCode:
`
<template>
  <yz-form :model="formData" label-width="130px">
    <yz-form-item label="用户名">
      <yz-input v-model="formData.username"></yz-input>
    </yz-form-item>
    <yz-form-item label="密码">
      <yz-input v-model="formData.password" type="password" show-password></yz-input>
    </yz-form-item>
  </yz-form>
</template>

export default {
  data() {
    return {
      formData: {
        username: 'yingzi',
        password: '',
      },
    }
  }
}
` ,   
    }
  }
}
</script>

<style lang="scss" scoped>

</style>