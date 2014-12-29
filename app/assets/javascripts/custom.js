(function($) { "use strict";
	
	/* Menu */
	jQuery(".navigation  ul li ul").parent("li").addClass("parent-list");
	jQuery(".parent-list").find("a:first").append("<span class='menu-nav-arrow'><i class='fa fa-angle-down'></i></span>");
	
	/* Header fixed */
	
	var aboveHeight   = jQuery("#header").outerHeight();
	var fixed_enabled = jQuery("#wrap").hasClass("fixed-enabled");
	if(fixed_enabled){
		jQuery(window).scroll(function(){
			if(jQuery(window).scrollTop() > aboveHeight ){
				jQuery("#header").css({"top":"0"}).addClass("fixed-nav");
			}else{
				jQuery("#header").css({"top":"auto"}).removeClass("fixed-nav");
			}
		});
	}else {
		jQuery("#header").removeClass("fixed-nav");
	}
	
	/* Header mobile */
	
	jQuery(window).bind("resize", function () {
		if (jQuery(this).width() > 990) {
			jQuery(".navigation_mobile_main").addClass("navigation");
			jQuery(".navigation").removeClass("navigation_mobile");
			jQuery(".navigation").find(".navigation_mobile_click").remove();
		}else {
			jQuery(".navigation").addClass("navigation_mobile");
			jQuery(".navigation").addClass("navigation_mobile_main");
			jQuery(".navigation_mobile").removeClass("navigation");
			jQuery(".navigation_mobile").each(function () {
				if (!jQuery(this).find(".navigation_mobile_click").length) {
					jQuery(this).prepend("<div class='navigation_mobile_click'>Go to...</div>");
				}
			});
		}
	});
	
	if (jQuery(window).width() > 990) {
		jQuery(".navigation_mobile_main").addClass("navigation");
		jQuery(".navigation").removeClass("navigation_mobile");
		jQuery(".navigation").find(".navigation_mobile_click").remove();
	}else {
		jQuery(".navigation").addClass("navigation_mobile");
		jQuery(".navigation").addClass("navigation_mobile_main");
		jQuery(".navigation_mobile").removeClass("navigation");
		jQuery(".navigation_mobile").each(function () {
			if (!jQuery(this).find(".navigation_mobile_click").length) {
				jQuery(this).prepend("<div class='navigation_mobile_click'>Go to...</div>");
			}
		});
	}
	
	if (jQuery(".navigation_mobile_click").length) {
		jQuery(".navigation_mobile_click").click(function() {
			if (jQuery(this).hasClass("navigation_mobile_click_close")) {
				jQuery(this).next().slideUp(500);
				jQuery(this).removeClass("navigation_mobile_click_close");
			}else {
				jQuery(this).next().slideDown(500);
				jQuery(this).addClass("navigation_mobile_click_close");
			}
		});
		
		jQuery(".navigation_mobile ul li").each(function() {	
			var sub_menu = jQuery(this).find("ul:first");
			jQuery(this).hover(function() {	
				sub_menu.stop().css({overflow:"hidden", height:"auto", display:"none", paddingTop:0}).slideDown(250, function() {
					jQuery(this).css({overflow:"visible", height:"auto"});
				});	
			},function() {	
				sub_menu.stop().slideUp(250, function() {	
					jQuery(this).css({overflow:"hidden", display:"none"});
				});
			});	
		});
	}
	
	/* Search */
	
	jQuery(".header-search-a").click(function (){
		var header_search = jQuery(this).parent();
		if (header_search.hasClass("header-search-active")) {
			header_search.removeClass("header-search-active");
			header_search.find("i").addClass("fa-search").removeClass("fa-times");
			jQuery(".wrap-search").slideUp(300);
		}else {
			header_search.addClass("header-search-active");
			header_search.find("i").addClass("fa-times").removeClass("fa-search");
			jQuery(".wrap-search").slideDown(300);
		}
	});
	
	/* Header follow */
	
	jQuery(".header-follow-a").click(function (){
		var header_follow = jQuery(this).parent();
		if (header_follow.hasClass("header-follow-active")) {
			header_follow.removeClass("header-follow-active");
		}else {
			header_follow.addClass("header-follow-active");
		}
	});
	
	/* Share follow */
	
	jQuery(".post-meta-share > a").click(function (){
		var share_social = jQuery(this).parent();
		if (share_social.hasClass("share-active")) {
			share_social.removeClass("share-active");
		}else {
			share_social.addClass("share-active");
		}
		return false;
	});
	
	/* bxSlider */
	
	jQuery(".post-gallery .post-img > ul,.related-posts > ul").bxSlider({easing: "linear",tickerHover: true,slideWidth: 1170,adaptiveHeightSpeed: 1500,moveSlides: 1,maxSlides: 1,auto: true});

	/* Go up */
	
	jQuery(window).scroll(function () {
		if(jQuery(this).scrollTop() > 100 ) {
			jQuery(".go-up").css("right","20px");
		}else {
			jQuery(".go-up").css("right","-60px");
		}
	});
	jQuery(".go-up").click(function(){
		jQuery("html,body").animate({scrollTop:0},500);
		return false;
	});
	
	/* Tabs */

	jQuery("ul.tabs").tabs(".tab-inner-warp",{effect:"slide",fadeInSpeed:100});
	
	/* Accordion & Toggle */
	
	jQuery(".accordion .accordion-title").each(function(){
		jQuery(this).click(function() {
			if (jQuery(this).parent().parent().hasClass("toggle-accordion")) {
				jQuery(this).parent().find("li:first .accordion-title").addClass("active");
				jQuery(this).parent().find("li:first .accordion-title").next(".accordion-inner").addClass("active");
				jQuery(this).toggleClass("active");
				jQuery(this).next(".accordion-inner").slideToggle().toggleClass("active");
				jQuery(this).find("i").toggleClass("fa-minus").toggleClass("fa-plus");
			}else {
				if (jQuery(this).next().is(":hidden")) {
					jQuery(this).parent().parent().find(".accordion-title").removeClass("active").next().slideUp(200);
					jQuery(this).parent().parent().find(".accordion-title").next().removeClass("active").slideUp(200);
					jQuery(this).toggleClass("active").next().slideDown(200);
					jQuery(this).next(".accordion-inner").toggleClass("active");
					jQuery(this).parent().parent().find("i").removeClass("fa-plus").addClass("fa-minus");
					jQuery(this).find("i").removeClass("fa-minus").addClass("fa-plus");
				}
			}
			return false;
		});
	});
	
	/* niceScroll */
	
	jQuery("html").niceScroll({
		scrollspeed: 60,
		mousescrollstep: 38,
		cursorwidth: 6,
		cursorborder: 0,
		cursorcolor: '#263241',
		autohidemode: false,
		zindex: 9999999,
		horizrailenabled: false,
		cursorborderradius: 0,
	});
	
	/* animation */
	
	jQuery(".animation").each( function() {
		var $this = jQuery(this);
		var animation = $this.attr("data-animate");
		$this.bind("inview", function(event, isInView, visiblePartX, visiblePartY) {
			if (isInView) {
				$this.css("visibility","visible");
				$this.addClass(animation);
				if(animation.indexOf("fade") === -1) {
					$this.css("opacity", "1");
				}
			}
		});
	});
	
	/* Post 3 */
	
	if (jQuery(".post-3").length > 0) {
		var $container = jQuery(".blog-all");
		$container.isotope({
			filter: "*",
			animationOptions: {
				duration: 750,
				itemSelector: '.post-3',
				easing: "linear",
				queue: false,
			}
		});
	}
	
	/* Contact us */
	
	jQuery(".form-js").submit(function () {
		var thisform = jQuery(this);
		jQuery('.required-error',thisform).remove();
		var name	= jQuery("#name").val();
		var mail	= jQuery("#mail").val();
		var url	= jQuery("#url").val();
		var message	= jQuery("#message").val();
		var data = {'name':name,'mail':mail,'url':url,'message':message};
		if (name == "") {
			jQuery("#name").after('<span class="form-description required-error">Please fill the required field.</span>');
		}else {
			jQuery("#name").parent().find('.required-error').remove();
		}
		if (mail == "") {
			jQuery("#mail").after('<span class="form-description required-error">Please fill the required field.</span>');
		}else {
			jQuery("#mail").parent().find('.required-error').remove();
		}
		if (message == "") {
			jQuery("#message").after('<span class="form-description required-error">Please fill the required field.</span>');
		}else {
			jQuery("#message").parent().find('.required-error').remove();
		}
		
		if (name != "" && mail != "" && message != "") {
			jQuery.post("contact_us.php",data,function (result) {
				if (result == "done") {
					jQuery(".contact-alert").remove();
					thisform.prepend("<div class='alerts contact-alert'><i class='fa fa-check-circle'></i><div><h3>Thank you "+name+"!</h3><p> We'll be in touch real soon .</p></div></div>");
					jQuery("#name").val("");
					jQuery("#mail").val("");
					jQuery("#url").val("");
					jQuery("#message").val("");
				}
			});
		}
		return false;
	});
	
	/* Lightbox */
	
	var lightboxArgs = {			
		animation_speed: "fast",
		overlay_gallery: true,
		autoplay_slideshow: false,
		slideshow: 5000, // light_rounded / dark_rounded / light_square / dark_square / facebook
		theme: "pp_default", 
		opacity: 0.8,
		show_title: false,
		social_tools: "",
		deeplinking: false,
		allow_resize: true, // Resize the photos bigger than viewport. true/false
		counter_separator_label: "/", // The separator for the gallery counter 1 "of" 2
		default_width: 940,
		default_height: 529
	};
		
	jQuery("a[href$=jpg], a[href$=JPG], a[href$=jpeg], a[href$=JPEG], a[href$=png], a[href$=gif], a[href$=bmp]:has(img)").prettyPhoto(lightboxArgs);
			
	jQuery("a[class^='prettyPhoto'], a[rel^='prettyPhoto']").prettyPhoto(lightboxArgs);
	
	/* Dribbble */
	
	jQuery.jribbble.getShotsByPlayerId('envato', function (playerShots) {
		var html = [];
		jQuery.each(playerShots.shots, function (i, shot) {
			html.push('<li><a target="_blank" href="' + shot.url + '"><img src="' + shot.image_url + '" alt="' + shot.title + '"></a></li>');      
		});
		jQuery('.widget-dribbble ul').html(html.join(''));
		jQuery(".widget-dribbble ul").bxSlider({easing: "linear",tickerHover: true,slideWidth: 1170,adaptiveHeightSpeed: 1500,moveSlides: 1,maxSlides: 1,auto: true});
	},{page: 1, per_page: 4});
	
	/* Twitter */
	
	jQuery(".widget-twitter").tweet({
		join_text: false,
		username: "envato", // Username
		modpath: "./js/twitter/",
		avatar_size: false,
		count: 2,
		template: "{text} <br> {time}",
		loading_text: "loading twitter feed...",
		seconds_ago_text: "about %d seconds ago",
		a_minutes_ago_text: "about a minute ago",
		minutes_ago_text: "about %d minutes ago",
		a_hours_ago_text: "about an hour ago",
		hours_ago_text: "about %d hours ago",
		a_day_ago_text: "about a day ago",
		days_ago_text: "about %d days ago",
		view_text: "view tweet on twitter"
	});
	
	/* Flickr */
	
	jQuery(".widget-flickr").jflickrfeed({
		limit: 12,
		qstrings: {
			id: "99771506@N00" // Go to http://idgettr.com/ to find ID.
		},
		itemTemplate: '<a href="{{link}}" title="{{title}}" target="_blank"><img src="{{image_m}}" alt="{{title}}"></a>'
	});
	
	/* Load */
	
	jQuery(window).load(function() {
		
		/* Loader */
		
		jQuery(".loader").fadeOut(500);
		
		/* Post 3 */
		
		if (jQuery(".post-3").length > 0) {
			var $container = jQuery(".blog-all");
			setInterval(function() {
	            $container.isotope({
	            	filter: "*",
	            	animationOptions: {
	            		duration: 750,
	            		itemSelector: '.post-3',
	            		easing: "linear",
	            		queue: false,
	            	}
	            });
	        },2000);
		}
	});
	
})(jQuery);