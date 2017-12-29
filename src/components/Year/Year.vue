<template>
  <div id="years" class="container">
    <!-- 按钮 -->
    <div class="flip">
      <button @click="btnYearLeftFn()" class="btn btn-primary">&lt;</button>
      <button @click="btnYearRightFn()" class="btn btn-primary">&gt;</button>
    </div>
    <div class="container table-responsive">
      <table style="width: 100%;">
        <tbody>
        <tr v-for="item in 3">
          <td v-for="index in 3" @click="activeTiemYearFn(yearNum - 8 + item * 3 + index)">
            <div class="ind">{{yearNum + item * 3 + index - 8}}</div>
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
        yearNum: this.years
      }
    },
    methods: {
      // 页面跳转,传值
      activeTiemYearFn (num) {
        this.$router.push(
          {name: 'Month', params: {'num': [num]}}
        )
      },
      // 前9年,按钮
      btnYearLeftFn () {
        this.yearNum = this.yearNum - 9
      },
      // 后9年,按钮
      btnYearRightFn () {
        this.yearNum = this.yearNum + 9
      }
    },
    created () {

    }
  }
</script>

<style lang="less">
  #years {
    position: relative;
    margin-top: 20px;
    .flip {
      position: absolute;
      display: inline-block;
      right: 5px;
      top: -55px;
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
