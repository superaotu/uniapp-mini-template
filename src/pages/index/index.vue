<script lang="ts" setup>
import { onLoad } from '@dcloudio/uni-app'
import Tabbar from '@/layouts/tabbar.vue'
import { getTestData } from '@/services/apis/test'

definePage({
  name: 'index',
  style: {
    navigationStyle: 'custom',
  },
})

onLoad(() => {
  console.log('Index Load')
  getTestData()
})
</script>

<template>
  <Tabbar>
    <view>
      Index
    </view>
  </Tabbar>
</template>

<style lang="scss" scoped>

</style>
