
<template>
  <rt-view>
    <rt-content>
      <rt-form ref="form">
        <rt-detail-header>
          <div slot="title" class="rt-title">
            <rt-label :value="form['_accountid_value@OData.Community.Display.V1.FormattedValue']"></rt-label>
            <p>{{form['_accountid_value@OData.Community.Display.V1.FormattedValue']}}</p>
          </div>
          <div slot="title" class="rt-title">
            <p>{{form.new_contact || "暂无信息"}}</p>
            <rt-type-attr :value="form.new_medical_phone || '暂无信息'" />
          </div>
          <rt-row>
            <rt-attr :value="form.new_business_address" empty-text="暂无信息"></rt-attr>
          </rt-row>
          <rt-row>
            <rt-attr
              label="客户类型"
              :value="form['new_accountlevel@OData.Community.Display.V1.FormattedValue']"
              empty-text="暂无信息"
            ></rt-attr>
          </rt-row>
        </rt-detail-header>
        <rt-tabs
          v-model="tabIndex0"
          line-width="1"
          :tab-list="tabList0"
          is-full-width-bar="false"
          style="margin-top:1px;"
        ></rt-tabs>
        <rt-form key="0" v-show="tabIndex0 == 0">
          <rt-card>
            <rt-section title="基本信息" style="margin-top:10px;">
              <rt-text-readonly
                label="客户"
                :text="form['_accountid_value@OData.Community.Display.V1.FormattedValue']"
              ></rt-text-readonly>
              <rt-text-readonly label="昵称" :text="form.new_nickname"></rt-text-readonly>
              <rt-text-readonly
                label="省份"
                :text="form['_new_province_id_value@OData.Community.Display.V1.FormattedValue']"
              ></rt-text-readonly>
              <rt-text-readonly
                label="城市"
                :text="form['_new_city_id_value@OData.Community.Display.V1.FormattedValue']"
              ></rt-text-readonly>
              <rt-text-readonly
                label="县区"
                :text="form['_new_county_id_value@OData.Community.Display.V1.FormattedValue']"
              ></rt-text-readonly>
              <rt-text-readonly
                label="首营日期"
                :text="$moment(form.new_firstbusinessdate).format('YYYY-MM-DD hh:mm:ss')"
              ></rt-text-readonly>
              <rt-text-readonly
                label="营业执照登记机关"
                :text="form.new_medical1_businessregistrationauthority"
              ></rt-text-readonly>
              <rt-text-readonly label="统一社会信用代码" :text="form.new_medical1_creditcode"></rt-text-readonly>
              <rt-text-readonly
                label="成立日期"
                :text="$moment(form.new_medical1_establishmentdate).format('YYYY-MM-DD hh:mm:ss')"
              ></rt-text-readonly>
              <rt-text-readonly
                label="发证日期"
                :text="$moment(form.new_issuedate).format('YYYY-MM-DD hh:mm:ss')"
              ></rt-text-readonly>
              <rt-text-readonly
                label="营业期限至"
                :text="$moment(form.new_medical1_endbusinessdate).format('YYYY-MM-DD hh:mm:ss')"
              ></rt-text-readonly>
              <rt-text-readonly label="开户行" :text="form.new_bank"></rt-text-readonly>
              <rt-text-readonly label="开户账号" :text="form.new_banknumber"></rt-text-readonly>
              <rt-card>
                <rt-section title="医疗器械经营许可证" style="margin-top:10px;">
                  <rt-text-readonly label="经营证编号" :text="form.new_medical3_code"></rt-text-readonly>
                  <rt-text-readonly
                    label="经营证发证日期"
                    :text="$moment(form.new_medical3_issuedate).format('YYYY-MM-DD hh:mm:ss')"
                  ></rt-text-readonly>
                  <rt-text-readonly
                    label="经营证有效期至"
                    :text="$moment(form.new_medical3_expirydate).format('YYYY-MM-DD hh:mm:ss')"
                  ></rt-text-readonly>
                  <rt-text-readonly label="经营证经营场所" :text="form.new_medical3_businessplace"></rt-text-readonly>
                  <rt-text-readonly label="经营证经营方式" :text="form.new_medical3_businesstype"></rt-text-readonly>
                  <rt-text-readonly label="经营证库房地址" :text="form.new_medical3_warehouseaddress"></rt-text-readonly>
                  <rt-text-readonly label="经营证发证部门" :text="form.new_medical3_licensedepartment"></rt-text-readonly>
                  <rt-card>
                    <rt-section title="医疗器械备案凭证" style="margin-top:10px;">
                      <rt-text-readonly label="备案凭证编号" :text="form.new_medical2_code"></rt-text-readonly>
                      <rt-text-readonly
                        label="备案凭证发证日期"
                        :text="$moment(form.new_medical2_issuedate).format('YYYY-MM-DD hh:mm:ss')"
                      ></rt-text-readonly>
                      <rt-text-readonly
                        label="备案凭证有效期至"
                        :text="$moment(form.new_medical2_expirydate).format('YYYY-MM-DD hh:mm:ss')"
                      ></rt-text-readonly>
                      <rt-text-readonly label="备案凭证经营场所" :text="form.new_medical2_businessplace"></rt-text-readonly>
                      <rt-text-readonly label="备案凭证经营方式" :text="form.new_medical2_businesstype"></rt-text-readonly>
                      <rt-text-readonly label="备案凭证库房地址" :text="form.new_medical2_warehouseaddress"></rt-text-readonly>
                      <rt-text-readonly
                        label="备案凭证发证部门"
                        :text="form.new_medical2_licensedepartment"
                      ></rt-text-readonly>
                      <rt-card>
                        <rt-section title="医疗机构执业许可证" style="margin-top:10px;">
                          <rt-text-readonly label="编号" :text="form.new_medical_code"></rt-text-readonly>
                          <rt-text-readonly
                            label="发证日期"
                            :text="$moment(form.new_medical_issuedate).format('YYYY-MM-DD hh:mm:ss')"
                          ></rt-text-readonly>
                          <rt-text-readonly
                            label="有效期"
                            :text="$moment(form.new_medical_expirydate).format('YYYY-MM-DD hh:mm:ss')"
                          ></rt-text-readonly>
                          <rt-text-readonly label="经营地址" :text="form.new_business_address"></rt-text-readonly>
                          <rt-text-readonly label="诊疗科目" :text="form.new_medical_diagnosisobject"></rt-text-readonly>
                        </rt-section>
                      </rt-card>
                    </rt-section>
                  </rt-card>
                </rt-section>
              </rt-card>
            </rt-section>
          </rt-card>
        </rt-form>
        <rt-form key="1" v-show="tabIndex0 == 1">
          <rt-list ref="list" :fetch="getAccountList">
            <rt-sfa-list-item slot-scope="{ row }" :row="row">
              <rt-row>
                <rt-attr
                  :value="row['new_type@OData.Community.Display.V1.FormattedValue']"
                  empty-text="暂无信息"
                ></rt-attr>
                <rt-attr :value="row.new_code" empty-text="暂无信息"></rt-attr>
              </rt-row>
              <rt-row>
                <rt-attr
                  :value="row['_new_businessscope_id_value@OData.Community.Display.V1.FormattedValue']"
                  empty-text="暂无信息"
                ></rt-attr>
              </rt-row>
            </rt-sfa-list-item>
          </rt-list>
        </rt-form>
      </rt-form>
    </rt-content>
  </rt-view>
