<template>
    <main class="app-content">
      <div class="app-title">
        <ul class="app-breadcrumb breadcrumb side">
          <li class="breadcrumb-item active"><a href="#" style="text-decoration: none;color: black;"><b>QUẢN LÝ NHÂN VIÊN</b></a></li>
        </ul>
        <div id="clock"></div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="tile">
            <div class="tile-body">

              <div class="row element-button">
                <div class="col-sm-2">
                    <button class="btn btn-add btn-sm" title="Thêm" @click="goToAddEmployee">
                      <i class="fas fa-plus"></i>Tạo mới nhân viên
                    </button>
                </div>

                <div class="col-sm-2">
                  <a class="btn btn-delete btn-sm print-file" href="#" type="button" title="In" @click="printTable"><i
                      class="fas fa-print"></i> In dữ liệu</a>
                </div>

                <div class="col-sm-2">
                  <a class="btn btn-excel btn-sm" href="#" title="In" @click="exportTableToExcel('sampleTable')"><i class="fas fa-file-excel"></i> Xuất Excel</a>
                </div>
                <div class="col-sm-2">
                  <a class="btn btn-delete btn-sm" type="button" title="Xóa" @click="removeAllEmployee"><i
                      class="fas fa-trash-alt"></i> Xóa tất cả </a>
                </div>
              </div>
              <table v-if="employeesLength > 0" class="table table-hover table-bordered" cellpadding="0" cellspacing="0" border="0"
                id="sampleTable">
                <thead>
                  <tr>
                    <th width="10"><input type="checkbox" id="all"></th>
                    <th width="105">ID nhân viên</th>
                    <th width="140">Họ và tên</th>
                    <th width="100">Password</th>
                    <th width="140">Email</th>
                    <th width="150">Địa chỉ</th>
                    <th width="100">Ngày sinh</th>
                    <th width="100">Giới tính</th>
                    <th width="115">SĐT</th>
                    <th width="100">Tính năng</th>
                  </tr>
                </thead>
                <tbody>

                  <tr
                      v-for="employee in employees"
                      :key="employee.code"
                  >
                    <td width="10"><input type="checkbox" name="check1" value="1"></td>
                    <td>{{employee.code}}</td>
                    <td>{{employee.name}}</td>
                    <td>{{employee.pw}}</td>
                    <td>{{employee.email}}</td>
                    <td>{{employee.address}}</td>
                    <td>{{employee.dateOfBirth}}</td>
                    <td>{{employee.sex}}</td>
                    <td>{{employee.phone}}</td>
                    <td class="table-td-center">
                      <button class="btn btn-primary btn-sm trash" type="button" title="Xóa" style="min-width: 40px;"
                          @click="deleteEmployee(employee.id)"><i class="fas fa-trash-alt"></i>
                      </button>

                      <router-link 
                          :to="{
                              name: 'employee.edit',
                              params: { id: employee.id },
                          }"
                      >
                          <button class="btn btn-primary btn-sm edit" type="button" title="Sửa" style="min-width: 40px;"
                              ><i class="fas fa-edit"></i>
                          </button>
                      </router-link>
                    </td>
                  </tr>

                  <!-- <tr>
                      <td width="10"><input type="checkbox" name="check1" value="1"></td>
                      <td>NV00001</td>
                      <td>Trương Thanh Thúy</td>
                      <td></td>
                      <td>155-157 Trần Quốc Thảo, Quận 5, Hồ Chí Minh </td>
                      <td>12/02/1999</td>
                      <td>Nữ</td>
                      <td>0926737168</td>
                      <td>Bán hàng</td>
                      <td class="table-td-center"><button class="btn btn-primary btn-sm trash" type="button" title="Xóa"
                          onclick="myFunction(this)"><i class="fas fa-trash-alt"></i>
                        </button>
                        <button class="btn btn-primary btn-sm edit" type="button" title="Sửa" id="show-emp"
                          data-toggle="modal" data-target="#ModalUP"><i class="fas fa-edit"></i>
                        </button>
                      </td>
                  </tr> -->

                </tbody>
              </table>
              <b v-else>Không có nhân viên nào</b>
            </div>
          </div>
        </div>
      </div>

    </main>

</template>


<style scoped>

</style>


<script>

import ShopService from "@/services/shop.service";

export default {
    
    data() {
        return {
            employees: [],
            employeesLength: "",
        }
    },

    // computed: {
    //           // Chuyển các đối tượng thành chuỗi để tiện cho tìm kiếm => return mảng các chuỗi
    //     employeeStrings() {
    //         return this.employees.map((employee) => {
    //             const { code, name, phone, position } = employee;
    //             return [code, name, phone, position].join("");
    //         });
    //     },
    //       // Trả về mảng giá trị có chứa thông tin cần tìm kiếm lưu vô tên hàm
    //     filteredEmployees() {
    //       // console.log(this.employeeStrings)
    //         return this.employees.filter((employee, index) =>
    //             this.employeeStrings[index].includes("Nhân viên")
    //         );
    //     },
    //     filteredEmployeesCount() {
    //       // console.log(this.filteredEmployees)
    //         return this.filteredEmployees.length;
    //     },
    // },

    methods: {
        refreshList() {
            this.retrieveEmployees();
        },

        goToAddEmployee() {
            this.$router.push({ name: "employee.add" });
        },

        async retrieveEmployees() {
            try {
                this.employees = await ShopService.getAllEmployees();
                this.retrieveEmployeesCount();
                // console.log(this.employees);
            } catch (error) {
                console.log(error);
            }
        },
        retrieveEmployeesCount() {
            this.employeesLength = this.employees.length;
        },

        async deleteEmployee(id) {
            if (confirm("Bạn có chắc chắn muốn xóa nhân viên này?")) {
                try {
                    await ShopService.deleteEmployee(id);
                    this.refreshList();
                } catch (error) {
                    console.log(error);
                }
            }
        },
        async removeAllEmployee() {
            if (confirm("Bạn muốn xóa tất cả Nhân viên?")) {
                try {
                    await ShopService.deleteAllEmployees();
                    this.refreshList();
                } catch (error) {
                    console.log(error);
                }
            }
        },
        printTable() {
            var tab = document.getElementById('sampleTable');
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
    mounted() {
        this.refreshList();
    },
}
</script>