<template>
  <div class="container-wrap">
    <yz-tip>container</yz-tip> 

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
      <div>代码片段</div>
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
      <div>代码片段</div>
      <template v-slot:footer>
      </template>
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
      <div>代码片段</div>
      <template v-slot:footer>
      </template>
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
      <div>代码片段</div>
      <template v-slot:footer>
      </template>
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
      <div>代码片段</div>
      <template v-slot:footer>
      </template>
    </yz-card>    
 
    <yz-tip class="mb-0">header属性</yz-tip> 
    <yz-collapse v-model="headerAttribute">
      <yz-collapse-item title="background" name="1">
        <div>背景颜色，默认为空</div>
      </yz-collapse-item>
      <yz-collapse-item title="height" name="2">
        <div>设置高度，默认值100px</div>
      </yz-collapse-item>
    </yz-collapse>

    <yz-tip class="mb-0">aside属性</yz-tip> 
    <yz-collapse v-model="asideAttribute">
      <yz-collapse-item title="background" name="1">
        <div>背景颜色，默认为空</div>
      </yz-collapse-item>
      <yz-collapse-item title="width" name="2">
        <div>设置宽度，默认值100px</div>
      </yz-collapse-item>
    </yz-collapse>

    <yz-tip class="mb-0">footer属性</yz-tip> 
    <yz-collapse v-model="footerAttribute">
      <yz-collapse-item title="background" name="1">
        <div>背景颜色，默认为空</div>
      </yz-collapse-item>
      <yz-collapse-item title="height" name="2">
        <div>设置高度，默认值100px</div>
      </yz-collapse-item>
    </yz-collapse>
  </div>
</template>

<script>
export default {
  name: 'containerWrap',
  data() {
    return {
      headerAttribute: ['1', '2'],
      asideAttribute: ['1', '2'],
      footerAttribute: ['1', '2'],
    }
  }
}
</script>

<style lang="scss" scoped>
.container-wrap {
  padding-bottom: 80px;
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