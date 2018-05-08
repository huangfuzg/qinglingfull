$("#leftside-navigation .sub-menu > a[href='javascript:void(0);']").click(function(e) {
  $("#leftside-navigation ul ul:not('.usb')").slideUp(), $(this).next().is(":visible") || $(this).next().slideDown(),
  e.stopPropagation()
})

$("#leftside-navigation .sub-menu1 > a[href='javascript:void(1);']").click(function(e) {
  $(".sub-menu1 ul").slideUp(), $(this).next().is(":visible") || $(this).next().slideDown(),
  e.stopPropagation()
})