<template>
  <div class="dashboard-container">
    <!-- <h2><span>拒絕交易卡號列表</span></h2> -->
    <br>
    <div class="whitepanel">
        <br>
        <table class="table_A border-none">
                <tr>
                    <td align="center" style="width: 50%">
                        查詢卡號
                        <input type="text" name="" id="" class="form-control" />
                    </td>
                </tr>
                <tr>
                    <td align="center" colspan="2"><input type="button" id="btn2" class="btn75" value="查詢" /></td>
                </tr>
            </table>
            <br>
            <div class="buttonleft">
                <input type="button" id="391btn" value="加入偽卡/盜刷之卡號" />
            </div>
            <hr>
            (您可以自行加入盜刷有問題的卡號，只要一加入該卡片就無法在本系統進行交易，確保商家之安全。)
            <br>
            [修改]/[刪除]功能，系統僅提供給原加入的商家使用，非商家加入卡片，無管理權。
            <hr><br>
            <div id="fldMain" style="display:none">
                <fieldset style="border:none;">
                    <table id="tblmain" class="table_A">
                        <thead>
                            <tr>
                                <th class="th_A">編號</th>
                                <th>卡號</th>
                                <th>加入時間</th>
                                <!-- <th>操作</th> -->
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </fieldset>
            </div>
            <div class="pp_container" id="pp_container">
                <ul class="pagination" id="pagination"></ul>
            </div>
            <div class="opendiv" id="391" title="[信用卡後台]拒絕交易卡號新增">
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
