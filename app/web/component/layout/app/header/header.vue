<template>
  <header class="header">
    <div class="container"><h1>
      <a href="" class="router-link-active">Egg + Vue</a></h1>
      <ul class="nav"></ul>
    </div>
  </header>
</template>
<style>
  @import "./header.css";
</style>
<script type="text/babel">
  export default{
    data(){
      return {
        selectedMenu : ''
      }
    },
    computed:{

    },
    mounted(){
      this.selectedMenu = window.location.pathname.toLowerCase().replace(/\/$/,'');
    }
  }
</script>
