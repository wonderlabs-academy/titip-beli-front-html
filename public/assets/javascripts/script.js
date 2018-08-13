function myFunction() {
  var x = document.getElementById("my-top-nav");
  if (x.className === "top-nav") {
    x.className += " responsive";
  } else {
    x.className = "top-nav";
  }
}

function myDropdown() {
  document.getElementById("my-dropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.nav-lang')) {
    var mydropdown = document.getElementById("my-dropdown");
    if (mydropdown.classList.contains('show')) {
      mydropdown.classList.remove('show');
    }
  }
}

jQuery(function($) {
  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function() {
    
    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');
    
    // Check all animatables and animate them if necessary
		$animatables.each(function(i) {
       var $animatable = $(this);
      
      // Items that are "above the fold"
			if (($animatable.offset().top + $animatable.height() + 50) < offset) {
        
        // Item previously wasn't marked as "above the fold": mark it now
        if (!$animatable.hasClass('animate-in')) {
          $animatable.removeClass('animate-out').css('top', $animatable.css('top')).addClass('animate-in');
        }

			}
      
      // Items that are "below the fold"
      else if (($animatable.offset().top + $animatable.height() + 50) > offset) {
        
        // Item previously wasn't marked as "below the fold": mark it now
        if ($animatable.hasClass('animate-in')) {
          $animatable.removeClass('animate-in').css('top', $animatable.css('top')).addClass('animate-out');
        }
      }
    });
	};
  // Hook doAnimations on scroll, and trigger a scroll
	$(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

  // $("#lkn").click(function () {
  //   $("#form-metoo").show(1000);
  // });

});

$(document).ready(function() {
  $("#lkn").click(function () {
    $("#form-metoo").show(1000);
  });
})