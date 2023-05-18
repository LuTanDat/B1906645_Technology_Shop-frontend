<template>
  <div class="container">
		<h1 class="text-center">Theo dõi tình trạng đơn hàng</h1>
		<table class="table">
			<thead>
				<tr>
					<th>Mã đơn hàng</th>
					<th>Ngày đặt hàng</th>
					<th>Ngày giao hàng dự kiến</th>
					<th>Tình trạng đơn hàng</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>123456789</td>
					<td>01/01/2023</td>
					<td>05/01/2023</td>
					<td><span class="badge badge-info">Đang xử lý</span></td>
				</tr>
				<tr>
					<td>987654321</td>
					<td>02/01/2023</td>
					<td>07/01/2023</td>
					<td><span class="badge badge-success">Đã giao hàng</span></td>
				</tr>
				<tr>
					<td>567891234</td>
					<td>03/01/2023</td>
					<td>09/01/2023</td>
					<td><span class="badge badge-warning">Đang giao hàng</span></td>
				</tr>
				<tr>
					<td>321478965</td>
					<td>04/01/2023</td>
					<td>11/01/2023</td>
					<td><span class="badge badge-danger">Đã hủy</span></td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class="container">
		<h1 class="text-center mb-5">Lịch sử đơn hàng</h1>
	
		<div class="card">
		  <div class="card-header">
			<h5 class="mb-0">Đơn hàng #12345</h5>
			<small class="text-muted">Ngày đặt hàng: 01/01/2022</small>
		  </div>
		  <div class="card-body">
			<ul>
			  <li>Sản phẩm 1</li>
			</ul>
			<p>Tổng tiền: 1.000.000 VNĐ</p>
		  </div>
		</div>
	
		<div class="card mt-3">
		  <div class="card-header">
			<h5 class="mb-0">Đơn hàng #23456</h5>
			<small class="text-muted">Ngày đặt hàng: 02/02/2023</small>
		  </div>
		  <div class="card-body">
			<ul>
			  <li>Sản phẩm 2</li>
			</ul>
			<p>Tổng tiền: 500.000 VNĐ</p>
		  </div>
		</div>
	  </div>
     
</template>

<script>
export default {

}
</script>

<style>
tbody, td, tfoot, th, thead, tr {
    border-color: inherit;
    border-style: solid;
    border-width: 0;
    size: 87px;
    font-size: 16px;
}
.card {
    font-size: 16px;
}
h5{
    font-size: 16px;
}
</style>