<template>
  <div class="dashboard-container">
    <!-- <h2><span>帳號資訊及密碼設定</span></h2> -->
      <div id="fldMain" class="whitepanel" style="display:none">
        <div class="">
          <input id="231btn" type="button" value="新增帳號">
        </div>
        <div id="231" class="opendiv" title="新增帳號" />
        <div id="232" class="opendiv" title="修改帳號" />
        <div id="fldMain">
          <fieldset style="border:none;">
            <table id="tblmain" class="table_A table table-bordered">
              <thead>
                <tr class="text-center">
                  <th class="td_A">電商代號</th>
                  <th>使用者名稱</th>
                  <th>銀行帳號</th>
                  <th>管理者( Y / N )</th>
                  <th>狀態</th>
                  <!-- <th>代發送忘記密碼email</th> -->
                  <th>修改電商帳號</th>
                  <th>刪除電商帳號</th>
                </tr>
              </thead>
              <tbody />
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
