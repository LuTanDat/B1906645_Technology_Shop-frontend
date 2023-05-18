<template>
    <Form
        @submit="$emit('submit:employee', employeeLocal)"
        :validation-schema="employeeFormSchema"
        class="row"
    >
        <div class="form-group col-md-4">
            <label class="control-label" for="code">ID nhân viên</label>
            <Field
                name="code"
                type="text"
                class="form-control"
                v-model="employeeLocal.code"
            />
            <ErrorMessage name="code" class="error-feedback" />
        </div>

        <div class="form-group col-md-4">
            <label class="control-label" for="name">Họ và tên</label>
            <Field
                name="name"
                type="text"
                class="form-control"
                v-model="employeeLocal.name"
            />
            <ErrorMessage name="name" class="error-feedback" />
        </div>

        <div class="form-group col-md-4">
            <label class="control-label" for="pw">Mật khẩu</label>
            <Field
                name="pw"
                type="text"
                class="form-control"
                v-model="employeeLocal.pw"
            />
            <ErrorMessage name="pw" class="error-feedback" />
            <!-- <h2 class="mt-2">{{employeeLocal.pw}}</h2> -->
        </div>

        <div class="form-group col-md-4">
            <label class="control-label" for="email">Địa chỉ email</label>
            <Field
                name="email"
                type="email"
                class="form-control"
                v-model="employeeLocal.email"
            />
            <ErrorMessage name="email" class="error-feedback" />
            <!-- <h2 class="mt-2">{{typeof(employeeLocal.email)}}</h2> -->

        </div>

        <div class="form-group col-md-4">
            <label class="control-label" for="address">Địa chỉ thường trú</label>
            <Field
                name="address"
                type="text"
                class="form-control"
                v-model="employeeLocal.address"
            />
            <ErrorMessage name="address" class="error-feedback" />
        </div>
        <div class="form-group col-md-4">
            <label class="control-label" for="dateOfBirth">Ngày sinh</label>
            <Field
                name="dateOfBirth"
                type="date"
                class="form-control"
                v-model="employeeLocal.dateOfBirth"
            />
            <ErrorMessage name="dateOfBirth" class="error-feedback" />
            <!-- <h2 class="mt-2">{{typeof(employeeLocal.dateOfBirth)}}</h2> -->
        </div>
        <div class="form-group col-md-4">
            <label class="control-label" for="sex">Giới tính</label>
            <select name="sex" id="sex" class="form-control" required v-model="employeeLocal.sex">
                <option value="" selected>---Chọn giới tính---</option>
                <option value="Nam">Nam</option>
                <option value="Nữ">Nữ</option>
                <option value="Khác">Khác</option>
            </select>
            <ErrorMessage name="sex" class="error-feedback" />
        </div>
        <div class="form-group col-md-4">
            <label class="control-label" for="phone">Số điện thoại</label>
            <Field
                name="phone"
                type="text"
                class="form-control"
                v-model="employeeLocal.phone"
            />
            <ErrorMessage name="phone" class="error-feedback" />
        </div>
        <!-- <div class="form-group col-md-4">
            <label class="control-label" for="position">Chức vụ</label>
            <select name="position" id="position" class="form-control" required v-model="employeeLocal.position">
                <option value="" selected>---Chọn chức vụ---</option>
                <option value="Nhân viên">Nhân viên</option>
            </select>
            <ErrorMessage name="position" class="error-feedback" />
        </div> -->

        <div class="form-group col-md-12">
            <label class="control-label" for="">Ảnh sản phẩm</label>
            <form>
                <div>
                    <label class="label-image" for="image_uploads"><i class="fa-solid fa-cloud-arrow-up"></i> <b>Chọn ảnh</b></label>
                    <input type="file" id="image_uploads" name="image_uploads" accept=".jpg, .jpeg, .png" @change="updateImageDisplay" multiple>
                </div>
                <div class="preview">
                    <p>No files currently selected for upload</p>
                </div>
            </form>
              

            <ErrorMessage name="images" class="error-feedback" />
        </div>
       

        <div class="form-group" style="display: flex;">
            <button class="btn m-2 btn-save">Lưu lại</button>
            
            <router-link :to="{name: 'employee.manager'}">
                <button class="btn m-2 btn-cancel">Hủy bỏ</button>
            </router-link>
            
            <!-- <button
                v-if="employeeLocal.id"
                type="button"
                class="ml-2 btn m-3 btn-danger"
                @click="$emit('delete:employee', employeeLocal.id)"
            >
                Xóa
            </button> -->
        </div>
    </Form>
