<template>
  <div class="dashboard-editor-container">
    <div class="clearfix"></div>
    <div>
      <img :src="emptyGif" alt="#" class="emptyGif" />
    </div>
  </div>
</template>

<script>
export default {
  name:'DashboardEditor',
  data(){
    return{
      emptyGif:'https://wpimg.wallstcn.com/0e03b7da-db9e-4819-ba10-9016ddfdaed3'
    }
  }
};
</script>

<style lang="scss" scoped>
.emptyGif{
  display: block;
  width: 45%;
  margin: 0 auto;
}
</style>