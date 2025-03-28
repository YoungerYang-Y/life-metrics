<script setup lang="ts">
import VChart, { THEME_KEY } from 'vue-echarts'

use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition,
])

provide(THEME_KEY, 'light')

const option = ref({
  title: {
    text: '水电费',
  },
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    data: ['水费', '电费', '燃气费'],
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: Array.from({ length: 12 }, (_, i) => `${i + 1}月`),
  },
  yAxis: {
    type: 'value',
    name: '单位：元',
  },
  series: [
    {
      name: '水费',
      type: 'line',
      stack: 'Total',
      smooth: true,
      data: [31, 31.13],
    },
    {
      name: '电费',
      type: 'line',
      stack: 'Total',
      smooth: true,
      data: [125.26, 157.79],
    },
    {
      name: '燃气费',
      type: 'line',
      stack: 'Total',
      smooth: true,
      data: [684.32, 1011.47],
    },
  ],
})
</script>

<template>
  <VChart class="chart" :option="option" />
</template>

<style scoped>
.chart {
  height: 800px;
  width: 800px;
}
</style>