</template>

<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    emits: ["submit:employee", "delete:employee"],
    props: {
        employee: { type: Object, required: true }
    },
    data() {
        const employeeFormSchema = yup.object().shape({
            code: yup
                .string()
                .required("Mã code phải có giá trị.")
                .min(4, "Mã code phải ít nhất 4 ký tự."),
            name: yup
                .string()
                .required("Tên phải có giá trị.")
                .min(2, "Tên phải ít nhất 2 ký tự.")
                .max(500, "Tên có nhiều nhất 65 ký tự."),
            email: yup
                .string()
                .required("Email phải có giá trị."),
            address: yup
                .string()
                .required("Địa chỉ phải có giá trị."),
            // slug: yup
            //     .string()
            //     .required("Slug phải có giá trị."),

            phone: yup
                .number()
                .required("SĐT phải có giá trị.")
                // .min(10, "SĐT phải có 10 số.")
                // .max(11, "SĐT phải có 11 số."),

            // image: yup
            //     .string()
            //     .required("Hình ảnh phải có giá trị."),  
        });
        return {
            employeeLocal: this.employee,
            employeeFormSchema,
            fileTypes: [
                'image/apng',
                'image/bmp',
                'image/gif',
                'image/jpeg',
                'image/pjpeg',
                'image/png',
                'image/svg+xml',
                'image/tiff',
                'image/webp',
                `image/x-icon`
            ],
        };
    },
    methods: {
        updateImageDisplay(event) {
            const preview = document.querySelector('.preview');

            while(preview.firstChild) {
                preview.removeChild(preview.firstChild);
                this.employeeLocal.images = [];
            }

            const curFiles = event.target.files;
            console.log(curFiles);

            if(curFiles.length === 0) {
                const para = document.createElement('p');
                para.textContent = 'No files currently selected for upload';
                preview.appendChild(para);
            } else {
                const list = document.createElement('ol');
                preview.appendChild(list);

                for(const file of curFiles) {
                    this.employeeLocal.images.push(file.name)
                    const listItem = document.createElement('li');
                    // const para = document.createElement('p');

                    if(this.validFileType(file)) {
                        // para.textContent = `File name ${file.name}, file size ${this.returnFileSize(file.size)}.`;
                        const image = document.createElement('img');
                        image.style.height = "80px";
                        image.style.margin = "10px";
                        image.style.border = "1px solid #333";
                        image.src = URL.createObjectURL(file);

                        listItem.appendChild(image);
                        // listItem.appendChild(para);
                    } else {
                        para.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`;
                        listItem.appendChild(para);
                    }

                    list.appendChild(listItem);
                }
            }
        },
        validFileType(file) {
            return this.fileTypes.includes(file.type);
        },
        returnFileSize(number) {
            if(number < 1024) {
                return number + 'bytes';
            } else if(number > 1024 && number < 1048576) {
                return (number/1024).toFixed(1) + 'KB';
            } else if(number > 1048576) {
                return (number/1048576).toFixed(1) + 'MB';
            }
        }
    }
}
</script>
<style scoped>
@import "@/assets/form.css";
#image_uploads {
    opacity: 0;
}

.label-image {
    display: inline-block;
    background-color: #0a357b;
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px ridge black;
    font-size: 0.8rem;
}

.label-image:hover {
    background-color: #2D5BA3;
    color: white;
}

ol {
    padding-left: 0;
}

/* li, div > p {
    background: #eee;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    list-style-type: none;
    border: 1px solid black;
} */

/* img {
    height: 64px;
    order: 1;

} */
/* 
li > p {
    line-height: 32px;
    padding-left: 10px;
} */


.control-label  {
    font-size: 18px;
}
.form-control {
    font-size: 18px;
}
.label-image {
    font-size: 15px;
}

</style>