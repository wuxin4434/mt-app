<template>
  <div class="slide">
    <el-carousel height="240px">
      <el-carousel-item v-for="item in imgList" :key="item.url">
          <img :src="item.img" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>


<script>
export default {
    data(){
        return {
            imgList:[{
                url:'xxx',
                img:'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png'
            },
            {
                url:'xxxa',
                img:'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png'
            },
            {
                url:'xxxaaa',
                img:'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png'
            },
            {
                url:'xxxaaaaa',
                img:'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png'
            },
            {
                url:'xxxaaaaaa',
                img:'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png'
            }]
        }
    }
}
</script>
