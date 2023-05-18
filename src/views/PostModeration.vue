<template>
    <main class="app-content">
      <div class="app-title">
        <ul class="app-breadcrumb breadcrumb side">
          <li class="breadcrumb-item active"><a href="#" style="text-decoration: none;color: black;"><b>DUYỆT BÀI ĐĂNG</b></a></li>
        </ul>
        <div id="clock"></div>
      </div>

      <!-- <div class="row">
        <div class="col-md-12">
          <div class="tile">
            <div class="tile-body">

              <div class="row element-button">

                <div class="col-sm-2">
                  <a class="btn btn-delete btn-sm print-file" href="#" type="button" title="In" onclick="myApp.printTable()"><i
                      class="fas fa-print"></i> In dữ liệu</a>
                </div>

                <div class="col-sm-2">
                  <a class="btn btn-excel btn-sm" href="#" title="In"><i class="fas fa-file-excel"></i> Xuất Excel</a>
                </div>
                <div class="col-sm-2">
                  <a class="btn btn-delete btn-sm" type="button" title="Xóa" @click="removeAllCustomer"><i
                      class="fas fa-trash-alt"></i> Xóa tất cả </a>
                </div>
              </div>
              <table v-if="customersLength > 0" class="table table-hover table-bordered js-copytextarea" cellpadding="0" cellspacing="0" border="0"
                id="sampleTable">
                <thead>
                    <tr>
                    <th width="10"><input type="checkbox" id="all"></th>
                    <th width="120">ID Khách hàng</th>
                    <th width="140">Họ và tên</th>
                    <th width="140">Email</th>
                    <th width="115">SĐT</th>
                    <th>Chi tiết bài đăng</th>
                    <th width="100">Tính năng</th>
                </tr>
                </thead>
                <tbody> -->

                  <!-- <tr
                      v-for="customer in customers"
                      :key="customer.code"
                  >
                    <td width="10"><input type="checkbox" name="check1" value="1"></td>
                    <td>{{customer.code}}</td>
                    <td>{{customer.name}}</td>
                    <td>{{customer.email}}</td>
                    <td>{{customer.phone}}</td>
                    <td></td>
                    <td class="table-td-center">
                      <button class="btn btn-primary btn-sm trash" type="button" title="Xóa" style="min-width: 40px;"
                          @click="deleteCustomer(customer.id)"><i class="fas fa-trash-alt"></i>
                      </button>

                      <router-link 
                          :to="{
                              name: 'customer.edit',
                              params: { id: customer.id },
                          }"
                      >
                          <button class="btn btn-primary btn-sm edit" type="button" title="Sửa" style="min-width: 40px;"
                              ><i class="fas fa-edit"></i>
                          </button>
                      </router-link>
                    </td>
                  </tr> -->
                    
                  <!-- <tr>
                    <td width="10"><input type="checkbox"></td>
                    <td>NV004</td>
                    <td>Dương Tuấn Anh</td>
                    <td></td>
                    <td>19 Đường Nguyễn Hữu Thọ, Tân Hưng, Quận 7, Hồ Chí Minh </td>
                    <td>18/02/1995</td>
                    <td>Nam</td>
                    <td>0916706633</td>
                    <td>Tư vấn</td>
                    <td><button class="btn btn-primary btn-sm trash" type="button" title="Xóa" onclick="myFunction()"><i
                          class="fas fa-trash-alt"></i>
                      </button>
                      <button class="btn btn-primary btn-sm edit" type="button" title="Sửa" id="show-emp"
                        data-toggle="modal" data-target="#ModalUP"><i class="fas fa-edit"></i>
                      </button>
                    </td>
                  </tr> -->

                <!-- </tbody>
              </table>
              <b v-else>Không có Bài đăng nào</b>
            </div>
          </div>
        </div>
      </div> -->

    </main>

</template>

<style scoped>

</style>

<script>

import ShopService from "@/services/shop.service";

export default {
    
    data() {
        return {
            customers: [],
            customersLength: "",
        }
    },

    // computed: {
    //           // Chuyển các đối tượng thành chuỗi để tiện cho tìm kiếm => return mảng các chuỗi
    //     customerStrings() {
    //         return this.customers.map((customer) => {
    //             const { code, name, phone, position } = customer;
    //             return [code, name, phone, position].join("");
    //         });
    //     },
    //       // Trả về mảng giá trị có chứa thông tin cần tìm kiếm lưu vô tên hàm
    //     filteredCustomers() {
    //       // console.log(this.customerStrings)
    //         return this.customers.filter((customer, index) =>
    //             this.customerStrings[index].includes("Khách hàng")
    //         );
    //     },
    //     filteredCustomersCount() {
    //       // console.log(this.filteredCustomers)
    //         return this.filteredCustomers.length;
    //     },
    // },

    methods: {
        refreshList() {
            this.retrieveCustomers();
        },

        async retrieveCustomers() {
            try {
                this.customers = await ShopService.getAllCustomers();
                this.retrieveCustomersCount();
                // console.log(this.customers);
            } catch (error) {
                console.log(error);
            }
        },
        retrieveCustomersCount() {
            this.customersLength = this.customers.length;
        },

        async deleteCustomer(id) {
            if (confirm("Bạn có chắc chắn muốn xóa Khách hàng này?")) {
                try {
                    await ShopService.deleteCustomer(id);
                    this.refreshList();
                } catch (error) {
                    console.log(error);
                }
            }
        },
        async removeAllCustomer() {
            if (confirm("Bạn muốn xóa tất cả Nhân viên?")) {
                try {
                    await ShopService.deleteAllCustomers();
                    this.refreshList();
                } catch (error) {
                    console.log(error);
                }
            }
        },

    },
    mounted() {
        this.refreshList();
    },
}
</script>