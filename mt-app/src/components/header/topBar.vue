<template >
    <div class="m-header-topbar m-header">
        <el-row>
            <el-col :span="10">
               <geo />
            </el-col>
            <el-col :span="14">
                <my-nav />
            </el-col>
        </el-row>
    </div>
</template>


<script>
import geo from '../header/geo'
import myNav from '../header/nav'
export default {
    components:{
        geo,
        myNav,
    }
}
</script>

<style lang="scss">
    @import '@/assets/css/public/header/topbar.scss';
</style>