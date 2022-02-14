<template>
  <div class="slider-bar-wrap">
    <yz-tip>sliderBar滑动条</yz-tip>

    <yz-tip class="mb-0">sliderBar滑动条使用方法</yz-tip>
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-slider-bar v-model="sliderBarOne" :min="20" :max="40" step="5"></yz-slider-bar>
          <yz-slider-bar v-model="sliderBarTwo"></yz-slider-bar>
          <yz-slider-bar v-model="sliderBarThree" :show-tooltip="false"></yz-slider-bar>
          <yz-slider-bar v-model="sliderBarFour" disabled></yz-slider-bar>
        </div>
      </template>
      <div class="show-code">
        <pre class="line-numbers">
          <code class="language-xml line-numbers" v-text="sliderBarCodeHtml"></code>
        </pre>
        <pre class="line-numbers">
          <code class="language-javascript line-numbers" v-text="sliderBarCodeJs"></code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card>

    <yz-tip class="mb-0">sliderBar属性</yz-tip> 
    <yz-collapse v-model="sliderBarAttribute">
      <yz-collapse-item title="v-model" name="1">
        <div><span class="attribute-title">用处：</span>用于双向绑定值</div>
        <div><span class="attribute-title">类型：</span>number</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>0</div>
      </yz-collapse-item>
      <yz-collapse-item title="showTooltip" name="2">
        <div><span class="attribute-title">用处：</span>用于是否显示进度条文本</div>
        <div><span class="attribute-title">类型：</span>boolean</div>
        <div><span class="attribute-title">可选值：</span>true / false</div>
        <div><span class="attribute-title">默认值：</span>true</div>
      </yz-collapse-item>
      <yz-collapse-item title="disabled" name="3">
        <div><span class="attribute-title">用处：</span>用于是否禁止改变</div>
        <div><span class="attribute-title">类型：</span>boolean</div>
        <div><span class="attribute-title">可选值：</span>true / false</div>
        <div><span class="attribute-title">默认值：</span>false</div>
      </yz-collapse-item>
      <yz-collapse-item title="min" name="4">
        <div><span class="attribute-title">用处：</span>用于控制进度条最小值</div>
        <div><span class="attribute-title">类型：</span>number</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>0</div>
      </yz-collapse-item>
      <yz-collapse-item title="max" name="5">
        <div><span class="attribute-title">用处：</span>用于控制进度条最大值</div>
        <div><span class="attribute-title">类型：</span>number</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>100</div>
      </yz-collapse-item>
      <yz-collapse-item title="step" name="6">
        <div><span class="attribute-title">用处：</span>用于控制每次增加减少步数</div>
        <div><span class="attribute-title">类型：</span>number</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>-</div>
      </yz-collapse-item>
    </yz-collapse>        
  </div>
</template>

<script>
import {commonMixins}  from '@/mixins/index.js'
export default {
  name: 'sliderBarWrap',
  mixins: [commonMixins],
  data() {
    return {
      sliderBarOne: 30,
      sliderBarTwo: 10,
      sliderBarThree: 50,
      sliderBarFour: 70,
      sliderBarAttribute: ['1', '2', '3', '4', '5', '6'],
      sliderBarCodeHtml:
`
<template>
  <yz-slider-bar v-model="sliderBarOne" :min="20" :max="40" step="5"></yz-slider-bar>
  <yz-slider-bar v-model="sliderBarTwo"></yz-slider-bar>
  <yz-slider-bar v-model="sliderBarThree" :show-tooltip="false"></yz-slider-bar>
  <yz-slider-bar v-model="sliderBarFour" disabled></yz-slider-bar>
</template>

`,       
      sliderBarCodeJs:
`
export default {
  data() {
    return {
      sliderBarOne: 30,
      sliderBarTwo: 10,
      sliderBarThree: 50,
      sliderBarFour: 70,
    }
  }
}
`,              
    }
  }
}
</script>

<style lang="scss" scope>

</style>