<template>
  <div>
    <div>商品详情页</div>
    <ul>
      <li class="goods-item clearfix" >
        <div class="goods-pic">
          <img :src="query.img" alt />
        </div>
        <div class="goods_cont">
          <a href="/header">{{query.name}}</a>
          <br />
          <p>{{query.detail}}</p>
        </div>
        <div class="goods_Prc">
          <b>￥{{query.price}}/份</b>
          <a href="/">查看配送时间</a>
        </div>
        <div class="goods-action">
          <div class="goods-buy">
            <a href="/" target="_blank">
              <span>查看详情</span>
            </a>
            <br />
            <a href="/" target="_blank">
              <span>加入购物车</span>
            </a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "detail",
  data() {
    return {
      query: ""
    };
  },
  created () {
      // 接收listcopy.vue传过来的id
      //console.log(this)
     let query=this.$route.query;
     this.query=query;
    //   this.id = this.$route.query.id
    // console.log(query.name)
      // this.getlistcopy();
  },
  methods: {
    
  }
};
</script>

<style  scoped>
</style