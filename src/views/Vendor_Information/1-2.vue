<template>
  <div class="dashboard-container">
    <h3><span>特約會員合約條件商議申請</span><span id="logout_time" /></h3>
    <div class="whitepanel">
      選擇電商 : <select id="mer_idSelect" class="form-control" name="mer_idSelect" style="display:none" />
      <button id="merChoose" class="btn btn-sm btn-submit" type="button">送出</button>
    </div>
    <br>
    <!-- <p id="result"></p> -->
    <div class="whitepanel">
      <table class="table_A table table-bordered">
        <tr>
          <th width="14%">審核狀態</th>
          <td id="contract_status">
            <!--尚未申請 >  文件審核中 >  資格審核中 >  複查中 >  審核通過-->
          </td>
        </tr>
        <tr>
          <th>備註說明</th>
          <td id="contract_remark" />
        </tr>
      </table>
      提醒您！自提出申請後，約需3-5個工作日完成審核流程，如遇補件或修改申請資訊，視為重新審核，將以實際進度更新審核狀態。
    </div>
    <br>
    <div class="whitepanel">
      <h3>金流、電子發票合約及費率</h3>
      <table class="table_A table table-bordered">
        <tr>
          <!-- <th>合約名稱</th><td colspan="3"> <input type="button" value="特約商店協議書" onclick="openpdf(1)"/></td>-->
          <th>合約名稱</th>
          <td colspan="3"> <input id="btn_OpenPDF" type="button" value="特約商店協議書"></td>
        </tr>
        <tr>
          <th>合約年限</th>
          <td colspan="3"><span id="contract_start" /> - <span id="contract_stop" /></td>
        </tr>
        <tr>
          <th>金流閘道系統設定費</th>
          <td colspan="3"><span id="fee_setup" /> 元</td>
        </tr>
        <tr>
          <th>金流閘道系統服務費</th>
          <td><span id="fee_service" /> 元</td>
          <th>金流閘道系統續約服務費</th>
          <td><span id="fee_renew" /> 元 / 年</td>
        </tr>
        <tr>
          <th>信用卡30日收款額度</th>
          <td><span id="quota_credit" /> 元 <input id="121btn" type="button" value="申請調額"> </td>
          <th>帳戶每月限制提領額度</th>
          <td><span id="quota_withdraw" /> 元 <input id="122btn" type="button" value="申請調額"> </td>
        </tr>
        <tr>
          <th>帳戶提領手續費</th>
          <td><span id="fee_withdraw" /> 元 / 次</td>
          <th>每月免費提領次數</th>
          <td><span id="fee_free_times" /> 次</td>
        </tr>
        <tr>
          <th>當日最大退款金額</th>
          <td><span id="max_ret_amt"> 元</span></td>
          <th>當日最大退款筆數</th>
          <td><span id="max_ret_times">次</span></td>
        </tr>
      </table>
    </div>
    <input id="123btn" type="button" value="申請信用卡分期">
    <br>
    <div class="whitepanel">
      <table class="table_A table table-bordered">
        <tr class="text-center">
          <th width="14%">金流項目</th>
          <th>國內卡每筆訂單手續費</th>
          <th>海外卡每筆訂單手續費</th>
          <th>撥款日期</th>
          <th>單筆訂單金額限制</th>
        </tr>
        <tr>
          <td>信用卡</td>
          <td><span id="irate_credit_1" />%(最低 <span id="irate_minial_1" /> 元)</td>
          <td><span id="frate_credit_1" />%(最低 <span id="frate_minial_1" /> 元)</td>
          <td rowspan="6">清算後<span id="allot_days_icredit" />日</td>
          <td rowspan="6"><span id="ilimit_credit_1" />元 - <span id="ilimit_credit_2" />元</td>
        </tr>
        <tr>
          <td>信用卡分期3期</td>
          <td><span id="irate_credit_3" />%(最低 <span id="irate_minial_3" /> 元)</td>
          <td rowspan="6" />
        </tr>
        <tr>
          <td>信用卡分期6期</td>
          <td><span id="irate_credit_6" />%(最低 <span id="irate_minial_6" /> 元)</td>
        </tr>
        <tr>
          <td>信用卡分期12期</td>
          <td><span id="irate_credit_12" />%(最低 <span id="irate_minial_12" /> 元)</td>
        </tr>
        <tr>
          <td>信用卡分期18期</td>
          <td><span id="irate_credit_18" />%(最低 <span id="irate_minial_18" /> 元)</td>
        </tr>
        <tr>
          <td>信用卡分期24期</td>
          <td><span id="irate_credit_24" />%(最低 <span id="irate_minial_24" /> 元)</td>
        </tr>
        <tr>
          <td>銀聯卡</td>
          <td><span id="urate_credit_1" />%(最低 <span id="urate_minial_1" /> 元)</td>
          <td>清算後<span id="allot_days_ucredit" />日</td>
          <td><span id="ulimit_credit_1" />元 - <span id="ulimit_credit_2" />元</td>
        </tr>
        <div id="121" class="opendiv" title="信用卡30日收款額度申請調額" />
        <div id="122" class="opendiv" title="帳戶每月限制提領額度申請調額" />
        <div id="123" class="opendiv" title="帳戶每月限制提領額度申請調額" />
      </table>
    </div>
    <br>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: '',
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
