<template>
  <div class="app__cantainer">
                <div class="grid wide">
                    <div class="home hide-on-mobile-tablet">
                       
                            <div class="home__shop">
                                <router-link :to="{name: 'main.shop'}" style="text-decoration: none; color: #fd7e14;">
                                    <i class="home__shop-icon fas fa-chevron-left"></i>
                                    TRỞ LẠI
                                </router-link>
                            </div>
                      
                    </div>
                    <div class="lienhe">
                        <div class="container">
                            <div class="row" id="contact">
                                <h1 id="lienhe"> LIÊN HỆ</h1>
                                <div class="col">
                                    <h2>LIÊN LẠC</h2>
                                    <h4>Email:<i class="email1">TECHNOLOGYSHOP@gmail.com</i></h4>
                                    <h4>Hotline: 09-73-837-888</h4>
                                    <i class="tooter-item__icon fab fa-facebook"></i>
                                    <i class="tooter-item__icon fab fa-instagram"></i>
                                    <i class="tooter-item__icon fab fa-linkedin"></i>
                                </div>
                                <div class="col">
                                    <h2>ĐỊA CHỈ</h2>

                                    <h4>0123, Tòa nhà ABC</h4>
                                    <h4>Thành Phố Cần Thơ</h4>
                                    <h4>Việt Nam</h4>
                                </div>
                                <div class="col">
                                    <h2>THỜI GIAN LÀM VIỆC</h2>
                                    <h4>Thứ 2 - Thứ 7</h4>
                                    <h4>9h30 - 22h</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid wide">
                    <form action="#" method="POST" class="gopy">
                        <div class="container row">
                            <!-- <div class="row"> -->
                            <div class="col-sm-6">
                                <div class="gopy1">
                                    <div class="row">
                                        <h2>Thông tin </h2>
                                        <div class="col-10">
                                            <label for="exampleFormControlInput1" class="form-label"></label>
                                            <input type="name" class="form-control" id="exampleFormControlInput1"
                                                placeholder="Họ tên">
                                        </div>
                                        <div class="col-10">
                                            <label for="exampleFormControlInput1" class="form-label"></label>
                                            <input type="email" class="form-control" id="exampleFormControlInput1"
                                                placeholder="name@gmail.com">
                                        </div>
                                        <div class="col-10">
                                            <label for="exampleFormControlInput1" class="form-label"></label>
                                            <input type="phone" class="form-control" id="exampleFormControlInput1"
                                                placeholder="Phone">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- </div> -->
                            <!-- <div class="row"> -->
                            <div class="col-sm-6">
                                <div class="gopy2">
                                    <div class="col-9">
                                        <label for="exampleFormControlTextarea1" class="form-label">
                                            <h2>Góp ý</h2>
                                        </label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1"
                                            rows="15"></textarea>

                                    </div>
                                </div>
                            </div>
                            <!-- </div> -->
                            <div class="nutxacnhan">
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal" id="nutxacnhan">
                                    Xác nhận
                                </button>
                                <div class="modal fade" id="exampleModal" tabindex="-1"
                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Góp ý</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body" id="bodyxacnhan">
                                                <h4>Bạn có chắc về điều này.</h4>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary"
                                                    data-bs-dismiss="modal">Hủy</button>
                                                <button type="submit" data-bs-dismiss="modal" class="btn btn-primary" id="nutxacnhan">Xác
                                                    nhận</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
</template>

<script>
export default {

}
</script>

<style>
    body{
            overflow-x: hidden;
        }

        #contact {
            border: 1px solid #ccc7c8;
            padding: 16px 0;
            /* margin-top: 5%; */
            border-radius: 5px;
            color: snow;
            text-align: center;
            background-color: gray;
            background-image: url('https://images.wallpaperscraft.com/image/single/road_traffic_city_124490_1280x720.jpg')
        }

        #lienhe {
            margin: 12px 0 16px 0;
            text-transform: uppercase;
            font-family: 'Open Sans', sans-serif;
            font-size: 28px;
            font-weight: 300;
            line-height: 34px;
            text-align: center;
        }

        .email1 {
            color: #fd7e14
        }

        .gopy {
            margin-top: 25px;
            text-align: center;
            color: gray;
            border: 1px solid gray;
            margin-bottom: 25px;
        }

        .gopy1 {
            width: 110%;
            height: 40%;
        }

        .gopy2 {
            width: 130%;
            height: 40%;
        }

        .nutxacnhan {
            margin-top: 10px;
            margin-bottom: 20px;
        }

        #nutxacnhan {
            background-color: #0f0424;
            border: none;
            color: white;
            text-align: center;
            text-decoration: none;
            display: inline-block;
        }

        #bodyxacnhan {
            text-align: left;
        }

        .footer-item{
            max-height: 26px;
        }
        .control-label  {
            font-size: 18px;
        }
        .form-control {
            font-size: 18px;
        }
</style>