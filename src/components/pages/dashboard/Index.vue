<template>
    <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <contentheader name="Dashboard"/>

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
          
        <card1 />
      </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
</template>
<script>
import card1 from './Card';
import contentheader from '../master/Content-Header';

export default {
    components: {
        card1,
        contentheader
    }
}
</script>