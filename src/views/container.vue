<template>
  <div class="container-wrap">
    <yz-tip>container布局容器</yz-tip> 

    <yz-tip class="mb-0">header-main布局</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-container>
            <yz-header background="skyblue" height="50px">header</yz-header>
            <yz-main>main</yz-main>
          </yz-container>
        </div>
      </template>
      <div class="show-code">       
        <pre class="line-numbers">
          <code class="language-xml line-numbers" v-text="containerCodeOne"></code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card>

    <yz-tip class="mb-0">header-main-footer布局</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-container>
            <yz-header background="skyblue" height="50px">header</yz-header>
            <yz-main>main</yz-main>
            <yz-footer background="#6c8fff" height="50px">footer</yz-footer>
          </yz-container>
        </div>
      </template>
      <div class="show-code">       
        <pre class="line-numbers">
          <code class="language-xml line-numbers" v-text="containerCodeTwo"></code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card>

    <yz-tip class="mb-0">aside-main布局</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-container>
            <yz-aside background="#008fca" width="160px">aside</yz-aside>
            <yz-main>main</yz-main>
          </yz-container>
        </div>
      </template>
      <div class="show-code">       
        <pre class="line-numbers">
          <code class="language-xml line-numbers" v-text="containerCodeThree"></code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card>

    <yz-tip class="mb-0">header-aside-main布局</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-container>
            <yz-header background="skyblue" height="50px">header</yz-header>
            <yz-container>
              <yz-aside background="#008fca" width="160px">aside</yz-aside>
              <yz-main>main</yz-main>
            </yz-container>
          </yz-container>
        </div>
      </template>
      <div class="show-code">       
        <pre class="line-numbers">
          <code class="language-xml line-numbers" v-text="containerCodeFour"></code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card>    

    <yz-tip class="mb-0">header-aside-main-footer布局</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-container>
            <yz-header background="skyblue" height="50px">header</yz-header>
            <yz-container>
              <yz-aside background="#008fca" width="160px">aside</yz-aside>
              <yz-main>main</yz-main>
            </yz-container>
            <yz-footer background="#6c8fff" height="50px">footer</yz-footer>
          </yz-container>
        </div>
      </template>
      <div class="show-code">      
        <pre class="line-numbers">
          <code class="language-xml line-numbers" v-text="containerCodeFive"></code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card>    
 
    <yz-tip class="mb-0">container属性</yz-tip> 
    <yz-collapse v-model="containerAttribute">
      <yz-collapse-item title="height" name="1">
        <div><span class="attribute-title">用处：</span>用于设置高度</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>100% </div>
      </yz-collapse-item>
    </yz-collapse>

    <yz-tip class="mb-0">header属性</yz-tip> 
    <yz-collapse v-model="headerAttribute">
      <yz-collapse-item title="height" name="1">
        <div><span class="attribute-title">用处：</span>用于设置高度</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>100px </div>
      </yz-collapse-item>
      <yz-collapse-item title="background" name="2">
        <div><span class="attribute-title">用处：</span>用于设置背景颜色</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>- </div>
      </yz-collapse-item>
    </yz-collapse>

    <yz-tip class="mb-0">aside属性</yz-tip> 
    <yz-collapse v-model="asideAttribute">
      <yz-collapse-item title="width" name="1">
        <div><span class="attribute-title">用处：</span>用于设置宽度</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>100px </div>
      </yz-collapse-item>
      <yz-collapse-item title="background" name="2">
        <div><span class="attribute-title">用处：</span>用于设置背景颜色</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>- </div>
      </yz-collapse-item>
    </yz-collapse>

    <yz-tip class="mb-0">footer属性</yz-tip> 
    <yz-collapse v-model="footerAttribute">
      <yz-collapse-item title="height" name="1">
        <div><span class="attribute-title">用处：</span>用于设置高度</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>100px </div>
      </yz-collapse-item>
      <yz-collapse-item title="background" name="2">
        <div><span class="attribute-title">用处：</span>用于设置背景颜色</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>- </div>
      </yz-collapse-item>
    </yz-collapse>

    <yz-tip class="mb-0">main属性</yz-tip> 
    <yz-collapse v-model="mainAttribute">
      <yz-collapse-item title="background" name="1">
        <div><span class="attribute-title">用处：</span>用于设置背景颜色</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>- </div>
      </yz-collapse-item>
    </yz-collapse>
  </div>
</template>

<script>
import {commonMixins}  from '@/mixins/index.js'
export default {
  name: 'containerWrap',
  mixins: [commonMixins],
  data() {
    return {
      containerAttribute: ['1'],
      headerAttribute: ['1', '2'],
      asideAttribute: ['1', '2'],
      footerAttribute: ['1', '2'],
      mainAttribute: ['1'],
      containerCodeOne: 
`
<template>
  <yz-container>
    <yz-header background="skyblue" height="50px">header</yz-header>
    <yz-main>main</yz-main>
  </yz-container>
</template>
`,      
      containerCodeTwo: 
`
<template>
  <yz-container>
    <yz-header background="skyblue" height="50px">header</yz-header>
    <yz-main>main</yz-main>
    <yz-footer background="#6c8fff" height="50px">footer</yz-footer>
  </yz-container>
</template>
`,          
      containerCodeThree: 
`
<template>
  <yz-container>
    <yz-aside background="#008fca" width="160px">aside</yz-aside>
    <yz-main>main</yz-main>
  </yz-container>
</template>
`,          
      containerCodeFour: 
`
<template>
  <yz-container>
    <yz-header background="skyblue" height="50px">header</yz-header>
    <yz-container>
      <yz-aside background="#008fca" width="160px">aside</yz-aside>
      <yz-main>main</yz-main>
    </yz-container>
  </yz-container>
</template>
`,          
      containerCodeFive: 
`
<template>
  <yz-container>
    <yz-header background="skyblue" height="50px">header</yz-header>
    <yz-container>
      <yz-aside background="#008fca" width="160px">aside</yz-aside>
      <yz-main>main</yz-main>
    </yz-container>
    <yz-footer background="#6c8fff" height="50px">footer</yz-footer>
  </yz-container>
</template>
`,          
    }
  }
}
</script>

<style lang="scss" scoped>
.container-wrap {
  .yz-card {
    margin-bottom: 33px!important;
  }
  .yz-collapse {
    margin-bottom: 33px!important;
  }
}

.container-code {
  height: 200px;
  .yz-aside {
    display: flex;
    justify-content: center;
    align-items: center;    
  }
  .yz-main {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(227, 247, 248);
  }
}
</style>