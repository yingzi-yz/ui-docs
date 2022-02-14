<template>
  <div class="breadcrumb-wrap">
    <yz-tip>breadcrumb面包屑</yz-tip> 

    <yz-tip class="mb-0">breadcrumb面包屑使用方法</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-breadcrumb separator=">">
            <yz-breadcrumb-item :to="{path: '/'}">首页</yz-breadcrumb-item>
            <yz-breadcrumb-item>一</yz-breadcrumb-item>
            <yz-breadcrumb-item>二</yz-breadcrumb-item>
          </yz-breadcrumb>
        </div>
      </template>
      <div class="show-code">       
        <pre class="line-numbers">
          <code class="language-xml line-numbers" v-text="breadcrumbCode"></code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card>     

    <yz-tip class="mb-0">breadcrumb属性</yz-tip> 
    <yz-collapse v-model="breadcrumbAttribute">
      <yz-collapse-item title="separator" name="1">
        <div><span class="attribute-title">用处：</span>分隔符</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>- </div>
      </yz-collapse-item>     
    </yz-collapse>         

    <yz-tip class="mb-0">breadcrumb-item属性</yz-tip> 
    <yz-collapse v-model="breadcrumbItemAttribute">
      <yz-collapse-item title="to" name="1">
        <div><span class="attribute-title">用处：</span>前往页面</div>
        <div><span class="attribute-title">类型：</span>object</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>{}</div>
      </yz-collapse-item>     
    </yz-collapse>         
  </div>
</template>

<script>
import {commonMixins}  from '@/mixins/index.js'
export default {
  name: 'breadcrumbWrap',
  mixins: [commonMixins],
  data() {
    return {
      breadcrumbAttribute: ['1'],
      breadcrumbItemAttribute: ['1'],
      breadcrumbCode:
`
<template>
  <yz-breadcrumb separator=">">
    <yz-breadcrumb-item :to="{path: '/'}">首页</yz-breadcrumb-item>
    <yz-breadcrumb-item>一</yz-breadcrumb-item>
    <yz-breadcrumb-item>二</yz-breadcrumb-item>
  </yz-breadcrumb>
</template>
`,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>