<script>
export default {
    props: {
        modelValue: { type: String, default: "" },
    },
    emits: ["submit", "update:modelValue"],
    methods: {
        updateModelValue(e) {
            this.$emit("update:modelValue", e.target.value);
        },
        submit() {
            this.$emit("submit");
        },
    },
};
</script>

<template>
    <input id="textInput" placeholder="Bạn muốn tìm Sản phẩm nào ????"
        type="text"
        :value="modelValue"
        @input="updateModelValue"
        @keyup.enter="submit"
    >
</template>

<style scoped>
#textInput{
    height: 34px;
    width: 500px;
    margin: -3px 0px;
    border: 2px;
    font-size: 20px;
    text-align: center;
    font-weight: 500;
}
</style>