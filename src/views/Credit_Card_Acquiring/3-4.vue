<template>
  <div class="dashboard-container">
    <!-- <h2><span>待請款列表查詢</span></h2> -->
    <br>
    <div class="whitepanel">
        <br>
        <table class="table_A border-none">
                <tr>
                    <td align="center">
                        <select id="date_field" class="form-control" size="1">
                            <option value="ord_time">交易日期</option>
                            <option value="refund_date">退刷日期</option>
                        </select>
                        <input type="date" class="form-control" id="start_date" /> 起
                        <input type="date" class="form-control" id="end_date" /> 止
                        <select id="trade_type" class="form-control" size="1">
                            <option value="1">全部交易</option>
                            <option value="2">已授權</option>
                            <option value="3">定期定額</option>
                            <option value="4">一次付清</option>
                            <option value="5">信用卡分期</option>
                            <option value="6">退刷項目</option>
                        </select>
                        <br>
                        <input type="hidden" id="order_no" value="ord_no">
                        <input type="button" class="btn btn-sm btn-submit" id="btn2" value="查詢" />
                    </td>
                </tr>
            </table>
            <p id="RtnStatus"></p>
            <div id="fldMain">
                <div class="buttoncenter" style="display:none;">
                    共 <span id="index"></span> 筆交易| 成交授權金額：<span id="authsum"></span> 元</span> | 請款金額: <span id="settlesum"></span> 元</span> | 退款金額: <span id="retsum"></span> 元</span>
                    <br>
                    <input type="button" value="匯出交易明細" id="createCsv" />
                </div>
                <div class="pp_container" id="pp_container">
                    <ul class="pagination" id="pagination"></ul>
                    <input type="hidden" id="pagination_number">
                </div>
                <fieldset>
                    <table class="table_A display" id="DataTalbe" style="width:100%;display:none;">
                        <thead>
                            <tr>
                                <th>序號</th>
                                <th>訂單號碼</th>
                                <th>卡號</th>
                                <th>請款</th>
                                <th>放棄/退貨</th>
                                <th>交易日期</th>
                                <th>交易金額</th>
                                <th>請款金額</th>
                                <th>退貨金額</th>
                                <th>授權碼</th>
                                <th>付款方式</th>
                                <th>交易狀態</th>
                                <th>訂單狀態</th>
                                <th>分期期數</th>
                                <!-- <th>備註</th> -->
                                <th>狀態查詢</th>
                                <th>查看更多</th>
                                <th>備註</th>
                            </tr>
                        </thead>
                        <tbody class="data_tbody">
                        </tbody>
                    </table>
                </fieldset>
            </div>
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
