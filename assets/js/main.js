var vm = new Vue({
  el: "#app",
  data: {
    title: "Ao Ba Lỗ Nam Cao Cấp ABL01",
    imageProduct: '',
    target: '_blank',
    brand: 'Xám XL',
    price: 21000,
    color: '',
    isToast: false, 
    displaytest: "",
    bgColor: '#6f99aa',
    txtColor: '#fff',
    isDisplay: false,
    users: [
      { username: 'luccui', age: 20, address: 'Tra Vinh'},
      { username: 'admin', age: 23, address: 'TpHCM'},
      { username: 'testuser', age: 42, address: 'Ha Noi'},
      { username: 'testuser1', age: 23, address: 'Ha Noi'},
      { username: 'testuser2', age: 44, address: 'Ha Noi'},
      { username: 'testuser3', age: 51, address: 'Ha Noi'},
      { username: 'testuser4', age: 13, address: 'Ha Noi'},
    ],
    detailProduct: [
      {
        imageUrl: 'https://salt.tikicdn.com/cache/w444/ts/product/6c/32/45/ea3a36fce939c5536d2b6020ae0c1267.jpg',
        quality: 10,
        price: 25000,
        color: 'blue'
      },
      {
        imageUrl: 'https://salt.tikicdn.com/cache/w444/ts/product/6b/58/9c/62b09db1abc877a80c96a44670249f89.jpg',
        quality: 5,
        price: 30000,
        color: 'orange'
      },
      {
        imageUrl: 'https://salt.tikicdn.com/cache/w444/ts/product/2b/d5/1c/4669488895fafda5b7edf2f5dfbcd77f.jpg',
        quality: 2,
        price: 20000,
        color: 'white'
      }
    ],
    options: '',
    count: 0,
    inputCounter: ''
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
      this.modelBody = `
      <div class="table">
        <table>
            <thead>
                <tr>
                    <th>Tên sản phẩm</th>
                    <th>Số lượng</th> 
                    <th>Màu sắc</th> 
                    <th>Giá</th> 
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> ${this.title}</td>
                    <td><input type="number" id="mount" @click="set(this)"></td>
                    <td> 
                      <select id="selectCl" >
                        ${this.setOption }
                      </select>
                    </td>
                    <td>${this.formatPrice(this.price)}</td>
                </tr>
                
            </tbody>
        </table>
    </div>
    <div class="total"><p>Total: ${this.formatPrice(this.price * this.count)}</p></div>
      `
      this.isDisplay = !this.isDisplay;
    },
    selectProduct(color, price) {
      this.color = color;
      this.price = price; 
    },
    setImage(image) {
      this.imageProduct = image;
    },
    closeModal() {
      this.isDisplay = !this.isDisplay;
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
    getColors() {
      return this.detailProduct.map(e => {
        return { 
          color: e.color,
          image: e.imageUrl
        };
      });
    },
    userFilter() {
      return this.users.filter(e => { return e.age > 20 })
    },
    setMainImageProd() {
      if(this.imageProduct.length == 0) {
        this.color = this.detailProduct[0].color; 
        this.setImage(this.detailProduct[0].imageUrl);
      }  
      if(this.color == this.detailProduct[0].color) {
        this.setImage(this.detailProduct[0].imageUrl);
      }
      if(this.color == this.detailProduct[1].color) {
        this.setImage(this.detailProduct[1].imageUrl);
      }
      if(this.color == this.detailProduct[2].color) {
        this.setImage(this.detailProduct[2].imageUrl);
      }
      return this.imageProduct;
    },
    setOption() {
      this.detailProduct.map(e => {
        this.options += `<option>${e.color}</option>`;
      })
      return this.options;
    }, 
  }
});


console.log(vm);