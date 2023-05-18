<template>
   <div class="container">
                <h1>Thông Tin Tài Khoản</h1>
                <div class="form">
                    <div class="form_tt">
                        <div class="hoten">
                            <span>Họ tên:</span>
                            <input type="text" v-model="currentUser.userName">
                        </div>
                        <div class="sdt">
                            <span>Số điện thoại: </span>
                            <input type="text" v-model="currentUser.userPhone">
                        </div>
                        <div class="ngaysinh">
                            <span>Ngày SInh:</span>
                            <input type="date">
                        </div>
                        <div class="gioitinh">
                            <span class="GT">Giới tính:
                                <div class="chon">
                                    <span>Nam <input name="gender" type="radio" value="Nam" /></span>
                                    <span>Nữ <input name="gender" type="radio" value="Nữ" /></span>
                                    <!-- <form>
<input name="gender" type="radio" value="Nam" />Nam
<input name="gender" type="radio" value="Nữ" />Nữ
<input name="gender" type="radio" value="Khác" />Khác
</form> -->
                                </div>
                            </span>
                            
                        </div>
                    </div>
                    <div class="diachi">
                        <div class="email">
                            <span>Email: </span>
                            <input type="email"  width="200px" class="email_input" v-model="currentUser.userEmail">
                        </div>
                        <span>Địa chỉ:</span>
                        <textarea name="" id="" cols="30" rows="10" v-model="currentUser.userAddress"></textarea>
                        <div class="bnt">
                            <button style="border-radius: 23px;">Cập nhật thông tin</button>
                        </div>
                    </div>
                   
                </div>
                
            </div>
           
</template>

<script>
export default {

    methods: {
        getCurrentUser() {
            var storedUser = localStorage.getItem('user');
            this.currentUser = JSON.parse(storedUser);
        },
    },
    created() {
        this.getCurrentUser();
    }
}
</script>

<style>
 body {
                    font-family: Arial, sans-serif;
                    font-size: 14px;
                    line-height: 1.5;
                    margin: 0;
                    padding: 0;
                }
                h1{
                    text-align: center;
                    align-items: center;
                    color: #0c0d3e;
                }
                span{
                    font-size: 14px;
                    font-weight:700;
                    align-items: center;
                    display: block;
                    margin: 10px 0;
                    color: black;
                }
                textarea{
                    width: 500px;
                    height: 80px;
                }
                .container{
                    align-items: center;
                    display: block;
                    
                }
                .form{
                    justify-content: center;
                    display: flex;
                    
                }
                .form_tt{
                    margin-right: 80px;
                }
                .GT{
                    margin: 10px 0px 0px 0;
                }
                button{
                    justify-content: center;
                    background-color: #0f0424;
                    border-radius: 5px;
                    border: none;  
                    color: white;  
                    padding: 11px 25px;  
                    text-align: center;  
                    text-decoration: none;  
                    display: inline-block;
                    border-radius: 5px;
                }
                .bnt{
                    justify-content: center;
                    align-items: center;
                    margin-top: 20px;
                    margin-bottom: 37px;
                }
                .email_input{
                    width: 250px;
                }
                .chon{
                    align-items: center;
                    text-align: center;
                    justify-content: space-between;
                    display: flex;
                }
</style>