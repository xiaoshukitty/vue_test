<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
body {
  margin: 0;
}

/** 去掉页面滚动条 */
::-webkit-scrollbar {
  width: 0 !important;
}

::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}</style>
