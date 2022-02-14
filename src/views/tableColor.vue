<template>
  <div class="table-color-wrap">
    <yz-tip>tableColor进度表格</yz-tip>

    <yz-tip class="mb-0">tableColor进度表格使用方法</yz-tip>
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-table-color :list="tableList" :week-list="weekList"></yz-table-color>
        </div>
      </template>
      <div class="show-code">
        <pre class="line-numbers">
          <code class="language-xml line-numbers" v-text="tableColorCodeHtml"></code>
        </pre>
        <pre class="line-numbers">
          <code class="language-javascript line-numbers" v-text="tableColorCodeJs"></code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card>

    <yz-tip class="mb-0">tableColor属性</yz-tip> 
    <yz-collapse v-model="tableColorAttribute">
      <yz-collapse-item title="list" name="1">
        <div><span class="attribute-title">用处：</span>用于展示数据的列表</div>
        <div><span class="attribute-title">类型：</span>array</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>[]</div>
      </yz-collapse-item>
      <yz-collapse-item title="weekList" name="2">
        <div><span class="attribute-title">用处：</span>用于展示顶部横列的列表</div>
        <div><span class="attribute-title">类型：</span>array</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>[]</div>
      </yz-collapse-item>
    </yz-collapse>        
  </div>
</template>

<script>
import {commonMixins}  from '@/mixins/index.js'
export default {
  name: 'tableColorWrap',
  mixins: [commonMixins],
  data() {
    return {
      tableList: [{
        startTime: '09:00',
        endTime: '10:30',
        id: 1,
        state: 1,
        courseName: '语文',
        weekId: 1,
      },{
        startTime: '12:00',
        endTime: '15:00',
        id: 2,
        state: 4,
        courseName: '数学',
        weekId: 1,
      },{
        startTime: '13:00',
        endTime: '15:00',
        id: 3,
        state: 3,
        courseName: '英语',
        weekId: 3
      },{
        startTime: '09:30',
        endTime: '12:00',
        id: 4,
        state: 2,
        courseName: '历史',
        weekId: 2
      },{
        startTime: '14:00',
        endTime: '17:00',
        id: 4,
        state: 0,
        courseName: '地理',
        weekId: 2
      }],
      weekList: [{
				weekName:"一",
        id: 1,
      },{
				weekName:"二",
        id: 2,
      },{
				weekName:"三",
        id: 3,
      }],
      tableColorAttribute: ['1', '2'],
      tableColorCodeHtml:
`
<template>
  <yz-table-color :list="tableList" :week-list="weekList"></yz-table-color>
</template>

`,       
      tableColorCodeJs:
`
export default {
  data() {
    return {
      tableList: [{
        startTime: '09:00',
        endTime: '10:30',
        id: 1,
        state: 1,
        courseName: '语文',
        weekId: 1,
      },{
        startTime: '12:00',
        endTime: '15:00',
        id: 2,
        state: 4,
        courseName: '数学',
        weekId: 1,
      },{
        startTime: '13:00',
        endTime: '15:00',
        id: 3,
        state: 3,
        courseName: '英语',
        weekId: 3
      },{
        startTime: '09:30',
        endTime: '12:00',
        id: 4,
        state: 2,
        courseName: '历史',
        weekId: 2
      },{
        startTime: '14:00',
        endTime: '17:00',
        id: 4,
        state: 0,
        courseName: '地理',
        weekId: 2
      }],
      weekList: [{
				weekName:"一",
        id: 1,
      },{
				weekName:"二",
        id: 2,
      },{
				weekName:"三",
        id: 3,
      }],
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