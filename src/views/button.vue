<template>
  <div class="button-wrap">
    <yz-tip>button按钮</yz-tip>

    <yz-tip class="mb-0">普通按钮使用方法</yz-tip>
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <div class="row">
            <yz-button>默认</yz-button>
            <yz-button type="primary">primary</yz-button>
            <yz-button type="success">success</yz-button>
            <yz-button type="info">info</yz-button>
            <yz-button type="warning">warning</yz-button>
            <yz-button type="danger">danger</yz-button>
          </div>
        </div>
      </template>
      <div class="show-code">
        <pre>
          <code>
            <div v-text="buttonCodeType"></div>
          </code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card>

    <yz-tip class="mb-0">朴素按钮使用方法</yz-tip>
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <div class="row">
            <yz-button>默认</yz-button>
            <yz-button type="primary" plain>primary</yz-button>
            <yz-button type="success" plain>success</yz-button>
            <yz-button type="info" plain>info</yz-button>
            <yz-button type="warning" plain>warning</yz-button>
            <yz-button type="danger" plain>danger</yz-button>
          </div>
        </div>
      </template>
      <div class="show-code">
        <pre>
          <code>
            <div v-text="buttonCodePlain"></div>
          </code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card>

    <yz-tip class="mb-0">圆角按钮使用方法</yz-tip>
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <div class="row">
            <yz-button round>默认</yz-button>
            <yz-button type="primary" plain round>primary</yz-button>
            <yz-button type="success" plain round>success</yz-button>
            <yz-button type="info" plain round>info</yz-button>
            <yz-button type="warning" plain round>warning</yz-button>
            <yz-button type="danger" plain round>danger</yz-button>
          </div>
        </div>
      </template>
      <div class="show-code">
        <pre>
          <code>
            <div v-text="buttonCodeRound"></div>
          </code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card>

    <yz-tip class="mb-0">圆形按钮使用方法</yz-tip>
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <div class="row">
            <yz-button icon="yz-icon-share" circle></yz-button>
            <yz-button type="primary" icon="yz-icon-top" circle></yz-button>
            <yz-button type="success" icon="yz-icon-bottom" circle></yz-button>
            <yz-button type="info" icon="yz-icon-left" circle></yz-button>
            <yz-button type="warning" icon="yz-icon-right" circle></yz-button>
            <yz-button type="danger" icon="yz-icon-star" circle></yz-button>
          </div>
        </div>
      </template>
      <div class="show-code">
        <pre>
          <code>
            <div v-text="buttonCodeCircle"></div>
          </code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card>

    <yz-tip class="mb-0">禁用按钮使用方法</yz-tip>
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <div class="row">
            <yz-button disabled>默认</yz-button>
            <yz-button type="primary" disabled>primary</yz-button>
            <yz-button type="success" disabled>success</yz-button>
            <yz-button type="info" disabled>info</yz-button>
            <yz-button type="warning" disabled>warning</yz-button>
            <yz-button type="danger" disabled>danger</yz-button>
          </div>
        </div>
      </template>
      <div class="show-code">
        <pre>
          <code>
            <div v-text="buttonCodeDisabled"></div>
          </code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card>

    <yz-tip class="mb-0">button属性</yz-tip> 
    <yz-collapse v-model="buttonAttribute">
      <yz-collapse-item title="type" name="1">
        <div><span class="attribute-title">用处：</span>用于设置按钮类型</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>primary / success / info / warning / danger </div>
        <div><span class="attribute-title">默认值：</span>- </div>
      </yz-collapse-item>
      <yz-collapse-item title="plain" name="2">
        <div><span class="attribute-title">用处：</span>用于设置朴素按钮</div>
        <div><span class="attribute-title">类型：</span>boolean</div>
        <div><span class="attribute-title">可选值：</span>- </div>
        <div><span class="attribute-title">默认值：</span>false </div>
      </yz-collapse-item>
      <yz-collapse-item title="round" name="3">
        <div><span class="attribute-title">用处：</span>用于设置圆角按钮</div>
        <div><span class="attribute-title">类型：</span>boolean</div>
        <div><span class="attribute-title">可选值：</span>- </div>
        <div><span class="attribute-title">默认值：</span>false </div>
      </yz-collapse-item>
      <yz-collapse-item title="circle" name="4">
        <div><span class="attribute-title">用处：</span>用于设置圆形按钮</div>
        <div><span class="attribute-title">类型：</span>boolean</div>
        <div><span class="attribute-title">可选值：</span>- </div>
        <div><span class="attribute-title">默认值：</span>false </div>
      </yz-collapse-item>
      <yz-collapse-item title="icon" name="5">
        <div><span class="attribute-title">用处：</span>用于设置图标</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>- </div>
        <div><span class="attribute-title">默认值：</span>- </div>
      </yz-collapse-item>
      <yz-collapse-item title="disabled" name="6">
        <div><span class="attribute-title">用处：</span>用于设置是否禁用</div>
        <div><span class="attribute-title">类型：</span>boolean</div>
        <div><span class="attribute-title">可选值：</span>- </div>
        <div><span class="attribute-title">默认值：</span>false </div>
      </yz-collapse-item>
    </yz-collapse>
  </div>
