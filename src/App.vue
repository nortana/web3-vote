<script setup>
import { ref } from "vue";
const active = ref(0);
 
</script>

<template>
  <div>
    <nav class="header">去中心化投票APP</nav>
    <main>
      <router-view/>
    </main>
    <van-tabbar route v-model="active" active-color="#ee742f">
      <van-tabbar-item to="/mandateView" icon="gem-o">分发票权</van-tabbar-item>
      <van-tabbar-item to="/accountView" icon="balance-list-o">账户信息</van-tabbar-item>
      <van-tabbar-item to="/boardView" icon="orders-o">投票看板</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang="less" scoped>
.header{
  height: 44px;
  background-color: #ee742f;
  color:#fff;
  text-align: center;
  line-height: 44px;
}
</style>