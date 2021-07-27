<template>
  <div class="dashboard-editor-container">
    <div class="clearfix">
      <pan-thumb :panAvatar="avatar">
        Your roles:
        <span v-for="item in roles" :key="item" class="pan-info-roles">{{
          item
        }}</span>
      </pan-thumb>
      <div class="info-container">
        <div class="display_name">{{ name }}</div>
        <div>Editor's Dashboard</div>
      </div>
    </div>
    <div>
      <img :src="emptyGif" alt="#" class="emptyGif" />
    </div>
  </div>
</template>

<script>
import PanThumb from "@/components/PanThumb";

export default {
  name: "DashboardEditor",
  components: { PanThumb },
  data() {
    return {
      name: "Normal Editor",
      emptyGif: require("@/assets/empty.gif"),
      roles: ["editor", "test"],
      avatar: require("@/assets/avatar.gif"),
    };
  },
};
</script>

<style lang="scss" scoped>
.emptyGif {
  display: block;
  width: 45%;
  margin: 0 auto;
}

.dashboard-editor-container {
  min-height: 100vh;
  padding: 50px 60px 0px;
  .info-container {
    margin-left: 150px;
    line-height: 50px;
    .display_name {
      font-size: 48px;
      color: #212121;
    }
  }
}
</style>
