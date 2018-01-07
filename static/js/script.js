jQuery(function ($) {
  var $bodyEl = $('body'),
    $sidedrawerEl = $('#sidedrawer');

  // ==========================================================================
  // Toggle Sidedrawer
  // ==========================================================================
  function showSidedrawer() {
    // show overlay
    var options = {
      onclose: function () {
        $sidedrawerEl
          .removeClass('active')
          .appendTo(document.body);
      }
    };

    var $overlayEl = $(mui.overlay('on', options));

    // show element
    $sidedrawerEl.appendTo($overlayEl);
    setTimeout(function () {
      $sidedrawerEl.addClass('active');
    }, 20);
  }

  function hideSidedrawer() {
    $bodyEl.toggleClass('hide-sidedrawer');
  }

  $('.js-show-sidedrawer').on('click', showSidedrawer);
  $('.js-hide-sidedrawer').on('click', hideSidedrawer);

  // ==========================================================================
  // Animate menu
  // ==========================================================================
  var $titleEls = $('strong', $sidedrawerEl);

  // $titleEls   .next()   .hide();

  $titleEls.on('click', function () {
    $(this)
      .next()
      .slideToggle(200);
  });

  //解析js数据

  var data = itData.data;
  $("#nav-list").empty();

  for (key in data) {

    var navLi = '<li><strong>' + key + '</strong><ul class="subul_' + key + '"> </ul></li>';
    $("#nav-list").append(navLi);
    // var typeList = data[key];

    $(".subul" + key).empty();
    for (var i = 0; i < data[key].length; i++) {

    var subLi = '<li><a href="#">' + data[key][i]['title'] + '</a></li>';
    $(".subul" + key).append(subLi);
    }


  }

});
