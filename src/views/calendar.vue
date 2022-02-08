<template>
  <div class="calendar-wrap">
    <yz-tip>calendar日历</yz-tip> 

    <yz-tip class="mb-0">calendar日历使用方法</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-calendar v-model="calendarData"></yz-calendar>
        </div>
      </template>
      <div class="show-code">      
        <pre class="line-numbers">
          <code class="language-xml line-numbers" v-text="calendarCodeHtml"></code>
        </pre>
        <pre class="line-numbers">
          <code class="language-javascript line-numbers" v-text="calendarCodeJs"></code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card> 

    <yz-tip class="mb-0">calendar属性</yz-tip> 
    <yz-collapse v-model="calendarAttribute">
      <yz-collapse-item title="v-model" name="1">
        <div><span class="attribute-title">用处：</span>用于双向绑定calendar的值</div>
        <div><span class="attribute-title">类型：</span>date</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>new Date() </div>
      </yz-collapse-item>
    </yz-collapse> 
  </div>
</template>

<script>
import {commonMixins}  from '@/mixins/index.js'
export default {
  name: 'calendarWrap',
  mixins: [commonMixins],
  data() {
    return {
      calendarData: new Date(),
      calendarAttribute: ['1'],
      calendarCodeHtml:
`
<template>
  <yz-calendar v-model="calendarData"></yz-calendar>
</template>
` , 
      calendarCodeJs:
`
export default {
  data() {
    return {
      calendarData: new Date(),
    }
  }
}
` , 
    }
  },  
}
</script>

<style lang="scss" scoped>

</style>