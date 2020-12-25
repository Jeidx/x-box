
document.getElementById('dropdawn-btn').onclick = function(){
    document.getElementById('dropdawn-list').classList.toggle('active');
    document.getElementById('nav-triang').classList.toggle('active');  
};
document.getElementById('dropdawn-btn2').onclick = function(){
    document.getElementById('dropdawn-list2').classList.toggle('active');
    document.getElementById('nav-triang2').classList.toggle('active');
};
document.getElementById('dropdawn-btn3').onclick = function(){
    document.getElementById('dropdawn-list3').classList.toggle('active');
    document.getElementById('nav-triang3').classList.toggle('active');
};


$(document).ready(function(){
    $(window).scroll(function(){  
        if ($(window).scrollTop() > 50 ){
            $('#header-fixed').addClass('active');
        }
        else{$('#header-fixed').removeClass('active')
    }
    });
});




// var userName = 'Вася' ;
// var user = userName ;

// console.log(user);

