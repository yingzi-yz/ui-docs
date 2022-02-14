<template>
  <div class="loading-wrap">
    <yz-tip>loading加载</yz-tip> 

    <yz-tip class="mb-0">loading加载使用方法</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-button @click="showLoading" class="mr-20">显示loading</yz-button>
          <yz-button @click="hideLoading">隐藏loading</yz-button>
        </div>
      </template>
      <div class="show-code">       
        <pre class="line-numbers">
          <code class="language-xml line-numbers" v-text="loadingCodeHtml"></code>
        </pre>
        <pre class="line-numbers">
          <code class="language-javascript line-numbers" v-text="loadingCodeJs"></code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card>  

    <yz-tip class="mb-0">loading属性</yz-tip> 
    <yz-collapse v-model="loadingAttribute">
      <yz-collapse-item title="timeout" name="1">
        <div><span class="attribute-title">用处：</span>用于控制loading时长</div>
        <div><span class="attribute-title">类型：</span>number</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>-</div>
      </yz-collapse-item>
      <yz-collapse-item title="type" name="2">
        <div><span class="attribute-title">用处：</span>用于控制loading类型</div>
        <div><span class="attribute-title">类型：</span>number</div>
        <div><span class="attribute-title">可选值：</span>1 / 2</div>
        <div><span class="attribute-title">默认值：</span>1</div>
      </yz-collapse-item>
    </yz-collapse>  

    <yz-tip class="mb-0">loading事件</yz-tip> 
    <yz-collapse v-model="loadingEvent">
      <yz-collapse-item title="show" name="1">
        <div><span class="attribute-title">用处：</span>显示loading</div>
      </yz-collapse-item>
      <yz-collapse-item title="hidden" name="2">
        <div><span class="attribute-title">用处：</span>隐藏loading</div>
      </yz-collapse-item>
    </yz-collapse> 
  </div>
</template>

<script>
import {commonMixins}  from '@/mixins/index.js'
export default {
  name: 'loadingWrap',
  mixins: [commonMixins],
  data() {
    return {
      loadingAttribute: ['1', '2'],
      loadingEvent: ['1', '2'],
      loadingCodeHtml:
`
<template>
  <yz-button @click="showLoading" class="mr-20">显示loading</yz-button>
  <yz-button @click="hideLoading">隐藏loading</yz-button>
</template>
` ,  
      loadingCodeJs:
`
<template>
  showLoading() {
    this.$loading.show();
  },
  hideLoading() {
    this.$loading.hidden();
  }
</template>
` ,  
    }
  },
  methods: {
    showLoading() {
      this.$loading.show();
    },
    hideLoading() {
      this.$loading.hidden();
    }
  }
}
</script>

<style>

</style>