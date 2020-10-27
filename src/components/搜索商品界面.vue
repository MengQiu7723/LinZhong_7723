<template>
  <div>
    <Top></Top>
  </div>
  <!-- <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
    </el-container> -->
</template>

<script>
import Top from "../components/top.vue";

export default {
  data() {
    return {};
  },
  components: {
    Top,
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
