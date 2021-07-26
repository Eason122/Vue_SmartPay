<template>
  <div class="dashboard-container">
    <!-- <h2><span>已請款明細查詢</span></h2> -->
    <br>
    <div class="whitepanel">
        <br>
        <table class="table_A border-none">
                <tr>
                    <td align="center">
                        <select id="date_field" class="form-control">
                            <option value="clear_date">清算日期</option>
                            <option value="ord_time">交易日期</option>
                        </select>
                        <input type="date" id="start_date" class="form-control" /> 起 <input type="date" id="end_date" class="form-control" /> 止
                        <br>
                        <input type="button" id="btn2" class="btn btn-sm btn-submit" value="查詢" />
                    </td>
                </tr>
                <tr>
                    <td align="center">每日的列帳區間為: (當日00:00:00至當日23:59:59)</td>
                </tr>
            </table>
            <br>
            <div id="fldMain" style="display:none">
                <div class="buttoncenter">
                    共 <span id="index"></span> 筆交易|請款金額: <span id="sum"></span> 元</span>
                    <br>
                    <input type="button" value="匯出已請款明細" id="createCsv" />
                </div>
                <fieldset style="border:none;">
                    <table id="tblmain" class="table_A table table-bordered">
                        <thead>
                            <tr class="text-center">
                                <th class="th_A">序號</th>
                                <th>交易日期</th>
                                <!-- <th>請款單號</th> -->
                                <th>請款日期</th>
                                <th>訂單編號</th>
                                <th>結帳金額</th>
                                <th>狀態</th>
                                <!-- <th>授權單號</th> -->
                                <th>信用卡卡號</th>
                                <th>授權碼</th>
                                <th>分期</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </fieldset>
            <div class="pp_container" id="pp_container">
                <ul class="pagination" id="pagination"></ul>
            </div>
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
