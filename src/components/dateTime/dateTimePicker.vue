<template>
  <div class="date-time-picker">
    <div class="input-label" v-if="labelShow">
      <label>{{label}}</label>
      <span class="is-required" v-if="required">*</span>
    </div>
    <div class="input-wrapper" :style="styles">
      <div class="rt-lookup" @click="onClick">
        <input
          :value="textValue"
          :placeholder="placeholder"
          :style="{ 'text-align': textAlign}"
          readonly
        >
        <span class="inner-icon">
          <rt-icon
            v-if="clearable && this.textValue"
            @click.native.stop="clear"
            class="rt-search-icon rt-search-icon-right"
            name="rt-base-search-delete"
            size="14"
          />
          <rt-icon name="rt-base-arrow" color="#ccc" size="20"></rt-icon>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'dateTimePicker',
  props: {
    // 是否显示标签
    labelShow: {
      type: Boolean,
      default: true
    },
    // 是否必选
    required: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: String
    }
  }
}
</script>
