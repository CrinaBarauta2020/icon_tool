function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
 
    $('.success').delay(100).show(0);
    $('.success').delay(3000).hide(0);
 
 
  }