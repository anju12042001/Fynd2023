<template>
    <div class="container">
        <h1>{{ msg }}</h1>
        <h2>Services</h2>
        <div class="con">

            
       <div class="one">
        <h3>Web development</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum accusamus excepturi quod distinctio facere tenetur omnis tempora, laborum, atque inventore dicta a animi minima molestiae maiores provident. Minus, alias necessitatibus!</p>
        <button>Read more..</button>
       </div>

       <div class="two">
        <h3>Digital Marketing</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum accusamus excepturi quod distinctio facere tenetur omnis tempora, laborum, atque inventore dicta a animi minima molestiae maiores provident. Minus, alias necessitatibus!</p>
        <button>Read more..</button>
       </div>

       <div class="three">
        <h3>App development</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum accusamus excepturi quod distinctio facere tenetur omnis tempora, laborum, atque inventore dicta a animi minima molestiae maiores provident. Minus, alias necessitatibus!</p>
        <button>Read more..</button>
       </div>
    </div>
    <br>

    <div class="con2">
        <div class="four">
            <h3>UI/UX</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum accusamus excepturi quod distinctio facere tenetur omnis tempora, laborum, atque inventore dicta a animi minima molestiae maiores provident. Minus, alias necessitatibus!</p>
            <button>Read more..</button>
        </div>
        <div class="five">
            <h3>Wordpress</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum accusamus excepturi quod distinctio facere tenetur omnis tempora, laborum, atque inventore dicta a animi minima molestiae maiores provident. Minus, alias necessitatibus!</p>
            <button>Read more..</button>
        </div>
        <div class="six">
            <h3>MEVN</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum accusamus excepturi quod distinctio facere tenetur omnis tempora, laborum, atque inventore dicta a animi minima molestiae maiores provident. Minus, alias necessitatibus!</p>
            <button>Read more..</button>
        </div>
    </div>
    </div>

</template>
  
  <script>
    export default {
      name: 'UsersWorld',
      props : {
        msg:String
      }
    }
  </script>
  
  <style>

  

  .container{
    height: 90vh;
    text-align: center;
  }
  h1{
    color: black;
    font-family: cursive;
  }
  h2{
    color: rgb(96, 245, 185);
    font-size: 3rem;
    font-family: cursive;
    text-decoration: underline;
  }
  .con, .con2{
    margin-top: 3rem;
    text-align: center;
    display: flex;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    letter-spacing: 1px;
  }

  h3{
    font-size: 1.6rem;
    font-weight: 600;
  }

  .one, .two, .three, .four, .five, .six{
    border:1px solid black;
    margin: 1rem;
    padding-bottom: 1rem;
    
  }

  button{
    padding: 0.7rem;
    background-color: rgb(96, 245, 185);
    border: none;
    font-size: 1rem;
  }

  button:hover{
    background-color: black;
    color: rgb(96, 245, 185);
  }
  
  .one:hover{
    background-color: rgb(96, 245, 185);
  }
  .two{
    background-color: rgb(96, 245, 185);
  }
  .three:hover{
    background-color: rgb(96, 245, 185);
  }
  .four{
    background-color: rgb(96, 245, 185);
  }
  .five:hover{
    background-color: rgb(96, 245, 185);
  }
  .six{
    background-color: rgb(96, 245, 185);
  }

  p{
    padding: 10px;
  }

   


  </style>