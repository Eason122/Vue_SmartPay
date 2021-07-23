<template>
  <div class="dashboard-container">
    <h3><span>手續費設定</span><span id="logout_time" /></h3>
    <div class="whitepanel">
      選擇電商 : <select id="mer_idSelect" class="form-control" name="mer_idSelect" style="display:none" />
      <button id="merChoose" class="btn btn-sm btn-submit" type="button">送出</button>
    </div>
    <br>
    <!-- <p id="result"></p> -->
    <div class="whitepanel">
      <table class="table_A table table-bordered">
        <tr>
          <th>金流閘道系統設定費</th>
          <td colspan="3"> <input id="fee_setup" type="number" class="percent"> 元</td>
        </tr>
        <tr>
          <th>金流閘道系統服務費</th>
          <td><input id="fee_service" type="number" class="percent"> 元</td>
          <th>金流閘道系統續約服務費</th>
          <td><input id="fee_renew" type="number" class="percent"> 元 / 年</td>
        </tr>
        <tr>
          <th>信用卡30日收款額度</th>
          <td><input id="quota_credit" type="number" class="percent"> 元 </td>
          <th>帳戶每月限制提領額度</th>
          <td> <input id="quota_withdraw" type="number" class="percent"> 元 </td>
        </tr>
        <tr>
          <th>帳戶提領手續費</th>
          <td><input id="fee_withdraw" type="number" class="percent"> 元 / 次</td>
          <th>每月免費提領次數</th>
          <td><input id="fee_free_times" type="number" class="percent"> 次</td>
        </tr>
        <tr>
          <th>當日最大退款金額</th>
          <td><input id="max_ret_amt" type="number" class="percent"> 元 / 次</td>
          <th>當日最大退款筆數</th>
          <td><input id="max_ret_times" type="number" class="percent"> 次</td>
        </tr>
      </table>
      <p />
      <table class="table_A table table-bordered">
        <tr class="text-center">
          <th class="td_A">金流項目</th>
          <th>國內卡每筆訂單手續費</th>
          <th>海外卡每筆訂單手續費</th>
          <th>撥款日期</th>
          <th>單筆訂單金額限制</th>
        </tr>
        <td>信用卡</td>
        <td>
          手續費<input id="irate_credit_1" type="number" class="percent" maxlength="5">
          %</br>( 最低 <input id="irate_minial_1" type="number" class="percent" maxlength="5"> 元)
        </td>
        <td>
          手續費<input id="frate_credit_1" type="number" class="percent" maxlength="5">
          %</br>( 最低 <input id="frate_minial_1" type="number" class="percent" maxlength="5"> 元)
        </td>
        <td rowspan="6">清算後<input id="allot_days_icredit" type="number">日</td>
        <td rowspan="6"><input id="ilimit_credit_1" type="number">元 - <input id="ilimit_credit_2" type="number">元</td>
        </tr>
        <tr>
          <td>信用卡分期3期</td>
          <td>
            手續費<input id="irate_credit_3" type="number" class="percent" maxlength="5">
            %</br>( 最低 <input id="irate_minial_3" type="number" class="percent" maxlength="5"> 元)
          </td>
          <td rowspan="6" style="text-align: center;">-</td>
        </tr>
        <tr>
          <td>信用卡分期6期</td>
          <td>
            手續費<input id="irate_credit_6" type="number" class="percent" maxlength="5">
            %</br>( 最低 <input id="irate_minial_6" type="number" class="percent" maxlength="5"> 元)</td>
        </tr>
        <tr>
          <td>信用卡分期12期</td>
          <td>
            手續費<input id="irate_credit_12" type="number" class="percent" maxlength="5">
            %</br>( 最低 <input id="irate_minial_12" type="number" class="percent" maxlength="5"> 元)</td>
        </tr>
        <tr>
          <td>信用卡分期18期</td>
          <td>
            手續費<input id="irate_credit_18" type="number" class="percent" maxlength="5">
            %</br>( 最低 <input id="irate_minial_18" type="number" class="percent" maxlength="5"> 元)</td>
        </tr>
        <tr>
          <td>信用卡分期24期</td>
          <td>
            手續費<input id="irate_credit_24" type="number" class="percent" maxlength="5">
            %</br>( 最低 <input id="irate_minial_24" type="number" class="percent" maxlength="5"> 元)</td>
        </tr>
        <tr>
          <td>銀聯卡</td>
          <td>
            手續費<input id="urate_credit_1" type="number" class="percent" maxlength="5">
            %</br>( 最低 <input id="urate_minial_1" type="number" class="percent" maxlength="5"> 元)</td>
          <td>清算後<input id="allot_days_ucredit" type="number">日</td>
          <td><input id="ulimit_credit_1" type="number">元 - <input id="ulimit_credit_2" type="number">元</td>
        </tr>
      </table>
      <div class="buttonright">
        <input id="btn2" type="button" value="送出">
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>
<style lang="scss" scoped>
@import "../../styles/main.scss";
</style>
