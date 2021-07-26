<template>
  <div class="dashboard-container">
    <!-- <h2><span>交易明細查詢</span></h2> -->
    <br>
    <div class="whitepanel">
      <br>
        <table class="center">
          <tr>
            <td class="selectwhitepanel" align="center" >
              <select id="date_field" class="form-control" size="1">
                <option value="ord_time">交易日期</option>
                <option value="refund_date">退刷日期</option>
              </select>
              <input id="start_date" type="date" class="form-control"> 起
              <input id="end_date" type="date" class="form-control"> 止
              <select id="trade_type" class="form-control" size="1">
                <option value="1">全部交易</option>
                <option value="2">已授權</option>
                <option value="3">定期定額</option>
                <option value="4">一次付清</option>
                <option value="5">信用卡分期</option>
                <option value="6">退刷項目</option>
              </select>
              <br>
              <input id="order_no" type="hidden" value="ord_no">
              <input id="btn2" type="button" class="btn btn-sm btn-submit" value="查詢">
            </td>
          </tr>
        </table>
        <br>
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
.center{
    margin: auto;
}
.selectwhitepanel{
    display: flex;
}
</style>
