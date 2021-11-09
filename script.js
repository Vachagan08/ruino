isClicked=false;
$(document).ready(function(){
    $('.inside-collapse-button').hide()
    $('.navbar-toggler').click(function(){
        if(!isClicked){
            $('#navbarNav').addClass('show')
            $('#navbarNav').addClass('collapse-background')
            $('.inside-collapse-button').show()
            $('body').css('overflow','hidden')
            $('.navbar-brand').addClass('for-logo')
            $('.toggle-1').hide()
            isClicked=true
        }else{
            $('#navbarNav').removeClass('show')
            $('#navbarNav').removeClass('collapse-background')
            $('.inside-collapse-button').hide()
            $('body').css('overflowY','scroll')
            $('.navbar-brand').removeClass('for-logo')
            $('.toggle-1').show()

            isClicked=false
        }
    
 
    })
})

$(document).ready(function(){
    $(window).scroll(function(e){
        var currentTop = $(this).scrollTop();
        if(currentTop>=100){
            $('.navbar').addClass('scrolled-nav')
        }else{
            $('.navbar').removeClass('scrolled-nav')
        }
    })
})