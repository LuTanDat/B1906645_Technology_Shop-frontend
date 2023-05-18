<template>
    <Form
        @submit="$emit('submit:customer', customerLocal)"
        :validation-schema="customerFormSchema"
        class="row form-container account-form"
    >
        <div class="form-group">
            <label for="name" style="border: none; box-shadow: none;">Tên Tài Khoản</label>
            <Field
                style="background-color: white"
                name="name"
                type="text"
                class="form-control"
                v-model="customerLocal.name"
            />
            <ErrorMessage name="name" class="error-feedback" />
        </div>

        <div class="form-group">
            <label for="pw" style="border: none; box-shadow: none;">Mật khẩu</label>
            <Field
                style="background-color: white"
                name="pw"
                type="password"
                class="form-control"
                v-model="customerLocal.pw"
            />
            <ErrorMessage name="pw" class="error-feedback" />
            <!-- <h2 class="mt-2">{{customerLocal.pw}}</h2> -->
        </div>

        <div class="checkbox">
            <input type="checkbox" name="check" id="checkpass" >
            <label for="checkpass" style="border: none; box-shadow: none;">Nhớ Tài Khoản</label>
        </div>

        <div class="form-nav">
            <a class="forgotpass" href="#">Quên mật khẩu?</a>
            <a class="signup-nav" @click="updateModelValue">Chưa có tài khoản?</a>
        </div>

        <input type="submit" @click="$emit('submit:customer', customerLocal)" value='Đăng Nhập'/>

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
    emits: ["submit:customer", "submit", "update:modelValue"],
    props: {
        customer: { type: Object, required: true },
        modelValue: { type: Boolean, default: true}
    },
    data() {
        const customerFormSchema = yup.object().shape({
            name: yup
                .string()
                .required("Tên phải có giá trị.")
                .min(2, "Tên phải ít nhất 2 ký tự.")
                .max(500, "Tên có nhiều nhất 65 ký tự."),
            email: yup
                .string()
                .required("Email phải có giá trị."),
            pw: yup
                .string()
                .required("Password phải có giá trị.")
                .min(8, "Password phải có ít nhất 8 ký tự.")
        });
        return {
            customerLocal: this.customer,
            customerFormSchema,
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
        updateModelValue(e) {
            // console.log("hihi")
            this.$emit("update:modelValue", false);// gan gia tri false cho modelValue
        },
        submit() {
            this.$emit("submit");
        },

        updateImageDisplay(event) {
            const preview = document.querySelector('.preview');

            while(preview.firstChild) {
                preview.removeChild(preview.firstChild);
                this.customerLocal.images = [];
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
                    this.customerLocal.images.push(file.name)
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


</style>