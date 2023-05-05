<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h2 class="text-center">Add New Product</h2>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <br>
                    <label>Name of the Product</label>
                    <input type="text" class="form-control" v-model="product.name" required>
                </div>
                <div class="form-group">
                    <label>Price</label>
                    <input type="price" class="form-control" v-model="product.price" required>
                </div>
                <div class="form-group">
                    <br>
                    <button class="btn btn-secondary">Create</button>
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
                product: {
                   name: '',
                   price: ''
                }
            }
        },
        methods: {
            handleSubmitForm() {
                let apiURL = 'http://localhost:4000/api/create-product';
                
                axios.post(apiURL, this.product).then(() => {
                  this.$router.push('/view')
                  this.product = {
                    name: '',
                    price: ''
                  }
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    }
</script>

