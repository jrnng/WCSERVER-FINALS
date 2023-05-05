<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>Name of the Product</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in product" :key="product._id">
                        <td>{{ product.name }}</td>
                        <td>{{ product.price }}</td>
                        <td>
                            <router-link :to="{name: 'edit', params: { id: product._id }}" class="btn btn-success">Edit
                            </router-link>
                            <button @click.prevent="deleteProduct(product._id)" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>

    import axios from "axios";
    export default {
        data() {
            return {
                product: []
            }
        },
        created() {
            let apiURL = 'http://localhost:4000/api';
            axios.get(apiURL).then(res => {
                this.product = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            deleteProduct(id){
                let apiURL = `http://localhost:4000/api/delete-product/${id}`;
                let indexOfArrayItem = this.product.findIndex(i => i._id === id);
                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.product.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        }
    }
</script>

<style>
    .btn-success {
        margin-right: 10px;
    }

    table{
        table-layout: auto;
        width: 150px;
        background-color: #C0C0C2;
    }
</style>