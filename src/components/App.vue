<template>
  <div>
    <!-- Nav bar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand float-left">C'est la Vie Botique</a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/">Add Product</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/view">View Stocks</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About Us</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact Us</router-link>
          </li>

        </ul>
      </div>
    </nav>
    <!-- Router view -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
body {
  background: url("assets/pic1.png") no-repeat center center
    fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

h2{
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bold;
  color:black;
  text-shadow: 2px 2px white;
}

label{
  color: white;
}

th {
  font-size: 1.5rem;
  color:black;
  text-shadow: 2px 2px white;
}
</style>