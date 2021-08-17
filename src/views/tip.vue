<template>
  <div class="tipWrap">
    <yz-tip>tip文本</yz-tip>

    <yz-tip class="mb-0">tip文本使用方法</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-tip>tip文本</yz-tip>
        </div>
      </template>
      <div class="show-code">
        <pre>
          <code>
            <div v-text="tipCode"></div>
          </code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card> 

    <yz-tip class="mb-0">tip属性</yz-tip> 
    <yz-collapse v-model="tipAttribute">
      <yz-collapse-item title="background" name="1">
        <div><span class="attribute-title">用处：</span>用于显示tip文本背景颜色</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>#ecf8ff </div>
      </yz-collapse-item>
      <yz-collapse-item title="border" name="2">
        <div><span class="attribute-title">用处：</span>用于显示tip文本边框颜色</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>- </div>
        <div><span class="attribute-title">默认值：</span>#ecf8ff </div>
      </yz-collapse-item>
    </yz-collapse>   
  </div>
</template>

<script>
export default {
  name: 'tipWrap',
  data() {
    return {
      tipAttribute: ['1', '2'],
      tipCode:
`
<template>
  <yz-tip>tip文本</yz-tip>
</template>
`,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>