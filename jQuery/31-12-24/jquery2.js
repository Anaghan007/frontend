        // jQuery Syntax 

        // $(document).ready(function(){

        // })

        // $(function(){

        // })

        // $(document).ready(function(){
        //     $('#btn').click(function(){
        //         $('#demo').hide()
        //     })
        // })

        $(function(){
            $('#btn1').click(function(){
                $('#pic').hide(1000).slideUp(500)
            })
        })

        $(function(){
            $('#pic').click(function(){
                $(this).slideUp(1000).animate({left: '250px'});
            })
        })

        $(function(){
            $('#btn2').click(function(){
                $('#pic').show(1000).slideDown(500)
            })
        })

        $(function(){
            $('#btn3').click(function(){
                $('#demo').toggle(1000)
            })
        })