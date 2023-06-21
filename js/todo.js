$(function(){
   i = 0
   $("#add").on('click', ()=>{

      let inputvalue = $('.input-todo').val();
      if(inputvalue == ""){
        alert("Поле для задачі пусте")
      }else{
         $('.totdo-item').append(`
         <li>
                  <input type="checkbox" class="check">
                  <span class= "doubleClick">${inputvalue}</span>
                  <input type="text" class="todo-text">
                  <button class="btn1">Ok</button>
                  <img src="./images/images-todo/icons8-trash-can-50.png" alt="" class="image">
               </li>
         `);
   
         $('.image').on('click',function(){
            $(this).parent().remove()
         });
   
         $('.check').on('click', function(){
            console.log("hello");
            $(this).parent().css("opacity", "0.5")
            $(this).parent().css("text-decoration", "line-through")
         });
   
         $('.doubleClick').dblclick(function() {
            $(this).parent().children(".text").show()
            $(this).parent().children(".btn1").show()
            $(this).hide()
   
            let btnChange = $(this).parent().children(".btn")
            // $(this).parent().children(".btn").on('click',function(){
            //    $(this).parent().children(".text").hide()
            //    $(this).hide()
   
            //    let inputChenge =  $(this).parent().children(".text").val()
            //    $('.doubleClick').Text(`${inputChenge}`)
            //    $('.doubleClick').show()
            //    alert(inputChenge)
            // })
          });
   
          $('.btn1').on('click',function(){
            // let inputChenge =  $(this).parent().children(".text").val()
            // $('.doubleClick').Text($(this).parent().children(".text").val())
            // $(this).parent().children(".text").hide()
            // $(this).hide()
            // $('.doubleClick').show()
   
            console.log($(this).parent().children(".text").val());
            $(this).parent().children(".doubleClick").text($(this).parent().children(".text").val())
            $(this).parent().children(".doubleClick").show()
            $(this).parent().children(".text").hide()
            $(this).hide()
   
          })
          i ++ 
          let contentValue = $('.doubleClick').text()
          window.localStorage.setItem(`content ${i}`, contentValue);
            console.log(window.localStorage.getItem('content'));
            console.log(contentValue);
      }


      console.log(inputvalue);
   })
})