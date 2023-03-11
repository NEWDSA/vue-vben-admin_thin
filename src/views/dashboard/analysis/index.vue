<template>
  <div class="p-4">
    <div class="flex bottom-1 relative" style="border: 1px solid gray">
      <div style="border: 1px solid pink; color: rgb(37 99 235); font-size: 30px">数据全览</div>
      <div class="bg-white" style="border: 1px solid black; width: 300px; border-radius: 12px 0 0 12px"></div>
      <div class="bg-white" style="border: 1px solid black; width: 300px; border-radius: 0 12px 12px 0">
        <Input class="h-full" style="width: 280px">
          <template #prefix>
            <Icon size="30" icon="material-symbols:calendar-today-outline-rounded" />
          </template>
        </Input>
      </div>
      <div class="mr-auto border-1 border-cyan-50">
        <Button size="large" block class="mt-4 enter-x"> aa </Button>
      </div>
    </div>
    <!-- <GrowCard :loading="loading" class="enter-y border-b-none" /> -->
    <!-- <SiteAnalysis class="!my-4 enter-y" :loading="loading" /> -->
    <div class="md:flex enter-y">
      <VisitRadar class="md:w-1/3 w-full" :loading="loading" />
      <VisitSource class="md:w-1/3 !md:mx-4 !md:my-0 !my-4 w-full" :loading="loading" />
      <SalesProductPie class="md:w-1/3 w-full" :loading="loading" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { Input, Button } from 'ant-design-vue'
import { Icon } from '@/components/Icon'
// import GrowCard from './components/GrowCard.vue'
// import SiteAnalysis from './components/SiteAnalysis.vue'
import VisitSource from './components/VisitSource.vue'
import VisitRadar from './components/VisitRadar.vue'
import SalesProductPie from './components/SalesProductPie.vue'

const loading = ref(true)

setTimeout(() => {
  loading.value = false
}, 500)
</script>
