/*
* @Author: Administrator
* @Date:   2017-10-16 02:52:49
* @Last Modified by:   Administrator
* @Last Modified time: 2017-10-18 13:44:10
*/
{
let yhzcObj=document.querySelector(".yhzc");
let picinners=document.querySelector(".picinner");

// console.log(picinners)

let now=4;

let t=setInterval(timeFn,4000);
function timeFn(){

	now++;
	picinners.style.transition="all 1s";
	picinners.style.marginLeft=-295*now+"px";

yhzcObj.addEventListener("transitionend", function(){
	if(now===12){
		picinners.style.transition="none";
		picinners.style.marginLeft="-1180px";
		now=4;
	};
});
// yhzcObj.onmouseover()


	
	
}

}


// 移动banner
{

	
	let ydbanner=document.querySelector(".ydbanner");
	let imagesObj=document.querySelector(".ydbanner li");
	let pagerS=document.querySelector(".pagerwrapper li")
	let now=0;
	let z=10;
	let t=setInterval(move,2000);
	function move(){
		imagesObj[now].classList.add("leftout");
		pagerS[now].classList.remove("active");
		now++;
		if(now===imagesObj.length){
			now=0;
		}
		imagesObj[now].style.zIndex=z++;
		imagesObj[now].classList.add("rightin");
		pagerS[now].classList.add("active");

	}
	imagesObj.forEach(function(ele){
		ele.addEventListener('animationend',
			function(){
				ele.className="";
			})
	});











}