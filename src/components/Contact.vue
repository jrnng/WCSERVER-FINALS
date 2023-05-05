<template>
    <body>
      <h1>Contact Form</h1>
      <form accept-charset="UTF-8" action="https://www.formbackend.com/f/{your-identifier}" method="POST">
        <div class="form-fields">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" required>
        </div>
  
        <div class="form-fields">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required>
        </div>
  
        <div class="form-fields">
          <label for="message">Message</label>
          <textarea id="message" name="message" required></textarea>
        </div>
  
        <button type="submit">Send message</button>
      </form>
    </body>
  </template>
  
  <style scoped>

    h1 {
      font-weight: bold;
      font-family:Verdana, Geneva, Tahoma, sans-serif;
      font-weight: bold;
      color:black;
      text-shadow: 2px 2px white;
      margin-bottom: 1rem;
    }
    .form-fields {
      margin-bottom: 1rem;
    }
    label { 
      display: block; 
      margin-bottom: 4px; 
      font-weight: bold; 
      font-size: 0.9rem;
      color: black;
    }
    input[type="text"], input[type="email"], textarea {
      border: 1px solid #ccc;
      font-size: 1rem;
      border-radius: 5px;
      width: 100%;
      padding: 5px 5px;
      margin: 7px 0;
      box-sizing: border-box;

    }
    body { display: block }
    button[type="submit"] { 
      background-color: #6C757D;
      color: white;
      font-size: 0.8rem;
      border: none;
      border-radius: 4px;
      padding: 8px 12px;
      font-weight: 500;
    }
  </style>