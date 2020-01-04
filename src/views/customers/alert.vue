<template>
  <div>
    <el-alert type="success" effect="dark">{{ message }}</el-alert>
  </div>
</template>
<script>
export default {
  name: 'alert',
  props: ['message']
}
</script>
