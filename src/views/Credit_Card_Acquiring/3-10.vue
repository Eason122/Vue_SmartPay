<template>
  <div class="dashboard-container">
    <!-- <h2><span>退刷圈存查詢</span></h2> -->
    <br>
    <div class="whitepanel">
        <br>
            <table class="table_A ">
                <tr>
                    <th>訂單編號</th>
                    <td><input type="text" class="form-control" name="" id="ord_no"> </td>
                    <!-- <th>關帳編號</th><td><input type="text" name="" id=""> </td> -->
                    <th>圈存狀態</th>
                    <td>
                        <input type="radio" class="" name="reserve_status" value="" checked>全部
                        <input type="radio" class="" name="reserve_status" value="0">已歸還
                        <input type="radio" class="" name="reserve_status" value="1">保留中
                        <input type="radio" class="" name="reserve_status" value="2">已取消
                    </td>
                </tr>
                <tr>
                    <th>圈存時間</th>
                    <td colspan="3"><input type="date" id="start_date" class="form-control" /> 起 <input type="date" id="end_date" class="form-control" /> 止</td>
                </tr>
            </table>
            <div class="buttoncenter">
                <input type="button" id="btn2" class="btn btn-sm btn-submit" value="查詢" />
            </div>
            <br>
            <div id="fldMain" style="display:none">
                <fieldset style="border:none;">
                    <table id="tblmain" class="table_A table table-bordered">
                        <thead>
                            <tr class="text-center">
                                <th class="th_A">編號</th>
                                <th>廠商</th>
                                <th>授權單號</th>
                                <!-- <th>關帳編號</th> -->
                                <th>圈存時間</th>
                                <th>解除時間</th>
                                <th>圈存狀態</th>
                                <th>圈存金額</th>
                                <th>退刷金額</th>
                                <!-- <th>手續費</th> -->
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
