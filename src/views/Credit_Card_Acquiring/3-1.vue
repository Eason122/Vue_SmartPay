<template>
  <div class="dashboard-container">
    <!-- <h2><span>信用卡授權資訊</span></h2> -->
    <br>
    <div class="whitepanel">
        <table class="table_A table table-bordered">
          <tr>
            <th class="td_A">目前狀態</th>
            <td id="mer_status" />
          </tr>
          <tr>
            <th>商家代號</th>
            <td id="mer_id" />
          </tr>
          <tr>
            <th>使用期限</th>
            <td>
              <span id="contract_start" /> 至
              <span id="contract_stop" />
            </td>
          </tr>
          <tr>
            <th>商家檢查碼</th>
            <td id="" />
          </tr>
          <!-- <tr>
            <th>幕後授權AES加密 HashKey</th><td id=""></td>
        </tr>
        <tr>
            <th>幕後授權AES加密 HashIV</th><td id=""></td>
        </tr> -->
          <tr>
            <!-- <th>交易上限</th><td><span id="quota_credit"></span>(目前使用額度：<span id=""></span>　授權：<span id=""></span>　退刷：<span id=""></span>) </td> -->
            <th>交易上限</th>
            <td><span id="quota_credit" /></td>
          </tr>
          <tr>
            <th>服務費率</th>
            <td>
              <br>[國內卡]<br>
              目前支援的分期刷卡銀行：台新, 玉山, 台北富邦, 遠東, 永豐,
              國泰世華, 華南, 日盛國際商銀, 台灣樂天, 安泰, 聯邦, 兆豐商銀,
              台中商銀, 上海, 凱基, 匯豐, 星展, 臺灣新光, 合作金庫, 彰化, 第一,
              元大, 陽信, 臺灣企銀, 華泰, 三信
              <br><br><br>
              <table class="table_B">
                <tr>
                  <th class="td_A">期別</th>
                  <th>費率</th>
                </tr>
                <tr>
                  <th>一次付清</th>
                  <td><span id="irate_credit_1" />%</td>
                </tr>
                <tr>
                  <th>分3期</th>
                  <td><span id="irate_credit_3" />%</td>
                </tr>
                <tr>
                  <th>分6期</th>
                  <td><span id="irate_credit_6" />%</td>
                </tr>
              </table>

              <br><br>[海外卡]<br>
              <table class="table_B">
                <tr>
                  <th class="td_A">期別</th>
                  <th>費率</th>
                </tr>
                <tr>
                  <th>一次付清</th>
                  <td><span id="frate_credit_1" />%</td>
                </tr>
              </table>

              <br><br>[銀聯卡]<br>
              <table class="table_B">
                <tr>
                  <th class="td_A">期別</th>
                  <th>費率</th>
                </tr>
                <tr>
                  <th>一次付清</th>
                  <td><span id="urate_credit_1" />%</td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: '',
  computed: {
    ...mapGetters(['name'])
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/main.scss';

</style>
