var vm = new Vue({
  el: "#app",
  data: {
    title: "Ao Ba Lỗ Nam Cao Cấp ABL01",
    src: 'https://salt.tikicdn.com/cache/w444/ts/product/ab/72/5d/d1a0412e1f30f1bc9abca6b90c558bce.jpg',
    url: "https://tiki.vn/product-p76416270.html?spid=76416300&src=deal-hot",
    target: '_blank',
    brand: 'Xám XL',
    price: 21000,
    color: 'red',
    isToast: false, 
    displaytest: "",
    bgColor: '#6f99aa',
    txtColor: '#fff',
    users: [
      { username: 'luccui', age: 20, address: 'Tra Vinh'},
      { username: 'admin', age: 23, address: 'TpHCM'},
      { username: 'testuser', age: 42, address: 'Ha Noi'},
      { username: 'testuser1', age: 23, address: 'Ha Noi'},
      { username: 'testuser2', age: 44, address: 'Ha Noi'},
      { username: 'testuser3', age: 51, address: 'Ha Noi'},
      { username: 'testuser4', age: 13, address: 'Ha Noi'},
    ]
  }, 
  methods: {
    formatPrice() {
      return new Intl.NumberFormat('de-DE', { 
        style: 'currency', currency: 'VND' 
      }).format(this.price);
    },
    setRed() {
      this.color = 'red';
    },
    setBlue() {
      this.color = 'blue';
    },
    setGreen() {
      this.color = 'green';
    },
    showProduct: function() {
      this.isToast = !this.isToast; 
      this.bgColor = '#fff';
      this.txtColor = '#6f99aa';
      
      this.displaytest = `Sản phẩm: ${this.title}<br/>Giá: ${this.price}, Màu sắc: ${this.color}`
    }
  }, computed: {
    objectBgClasses: function() {
      return {
        backgroundColor: this.bgColor,
        color: this.txtColor,
        width: '130px',
        borderRadius: '5px'
      };
    },
    userFilter() {
      return this.users.filter(e => { return e.age > 20 })
    }
  }
});


console.log(vm);