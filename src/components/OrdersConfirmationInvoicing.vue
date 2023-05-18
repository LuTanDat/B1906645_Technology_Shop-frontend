<template>
    <main class="app-content">
      <div class="app-title">
        <ul class="app-breadcrumb breadcrumb side">
          <li class="breadcrumb-item active"><a href="#" style="text-decoration: none;color: black;"><b>XÁC NHẬN ĐƠN HÀNG, LẬP HÓA ĐƠN</b></a></li>
        </ul>
        <div id="clock"></div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="tile">
            <div class="tile-body">

              <div class="row element-button">

                <div class="col-sm-2">
                  <a class="btn btn-delete btn-sm print-file" href="#" type="button" title="In" @click="printTable('sampleTable')"><i
                      class="fas fa-print"></i> In dữ liệu</a>
                </div>

                <div class="col-sm-2">
                  <a class="btn btn-excel btn-sm" href="#" title="In" @click="exportTableToExcel('sampleTable')"><i class="fas fa-file-excel"></i> Xuất Excel</a>
                </div>
              </div>
              <table v-if="filteredOrdersCount > 0" class="table table-hover table-bordered js-copytextarea" cellpadding="0" cellspacing="0" border="0"
                id="sampleTable">
                <thead>
                    <tr>
                      <th width="10"><input type="checkbox" id="all"></th>
                      <th width="120">ID Hóa Đơn</th>
                      <th width="160">Tên khách hàng</th>
                      <th width="330">Địa chỉ</th>
                      <th width="125">SĐT</th>
                      <th>SẢN PHẨM MUA</th>
                      <th width="115">TỔNG TIỀN</th>
                      <!-- <th width="110">TRẠNG THÁI</th> -->
                      <th width="100">Tính năng</th>
                    </tr>
                </thead>
                <tbody>

                  <tr
                      v-for="order in filteredOrders"
                      :key="order.code"
                  >
                    <td width="10"><input type="checkbox" name="check1" value="1"></td>
                    <td>{{order.orderCode }}</td>
                    <td>{{order.userName}}</td>
                    <td>{{order.userAddress}}</td>
                    <td>{{order.userPhone}}</td>
                    <td>{{order.name}}</td>
                    <td>{{order.totalPriceProduct}} đ</td>
                    <!-- <td></td> -->
                    <td class="table-td-center">
                          <button @click="orderConfirmation(order)" class="btn btn-primary btn-sm edit" type="button" title="Xác nhận" style="min-width: 40px;">
                              <i class="fa-solid fa-check"></i>
                          </button>
                          <!-- <button @click="showBill(order)" class="btn btn-sm edit" title="Lập hóa đơn" id="show-emp" data-toggle="modal" data-target="#ModalUP" style="min-width: 40px;">
                              <i class="fa-solid fa-money-bill"></i>
                          </button> -->
                    </td>
                  </tr>

                </tbody>
              </table>
              <b v-else>Không có Đơn hàng nào cần xác nhận!</b>
            </div>
          </div>
        </div>
      </div>

    </main>

<!-- BEGIN MODAL -->
  <div class="modal fade" id="ModalUP" tabindex="-1" role="dialog" aria-hidden="true" data-backdrop="static" data-keyboard="false">
    <div class="modal-dialog modal-dialog-centered" role="document">

      <div class="invoice modal-content" id="Bill_ID">

        <img class="logo-bill" src="/images/logo_bill.jpg" />
        <div class="info">
          <div class="left">
            <p>Mã hóa đơn: {{currentOrder.orderCode}}</p>
            <p>Ngày Đặt Hàng: </p>
            <p>NVBH: {{currentUser.userName}}</p>
          </div>
          <div class="right">
            <p>Khách hàng: {{currentOrder.userName}}</p>
            <p>Số điện thoại: {{currentOrder.userPhone}}</p>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Sản phẩm</th>
              <th>Đơn giá</th>
              <th class="number">Số lượng</th>
              <th>Thành tiền</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{currentOrder.name}}</td>
              <td>{{currentOrder.price}}</td>
              <td class="number">{{currentOrder.quantityProduct}}</td>
              <td>{{currentOrder.totalPriceProduct}} đ</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="text-right">Tổng tiền:</td>
              <td class="text-right">{{currentOrder.totalPriceProduct}} đ</td>
            </tr>
          </tfoot>
        </table>
        <div class="thank-you">
          <p id="thank-you-message">CẢM ƠN QUÝ KHÁCH</p>
          <p id="thank-you-message">HẸN GẶP LẠI</p>
        </div>
        <div class="footer-bill">
            <button><a @click="printTable('Bill_ID')">IN</a></button>
            <a @click="hiddenBill()" class="btn btn-cancel" data-dismiss="modal" href="#">Hủy bỏ</a>
        </div>
        
      </div>
    </div>
  </div>
