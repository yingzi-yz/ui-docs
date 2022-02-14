<template>
  <div class="table-list-wrap">
    <yz-tip>tableList表格</yz-tip> 

    <yz-tip class="mb-0">tableList表格使用方法</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-table-list :table-data="tableData" row-type-name="checkAttruibute">
            <template slot-scope="scope">
              <yz-table-item row-type="num"></yz-table-item>
              <yz-table-item row-type="checkbox"></yz-table-item>
              <yz-table-item row-value="date" label="地址"></yz-table-item>
              <yz-table-item row-value="address" label="日期"></yz-table-item>
              <yz-table-item row-value="name" label="姓名"></yz-table-item>
              <yz-table-item label="操作">
                <template> 
                  <yz-tag radius="15px" closable label-text="文字" @close="currentRow(scope.row)" ></yz-tag>
                </template> 
              </yz-table-item>        
            </template>
          </yz-table-list>
        </div>
      </template>
      <div class="show-code">    
        <pre class="line-numbers">
          <code class="language-xml line-numbers" v-text="tableListCodeHtml"></code>
        </pre>
        <pre class="line-numbers">
          <code class="language-javascript line-numbers" v-text="tableListCodeJs"></code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card> 

    <yz-tip class="mb-0">tableList属性</yz-tip> 
    <yz-collapse v-model="tableListAttribute">
      <yz-collapse-item title="tableData" name="1">
        <div><span class="attribute-title">用处：</span>用于显示table数据</div>
        <div><span class="attribute-title">类型：</span>array</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>[]</div>
      </yz-collapse-item>
      <yz-collapse-item title="rowTypeName" name="2">
        <div><span class="attribute-title">用处：</span>用于设置有复选框的时候，绑定的复选框key值，否则会默认在列表新加一个check属性值</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>check</div>
      </yz-collapse-item>
    </yz-collapse>    

    <yz-tip class="mb-0">tableItem属性</yz-tip> 
    <yz-collapse v-model="tableItemAttribute">
      <yz-collapse-item title="rowValue" name="1">
        <div><span class="attribute-title">用处：</span>用于指定table列数据来源</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>-</div>
      </yz-collapse-item>
      <yz-collapse-item title="label" name="2">
        <div><span class="attribute-title">用处：</span>用于指定table列首行名称</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>-</div>
      </yz-collapse-item>
      <yz-collapse-item title="rowType" name="3">
        <div><span class="attribute-title">用处：</span>用于指定table列类型</div>
        <div><span class="attribute-title">类型：</span>string / number</div>
        <div><span class="attribute-title">可选值：</span>checkbox / num</div>
        <div><span class="attribute-title">默认值：</span>-</div>
      </yz-collapse-item>
    </yz-collapse>    

    <yz-tip class="mb-0">tableList插槽</yz-tip> 
    <yz-collapse v-model="tableListSlots">
      <yz-collapse-item title="slot-scope=scope" name="1">
        <div><span class="attribute-title">用处：</span>获取当前行内容</div>
      </yz-collapse-item>
    </yz-collapse>    
  </div>
</template>

<script>
import {commonMixins}  from '@/mixins/index.js'
export default {
  name: 'tableListWrap',
  mixins: [commonMixins],
  data() {
    return {
      tableData: [{
        id: 1,
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        checkAttruibute: false,
      }, {
        id: 2,
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        checkAttruibute: false,
      }, {
        id: 3,
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        checkAttruibute: false,
      }, {
        id: 4,
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        checkAttruibute: false,
      }],
      tableListAttribute: ['1', '2'],
      tableListSlots: ['1'],
      tableItemAttribute: ['1', '2', '3'],
      tableListCodeHtml:
`
<template>
  <yz-table-list :table-data="tableData" row-type-name="checkAttruibute">
    <template slot-scope="scope">
      <yz-table-item row-type="num"></yz-table-item>
      <yz-table-item row-type="checkbox"></yz-table-item>
      <yz-table-item row-value="date" label="地址"></yz-table-item>
      <yz-table-item row-value="address" label="日期"></yz-table-item>
      <yz-table-item row-value="name" label="姓名"></yz-table-item>
      <yz-table-item label="操作">
        <template> 
          <yz-tag radius="15px" closable label-text="文字" @close="currentRow(scope.row)" ></yz-tag>
        </template> 
      </yz-table-item>        
    </template>
  </yz-table-list>
</template>
` ,  
      tableListCodeJs:
`
export default {
  data() {
    return {
      tableData: [{
        id: 1,
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        checkAttruibute: false,
      }, {
        id: 2,
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        checkAttruibute: false,
      }, {
        id: 3,
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        checkAttruibute: false,
      }, {
        id: 4,
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        checkAttruibute: false,
      }]
    }
  }
  methods: {
    currentRow(row) {
      this.$message({
        type: 'error',
        message: row
      })
    }
  }
}
` ,  
    }
  },
  methods: {
    currentRow(row) {
      this.$message({
        type: 'error',
        message: row
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>