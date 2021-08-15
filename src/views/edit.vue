<template>
  <div class="edit-wrap">
    <yz-tip>edit编辑框</yz-tip> 

    <yz-tip class="mb-0">edit编辑框使用方法</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-edit v-model="editData" content></yz-edit>
        </div>
      </template>
      <div class="show-code">
        <pre>
          <code>
            <div v-text="editCode"></div>
          </code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card> 

    <yz-tip class="mb-0">edit-group编辑框使用方法</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-edit-group only>
            <yz-edit v-model="editDataGroupDataFirst" content></yz-edit>
            <yz-edit v-model="editDataGroupDataSecond"></yz-edit>
          </yz-edit-group>
        </div>
      </template>
      <div class="show-code">
        <pre>
          <code>
            <div v-text="editGroupCode"></div>
          </code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card> 

    <yz-tip class="mb-0">edit属性</yz-tip> 
    <yz-collapse v-model="editAttribute">
      <yz-collapse-item title="v-model" name="1">
        <div><span class="attribute-title">用处：</span>用于双向绑定edit值</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>- </div>
      </yz-collapse-item>
      <yz-collapse-item title="content" name="2">
        <div><span class="attribute-title">用处：</span>用于当文本删除完dom是否占空间</div>
        <div><span class="attribute-title">类型：</span>boolean</div>
        <div><span class="attribute-title">可选值：</span>- </div>
        <div><span class="attribute-title">默认值：</span>false </div>
      </yz-collapse-item>
    </yz-collapse>  

    <yz-tip class="mb-0">edit-group属性</yz-tip> 
    <yz-collapse v-model="editGroupAttribute">
      <yz-collapse-item title="only" name="1">
        <div><span class="attribute-title">用处：</span>用于控制是否只能显示一个编辑框</div>
        <div><span class="attribute-title">类型：</span>boolean</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>false </div>
      </yz-collapse-item>
    </yz-collapse>      
  </div>
</template>

<script>
export default {
  name: 'editWrap',
  data() {
    return {
      editData: '双击更改内容',
      editDataGroupDataFirst: '双击更改内容',
      editDataGroupDataSecond: '双击更改内容',
      editAttribute: [],
      editGroupAttribute: [],
      editCode:
`
<template>
  <yz-edit v-model="editData" content></yz-edit>
</template>

export default {
  data() {
    return {
      editData: '双击更改内容',
    }
  }
}
`,      
      editGroupCode:
`
<template>
  <yz-edit-group only>
    <yz-edit v-model="editDataGroupDataFirst" content></yz-edit>
    <yz-edit v-model="editDataGroupDataSecond"></yz-edit>
  </yz-edit-group>
</template>

export default {
  data() {
    return {
      editDataGroupDataFirst: '双击更改内容',
      editDataGroupDataSecond: '双击更改内容',
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