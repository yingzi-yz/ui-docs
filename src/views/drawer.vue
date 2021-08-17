<template>
  <div class="drawer-wrap">
    <yz-tip>drawer抽屉</yz-tip> 

    <yz-tip class="mb-0">drawer抽屉使用方法</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-button type="primary" @click="showTop">顶部显示</yz-button>
          <yz-button type="primary" @click="showBottom">底部显示</yz-button>
          <yz-button type="primary" @click="showLeft">左边显示</yz-button>
          <yz-button type="primary" @click="showRight">右边显示</yz-button>
          <yz-drawer v-model="drawerData" :position="position"></yz-drawer>
        </div>
      </template>
      <div class="show-code">
        <pre>
          <code>
            <div v-text="drawerCode"></div>
          </code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card> 

    <yz-tip class="mb-0">drawer属性</yz-tip> 
    <yz-collapse v-model="drawerAttribute">
      <yz-collapse-item title="v-model" name="1">
        <div><span class="attribute-title">用处：</span>用于控制drawer显示与隐藏</div>
        <div><span class="attribute-title">类型：</span>boolean</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>false </div>
      </yz-collapse-item>
      <yz-collapse-item title="width" name="2">
        <div><span class="attribute-title">用处：</span>用于控制drawer宽度</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>30% </div>
      </yz-collapse-item>      
      <yz-collapse-item title="height" name="3">
        <div><span class="attribute-title">用处：</span>用于控制drawer高度</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>30% </div>
      </yz-collapse-item>      
      <yz-collapse-item title="position" name="4">
        <div><span class="attribute-title">用处：</span>用于控制drawer出现位置</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>right </div>
      </yz-collapse-item>      
    </yz-collapse>  

    <yz-tip class="mb-0">drawer插槽</yz-tip> 
    <yz-collapse v-model="drawerSlots">
      <yz-collapse-item title="header" name="1">
        <div><span class="attribute-title">用处：</span>标题区域的内容</div>
      </yz-collapse-item>
    </yz-collapse>  
  </div>
</template>

<script>
export default {
  name: 'drawerWrap',
  data() {
    return {
      drawerData: false,
      position: '',
      drawerAttribute: ['1', '2', '3', '4'],
      drawerSlots: ['1'],
      drawerCode:
`
<template>
  <yz-button type="primary" @click="showTop">顶部显示</yz-button>
  <yz-button type="primary" @click="showBottom">底部显示</yz-button>
  <yz-button type="primary" @click="showLeft">左边显示</yz-button>
  <yz-button type="primary" @click="showRight">右边显示</yz-button>
  <yz-drawer v-model="drawerData" :position="position"></yz-drawer>
</template>

export default {
  data() {
    return {
      drawerData: false,
      position: '',
    }
  }
  methods: {
    showTop() {
      this.drawerData = true;
      this.position = 'top';
    },
    showBottom() {
      this.drawerData = true;
      this.position = 'bottom';      
    },
    showLeft() {
      this.drawerData = true;
      this.position = 'left';      
    },
    showRight() {
      this.drawerData = true;
      this.position = 'right';      
    }    
  }
}
` ,       
    }
  },
  methods: {
    showTop() {
      this.drawerData = true;
      this.position = 'top';
    },
    showBottom() {
      this.drawerData = true;
      this.position = 'bottom';      
    },
    showLeft() {
      this.drawerData = true;
      this.position = 'left';      
    },
    showRight() {
      this.drawerData = true;
      this.position = 'right';      
    }
  }
}
</script>

<style lang="scss" scoped>
.drawer-wrap {
  .container-code {
    .yz-button {
      margin-right: 20px;
    }
  }
}
</style>