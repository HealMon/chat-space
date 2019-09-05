$(function(){
  $('#create_message').on('submit',function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: '/message/create',
      type: "post",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
  })
})