<template>
  <div id="app">
          <div class="container">
              <router-link to="/day" class="btn btn-primary" role="button">日</router-link>
              <router-link to="/month" class="btn btn-primary" role="button">月</router-link>
              <router-link to="/year" class="btn btn-primary" role="button">年</router-link>
            </div>
    <router-view :years='years' :appjournal='appjournal' :months="months"/>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        years: 0,
        months: 0,
        days: 0,
        appjournal: []
      }
    },
    methods: {
      // 获取当前年
      activeTiemFn () {
        var myDate = new Date()
        this.years = myDate.getFullYear()
        this.months = myDate.getMonth() + 1
      }
    },
    created () {
      this.activeTiemFn()
      let self = this
      // 请求本地数据
      this.$axios.get('api/day')
        .then((response) => {
          response = response.data
          if (response.error === 0) {
            self.appjournal = response.data
//            console.log(self.appjournal)
          }
        })
        .catch((error) => {
          alert(error)
        })
    }
  }
</script>

<style lang="less">
  #app {
    .tab {
      height: 40px;
      line-height: 40px;
      float: left;
    }
  }
</style>
