<template>
    <Form
        @submit="$emit('submit:product', productLocal)"
        :validation-schema="productFormSchema"
        class="row"
    >
        <div class="form-group col-md-3">
            <label class="control-label" for="code">Mã Sản Phẩm</label>
            <Field
                name="code"
                type="text"
                class="form-control"
                v-model="productLocal.code"
            />
            <ErrorMessage name="code" class="error-feedback" />
        </div>

        <div class="form-group col-md-3">
            <label class="control-label" for="name">Tên Sản phẩm</label>
            <Field
                name="name"
                type="text"
                class="form-control"
                v-model="productLocal.name"
            />
            <ErrorMessage name="name" class="error-feedback" />
        </div>

        <div class="form-group col-md-3">
            <label class="control-label" for="quantity">Số lượng</label>
            <Field
                name="quantity"
                type="text"
                class="form-control"
                v-model="productLocal.quantity"
            />
            <ErrorMessage name="quantity" class="error-feedback" />
        </div>

        <div class="form-group col-md-3">
            <label class="control-label" for="price">Giá bán</label>
            <Field
                name="price"
                type="text"
                class="form-control"
                v-model="productLocal.price"
            />
            <ErrorMessage name="price" class="error-feedback" />
        </div>

        <div class="form-group col-md-3">
            <label class="control-label" for="category">Danh mục</label>

            <select name="category" id="category" class="form-control" required v-model="productLocal.category">
                <option value="" selected>---Chọn danh mục---</option>
                <option value="Chuột">Chuột</option>
                <option value="Bàn phím">Bàn phím</option>
                <option value="Loa">Loa</option>
                <option value="Tai nghe">Tai nghe</option>
                <option value="Quạt tản nhiệt">Quạt tản nhiệt</option>
                <option value="Cáp kết nối">Cáp kết nối</option>
            </select>
            <ErrorMessage name="category" class="error-feedback" />
        </div>

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

        <div class="form-group col-md-12">
            <label class="control-label" for="description">Mô tả sản phẩm</label>
            <!-- <Field
                name="description"
                type="text"
                class="form-control"
                v-model="productLocal.description"
            /> -->
            <textarea class="form-control" name="description" id="description" v-model="productLocal.description"></textarea>
            <ErrorMessage name="description" class="error-feedback" />
        </div>
       

        <div class="form-group" style="display: flex;">
            <button class="btn m-2 btn-save">Lưu lại</button>
            
            <router-link :to="{name: 'product.management'}">
                <button class="btn m-2 btn-cancel">Hủy bỏ</button>
            </router-link>
            
            <!-- <button
                v-if="productLocal.id"
                type="button"
                class="ml-2 btn m-3 btn-danger"
                @click="$emit('delete:product', productLocal.id)"
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
    emits: ["submit:product", "delete:product"],
    props: {
        product: { type: Object, required: true }
    },
    data() {
        const productFormSchema = yup.object().shape({
            code: yup
                .string()
                .required("Mã code phải có giá trị.")
                .min(4, "Mã code phải ít nhất 4 ký tự."),
            name: yup
                .string()
                .required("Tên phải có giá trị.")
                .min(2, "Tên phải ít nhất 2 ký tự.")
                .max(500, "Tên có nhiều nhất 65 ký tự."),
            // slug: yup
            //     .string()
            //     .required("Slug phải có giá trị."),
            quantity: yup
                .number()
                .required("Số lượng phải có giá trị."),
            price: yup
                .string()
                .required("Giá phải có giá trị."),
            // category: yup
            //     .string()
            //     .required("Danh mục phải có giá trị."),
            // image: yup
            //     .string()
            //     .required("Hình ảnh phải có giá trị."),  
            description: yup
                .string()
        });
        return {
            productLocal: this.product,
            productFormSchema,
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
                this.productLocal.images = [];
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
                    this.productLocal.images.push(file.name)
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