</template>

<script>
export default {
  name: 'buttonWrap',
  data() {
    return {
      buttonAttribute: ['1', '2', '3', '4', '5', '6'],
      buttonCodeType: 
`
<template>
  <yz-button>默认</yz-button>
  <yz-button type="primary">primary</yz-button>
  <yz-button type="success">success</yz-button>
  <yz-button type="info">info</yz-button>
  <yz-button type="warning">warning</yz-button>
  <yz-button type="danger">danger</yz-button>
</template>
`,
      buttonCodePlain:
`
<template>
  <yz-button>默认</yz-button>
  <yz-button type="primary" plain>primary</yz-button>
  <yz-button type="success" plain>success</yz-button>
  <yz-button type="info" plain>info</yz-button>
  <yz-button type="warning" plain>warning</yz-button>
  <yz-button type="danger" plain>danger</yz-button>
</template>
`,       
      buttonCodeRound:
`
<template>
  <yz-button round>默认</yz-button>
  <yz-button type="primary" plain round>primary</yz-button>
  <yz-button type="success" plain round>success</yz-button>
  <yz-button type="info" plain round>info</yz-button>
  <yz-button type="warning" plain round>warning</yz-button>
  <yz-button type="danger" plain round>danger</yz-button>
</template>
`,   
      buttonCodeCircle: 
`
<template>
  <yz-button icon="yz-icon-share" circle></yz-button>
  <yz-button type="primary" icon="yz-icon-top" circle></yz-button>
  <yz-button type="success" icon="yz-icon-bottom" circle></yz-button>
  <yz-button type="info" icon="yz-icon-left" circle></yz-button>
  <yz-button type="warning" icon="yz-icon-right" circle></yz-button>
  <yz-button type="danger" icon="yz-icon-star" circle></yz-button>
</template>
`,      
      buttonCodeDisabled:  
`
<template>
  <yz-button disabled>默认</yz-button>
  <yz-button type="primary" disabled>primary</yz-button>
  <yz-button type="success" disabled>success</yz-button>
  <yz-button type="info" disabled>info</yz-button>
  <yz-button type="warning" disabled>warning</yz-button>
  <yz-button type="danger" disabled>danger</yz-button>
</template>
`,              
    }
  }
}
</script>

<style lang="scss" scoped>
.button-wrap {
  .yz-card {
    margin-bottom: 33px!important;
  }
  .yz-collapse {
    margin-bottom: 33px!important;
  }
  .row {
    margin-bottom: 16px;
    .yz-button {
      margin-right: 16px;
    }
  }
}
</style>