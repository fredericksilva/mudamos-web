(function($) {
  $.fn.switch = function() {
    $(this).each(function(idx, element) {
      var $element = $(element);

      $element.hide();

      var $switch = $("<span class='switch'><span class='switch-marker'></span></span>");
      $element.after($switch);

      if ($element.is(":checked")) {
        $switch.addClass("checked");
      }

      $switch.click(function() {
        if ($element.is(":checked")) {
          $element.prop("checked", false);
          $element.trigger("change");
          $switch.removeClass("checked");
        } else {
          $element.prop("checked", true);
          $element.trigger("change");
          $switch.addClass("checked");
        }
      });
    });

    return this;
  };
})(jQuery);
