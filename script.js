$('.open-chat').on('click', function() {
  if ($('.message').css('display') == 'none') {
    $('.message').css('display', 'flex')
  } else {
    $('.message').css('display', 'none')
  }
})