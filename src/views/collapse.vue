<template>
  <div class="collapse-wrap">
    <yz-tip>collapse折叠框</yz-tip> 

    <yz-tip class="mb-0">collapse折叠框使用方法</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-collapse v-model="collapseData">
            <yz-collapse-item title="标题1" name="1">
              <div>我本可以忍受黑暗，如果我不曾见过太阳</div>
            </yz-collapse-item>
            <yz-collapse-item title="标题2" name="2">
              <div>青春是一个短暂的美梦，当你醒来时，它早已消失无踪</div>
            </yz-collapse-item>
            <yz-collapse-item title="标题3" name="3">
              <div>雨纷纷，旧故里草木深</div>
            </yz-collapse-item>
          </yz-collapse>
        </div>
      </template>
      <div class="show-code">        
        <pre class="line-numbers">
          <code class="language-xml line-numbers" v-text="collapseCodeHtml"></code>
        </pre>
        <pre class="line-numbers">
          <code class="language-javascript line-numbers" v-text="collapseCodeJs"></code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card> 

    <yz-tip class="mb-0">collapse属性</yz-tip> 
    <yz-collapse v-model="collapseAttribute">
      <yz-collapse-item title="v-model" name="1">
        <div><span class="attribute-title">用处：</span>用于双向绑定collapse的值</div>
        <div><span class="attribute-title">类型：</span>array</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>- </div>
      </yz-collapse-item>
    </yz-collapse>        

    <yz-tip class="mb-0">collapse-item属性</yz-tip> 
    <yz-collapse v-model="collapseItemAttribute">
      <yz-collapse-item title="title" name="1">
        <div><span class="attribute-title">用处：</span>用于显示collapse的标题</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>- </div>
      </yz-collapse-item>
      <yz-collapse-item title="name" name="2">
        <div><span class="attribute-title">用处：</span>用于显示collapse的内容显示与隐藏</div>
        <div><span class="attribute-title">类型：</span>string / number</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>- </div>
      </yz-collapse-item>
    </yz-collapse>        
  </div>
</template>

<script>
import {commonMixins}  from '@/mixins/index.js'
export default {
  name: 'collapseWrap',  
  mixins: [commonMixins],
  data() {
    return {
      collapseData: [],
      collapseAttribute: ['1'],
      collapseItemAttribute: ['1', '2'],
      collapseCodeHtml:
`
<template>
  <yz-collapse v-model="collapseData">
    <yz-collapse-item title="标题1" name="1">
      <div>我本可以忍受黑暗，如果我不曾见过太阳</div>
    </yz-collapse-item>
    <yz-collapse-item title="标题2" name="2">
      <div>青春是一个短暂的美梦，当你醒来时，它早已消失无踪</div>
    </yz-collapse-item>
    <yz-collapse-item title="标题3" name="3">
      <div>雨纷纷，旧故里草木深</div>
    </yz-collapse-item>
  </yz-collapse>
</template>
` , 
      collapseCodeJs:
`
export default {
  data() {
    return {
      collapseData: [],
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