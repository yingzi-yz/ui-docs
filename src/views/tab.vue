<template>
  <div class="tab-wrap">
    <yz-tip>tab选项卡</yz-tip> 

    <yz-tip class="mb-0">tab选项卡使用方法</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-tab-group v-model="tabData">
            <yz-tab-item label="tab切换页1">第1页</yz-tab-item>
            <yz-tab-item label="tab切换页2">第2页</yz-tab-item>
            <yz-tab-item label="tab切换页3">第3页</yz-tab-item>
          </yz-tab-group>
        </div>
      </template>
      <div class="show-code">
        <pre>
          <code>
            <div v-text="tabCode"></div>
          </code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card> 

    <yz-tip class="mb-0">tab-group属性</yz-tip> 
    <yz-collapse v-model="tabGroupAttribute">
      <yz-collapse-item title="v-model" name="1">
        <div><span class="attribute-title">用处：</span>用于双向绑定tab的值</div>
        <div><span class="attribute-title">类型：</span>number</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>0 </div>
      </yz-collapse-item>
    </yz-collapse>        

    <yz-tip class="mb-0">tab-item属性</yz-tip> 
    <yz-collapse v-model="tabItemAttribute">
      <yz-collapse-item title="label" name="1">
        <div><span class="attribute-title">用处：</span>用于显示tab选项卡标题内容</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>- </div>
      </yz-collapse-item>
    </yz-collapse>        
  </div>
</template>

<script>
export default {
  name: 'tabWrap',
  data() {
    return {
      tabData: 0,
      tabGroupAttribute: [], 
      tabItemAttribute: [], 
      tabCode:
`
<template>
  <yz-tab-group v-model="tabData">
    <yz-tab-item label="tab切换页1">第1页</yz-tab-item>
    <yz-tab-item label="tab切换页2">第2页</yz-tab-item>
    <yz-tab-item label="tab切换页3">第3页</yz-tab-item>
  </yz-tab-group>
</template>

export default {
  data() {
    return {
      tabData: 0,
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