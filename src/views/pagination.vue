<template>
  <div class="pagination-wrap">
    <yz-tip>pagination分页</yz-tip> 

    <yz-tip class="mb-0">pagination分页使用方法</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-pagination :total="60" :page-size="20"></yz-pagination>
        </div>
      </template>
      <div class="show-code">
        <pre>
          <code>
            <div v-text="paginationCode"></div>
          </code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card>     

    <yz-tip class="mb-0">pagination属性</yz-tip> 
    <yz-collapse v-model="paginationAttribute">
      <yz-collapse-item title="total" name="1">
        <div><span class="attribute-title">用处：</span>用于显示总数量</div>
        <div><span class="attribute-title">类型：</span>number</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>- </div>
      </yz-collapse-item>
      <yz-collapse-item title="page-size" name="2">
        <div><span class="attribute-title">用处：</span>用于控制每页显示条数</div>
        <div><span class="attribute-title">类型：</span>number</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>10 </div>
      </yz-collapse-item>      
    </yz-collapse>     

    <yz-tip class="mb-0">pagination事件</yz-tip> 
    <yz-collapse v-model="paginationEvent">
      <yz-collapse-item title="changePage" name="1">
        <div><span class="attribute-title">用处：</span>切换页数触发的事件</div>
      </yz-collapse-item>
    </yz-collapse>     
  </div>
</template>

<script>
export default {
  name: 'paginationWrap',
  data() {
    return {
      paginationAttribute: ['1', '2'],
      paginationEvent: ['1'],
      paginationCode:
`
<template>
  <yz-pagination :total="60" :page-size="20"></yz-pagination>
</template>
`,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>