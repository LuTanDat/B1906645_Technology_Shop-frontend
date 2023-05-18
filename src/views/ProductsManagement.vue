<template>
    <main class="app-content">
        <div class="app-title">
            <ul class="app-breadcrumb breadcrumb side">
                <li class="breadcrumb-item active"><a href="#" style="text-decoration: none;color: black;"><b>QUẢN LÝ SẢN PHẨM</b></a></li>
            </ul>
            <div id="clock"></div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="tile">
                    <div class="tile-body">
                        <div class="row element-button">
                            <div class="col-sm-2">
                                <button class="btn btn-add btn-sm" title="Thêm" @click="goToAddProduct">
                                    <i class="fas fa-plus"></i>Tạo mới sản phẩm
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
                              <a class="btn btn-delete btn-sm" type="button" title="Xóa" @click="removeAllProducts"><i
                                  class="fas fa-trash-alt"></i> Xóa tất cả </a>
                            </div>
                          </div>
                        <table class="table table-hover table-bordered" id="sampleTable">
                            <thead>
                                <tr>
                                    <th width="10"><input type="checkbox" id="all"></th>
                                    <th width="115">ID sản phẩm</th>
                                    <th>Tên sản phẩm</th>
                                    <th width="155">Số lượng</th>
                                    <th width="170">Tình trạng</th>
                                    <th width="170">Giá bán</th>
                                    <th width="170">Danh mục</th>
                                    <th width="100">Chức năng</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr 
                                    v-for="product in products"
                                    :key="product.code"
                                >
                                    <td width="10"><input type="checkbox" name="check1" value="1"></td>
                                    <td>{{product.code}}</td>
                                    <td>{{product.name}}</td>
                                    
                                    <td>{{product.quantity}}</td>
                                    <td>
                                        <span v-if="product.quantity" class="badge bg-success">Còn hàng</span>
                                        <span v-else class="badge bg-danger">Hết hàng</span>
                                    </td>
                                    <td>{{product.price}} đ</td>
                                    <td>{{product.category}}</td>
                                    <td class="table-td-center">
                                        <button class="btn btn-primary btn-sm trash" type="button" title="Xóa" style="min-width: 40px;"
                                            @click="deleteProduct(product.id)"><i class="fas fa-trash-alt"></i> 
                                        </button>

                                        <router-link 
                                            :to="{
                                                name: 'product.edit',
                                                params: { id: product.id },
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
                                    <td>00000001</td>
                                    <td>Chuột Gaming Rapoo V16 215đ</td>
                                    
                                    <td>140</td>
                                    <td><span class="badge bg-success">Còn hàng</span></td>
                                    <td>79.000 đ</td>
                                    <td>Chuột Laptop</td>
                                    <td>
                                        <button class="btn btn-primary btn-sm trash" type="button" title="Xóa"
                                            onclick="myFunction(this)"><i class="fas fa-trash-alt"></i> 
                                        </button>
                                        <button class="btn btn-primary btn-sm edit" type="button" title="Sửa" id="show-emp" data-toggle="modal"
                                            data-target="#ModalUP"><i class="fas fa-edit"></i>
                                        </button> 
                                    </td>
                                </tr> -->
                                
                            </tbody>
                        </table>
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
            products: [],
        }
    },

    methods: {
        refreshList() {
            this.retrieveProducts();
        },

        goToAddProduct() {
            this.$router.push({ name: "product.add" });
        },

        async retrieveProducts() {
            try {
                this.products = await ShopService.getAll();
            } catch (error) {
                console.log(error);
            }
        },
        retrieveProductsCount() {
            return this.retrieveProducts.length;
        },
        
        async deleteProduct(id) {
            if (confirm("Bạn có chắc chắn muốn xóa?")) {
                try {
                    await ShopService.delete(id);
                    this.refreshList();
                } catch (error) {
                    console.log(error);
                }
            }
        },
        async removeAllProducts() {
            if (confirm("Bạn muốn xóa tất cả Liên hệ?")) {
                try {
                    await ShopService.deleteAll();
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