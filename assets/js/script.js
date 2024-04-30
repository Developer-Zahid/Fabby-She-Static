(function ($) {
    "use strict"

	$(window).on('load', function () {
		headerHeightFixer()
    })
	$(window).on('resize', function () {
		headerHeightFixer()
    })
	$(window).on('scroll', function(){
		handleHeaderScrollToHidden()
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

	/* Fix Header Height function */
	if($('.header').length > 0){
		$('.header').before('<div class="header-height-fix" aria-hidden="true"></div>')
	}
    function headerHeightFixer(){
		if($('.header').length > 0){
			$('.header-height-fix').css('height', $('.header').innerHeight() +'px')
		}
	}
	let lastScrollTop
	function handleHeaderScrollToHidden(){
		if($('.header').length > 0){
			let currentScrollTop = window.pageYOffset
			setTimeout(function(){
				if(currentScrollTop > $('.header').innerHeight()){
					$('.header').toggleClass('header--hide', currentScrollTop > lastScrollTop)
					lastScrollTop = currentScrollTop
				}else{
					$('.header').removeClass('header--hide')
					lastScrollTop = 0
				}
			}, 200)
		}
	}

	if($('[data-toggle="menu"]').length > 0){
		$('[data-toggle="menu"]').on('click', function(){
			$('html').toggleClass('active--menu')
			$(this).toggleClass('active')
			$('[data-target="menu"]').toggleClass('show')
		})
	}

	if($('[data-toggle="password"]').length > 0){
		$('[data-toggle="password"]').on('click', function(){
			const $currentPasswordInput = $(this).closest('.input-group').find('[data-target="password-input"]')
			if($currentPasswordInput.attr("type") == "password"){
				$currentPasswordInput.attr("type", "text");
				$(this).addClass('show')
			}else{
				$currentPasswordInput.attr("type", "password");
				$(this).removeClass('show')
			}
		})
	}

	if(typeof toastr != "undefined"){
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
	}
})(jQuery)