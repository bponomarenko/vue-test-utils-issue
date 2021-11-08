<template>
  <div>
    <label>{{ slotComponents }}</label>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return { slotComponents: null };
  },
  mounted() {
    this.updateSlotComponents();
  },
  updated() {
    this.updateSlotComponents();
  },
  methods: {
    updateSlotComponents() {
      this.slotComponents =
        this.$slots.default?.every(
          ({ componentInstance }) => !!componentInstance
        ) ?? false;
    },
  },
};
</script>
