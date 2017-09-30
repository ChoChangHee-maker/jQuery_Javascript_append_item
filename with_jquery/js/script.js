//var doc = document;
//
//doc.getElementById('add').addEventListener('click',function(){
//    
//    var value = doc.getElementById('stack').value;
//    var list = doc.getElementById('stackList');
//    
//    var item = doc.createElement('div');
//    item.innerHTML = value;
//    
//    list.appendChild(item);
//    
//});

//$('#add').on('click',function(){
//    
//    var value = $('#stack').val();
//    var list = $('#stackList');
//    
//    var item = $('<div>');
//    item.text(value);
//    
//    list.append(item);
//});

var item = [ 'HTML' , 'CSS' ]; //백엔드로 부터 받은 데이터

function view(arr){
 
    for ( var i = 0; i < arr.length; i++ ) {
        
        var tag = $('<div>').text(arr[i]);
        $('#stackList').empty().append(tag);
    }
}

$('#add').on('click',function(){
    
    view(item);
});

view(item);

/* var item1 = $('<div>').text(item[0]);
var item2 = $('<div>').text(item[1]);

$('#stackList').append(item1);
$('#stackList').append(item2);

$('#add').on('click',function(){
   
    var value = $('#stack').val();
    
    item.push(value);
    
    var tag = $('<div>').text(value);
    $('#stacklist').append(tag);
}); */