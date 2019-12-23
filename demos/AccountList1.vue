
<template>
  <rt-view>
    <rt-header>
      <rt-list-header>
        <rt-quick-search
          slot="search"
          entity="account"
          entitys="accounts"
          :display-fields="['accountid']"
          orderby
          :search-fileds="['accountid']"
        />
      </rt-list-header>
    </rt-header>
    <rt-content>
      <rt-list ref="list" :fetch="getAccountList">
        <rt-sfa-list-item slot-scope="{ row }" :row="row">
          <rt-row slot="header">
            <div class="rt-primary-attr">
              <p>{{row['accountcategorycode@OData.Community.Display.V1.FormattedValue']}}</p>
            </div>
          </rt-row>
          <rt-row>
            <rt-attr label="False" :value="row.accountnumber" empty-text="暂无信息"></rt-attr>
            <rt-attr :value="row.name" empty-text="暂无信息"></rt-attr>
          </rt-row>
          <div slot="footer" class="__footer">
            <p>{{row['accountratingcode@OData.Community.Display.V1.FormattedValue']}}</p>
          </div>
        </rt-sfa-list-item>
      </rt-list>
    </rt-content>
  </rt-view>
</template>


<script>
import { retrieveMultiple, invokeAction } from "vue-xcrmsdk";
export default {
  data() {
    return {
      displayField: [],
      entityId: "",
      form: {},
      queryValue: ""
    };
  },
  components: {},
  mounted() {},
  methods: {
    handleSearch() {
      if (this.$refs.filter)
        this.filterObject = this.$refs.filter.getFilterObject();
      this.$refs.list.loadData();
    },
    getAccountList(page) {
      this.filterConfig = {
        entityName: "account",
        page: page.pageIndex,
        count: page.pageSize,
        returnTotalRecordCount: false,
        order: [{ name: "createdon", descending: true }],
        columnSet: this.displayField
      };
      // return new Promise((resolve, reject) => {
      //   resolve([]);
      // });
      return this.retrieveMultiple();
    },

    retrieveMultiple() {
      if (this.filterObject) {
        if (!this.filterConfig.filter) {
          this.filterConfig.filter = {
            type: "and",
            conditions: []
          };
        }
        if (
          this.filterConfig.filter &&
          this.filterConfig.filter.conditions &&
          this.filterObject &&
          this.filterObject.length > 0
        ) {
          this.filterConfig.filter.conditions = this.filterConfig.filter.conditions.concat(
            this.filterObject
          );
        }
      }
      return retrieveMultiple("accounts", this.filterConfig)
        .then(res => {
          return res[0].value;
        })
        .catch(error => {})
        .finally(() => {
          rt.hideLoadingToast();
        });
    }
  }
};
</script>

<style lang="less" scoped>
</style>