</template>

<script>
import { retrieve, retrieveMultiple } from "vue-xcrmsdk";
export default {
  name: 'account-detail',
  data() {
    return {
      tabList0: [{ name: "客户信息" }, { name: "经营范围" }],
      tabIndex0: 0,
      displayField: [],
      entityId: this.$route.params.id,
      form: {},
      queryValue: ""
    };
  },
  components: {},
  mounted() {
    this.entityId = this.$route.params.id;
    if (this.entityId) this.loadAccountDetail();
  },
  methods: {
    loadAccountDetail() {
      rt.showLoadingToast("正在加载...");
      let params = {
        entityName: "new_accountbusinessscope",
        returnTotalRecordCount: false,
        filter: {
          type: "and",
          conditions: [
            {
              attribute: "new_accountbusinessscopeid",
              operator: "eq",
              value: this.entityId
            }
          ]
        },
        columnSet: [
          "accountid",
          "accountid",
          "new_medical_phone",
          "new_contact",
          "new_business_address",
          "new_accountlevel",
          "accountid",
          "new_nickname",
          "new_province_id",
          "new_city_id",
          "new_county_id",
          "new_firstbusinessdate",
          "new_medical1_businessregistrationauthority",
          "new_medical1_creditcode",
          "new_medical1_establishmentdate",
          "new_issuedate",
          "new_medical1_endbusinessdate",
          "new_bank",
          "new_banknumber",
          "new_medical3_code",
          "new_medical3_issuedate",
          "new_medical3_expirydate",
          "new_medical3_businessplace",
          "new_medical3_businesstype",
          "new_medical3_warehouseaddress",
          "new_medical3_licensedepartment",
          "new_medical2_code",
          "new_medical2_issuedate",
          "new_medical2_expirydate",
          "new_medical2_businessplace",
          "new_medical2_businesstype",
          "new_medical2_warehouseaddress",
          "new_medical2_licensedepartment",
          "new_medical_code",
          "new_medical_issuedate",
          "new_medical_expirydate",
          "new_business_address",
          "new_medical_diagnosisobject",
          "new_accountbusinessscopeid"
        ]
      };
      retrieveMultiple("new_accountbusinessscopes", params)
        .then(resp => {
          this.form = resp[0].value[0];
        })
        .catch(error => {
          rt.showErrorToast(error.message);
        })
        .finally(() => {
          rt.hideLoadingToast();
        });
    },
    goEditPage() {
      this.$router.push({
        name: "account-new_accountbusinessscopeedit",
        params: { id: this.entityId }
      });
    }
  }
};
</script>

<style lang="less" scoped>
</style>