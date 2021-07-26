<template>
  <div class="dashboard-container">
    <!-- <h2><span>請款失敗列表</span></h2> -->
    <br>
    <div class="whitepanel">
      <br>
      <table class="table_A border-none">
        <tr>
          <td align="center">
            日期
            <input id="end_date" type="date" class="form-control">
            <br>
            <input id="btn2" type="button" class="btn btn-sm btn-submit" value="查詢">
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
