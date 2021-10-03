function insert(num){
    $('.calcDisply').val($('.calcDisply').val() + num);
}
function result(){
    $('.calcDisply').val(eval($('.calcDisply').val()));
}
function clearAll(){
    $('.calcDisply').val('');
}
function del(){
    value = $('.calcDisply').val();
    $('.calcDisply').val(value.substring(0,value.length -1));
}