<template>
  <div class="dashboard-container">
    <!-- <h2><span>信用卡帳戶設定</span></h2> -->
    <br>
    <div class="whitepanel">
        <table class="table_A table table-bordered">
          <tr>
            <th>網站名稱</th>
            <td id="mer_name" />
            <th>網站網址</th>
            <td id="mer_url" />
          </tr>
          <tr>
            <th class="td_A">系統有效期限</th>
            <td>
              <span id="contract_start" /> 至
              <span id="contract_stop" />
            </td>
            <th>信用卡授權完成通知Email</th>
            <td id="auth_notify_email" />
          </tr>
          <tr>
            <th>每筆自動請款</th>
            <td>
              <input type="radio" name="daily_close_flag" value="1">啟用
              <input type="radio" name="daily_close_flag" value="0">關閉
            </td>
            <th>盜刷卡號保護</th>
            <td>
              <input type="radio" name="card_reject_flag" value="1">啟用
              <input type="radio" name="card_reject_flag" value="0">關閉
            </td>
            <!-- <th>信用卡授權完成通知</th>
            <td>
                <input type="radio" name="auth_notify_flag" value="1" disabled/>通知
                <input type="radio" name="auth_notify_flag" value="0" disabled/>不通知
            </td> -->
          </tr>
          <tr>
            <th>國外(海外)信用卡交易</th>
            <td colspan="3">
              <input
                type="radio"
                disabled
                name="foreign_card_flag"
                value="1"
              >接受
              <input
                type="radio"
                disabled
                name="foreign_card_flag"
                value="0"
              >不接受
              <p>
                提醒您，國外信用卡交易如辦理原交易取消、全額退刷或部分
                退刷等情形，會員應負擔衍生相關費用，包括但不限於匯率浮
                動價差之金額等。詳細請參閱《特約商店服務規範》第三條相關規定。
              </p>
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
