<template>
  <div class="register1">
    <register-header></register-header>
    <!-- 路由占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
  import register from './register'

  export default {
    name: 'register1',
    components:
      register
  }
</script>
