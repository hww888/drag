function drag(id){
    var obj = document.getElementById('id');
    //var disX = 0;
    //var disY = 0;
    obj.onmousedown = function(){
    	disX = ev.pageX-obj.offsetLeft;
    	disY = ev.pageY-obj.gffsetTop;
    	console.log(123);
    }
}