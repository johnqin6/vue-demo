<template>
  <div class="rt-icon">
    <svg
      :width="size"
      :height="size"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      aria-hidden="true">
      <use :xlink:href="`#${name}`" :fill="color"></use>
    </svg>
  </div>
</template>
<script>
export default {
  name: 'RtIcon',
  props: {
    name: {
      type: String
    },
    size: {
      type: [Number, String],
      default: 14
    },
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>
