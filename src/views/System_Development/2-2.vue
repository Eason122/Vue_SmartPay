<template>
  <div class="dashboard-container">
    <!-- <h2><span>系統界接查詢</span></h2> -->
    <br>
    <div class="whitepanel">
      <table class="table_A table table-bordered">
        <tr>
          <th class="td_A">商店代號</th>
          <td id="mer_id" />
        </tr>
      </table>

      <br>
      <table class="table_A table table-bordered">
        <tr class="text-center">
          <th class="td_A">服務名稱</th>
          <th>介接 HashKey</th>
          <th>介接 HashIV</th>
        </tr>
        <tr class="text-center">
          <th>金流、MPOS</th>
          <td id="mer_key" />
          <td id="mer_iv" />
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
