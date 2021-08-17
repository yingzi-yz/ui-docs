<template>
  <div class="input-wrap">
    <yz-tip>input输入框</yz-tip>

    <yz-tip class="mb-0">input输入框使用方法</yz-tip>
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-input v-model="inputDataFirst"></yz-input>
        </div>
      </template>
      <div class="show-code">
        <pre>
          <code>
            <div v-text="inputCode"></div>
          </code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card>

    <yz-tip class="mb-0">input输入框禁用状态</yz-tip>
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-input v-model="inputDataSecond" disabled></yz-input>
        </div>
      </template>
      <div class="show-code">
        <pre>
          <code>
            <div v-text="inputCodeDisabled"></div>
          </code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card>

    <yz-tip class="mb-0">input属性</yz-tip> 
    <yz-collapse v-model="inputAttribute">
      <yz-collapse-item title="placeholder" name="1">
        <div><span class="attribute-title">用处：</span>用于显示输入框初始文字</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>- </div>
      </yz-collapse-item>
      <yz-collapse-item title="type" name="2">
        <div><span class="attribute-title">用处：</span>用于设置文本框类型</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>原生input类型 </div>
        <div><span class="attribute-title">默认值：</span>- </div>
      </yz-collapse-item>
      <yz-collapse-item title="name" name="3">
        <div><span class="attribute-title">用处：</span>用于原生name属性</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>- </div>
        <div><span class="attribute-title">默认值：</span>- </div>
      </yz-collapse-item>
      <yz-collapse-item title="disabled" name="4">
        <div><span class="attribute-title">用处：</span>用于设置文本框是否禁用</div>
        <div><span class="attribute-title">类型：</span>boolean</div>
        <div><span class="attribute-title">可选值：</span>- </div>
        <div><span class="attribute-title">默认值：</span>false </div>
      </yz-collapse-item>
      <yz-collapse-item title="v-model" name="5">
        <div><span class="attribute-title">用处：</span>用于双向绑定数据的值</div>
        <div><span class="attribute-title">类型：</span>-</div>
        <div><span class="attribute-title">可选值：</span>- </div>
        <div><span class="attribute-title">默认值：</span>- </div>
      </yz-collapse-item>
      <yz-collapse-item title="clearable" name="6">
        <div><span class="attribute-title">用处：</span>用于设置文本框是否可以清除文本内容</div>
        <div><span class="attribute-title">类型：</span>boolean</div>
        <div><span class="attribute-title">可选值：</span>- </div>
        <div><span class="attribute-title">默认值：</span>false </div>
      </yz-collapse-item>
      <yz-collapse-item title="show-password" name="7">
        <div><span class="attribute-title">用处：</span>用于设置可以切换文本框显示隐藏密码</div>
        <div><span class="attribute-title">类型：</span>boolean</div>
        <div><span class="attribute-title">可选值：</span>- </div>
        <div><span class="attribute-title">默认值：</span>false </div>
      </yz-collapse-item>
    </yz-collapse>        
  </div>
</template>

<script>
export default {
  name: 'inputWrap',
  data() {
    return {
      inputDataFirst: '',
      inputDataSecond: '',
      inputAttribute: ['1', '2', '3', '4', '5', '6', '7'],
      inputCode:
`
<template>
  <yz-input v-model="inputDataFirst"></yz-input>
</template>

export default {
  data() {
    return {
      inputDataFirst: '',
    }
  }
}
`,       
      inputCodeDisabled:
`
<template>
  <yz-input v-model="inputDataSecond" disabled></yz-input>
</template>

export default {
  data() {
    return {
      inputDataSecond: '',
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