<template>
  <div class="dashboard-container">
    <!-- <h2><span>交易狀態代碼查詢</span></h2> -->
    <br>
    <div class="whitepanel">
      <p>您可於此功能下查看程式回傳的交易狀態代碼說明。</p>
      <table class="table_A table table-bordered">
        <tr>
          <th class="td_A">交易狀態代碼</th>
          <td><input id="status_id" type="text"></td>
        </tr>
      </table>

      <div class="buttonright">
        <div style="float: left;">
          每頁顯示
          <select id="num" class="" name="show" size="1">
            <option value="10">10筆</option>
            <option value="30">30筆</option>
            <option value="50">50筆</option>
            <option value="100">100筆</option>
          </select>
        </div>
        <input
          id="btn2"
          class="btn btn-sm btn-submit"
          type="button"
          value="查詢"
        >
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
