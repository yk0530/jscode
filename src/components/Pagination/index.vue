<template>
  <div class="block">
    <el-pagination
      class="pagination"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageNo"
      :page-size="pageSize"
      :page-count="totalPages"
      layout="prev, pager, next, total"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>

export default {
    name:'Pagination',
    props:['pageSize','pageNo','total','totalPages'],
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.$emit('getPageNo',val)
      }
    },
    data() {
      return {
        currentPage1: 5,
      };
    },
}
</script>

<style>

</style>