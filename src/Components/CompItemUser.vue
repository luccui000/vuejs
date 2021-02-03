<template>
    <p>
      <b>{{ user.username }}</b>
      sống tại {{ user.address }}
      <a v-on:click="edit" v-bind:value="user.id">edit</a>
      <a v-on:click="remove">delete</a>
    </p>
</template>

<script>
export default {
  name: 'ItemUser',
  props: {
    user: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
    }
  },
  methods: {
    edit() {
      console.log("[CompItemUser.vue] >> edit");
      this.$emit("changeTitle", { newTitle: "Danh sách đã được cập nhật"});
    },
    remove() {
      console.log("[CompItemUser.vue] >> remove");
      this.$emit("sendToApp", { id: this.user.id });
    }
  }
}
</script>

<style>
  p b {
    background-color: coral;
    border-radius: 5px;
    padding: 2px;
    color: #fff;
  }
  p a {
    margin-left: 20px;
    cursor: pointer;
  }
</style>
