'use strict';


//ogólne "body" funkcji jQuery

$(function () {

    
//    stworzenie funkcji, która
    
    $(window).scroll(function () {
        
        
//         uruchomi się po zeskrolowaniu na sam dół
        
        if (
            $(window).scrollTop() + $(window).height() == $(document).height()) {

            
//            i ściągnie dane ajaxem jQuery
            
            $.getJSON('https://jsonplaceholder.typicode.com/users', function (data) {
                console.log(data);

                
//                wyrzuci je na stronę
                
                data.forEach(function (element) {
                        $('body').append('<p>Nazwa użytkownika: ' + element.name + '</p>');
                        $('body').append('<p>ID użytkownika: ' + element.id + '</p>');
                        $('body').append('<p>URL użytkownika: <a href="https://">' + element.website + '</a></p>' + '<hr>');

                })
            });
        }
    });
});
