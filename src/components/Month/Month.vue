<template>
  <div id="months" class="container">
    <!-- 表上的年份 -->
    <div class="date">
      <span>{{num[0] ? num[0] : ''}}年</span>
    </div>
    <div class="container table-responsive"> 
      <table style="width: 100%;">
        <tbody>
        <tr v-for="item in 3">
          <td v-for="index in 4" @click="activeTiemMonthFn(item * 4 + index - 4)">
            <div class="ind">{{item * 4 + index - 4 < 10 ? '0' + (item * 4 + index - 4) : (item * 4 + index - 4)}}</div>
          </td>
        </tr>
         
        </tbody>
         
      </table>
       
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      years: {
        type: Number
      }
    },
    data () {
      return {
        num: this.$route.params.num ? this.$route.params.num : [this.years]
      }
    },
    methods: {
      activeTiemMonthFn (num) {
        this.num.push(num)
        this.$router.push(
          {name: 'Day', params: {'allNum': this.num}}
        )
      }
    },
    created () {
    }
  }
</script>

<style lang="less">
  #months {
    position: relative;
    margin-top: 20px;
    .date {
      position: absolute;
      display: inline-block;
      left: 45%;
      top: -60px;
      span {
        color: #354FFF;
        font-size: 24px;
        line-height: 60px;
        text-align: center;
      }
    }
    .container {
      tr {
        height: 160px;
        td {
          text-align: center;
          line-height: 160px;
          .ind {
            margin: 5px;
            font-size: 64px;
            color: #354FFF;
            background-color: #fff;
            border: 2px solid #354FFF;
            border-radius: 10px;
          }
        }
      }
    }
  }
</style>
