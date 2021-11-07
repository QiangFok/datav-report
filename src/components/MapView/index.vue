<template>
  <div class="map-view">
    <div class="left">
      <b-map-scatter/>
    </div>
    <div class="right">
      <el-card shadow="hover">
        <template #header>
          <div class="title">用户月同比增上</div>
        </template>
        <template>
          <div class="chart-wrapper">
            <liquid-fill/>
          </div>
        </template>
      </el-card>

      <el-card shadow="hover">
        <template #header>
          <div class="title">热门搜索</div>
        </template>
        <template>
          <div class="chart-wrapper">
            <word-cloud/>
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
  import BMapScatter from '../../components/BMapScatter'
  import LiquidFill from '../../components/LiquidFill'
  import WordCloud from '../../components/WordCloud'

  export default {
    name: "index",
    components: {
      WordCloud,
      BMapScatter,
      LiquidFill
    }
  }
</script>

<style lang="scss" scoped>
  .map-view {
    display: flex;
    margin-top: 20px;

    .left {
      flex: 0 0 80%;
      width: 80%;
      height: 600px;
      background-color: #fff;
    }

    .right {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 20px;

      .title {
        display: flex;
        align-items: center;
        height: 60px;
        box-sizing: border-box;
        border-bottom: 1px solid #eeeeee;
        font-size: 14px;
        font-weight: 500;
        padding: 0 0 0 20px;
      }

      .chart-wrapper {
        width: 100%;
        height: 190px;
      }
    }
  }
</style>
