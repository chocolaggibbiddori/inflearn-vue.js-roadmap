<template>
  <div class="app">
    <AppHeader />
    <div class="app-contents">
      <RouterView />
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';

export default {
  components: {
    AppHeader
  }
};
</script>

<style>
@import './css/common.css';
@import ' ./css/reset.css';
</style>
