(function ($) {
    "use strict"

	/* Document on load functions */
	$(window).on('load', function () {
        // preLoader()
		headerHeightFixer()
    })

	/* Preloader init */
	function preLoader(){
		$(".preloader").delay(1000).fadeOut("slow")
	}

	/* Dark Mode Toggler Function */
	(function(){
		const $themeToggler = $('[data-toggle="theme"]')
		let darkMode = localStorage.getItem("darkMode")

		// Enable DarkMode Function
		const enableDarkMode = () =>{
			$('html').attr('data-theme', 'dark')
			localStorage.setItem("darkMode", "enabled")
		}
		
		// Disable DarkMode Function
		const disableDarkMode = () =>{
			$('html').removeAttr('data-theme')
			localStorage.setItem("darkMode", null)
		}

		// Check localStorage DarkMode value
		if(darkMode === "enabled"){
			enableDarkMode()
		}

		// Theme Change Event Functions
		$themeToggler.on("click", function(){
			darkMode = localStorage.getItem("darkMode")
			if(darkMode !== "enabled"){
				enableDarkMode()
			} else{
				disableDarkMode()
			}
		})
	})()

	/* scroll top btn */
	$(".scroll-top").on("click", function () {
		$("html,body").animate({scrollTop: 0},50)
	})
	$(window).on("scroll", function () {
		var scrolling = $(this).scrollTop()

		if (scrolling > 200) {
			$(".scroll-top").fadeIn()
		} else {
			$(".scroll-top").fadeOut()
		}
	})

	/* Fix Header Height function */
	$('header').before('<div class="header-height-fix" aria-hidden="true"></div>')
    function headerHeightFixer(){
    	$('.header-height-fix').css('height', $('header').innerHeight() +'px')
	}

	$('[data-toggle="menu"]').on('click', function(){
		$(this).toggleClass('active')
		$('[data-target="menu"]').toggleClass('show')
	})

	toastr.options = {
		"closeButton": true,
		"debug": false,
		"newestOnTop": true,
		"progressBar": false,
		"positionClass": "toast-bottom-right",
		"preventDuplicates": false,
		"onclick": null,
		"showDuration": "300",
		"hideDuration": "1000",
		"timeOut": "5000",
		"extendedTimeOut": "1000",
		"showEasing": "swing",
		"hideEasing": "linear",
		"showMethod": "fadeIn",
		"hideMethod": "fadeOut",
	}

})(jQuery)