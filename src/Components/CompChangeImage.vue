<template>
  <div class="container">
    <button @click="changeAvatar">Change Image</button>
    <input type="file" ref="fileAvatar" >
  </div>
</template>

<script>
export default {
  name: 'ChangeImage',
  props: {
  },
  data () {
    return {
    }
  },
  methods: {
    changeAvatar(e) {
      console.log(this.$refs.fileAvatar.click());
    }
  }
}
</script>

<style>
  .container {
    position: relative;
    width: 500px;
    height: 300px;
    border: 2px solid #ccc;
    left: 50%;
    transform: translateX(-50%);
  }
  input[type='file'] {
    display: none;
  }
  .container button {
    width: 150px;
    height: 40px;
    border: 2px solid #ccc;
    background-color: transparent;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Verdana', Geneva, sans-serif;
    border-radius: 5px;
  }
  .container button:hover {
    background-color:#ff7f50;
    border: 2px solid transparent;
    color: #fff;
  }
</style>
