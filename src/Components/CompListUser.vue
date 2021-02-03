<template>
  <div class="list">
    <h2>{{ lstTitle }}</h2>
    <CompItemUser
      v-for="user in users"
      v-bind:key="user.id"
      v-bind:user="user"
      v-on:changeTitle="handleChangeTitle"
      v-on:sendToApp="handleSendToApp"
    />
  </div>
</template>

<script>
import CompItemUser from "./CompItemUser";
export default {
  name: 'ListUser',
  props: {
    users: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
      lstTitle: 'Danh sách thành viên'
    }
  },
  methods: {
    handleChangeTitle(data) {
      this.lstTitle = data.newTitle;
      console.log("[CompListUser.vue] >> handleChangeTitle()");
    },
    handleSendToApp(data) {
      console.log("[CompListUser.vue] >> handleSendToApp()", data);
      this.$emit("removeUser", data);
    }
  },
  components: {
    CompItemUser
  }
}
</script>

<style>
</style>
