<template>
  <div class="card-wrap">
    <yz-tip>card卡片</yz-tip> 

    <yz-tip class="mb-0">card卡片使用方法</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-card>
            <template v-slot:header>
              <div>这是标题区域</div>
            </template> 
            <div>这是内容区域</div>         
          </yz-card>
        </div>
      </template>
      <div class="show-code">
        <pre>
          <code>
            <div v-text="cardCode"></div>
          </code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card> 

    <yz-tip class="mb-0">card属性</yz-tip> 
    <yz-collapse v-model="cardAttribute">
      <yz-collapse-item title="show-footer" name="1">
        <div><span class="attribute-title">用处：</span>用于控制是否显示底部区域</div>
        <div><span class="attribute-title">类型：</span>boolean</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>false </div>
      </yz-collapse-item>
      <yz-collapse-item title="background" name="2">
        <div><span class="attribute-title">用处：</span>用于设置背景颜色</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>#fff </div>
      </yz-collapse-item>      
    </yz-collapse> 

    <yz-tip class="mb-0">card插槽</yz-tip> 
    <yz-collapse v-model="cardSlots">
      <yz-collapse-item title="header" name="1">
        <div><span class="attribute-title">用处：</span>标题区域的内容</div>
      </yz-collapse-item>
      <yz-collapse-item title="footer" name="2">
        <div><span class="attribute-title">用处：</span>底部区域的内容，使用此插槽必须加show-footer属性</div>
      </yz-collapse-item>
    </yz-collapse> 
  </div>
</template>

<script>
export default {
  name: 'cardWrap',
  data() {
    return {
      cardAttribute: ['1', '2'],
      cardSlots: ['1', '2'],
      cardCode:
`
<template>
  <yz-card>
    <template v-slot:header>
      <div>这是标题区域</div>
    </template> 
    <div>这是内容区域</div>         
  </yz-card>
</template>
`,  
    }
  }
}
</script>

<style lang="scss" scoped>

</style>