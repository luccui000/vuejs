<template>
  <div id="app">
    <CompSlot>
      <ul>
        <li @click="setTab(1)">Home</li>
        <li @click="setTab(2)">Product</li>
        <li @click="setTab(3)">About Me</li>
      </ul>
      <div class="tab1" v-if="tab === 1">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
          vero provident eos rerum est sed delectus ratione. Ipsa ipsum distinctio
          tenetur harum corrupti quas laboriosam voluptatem excepturi rem, tempora fugiat!
        </p>
      </div>
      <div class="tab2" v-else-if="tab === 2">
        <p>Trong javascript có nhiều cách javascript remove element from array. Có nhiều cách ta đã biết từ lâu,
          nhưng cũng nên học thêm những cách khác như, remove item in array javascript es6, hay remove object in array javascript,.</p>
      </div>
      <div class="tab3" v-else-if="tab === 3">
        <ul>
          <li><a href="">Facebook</a></li>
          <li><a href="">Google</a></li>
          <li><a href="">Twitter</a></li>
        </ul>
      </div>
    </CompSlot>
    <CompHeader />
    <CompListUser
      v-bind:users="users"
      v-on:removeUser="removeUser"
    />
    <CompFooter />
    <CompChangeImage />
  </div>
</template>

<script>

import CompHeader from './Components/CompHeader';
import CompFooter from './Components/CompFooter';
import CompListUser from "./Components/CompListUser";
import CompChangeImage from './Components/CompChangeImage';
import CompSlot from './Components/CompSlot';


export default {
  name: 'app',
  data () {
    return {
      users: [
        { id: 1, username: 'luccui', address: 'Tra Vinh' },
        { id: 2, username: 'admin', address: 'Ha Noi' },
        { id: 3, username: 'nvtam', address: 'Hai Duong' },
        { id: 4, username: 'mvhoang', address: 'Da Nang' }
      ],
      tab: 1
    }
  },
  components: {
    CompHeader,
    CompFooter,
    CompListUser,
    CompChangeImage,
    CompSlot,
  },
  methods: {
    removeUser(data) {
      console.log("[App.vue] >> removeUser");
      this.users = this.users.filter(elem => elem.id !== data.id);
      console.log(this.users);
    },
    setTab(numTab) {
      this.tab = numTab;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}

</style>
