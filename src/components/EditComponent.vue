<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Update Product</h3>
            <form @submit.prevent="handleUpdateForm">
                <div class="form-group">
                    <label>Name of the Product</label>
                    <input type="text" class="form-control" v-model="product.name" required>
                </div>
                <div class="form-group">
                    <label>Price</label>
                    <input type="text" class="form-control" v-model="product.price" required>
                </div>
                <div class="form-group">
                    <button class="btn btn-danger btn-block">Update</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            product: { }
        }
    },
    created() {
        let apiURL = `http://localhost:4000/api/edit-product/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
            this.product = res.data;
        })
    },
    methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:4000/api/update-product/${this.$route.params.id}`;
            axios.put(apiURL, this.product).then((res) => {
                console.log(res)
                this.$router.push('/view')
            }).catch(error => {
                console.log(error)
            });
        }
    }
}
</script>
