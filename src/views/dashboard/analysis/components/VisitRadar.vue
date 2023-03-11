<template>
  <Card title="销售额" :loading="loading">
    <div ref="chartRef" :style="{ width, height }"></div>
  </Card>
</template>
<script lang="ts" setup>
import { Ref, ref, watch } from 'vue'
import { Card } from 'ant-design-vue'
import { useECharts } from '@/hooks/web/useECharts'
import { propTypes } from '@/utils/propTypes'

const props = defineProps({
  loading: Boolean,
  width: propTypes.string.def('100%'),
  height: propTypes.string.def('300px')
})
const chartRef = ref<HTMLDivElement | null>(null)
const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>)

watch(
  () => props.loading,
  () => {
    if (props.loading) {
      return
    }
    setOptions({
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      title: {
        text: '{a|159,9} {b|1590}',
        textStyle: {
          rich: {
            a: {},
            b: {}
          }
        }
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line',
          showSymbol: false,
          animationEasing: 'bounceInOut',
          animationDuration: 1000
        }
      ]
    })
  },
  { immediate: true }
)
</script>
<style lang="less" scoped>
::v-deep(.ant-card-head) {
  border-bottom: none;
}
</style>
