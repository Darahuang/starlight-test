<template>
  <div>
    <Navbar></Navbar>
    <Alert></Alert>
    <Sidebar></Sidebar>
    <div class="container-fluid">
      <div class="row">
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/Navbar.vue';
import Sidebar from '../../components/Sidebar.vue';
import Alert from '../../components/AlertMessage.vue';

export default {
  components: {
    Navbar,
    Sidebar,
    Alert,
  },
};
</script>
