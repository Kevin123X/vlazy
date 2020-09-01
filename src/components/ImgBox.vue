<template>
  <div class="img-box" @scroll="handleScroll">
    <img v-lazy="item.download_url" v-for="item in imgList" :key="item.download_url" class="img-item" :src="init" />
  </div>
</template>

<script>
import init from './default.svg'
export default {
  name: "ImgBox",
  data() {
    return {
      scrollTop: 0,
      init,
      imgList:[]
    };
  },
  created() {
    const {items}=require('./data.json')
        this.imgList=[...items]
  },
  methods: {
    handleScroll(e) {
      const scrollTop = e.target.scrollTop;
      this.scrollTop = scrollTop;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img-box {
  padding-bottom: 50px;
  column-count: 4;
  column-gap: 0;
}
.img-item {
  display: block;
  width: 100%;
  height: 300px;
  transition: all 0.3s ease-in-out;
  background: #ffffff;
  /* break-inside: avoid; */
}

@media screen and (max-width: 1344px){
  .img-box{
    column-count: 3;
  }
}
@media screen and (max-width: 768px){
  .img-box{
    column-count: 2;
  }
}
</style>
