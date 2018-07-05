

$('#play').click(function play(e){ 
	var myAudio = document.getElementById('myAudio');
	if (myAudio.paused) { 
		myAudio.play();
		//botpnpause
		e.preventDefault()
		$('#play').attr('src','icons/pause.png')
	} 
	else {
		myAudio.pause();
		//botonplay
		e.preventDefault()
		$('#play').attr('src','icons/play.png')
	}
}).css({cursor: 'pointer'})
var l= document.getElementById("volumen");
l.oninput=function(){
	/*$("#l").text("volumen  "+l.value)*/
	myAudio.volume=l.value
}
var d=document.getElementById("myDis");
var  pro=document.getElementById("pro");
myAudio.ontimeupdate=function(){
	d.max= myAudio.duration
	d.value=myAudio.currentTime;
	$('#se').text(myAudio.currentTime);
	
	d.oninput=function(){
	 	myAudio.currentTime=d.value
	}
    $('#songTitle').text(myAudio.src).css({display:'flex',color:'white'});
    pro.max=myAudio.duration
    pro.value=myAudio.currentTime
    
    var mm=Math.floor(myAudio.currentTime / 60)
    var ss=Math.floor(myAudio.currentTime - mm * 60)
    var m=Math.floor(myAudio.duration / 60)
    var s=Math.floor(myAudio.duration - m * 60)
    if(ss < 10) {ss = "0"+ss}
     if(s < 10){s ="0"+s}
    if(mm < 10) {mm = "0"+mm}
    if(m < 10){m ="0"+m}
    $('#time').text(mm+" : "+ss)
    $('#tr').text(m+":"+s)
 }
$('#audio').click(function(){
	if(myAudio.muted){
		myAudio.muted = false;
		$('#audio').css({filter:' brightness(100%)'})
    	$('#audio').attr('src','icons/volumen.png')
	} else {
    	myAudio.muted = true;
    	$('#audio').css({filter:' brightness(30%)'})
		$('#audio').attr('src','icons/mute.png')
	}
})


$('.lim:eq(2)').click(function(e){
	e.preventDefault()
	$('#mainm').fadeIn().css({display:'flex'})
})

$('.song:eq(0)').css({marginLeft:'28%'}).mousemove(function(){
	$('.song:eq(0)').animate({marginLeft: '-0%'})
})
$('.song:eq(1)').css({marginLeft:'43%',marginTop:'-6%',display:'block'}).mousemove(function(){
	$('.song:eq(1)').animate({marginLeft: '-0%'})
})
$('.song:eq(2)').css({marginLeft:'13%',marginTop:'-15%',display:'block'}).mousemove(function(){
	$('.song:eq(2)').animate({marginLeft:'-0%',marginTop:'-4%'})
})
$('.song:eq(3)').css({marginLeft:'63%',marginTop:'-20%',display:'block'}).mousemove(function(){
	$('.song:eq(3)').animate({marginLeft:'85%',marginTop:'-36%'})
})
$('.song:eq(4)').css({marginLeft:'46%',marginTop:'9%',display:'block'}).mousemove(function(){
	$('.song:eq(4)').animate({marginLeft:'85%',marginTop:'-4%'})
})
$('.song:eq(5)').css({marginLeft:'21%',marginTop:'-17%',display:'block'}).mousemove(function(){
	$('.song:eq(5)').animate({marginLeft:'85%',marginTop:'-4%'})
})
$('.song:eq(6)').css({marginLeft:'73%',marginTop:'-18%',display:'block'}).mousemove(function(){
	$('.song:eq(6)').animate({marginLeft:'42%',marginTop:'-25%'})
})


					  