<template>
  <div class="contain">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "slot",
  data() {

  },
  methods: {

  }
}
</script>
<style>
  .contain p {
    padding: 0 100px;
  }
  .contain ul li {
    list-style-type: none;
    display: inline;
    padding: 0 20px;
  }
  .contain ul li:hover{
    color: teal;
    cursor: pointer;
  }
</style>
