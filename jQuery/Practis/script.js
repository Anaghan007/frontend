// Exercise - 1 - Check if jQuery is loaded

if(jQuery === "undefined")
    {
    console.log("jQuery not add");
    }
else{
    console.log("jQuery add");
    
}

// Exercise - 2 - If Page is too long scroll to the Top

$(function(){
    $('#btn').click(function(){
        $('html,body').animate({
            scrollTop: 0
        },2000)
    })
})


// Exercise - 3 - Animate width and height of a button

$(function(){
    $('#btn1').click(function(){
        $('#box').animate({
            width:"300px",
            height:"300px"
        },1500);
    })
})

// Exercise - 4 - FadeIn your boxes
$("button").click(function(){
    $("#div1").fadeToggle();
    $("#div2").fadeToggle("slow");
    $("#div3").fadeToggle(4000);
});


// <!-- Exercise - 5 - Clickable button after checking the box -->

$(document).click(function() {
    $('#checkbox').change(function() {
      if($(this).is(':checked')) {
        $('#submit').prop('disabled', false); 
      } else {
        $('#submit').prop('disabled', true);
      }
    });
  });

  

// <!-- Exercise - 6 - Letting Users to print some documents -->

{
    $(function () {
        $("#print").click(function () {
           window.print();
           return false;
        });
    });
}



// <!-- Exercise - 7 - Don't let username to be too long -->

$(document).click(function() {
    const mlength = 15; 
  
    $('#username').on('input', function() {
      const username = $(this).val();
  
      if (username.length > mlength) {
        $('#usernameError').show(); 
      } else {
        $('#usernameError').hide(); 
      }
    });
  });


// <!-- Exercise - 8 - Forget to bold words -->
{
    $('#btn').click(function() {
      let text = $('#text').html();
      let boldText = text.replace(/bold/g, '<strong>bold</strong>');
      $('#text').html(boldText);
    });
}


// Exercise - 9 - Adding new division

$(function(){
    $('.initial').click(function(){
        $('body').prepend('<div class="added">This is added div </div>')
    })
})


// <!-- Exercise - 10 - Select values from a JSON object using jQuery -->

$(document).click(function() {
    const user = {
      "name": "meet nasit",
      "age": 19,
      "email": "meetnasit@gmail.com"
    };
  
    $('#data').click(function() {
      $('#name').text("Name: " + user.name);
      $('#age').text("Age: " + user.age);
      $('#email').text("Email: " + user.email);
    });
  });


// Exercise - 11 - Add element within ul list

$(function(){
    $('#button1').click(function(){
        $('#ul').prepend("<li> f </li>")
    })
})




// Exercise - 12 - Know what user puts into textbox

{
    $(function(){
        $('#input-value').click(function(){
            const inputstr = $('#input').val();
            alert(inputstr)
        })
    })
}

// Exercise - 13 - Change input value

{
    $(function(){
        $('#input-value').click(function(){
            $('#input').val("Hello world")
        })
    })
}
