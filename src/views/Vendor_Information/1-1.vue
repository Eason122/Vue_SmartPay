<template>
  <div class="dashboard-container">
    <h3><span>廠商基本資料</span><span id="logout_time" /></h3>
    <div class="whitepanel">
      選擇電商 : <select id="mer_idSelect" class="form-control" name="mer_idSelect" style="display:none" />
      <button id="merChoose" class="btn btn-sm btn-submit" type="button">送出</button>
    </div>
    <br>
    <!-- <p id="result"></p> -->
    <div class="whitepanel">
      <h3>廠商資訊</h3>
      <table class="table_A table table-bordered">
        <tr>
          <th class="td_A">商店代號</th>
          <td id="mer_id" />
        </tr>
        <tr>
          <th>商店名稱</th>
          <td id="mer_name" />
        </tr>
        <tr>
          <th>公司登記名</th>
          <td id="company_name" />
        </tr>
        <tr>
          <th>統一編號</th>
          <td id="company_id" />
        </tr>
        <tr>
          <th>負責人姓名</th>
          <td id="chief_name" />
        </tr>
        <tr>
          <th>聯絡地址</th>
          <td id="mer_addr" />
        </tr>
        <tr>
          <th>公司電話</th>
          <td id="company_tel" />
        </tr>
        <tr>
          <th>公司傳真</th>
          <td id="company_fax" />
        </tr>
        <tr>
          <th>付款頁面顯示資訊</th>
          <td>
            <input type="radio" name="page_display" value="0" disabled>顯示公司登記名稱
            <input type="radio" name="page_display" value="1" disabled>顯示網站/商店名稱
          </td>
        </tr>
      </table>
    </div>
    <br>
    <div class="whitepanel">
      <h3>網站資訊</h3>
      <table class="table_A table table-bordered">
        <tr>
          <th class="td_A">網站名稱</th>
          <td id="website_name" />
        </tr>
        <tr>
          <th>網址</th>
          <td id="mer_url" />
        </tr>
      </table>
    </div>
    <br>
    <div class="whitepanel">
      <h3>帳務聯絡人資訊</h3>
      <table class="table_A table table-bordered">
        <tr>
          <th class="td_A">姓名</th>
          <td id="ledger_name" />
        </tr>
        <tr>
          <th>電話號碼(市話)</th>
          <td id="ledger_tel" />
        </tr>
        <tr>
          <th>手機號碼</th>
          <td id="ledger_mobile" />
        </tr>
        <tr>
          <th>電子信箱</th>
          <td id="ledger_email" />
        </tr>
        <tr>
          <th>發票接收信箱</th>
          <td id="invoice_email" />
        </tr>
      </table>
    </div>
    <br>
    <div class="whitepanel">
      <h3>業務聯絡人資訊</h3>
      <table class="table_A table table-bordered">
        <tr>
          <th class="td_A">姓名</td>
            <td id="business_name" />
          </th></tr>
        <tr>
          <th>電話號碼(市話)</th>
          <td id="business_tel" />
        </tr>
        <tr>
          <th>手機號碼</th>
          <td id="business_mobile" />
        </tr>
        <tr>
          <th>電子信箱</th>
          <td id="business_email" />
        </tr>
      </table>
    </div>
    <br>
    <div class="whitepanel">
      <div style="text-align:right" />
      <h3>收款審核資料</h3>
      <table class="table_A table table-bordered">
        <tr>
          <th class="td_A">信用卡審核狀態</th>
          <td id="credit_card_status" />
        </tr>
        <tr id="product_desc">
          <th>商品/服務種類</th>
        </tr>
        <tr>
          <th>販售網址</th>
          <td id="product_url" />
        </tr>
      </table>
      <div class="buttonright">
        <input id="111btn" type="button" class="buttonright" value="修改" style="display:none;margin-left: auto;">
      </div>
      <div id="111html" class="opendiv" title="修改基本資料" />
    </div>
  </div>
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
