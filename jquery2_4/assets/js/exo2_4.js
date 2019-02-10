$(function (){
    $('div.color').click(function(){
    var classValue = $(this).attr('class');
    var classArray = classValue.split(' ');
    $('#text').css({'color' : classArray[1]});
   });
});