<!-- END MODAL -->

</template>

<style scoped>
  .fade {
    -webkit-transition: opacity 0.15s linear;
    -o-transition: opacity 0.15s linear;
    transition: opacity 0.15s linear;
  }
  .invoice {
    max-width: 480px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  .logo-bill {
    width: 250px;
    margin-left: 90px;
  }
  .info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  p, td {
    font-size: 14px;
  }
  .thank-you {
    margin-top: 5px;
    text-align: center;
  }
  .thank-you p {
    margin: 0;
    font-size: 20px;
    font-weight: bold;
    color: #333;
  }
  .footer-bill {
    display: flex;
    justify-content: space-between;
}

</style>

<script>

import ShopService from "@/services/shop.service";

// import jQuery from "jquery";
// const $ = jQuery;
// window.$ = $;

// // window.$ = window.jQuery = require('jquery')
//     $("#show-emp").on("click", function () {
//         $("#ModalUP").modal({ backdrop: false, keyboard: false })
//     })

export default {

    props: {
        orders: { type: Array, default: [] },
        ordersLength: {type: Number, required: true},
    },

    data() {
        return {
            currentOrder: {},
            currentUser: {
                userName: "",
                userPhone: 0,
                userEmail: "",
                userAddress: "",
            },
        }
    },

    computed: {
              // Chuyển các đối tượng thành chuỗi để tiện cho tìm kiếm => return mảng các chuỗi
        orderStrings() {
            return this.orders.map((order) => {
                const { isConfirm } = order;
                return [isConfirm].join("");
            });
        },
          // Trả về mảng giá trị có chứa thông tin cần tìm kiếm lưu vô tên hàm
        filteredOrders() {
          // console.log(this.orderStrings)
            return this.orders.filter((order, index) =>
                this.orderStrings[index].includes(false)
            );
        },
        filteredOrdersCount() {
          // console.log(this.filteredOrders)
            return this.filteredOrders.length;
        },
    },

    methods: {
      showBill(order) {
        var modal = document.getElementById('ModalUP')
        modal.classList.add('show');
        modal.style.cssText = "display: block; padding-right: 21px;";
        this.currentOrder = order;
      },
      hiddenBill() {
        var modal = document.getElementById('ModalUP')
        modal.classList.remove('show');
        modal.removeAttribute('style')
      },

      orderConfirmation(order) {
        if (confirm("Bạn có chắc chắn muốn Xác nhận Đơn hàng này?")) {
            // console.log("prev: ", order.isConfirm);//false
            order.isConfirm = true;
            // console.log("next: ", order.isConfirm);//true
            this.updateOrder(order);
            this.showBill(order)
        }
        
      },
      async updateOrder(data) {
          try {
            // console.log("order sau khi đã xác nhận: ", data);
            await ShopService.updateOrder(data.id, data);
            alert("Cập nhật thành công thông tin Đơn hàng.");
          } catch (error) {
              console.log(error);
          }
      },
      getCurrentUser() {
          var storedUser = localStorage.getItem('user');
          this.currentUser = JSON.parse(storedUser);
      },



      printTable(id) {
          var tab = document.getElementById(id);
          var win = window.open('', '', 'height=500,width=900');
          win.document.write(tab.outerHTML);
          win.document.close();
          win.print();
      },
      exportTableToExcel(tableID, filename = ''){
          var downloadLink;
          var dataType = 'application/vnd.ms-excel';
          var tableSelect = document.getElementById(tableID);
          var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
          
          // Specify file name
          filename = filename?filename+'.xls':'excel_data.xls';
          
          // Create download link element
          downloadLink = document.createElement("a");
          
          document.body.appendChild(downloadLink);
          
          if(navigator.msSaveOrOpenBlob){
              var blob = new Blob(['\ufeff', tableHTML], {
                  type: dataType
              });
              navigator.msSaveOrOpenBlob( blob, filename);
          }else{
              // Create a link to the file
              downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
          
              // Setting the file name
              downloadLink.download = filename;
              
              //triggering the function
              downloadLink.click();
        }
      }
    },
    created() {
        this.getCurrentUser();
    },
}
</script>