<script lang="ts" setup>
import Tabbar from '@/layouts/tabbar.vue'

definePage({
  name: 'test',
  style: {
    navigationStyle: 'custom',
  },
})
</script>

<template>
  <Tabbar>
    <view>
      Test
    </view>
  </Tabbar>
</template>

<style lang="scss" scoped>
.page-content {

}
</style>
