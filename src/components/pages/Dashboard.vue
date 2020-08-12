<template>
    <div class="hold-transition sidebar-mini layout-fixed">
        <div class="wrapper">
            <navbar />
        </div>
    </div>
</template>
<script>
import navbar from './master/Navbar';

export default {
    data(){
        return{

        }
    },
    components: {
        navbar,
    }
}
</script>