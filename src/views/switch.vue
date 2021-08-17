<template>
  <div class="switch-wrap">
    <yz-tip>switch开关</yz-tip> 

    <yz-tip class="mb-0">switch开关使用方法</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-switch v-model="switchData"></yz-switch>
        </div>
      </template>
      <div class="show-code">
        <pre>
          <code>
            <div v-text="switchCode"></div>
          </code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card> 

    <yz-tip class="mb-0">switch属性</yz-tip> 
    <yz-collapse v-model="switchAttribute">
      <yz-collapse-item title="v-model" name="1">
        <div><span class="attribute-title">用处：</span>用于双向绑定switch值</div>
        <div><span class="attribute-title">类型：</span>boolean</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>false </div>
      </yz-collapse-item>
      <yz-collapse-item title="active-color" name="2">
        <div><span class="attribute-title">用处：</span>用于设置激活状态颜色</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>- </div>
        <div><span class="attribute-title">默认值：</span>#409eff </div>
      </yz-collapse-item>
      <yz-collapse-item title="inactive-color" name="3">
        <div><span class="attribute-title">用处：</span>用于设置未激活状态颜色</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>- </div>
        <div><span class="attribute-title">默认值：</span>#dcdfe6 </div>
      </yz-collapse-item>
      <yz-collapse-item title="name" name="4">
        <div><span class="attribute-title">用处：</span>用于设置开关name属性</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>- </div>
        <div><span class="attribute-title">默认值：</span>- </div>
      </yz-collapse-item>
    </yz-collapse>        
  </div>
</template>

<script>
export default {
  name: 'switchWrap',
  data() {
    return {
      switchData: true,
      switchAttribute: ['1', '2', '3', '4'],
      switchCode:
`
<template>
  <yz-switch v-model="switchData"></yz-switch>
</template>

export default {
  data() {
    return {
      switchData: true,
    }
  }
}
`,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>