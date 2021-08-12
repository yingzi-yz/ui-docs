<template>
  <div class="button-wrap">
    <yz-tip>button按钮</yz-tip>

    <yz-tip class="mb-0">普通按钮用法</yz-tip>
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
      <div>代码片段</div>
      <template v-slot:footer></template>
    </yz-card>

    <yz-tip class="mb-0">朴素按钮用法</yz-tip>
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
      <div>代码片段</div>
      <template v-slot:footer></template>
    </yz-card>

    <yz-tip class="mb-0">圆角按钮用法</yz-tip>
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
      <div>代码片段</div>
      <template v-slot:footer></template>
    </yz-card>

    <yz-tip class="mb-0">圆形按钮用法</yz-tip>
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
      <div>代码片段</div>
      <template v-slot:footer></template>
    </yz-card>

    <yz-tip class="mb-0">禁用按钮用法</yz-tip>
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
      <div>代码片段</div>
      <template v-slot:footer></template>
    </yz-card>
  </div>
</template>

<script>
export default {
  name: 'buttonWrap'
}
</script>

<style lang="scss" scoped>
.button-wrap {
  padding-bottom: 80px;
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