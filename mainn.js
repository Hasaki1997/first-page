function addLoadEvent(func){
  var oldonload=window.onload;
  if(typeof window.onload!='function'){
    window.onload=func;
  } else{
    window.onload=function(){
      oldonload();
      func();
    }
  }
}
function prepareGallery(){
  if(!document.getElementsByTagName) return false;
  if(!document.getElementById) return false;
  if(!document.getElementById("imagegallery")) return false ;
  var gallery=document.getElementById('imagegallery');
  var links=gallery.getElementsByTagName("a");
  for(var i=0;i<links.length;i++){
    links[i].onclick=function(){
      return showPhoto(this);
    }
  }
}
function showPhoto(whichpic){
  if(!document.getElementById("photoshow")) return ture;
  var source=whichpic.getAttribute("href");
  var photoshow=document.getElementById("photoshow");
  photoshow.setAttribute("src",source);
  if(document.getElementById("wordshow")){
    var text=whichpic.getAttribute("title")?whichpic.getAttribute("title"):" ";
    var wordshow=document.getElementById("wordshow");
    if(wordshow.firstChild.nodeType==3){
      wordshow.firstChild.nodeValue=text;
    }
  }
  return false;
}
addLoadEvent(prepareGallery);
