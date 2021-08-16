<template>
  <div class="login-wrap">
    <yz-tip>login登录框</yz-tip> 

    <yz-tip class="mb-0">login登录框使用方法</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-login></yz-login>
        </div>
      </template>
      <div class="show-code">
        <pre>
          <code>
            <div v-text="loginCode"></div>
          </code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card>  

    <yz-tip class="mb-0">login属性</yz-tip> 
    <yz-collapse v-model="loginAttribute">
      <yz-collapse-item title="first-row" name="1">
        <div><span class="attribute-title">用处：</span>用于显示第一行文本标题内容</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>用户名 </div>
      </yz-collapse-item>
      <yz-collapse-item title="second-row" name="2">
        <div><span class="attribute-title">用处：</span>用于显示第二行文本标题内容</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>密码 </div>
      </yz-collapse-item>
      <yz-collapse-item title="code" name="3">
        <div><span class="attribute-title">用处：</span>用于底部显示验证码按钮</div>
        <div><span class="attribute-title">类型：</span>boolean</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>false </div>
      </yz-collapse-item>
    </yz-collapse>  

    <yz-tip class="mb-0">login事件</yz-tip> 
    <yz-collapse v-model="loginEvent">
      <yz-collapse-item title="login" name="1">
        <div><span class="attribute-title">用处：</span>点击登录按钮触发的事件</div>
      </yz-collapse-item>
      <yz-collapse-item title="getCode" name="2">
        <div><span class="attribute-title">用处：</span>点击验证码按钮触发的事件</div>
      </yz-collapse-item>
    </yz-collapse> 
  </div>
</template>

<script>
export default {
  name: 'loginWrap',
  data() {
    return {
      loginAttribute: [],
      loginEvent: [],
      loginCode:
`
<template>
  <yz-login></yz-login>
</template>
` ,  
    }
  }
}
</script>

<style>

</style>