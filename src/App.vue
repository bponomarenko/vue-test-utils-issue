<template>
  <div id="app">
    {{ stringified }}
  </div>
</template>

<script>
export default {
  props: {
    collection: {
      type: Array,
      default: () => [],
    }
  },
  data: () => ({
    data: ''
  }),
  computed: {
    stringified() {
      return this.collection.join(',');
    }
  },
  watch: {
    collection: 'execute',
  },
  methods: {
    execute() {
      this.data = this.stringified;
    }
  }
}
</script>
