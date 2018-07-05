// JavaScript Document

//	console.log($('iframe').length)
				
//$(document).mouseup(function (e){
//var container = $('iframe');
//	if (!container.is(e.target) && container.has(e.target).length === 0){
//		$(this).fadeOut()
//	}
//}).mouseup(function (p){
//var container = $('iframe');
//	if (!container.is(p.target) && container.has(p.target).length === 0){
//		$('iframe').fadeOut()
//	}
//})

//codigo MEjorado
/*$('iframe').load(function(){
	$('html').mousedown(function(){
		$('iframe').remove()
	})
	
})*/



$('#oculto').click(function(){
	$('#mainm').fadeOut('fast')
})

$('.playm:eq(0)').click(function(){
	$('#plataforma').fadeIn()
	$('.irep').addClass('pm').fadeIn(function(){
		$('#wil').click(function(){
			$('#mainm').slideDown().css({display:'flex'})
			
		})
		$('#itunes').click(function(){
			$('iframe:eq(0)').fadeIn('fast').addClass('float')
		})
		$('#spotify').click(function(){
			$('iframe').hide()
			$('iframe:eq(1)').fadeIn('fast').addClass('float')
		})
		$('#deezer').click(function(){
			$('iframe').hide()
			$('iframe:eq(2)').fadeIn('fast').addClass('float')
		})
		$('#youtube').click(function(){
			$('iframe').hide()
			$('iframe:eq(3)').fadeIn('fast').addClass('float')
		})
		$('#soundcloud').hide()
		
	})
})

//console.log("palsd   "+$('.playm').length)
$('.playm:eq(1)').click(function(){
$('#plataforma').fadeIn()
	$('.irep').addClass('pm').fadeIn(function(){
		$('#wil').click(function(){
			$('#mainm').slideDown().css({display:'flex'})
		})
		$('#itunes').click(function(){
			$('iframe:eq(4)').fadeIn('fast').addClass('float')
		})
		$('#spotify').click(function(){
			$('iframe').hide()
			$('iframe:eq(5)').fadeIn('fast').addClass('float')
		})
		$('#soundcloud').click(function(){
			$('iframe').hide()
			$('iframe:eq(6)').fadeIn('fast').addClass('float')
		})
		$('#deezer').click(function(){
			$('iframe').hide()
			$('iframe:eq(7)').fadeIn('fast').addClass('float')
		})
		$('#youtube').click(function(){
			$('iframe').hide()
			$('iframe:eq(8)').fadeIn('fast').addClass('float')
		})
		
		
	})
	
})
$('.playm:eq(2)').click(function(){
	
	$('#plataforma').fadeIn()
	$('.irep').addClass('pm').fadeIn(function(){
		$('#wil').click(function(){
			$('#mainm').slideDown().css({display:'flex'})
		})
		$('#itunes').click(function(){
			$('iframe:eq(9)').fadeIn('fast').addClass('float')
		})
		$('#spotify').click(function(){
			$('iframe').hide()
			$('iframe:eq(10)').fadeIn('fast').addClass('float')
		})
		$('#deezer').click(function(){
			$('iframe').hide()
			$('iframe:eq(11)').fadeIn('fast').addClass('float')
		})
		$('#youtube').click(function(){
			$('iframe').hide()
			$('iframe:eq(12)').fadeIn('fast').addClass('float')
		})
		$('#soundcloud').hide()
		
	})
})
$('.playm:eq(3)').click(function(){
	$('#plataforma').fadeIn()
	$('.irep').addClass('pm').fadeIn(function(){
		$('#wil').click(function(){
			$('#mainm').slideDown().css({display:'flex'})
		})
		$('#itunes').click(function(){
			$('iframe:eq(13)').fadeIn('fast').addClass('float')
		})
		$('#spotify').click(function(){
			$('iframe').hide()
			$('iframe:eq(14)').fadeIn('fast').addClass('float')
		})
		$('#deezer').click(function(){
			$('iframe').hide()
			$('iframe:eq(15)').fadeIn('fast').addClass('float')
		})
		$('#youtube').click(function(){
			$('iframe').hide()
			$('iframe:eq(16)').fadeIn('fast').addClass('float')
		})
		$('#soundcloud').hide()
		
	})
})
$('.playm:eq(4)').click(function(){
	$('#plataforma').fadeIn()
	$('.irep').addClass('pm').fadeIn(function(){
		$('#wil').click(function(){
			$('#mainm').slideDown().css({display:'flex'})
		})
		$('#itunes').click(function(){
			$('iframe:eq(17)').fadeIn('fast').addClass('float')
		})
		$('#spotify').click(function(){
			$('iframe').hide()
			$('iframe:eq(18)').fadeIn('fast').addClass('float')
		})
		$('#deezer').click(function(){
			$('iframe').hide()
			$('iframe:eq(20)').fadeIn('fast').addClass('float')
		})
		$('#youtube').click(function(){
			$('iframe').hide()
			$('iframe:eq(21)').fadeIn('fast').addClass('float')
		})
		$('#soundcloud').click(function(){
			$('iframe').hide()
			$('iframe:eq(19)').fadeIn('fast').addClass('float')
		})
		
	})
})
$('span').click(function(){
			$('#plataforma').fadeOut()
		}).css({
		fontSize:'3.5rem',
		position:'absolute',
		cursor:'pointer',
		float: 'right',
		color:'red',
		margin: '0 80%'
	}).mouseover(function(){
	
})
