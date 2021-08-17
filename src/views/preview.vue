<template>
  <div class="preview-wrap">
    <yz-tip>preview预览图片</yz-tip> 

    <yz-tip class="mb-0">preview预览图片使用方法</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-preview :src="previewData" :small-img="smallImg"></yz-preview>
        </div>
      </template>
      <div class="show-code">
        <pre>
          <code>
            <div v-text="previewCode"></div>
          </code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card> 

    <yz-tip class="mb-0">preview属性</yz-tip> 
    <yz-collapse v-model="previewAttribute">
      <yz-collapse-item title="src" name="1">
        <div><span class="attribute-title">用处：</span>图片集合，多张图片需要传array</div>
        <div><span class="attribute-title">类型：</span>string / array</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>- </div>
      </yz-collapse-item>
      <yz-collapse-item title="all-closed" name="2">
        <div><span class="attribute-title">用处：</span>用于控制点击图片是否可以取消显示</div>
        <div><span class="attribute-title">类型：</span>boolean</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>false </div>
      </yz-collapse-item>
      <yz-collapse-item title="small-img" name="3">
        <div><span class="attribute-title">用处：</span>用于控制图片大小</div>
        <div><span class="attribute-title">类型：</span>object</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>- </div>
      </yz-collapse-item>
      <yz-collapse-item title="big-img" name="4">
        <div><span class="attribute-title">用处：</span>用于控制预览图片大小</div>
        <div><span class="attribute-title">类型：</span>object</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>{width: '450px', height: '450px'}</div>
      </yz-collapse-item>
      <yz-collapse-item title="loop" name="5">
        <div><span class="attribute-title">用处：</span>用于控制是否可以重复切换图片</div>
        <div><span class="attribute-title">类型：</span>boolean</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>false</div>
      </yz-collapse-item>
    </yz-collapse>      
  </div>
</template>

<script>
export default {
  name: 'previewWrap',
  data() {
    return {
      previewData: ['https://imgessl.kugou.com/custom/150/20201206/20201206141703862350.jpg',
      'https://imgessl.kugou.com/uploadpic/softhead/240/20210615/20210615094648166.jpg',
      'https://imgessl.kugou.com/uploadpic/softhead/240/20210312/20210312135215227.jpg',
      'https://imgessl.kugou.com/uploadpic/softhead/240/20180515/20180515002522714.jpg',
      'https://imgessl.kugou.com/uploadpic/softhead/240/20190806/20190806163442954.jpg'],
      smallImg: {
        width: '100px',
        height: '100px'
      },
      previewAttribute: ['1', '2', '3', '4', '5'],
      previewCode:
`
<template>
  <yz-preview :src="previewData" :small-img="smallImg"></yz-preview>
</template>

export default {
  data() {
    return {
      previewData: ['https://imgessl.kugou.com/custom/150/20201206/20201206141703862350.jpg',
      'https://imgessl.kugou.com/uploadpic/softhead/240/20210615/20210615094648166.jpg',
      'https://imgessl.kugou.com/uploadpic/softhead/240/20210312/20210312135215227.jpg',
      'https://imgessl.kugou.com/uploadpic/softhead/240/20180515/20180515002522714.jpg',
      'https://imgessl.kugou.com/uploadpic/softhead/240/20190806/20190806163442954.jpg'],
      smallImg: {
        width: '100px',
        height: '100px'
      },
    }
  }
}
`,       
    }
  }
}
</script>

<style lang="scss" scoped>

</style>