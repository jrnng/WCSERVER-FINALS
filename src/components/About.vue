<template>
    <div id="about-us">
      <div id="todo-card">
        <div class="container">
          <div class="p-3 mb-2 bg-secondary text-white" role="alert" >
            <br>
            <h1>{{ msg6 }}</h1>

            <br>
              <p>C'est la Vie Boutique is the largest boutique industry boutique in the world, linking boutique stores,
                 eCommerce retailers, wholesale brands, product producers, and industry services and professionals.  
                 C'est la Vie offers daily connections, strategy, training, wholesale buying, live events, and a boutique industry voice.</p>
              <p>Our goal at C'est la Vie Boutique is to provide items at affordable costs for everyone! 
                Our apparel, jewelry, purses, and accessories are one-of-a-kind things that you won't find
                 in a department shop. We rotate our products frequently, so you'll always find fresh items
                 in our stores!</p>

                 <br>
                 <h1 class="text-center mb-4">The Creators</h1>
                 <br>
                 <div class="row">
                  <div class="col-md-3 mb-4">
                    <img src="../assets/jai.jpg" class="card-img-top" alt="...">
                    <br>
                    <h5 class="card-title">Jaira Nunag</h5>
                    <p class="card-text">Founder, Web Developer</p>
                  </div>
        
                  <div class="col-md-3 mb-4">
                    <img src="../assets/kharla.jpg" class="card-img-top" alt="...">
                    <h5 class="card-title">Kharla Manabat</h5>
                    <p class="card-text">Founder, Web Developer</p>
                  </div>

                  <div class="col-md-3 mb-4">
                    <img src="../assets/gian.jpg" class="card-img-top" alt="...">
                    <h5 class="card-title">Gian Manuel</h5>
                    <p class="card-text">Founder, Web Developer</p>
                  </div>

                  <div class="col-md-3 mb-4">
                    <img src="../assets/ivan.jpg" class="card-img-top" alt="...">                  
                    <h5 class="card-title">Ivan Pangilinan</h5>
                    <p class="card-text">Founder, Web Developer</p>
                  </div>
                </div>
              </div>
              <br />
              <br />
          </div>
        </div>
      </div>
  </template>
  
  <style>
  h5{
    text-align: center;
  }

  .card-text{
    text-align: center;
  }
  </style>

  <script>
  export default {
    name: 'about-us',
    data() {
      return {
        msg6: 'About Us',
      };
    },
  };
  </script>

  <style>
  h1{
    font-family:Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bold;
  color:white;
  text-shadow: 2px 3px black;
  }
  
</style>
  