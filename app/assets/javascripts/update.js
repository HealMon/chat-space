$(function(){
  $("chat__user_name").on("keyup",function(){
    var input =$(".chat__user_name").val();
    $.ajax({
      type:'GET',
      url: '/groups/update',
      data: {keyword: input},
      datatype: 'json'
    })
  });
});