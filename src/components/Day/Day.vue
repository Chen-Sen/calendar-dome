<template>
  <div id="days" class="container">
    <!-- 表上的年份 -->
    <div class="date">
      <span>{{num0 ? num0 : years}}年{{num1 ? num1 : month}}月</span>
    </div>
    <!-- 按钮 -->
    <div class="flip">
      <button @click="btnMonthLeftFn()" class="btn btn-primary">&lt;</button>
      <button @click="btnMonthRightFn()" class="btn btn-primary">&gt;</button>
    </div>
    <!-- 日表单 -->
    <div class="container table-responsive">
    <table style="width: 100%;" class="cale">
      <tr v-for="item in 3">
        <td v-for="index in 8">
          <!-- indNum + item * 8 + index - 32    从1到24 -->
          <div class="ind">{{indNum + item * 8 + index - 32}}</div>
          <div class="text">
            {{journalArr[indNum + item * 8 + index - 32]}}
          </div>
        </td>
      </tr>
      <tr>
        <!-- indNum + item * 8 + index - 32    从24到N -->
        <td v-for="index in indexNum">
          <div class="ind">{{24 + index}}</div>
          <div class="text">
            {{journalArr[24 + index]}}
          </div>
        </td>
      </tr>
    </table>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      appjournal: {
        type: Array
      },
      years: {
        type: Number
      },
      months: {
        type: Number
      }
    },
    data () {
      return {
        journal: this.appjournal,
        journalArr: [],
        indNum: 24,
        indexNum: 0,
        bolNum: 5,
        num: this.$route.params.allNum ? this.$route.params.allNum : [this.years, this.months],
        num0: 0,
        num1: 0
      }
    },
    methods: {
      // 按钮, 往前走一个月
      btnMonthLeftFn (index) {
        this.num1--
        if (this.num1 < 1) {
          this.num1 = 12
          this.num0--
        }
        this.bolNum = index
        this.activeTiemDayFn()
        this.journalFn()
      },
      // 按钮, 往后走一个月
      btnMonthRightFn (index) {
        this.num1++
        if (this.num1 > 12) {
          this.num1 = 1
          this.num0++
        }
        this.bolNum = index
        this.activeTiemDayFn()
        this.journalFn()
      },
      // 一些方法
      activeTiemDayFn () {
        let num = 0
        // 判断是否是闰年,每个月有多少天
        switch (this.num1) {
          case 1:
          case 3:
          case 5:
          case 7:
          case 8:
          case 10:
          case 12:
            num = 31
            break
          case 2:
            if ((this.num0 % 4 === 0) && (this.num0 % 100 !== 0 || this.num0 % 400 === 0)) {
              num = 29
            } else {
              num = 28
            }
            break
          case 4:
          case 6:
          case 9:
          case 11:
            num = 30
            break
        }
        // 从24到N
        this.indexNum = num - 24
      },
      // 判断是否与所选年月相匹配,获取他的日志
      journalFn () {
        let str = this.num0 + '-' + this.num1
        for (var i = 0; i < this.journal.length; i++) {
          if (this.journal[i].YearsDate === str) {
            this.journalArr = this.journal[i].resultDate
            break
          } else {
            this.journalArr = []
          }
        }
      }
    },
    created () {
      this.num0 = this.num[0]
      this.num1 = this.num[1]
      this.activeTiemDayFn()
      this.journalFn()
    }
  }
</script>

<style lang="less">
  #days {
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
    .flip {
      position: absolute;
      display: inline-block;
      right: 5px;
      top: -55px;
      .active {
        background-color: #190e72;
      }
    }
    .cale {
      margin: 0 auto;
      tr {
        height: 120px;
        width: 120px;
        td {
          text-align: center;
          .ind {
            height: 20px;
            color: #fff;
            background-color: #354FFF;
          }
          .text {
            width: 144px;
            height: 100px;
            color: #354FFF;
            border: 1px solid rgba(25, 14, 114, 0.45);
            overflow-x: hidden;
          }
        }
      }
    }
  }
</style>
