<template>
    <div class="hold-transition sidebar-mini layout-fixed">
        <div class="wrapper">
            <navbar />
            <sidebar />
            <router-view></router-view>
            <footerMaster />
        </div>
    </div>
</template>
<script>
import navbar from './master/Navbar';
import footerMaster from './master/Footer';
import sidebar from './master/Sidebar';

export default {
    components:{
        navbar,
        footerMaster,
        sidebar,
    }
}
</script>