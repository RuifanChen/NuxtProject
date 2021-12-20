<template>
  <div>
    <el-table :data="list.filter(
        (data) =>
          !search || data.name.toLowerCase().includes(search.toLowerCase())||data.id.toString().includes(search.toLowerCase())
      )" style="width: 100%">
      <el-table-column label="Id" prop="id" />
      <el-table-column label="Name" prop="name" />
      <el-table-column label="Price" prop="price" />
      <el-table-column align="right">
        <template #header>
          <el-input v-model="search" size="mini" placeholder="Type to search" />
        </template>
        <template #default="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">
            Edit
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >
            Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { GetProduct } from '@/api/product'
import { onBeforeMount, reactive, ref } from 'vue'
export default {
  name: 'product',
  setup() {
    onBeforeMount(() => {
      getdata()
    })
    const list = ref([])
    const search=ref('')
    const getdata = async () => {
      const { data } = await GetProduct()
      list.value = data
    }
    const handleEdit = (index, row) => {
      console.log(index, row)
    }
    const handleDelete = (index, row) => {
      console.log(index, row)
    }
    return { list,search, handleEdit, handleDelete }
  },
}
</script>
<style lang="less" scoped>
</style>