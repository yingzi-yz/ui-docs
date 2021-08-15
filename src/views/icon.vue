<template>
  <div class="icon-wrap">
    <yz-tip>icon图标</yz-tip>

    <yz-tip class="mb-0">icon图标使用方法</yz-tip>
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <i class="yz-icon-me-c"></i>
          <i class="yz-icon-love-c"></i>
          <i class="yz-icon-people-c"></i>
        </div>
      </template>
      <div>代码片段</div>
      <template v-slot:footer></template>
    </yz-card>

    <yz-tip class="mb-0">icon图标集合</yz-tip>
    <div class="icon-collect">
      <div v-for="(v, i) in iconList" :key="i" class="icon-item">
        <i :class="v"></i>
        <div class="name">{{v}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'iconWrap',
  data() {
    return {
      iconList: ['yz-icon-love-c', 'yz-icon-me-c', 'yz-icon-people-c', 'yz-icon-close-c', 'yz-icon-download-c', 'yz-icon-about-c', 
      'yz-icon-scan-c', 'yz-icon-setting-c', 'yz-icon-statistics-c', 'yz-icon-full-screen-c', 'yz-icon-delete-c', 'yz-icon-lock-c',
      'yz-icon-car-c', 'yz-icon-gold-c', 'yz-icon-calendar-c', 'yz-icon-picture-c', 'yz-icon-computer-c', 'yz-icon-address-book-c',
      'yz-icon-to-top', 'yz-icon-to-bottom', 'yz-icon-show', 'yz-icon-hide', 'yz-icon-star', 'yz-icon-share', 'yz-icon-more',
      'yz-icon-clock', 'yz-icon-comment', 'yz-icon-top', 'yz-icon-bottom', 'yz-icon-left', 'yz-icon-right', 'yz-icon-cancel', 
      'yz-icon-selection', 'yz-icon-prompt', 'yz-icon-close', 'yz-icon-nickname', 'yz-icon-add', 'yz-icon-favorite', 'yz-icon-fabulous',
      'yz-icon-file', 'yz-icon-map', 'yz-icon-refresh', 'yz-icon-search', 'yz-icon-select', 'yz-icon-setting', 'yz-icon-telephone',
      'yz-icon-upload']
    }
  }
}
</script>

<style lang="scss" scoped>
.icon-wrap {
  .container-code {
    i {
      font-size: 26px;
      margin-right: 16px;
    }
  }
  .yz-card {
    margin-bottom: 33px!important;
  }
  .icon-collect {
    display: flex;
    flex-wrap: wrap;
    border-top: 1px solid #ccc;
    border-left: 1px solid #ccc;
    .icon-item {
      width: 20%;
      height: 97px;
      padding: 13px 10px;
      text-align: center;
      border-right: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      box-sizing: border-box;
      &:hover {
        color: #0a85f8;
      }
      i {
        display: block;
        height: 41px;
        line-height: 41px;
        font-size: 26px;
      }
    }
  }
}
</style>