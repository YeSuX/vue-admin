<template>
  <div class="pan-item">
    <el-avatar
      class="avatar"
      :size="100"
      fit="contain"
      shape="square"
      :src="panAvatar"
    ></el-avatar>
    <div class="pan-info">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PanThumb',
  props: {
    panAvatar: {
      type: String,
      required: true
    }
  }
}
</script>

<style  lang="scss" scoped>
.pan-item {
  position: absolute;
  .avatar {
    position: inherit;
    transition: all 1s;
    &:hover {
      opacity: 0;
    }
  }
  .pan-info {
    width: 100px;
    height: 100px;
  }
}
</style>
