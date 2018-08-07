<template>
  <div class="app-container">
    <Menu></Menu>
    <Map></Map>
  </div>
</template>

<script>
// COMPONENTS
import Menu from '@/components/Menu';
import Map from '@/components/Map';

export default {
  name: 'AppContainer',
  components: {
    Menu,
    Map,
  },
};
</script>
