<template>
  <div class="notice-wrap">
    <yz-tip>notice通知</yz-tip> 

    <yz-tip class="mb-0">notice通知使用方法</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-button type="primary" @click="showTopLeft">左上方显示</yz-button>
          <yz-button type="primary" @click="showTopRight">右上方显示</yz-button>
          <yz-button type="primary" @click="showBottomLeft">左下方显示</yz-button>
          <yz-button type="primary" @click="showBottomRight">右下方显示</yz-button>
        </div>
      </template>
      <div class="show-code">
        <pre>
          <code>
            <div v-text="noticeCode"></div>
          </code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card>   

    <yz-tip class="mb-0">notice属性</yz-tip> 
    <yz-collapse v-model="noticeAttribute">
      <yz-collapse-item title="title" name="1">
        <div><span class="attribute-title">用处：</span>用于显示notice标题内容</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>- </div>
      </yz-collapse-item>
      <yz-collapse-item title="message" name="2">
        <div><span class="attribute-title">用处：</span>用于显示notice内容区域的内容</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>- </div>
      </yz-collapse-item>
      <yz-collapse-item title="position" name="3">
        <div><span class="attribute-title">用处：</span>用于控制notice显示区域</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>top-left / top-right / bottom-left / bottom-right</div>
        <div><span class="attribute-title">默认值：</span>top-right </div>
      </yz-collapse-item>
      <yz-collapse-item title="duration" name="4">
        <div><span class="attribute-title">用处：</span>用于控制notice显示时间</div>
        <div><span class="attribute-title">类型：</span>number</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>1000 </div>
      </yz-collapse-item>
    </yz-collapse>        
  </div>
</template>

<script>
export default {
  name: 'noticeWrap',
  data() {
    return {
      noticeAttribute: [],
      noticeCode:
`
<template>
  <yz-button type="primary" @click="showTopLeft">左上方显示</yz-button>
  <yz-button type="primary" @click="showTopRight">右上方显示</yz-button>
  <yz-button type="primary" @click="showBottomLeft">左下方显示</yz-button>
  <yz-button type="primary" @click="showBottomRight">右下方显示</yz-button>
</template>

export default {
  methods: {
    showTopLeft() {
      this.$notice({
        title: '左上方',
        message: '左上方内容',
        duration: 3000,
        position: 'top-left'
      })
    },
    showTopRight() {
      this.$notice({
        title: '右上方',
        message: '右上方内容',
        duration: 3000,
        position: 'top-right'
      })
    },
    showBottomLeft() {
      this.$notice({
        title: '左下方',
        message: '左下方内容',
        duration: 3000,
        position: 'bottom-left'
      })
    },
    showBottomRight() {
      this.$notice({
        title: '右下方',
        message: '右下方内容',
        duration: 3000,
        position: 'bottom-right'
      })
    }    
  }
}
`,       
    }
  },
  methods: {
    showTopLeft() {
      this.$notice({
        title: '左上方',
        message: '左上方内容',
        duration: 3000,
        position: 'top-left'
      })
    },
    showTopRight() {
      this.$notice({
        title: '右上方',
        message: '右上方内容',
        duration: 3000,
        position: 'top-right'
      })
    },
    showBottomLeft() {
      this.$notice({
        title: '左下方',
        message: '左下方内容',
        duration: 3000,
        position: 'bottom-left'
      })
    },
    showBottomRight() {
      this.$notice({
        title: '右下方',
        message: '右下方内容',
        duration: 3000,
        position: 'bottom-right'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.notice-wrap {
  .container-code {
    .yz-button {
      margin-right: 20px;
    }
  }
}
</style>