$(document).ready(function() {
    var quote;
    var author;
 
   function getNewQuotes() {
       $.ajax({
           url:'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en',
           jsonp:'jsonp',
           dataType:'jsonp',
           
           success: function(response){
           quote=response.quoteText;
           author=response.quoteAuthor;
               $('#quote').text(quote);
               if(author){
                   $('#author').text('- '+author);
               }
               else{
                   $('#author').text('- unknown');
               }
       }
       });
       
   }
     function getRandomColor() {
           var letters = '123456789ABCDE';
           var color = '#';
          for (var i = 0; i < 6; i++ ) {
          color += letters[Math.floor(Math.random() * 14)];
       }
            return color;
    }
    document.getElementById("background").style.backgroundColor=getRandomColor();
    getNewQuotes();
    

    $('.get-quote').on('click',function(){
         
        getNewQuotes();
        document.getElementById("background").style.backgroundColor=getRandomColor();
    });
    $('.tweet-quote').on('click',function(){
        window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + '--' +  author))
                                                                                  
     });
});