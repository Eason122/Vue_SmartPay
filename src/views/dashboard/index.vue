<template>
  <div class="dashboard-container">
    <div class="whitepanel97">
      <p>
        統計期間：<span id="start_date" style="background:#ccc; color:red;" /> ~
        <span id="end_date" style="background:#ccc; color:red;" />
      </p>
      <p>
        此為目前已撥款至您帳戶餘額之款項(含信用卡及非信用卡)，扣除不可提領款項後，即為實際可提領餘額。
      </p>
      </div>
      <div class="container-fluid">
        <div class="col-md d-flex">
          <div class="card">
            <div class="card-body">
              <dl>
                <dt>帳戶餘額</dt>
                <dd id="balance" />
                元
              </dl>
              <ul>
                <li>
                  <div style="float: left;">超過提領額度(不可提領)</div>
                  <div style="float: right;"><span id="quota_out" /> 元</div>
                </li>
              </ul>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <dl>
                <dt>本月可動用餘額</dt>
                <dd id="wd_balance" />
                元
              </dl>
              <li>
                <div style="float: left;">保留款(不可提領)</div>
                <div style="float: right;">
                  <a id="reserve_amount" href="5-3.html" /> 元
                </div>
              </li>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <div>
                <input
                  type="button"
                  class="btn btn-warning"
                  value="預付款存入"
                  onclick="javascript:location.href='5-3-5.html'"
                ><br>
                <input
                  type="button"
                  class="btn btn-warning"
                  value="帳戶進出明細"
                  onclick="javascript:location.href='5-2.html'"
                ><br>
                <input
                  type="button"
                  class="btn btn-warning"
                  value="提領紀錄查詢"
                  onclick="javascript:location.href='5-4.html'"
                ><br>
                <input
                  type="button"
                  class="btn btn-warning"
                  value="銀行帳號查詢"
                  onclick="javascript:location.href='5-6.html'"
                ><br>
              </div>
            </div>
          </div>
        </div>
      
    </div>
    <!-- <div class="whitepanel1" style="">
          <div style="width: 85%;height: 300px;">
            <div style="display: inline-block;width: 300px;border-width:3px;border-style:dashed;border-color:#FFAC55;padding:5px;">
              <dl>
                <dt>帳戶餘額</dt>
                <dd id="balance" /> 元
              </dl>
              <ul>
                <li>
                  <div style="float: left;">超過提領額度(不可提領)</div>
                  <div style="float: right;"><span id="quota_out" /> 元</div>
                </li>
              </ul>
              <dl>
                <dt>本月可動用餘額</dt>
                <dd id="wd_balance" /> 元
              </dl>
              <ul>
                <li>
                  <div style="float: left;">保留款(不可提領)</div>
                  <div style="float: right;"><a id="reserve_amount" href="5-3.html" /> 元</div>
                </li>

              </ul>
              <hr>
              <ul>
                <li>
                  <div style="float: left;">可提領餘額</div>
                  <div style="float: right;"><span id="balance_avail" />元</div>
                </li>
              </ul>
            </div>
            <div style="float:right;border-style:dashed;border-color:#FFAC55;padding:5px;">
              <input type="button" class="widthmiddle margin8 padding10_5" value="預付款存入" onclick="javascript:location.href='5-3-5.html'"><br>
              <input type="button" class="widthmiddle margin8 padding10_5" value="帳戶進出明細" onclick="javascript:location.href='5-2.html'"><br>
              <input type="button" class="widthmiddle margin8 padding10_5" value="提領紀錄查詢" onclick="javascript:location.href='5-4.html'"><br>
              <input type="button" class="widthmiddle margin8 padding10_5" value="銀行帳號查詢" onclick="javascript:location.href='5-6.html'"><br>
            </div>
          </div>
        </div> -->
    <br>
    <div class="whitepanel" style="display:none;">
      <p>帳戶待撥款</p>
      <p>
        此為扣除手續費之摩迅代收暫存款項，將依照各金流約定撥款天期自動撥入您的帳戶。
      </p>
      <div>
        <div
          style="display: inline-block;width: 32%;padding:5px;background-color: #8DC9BC;"
        >
          <div>交易訂單未請款</div>
          <br>
          <div><span id="SUM_settle_notyet" style="font-size: 30px;" />元</div>
        </div>
        <div
          style="display: inline-block;width: 32%;padding:5px;background-color: #8DC9BC;"
        >
          <div>交易訂單待撥款</div>
          <br>
          <div><span id="SUM_allow_notyet" style="font-size: 30px;" />元</div>
        </div>
        <div
          style="display: inline-block;width: 32%;padding:5px;background-color: #8DC9BC;"
        >
          <div>手續費</div>
          <br>
          <div>
            <span id="SUM_allot_notyet_servicefee" style="font-size: 30px;" />元
          </div>
        </div>
      </div>
      <br>
      <dl style="width:50%">
        <dt>信用卡金流</dt>
        <br>
        <dd style="float: left;">交易訂單未請款</dd>
        <dd style="float: right;"><span id="SUM_settle_notyet" /> 元</dd>
        <br>
        <hr>
        <dd style="float: left;">交易訂單已請款</dd>
        <dd style="float: right;"><span id="SUM_settle_yet" /> 元</dd>
        <br>
      </dl>
    </div>
    <br>
    <div class="whitepanel" style="display:none;">
      <p>30日收款統計(含待撥款)</p>
      <p>
        統計期間：<span id="start_date" /> ~
        <span id="end_date" />
        ，統計資料以扣除手續費後之訂單金額計算，未扣除信用卡退刷金額。
      </p>
      <div>
        <div
          style="display: inline-block;width: 32%;padding:5px;background-color: #8DC9BC;"
        >
          <div>收款總金額</div>
          <br>
          <div><span id="DSUM_auth" style="font-size: 30px;" />元</div>
        </div>
        <div
          style="display: inline-block;width: 32%;padding:5px;background-color: #8DC9BC;"
        >
          <div>已撥款金額</div>
          <br>
          <div><span id="DSUM_allow_yet" style="font-size: 30px;" />元</div>
        </div>
        <div
          style="display: inline-block;width:32%;padding:5px;background-color: #8DC9BC;"
        >
          <div>手續費</div>
          <br>
          <div>
            <span id="DSUM_allot_yet_servicefee" style="font-size: 30px;" />元
          </div>
        </div>
      </div>
      <br>
      <div style="background-color: #8DC9BC;width:96.5%;padding:2px 10px">
        <p>信用卡30日收款上限</p>
        <p>
          已使用 <span id="DSUM_auth2" /> 元 / 上限
          <span id="quota_credit" /> 元，收款額度尚餘
          <span id="credit_usable" /> 元
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters(['name'])
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/main.scss';
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 16px;
    line-height: 36px;
  }
}
</style>
