<template>
    <footer class="main-footer">
        <strong>Copyright &copy; 2014-{{ year }} <a href="#">Alfa Code</a>.</strong>
        All rights reserved.
        <div class="float-right d-none d-sm-inline-block">
        <b>Version</b> 1.0
        </div>
  </footer>
</template>
<script>
export default {
    data(){
        return{
            year : '2020'
        }
    }
}
</script>