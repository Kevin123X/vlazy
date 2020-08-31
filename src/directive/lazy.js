import Vue from 'vue'
export default ()=>{
  const imgList=[]
  const hasLoaded=(src)=>{
   return imgList.indexOf(src)>-1
  }
  const imgLoad=(el,src)=>{
    const img=new Image()
    img.src=src
    img.onload=function () {  
      el.src= src
      el.style.height='auto'
      imgList.push(src)
      console.log(imgList);
    }
  }
  const canShow=function (el,src) { 
    const elpos=el.getBoundingClientRect()
    const vheight=window.innerHeight
    if (elpos.top<vheight&&elpos.top>(-elpos.height/2)) {
     if (hasLoaded(src)) {
       setTimeout(() => {
        el.src=src
       }, 500);
     } else {
       imgLoad(el,src)
     } 
    }

   }
   const listener=function (el,bind) { 
      const {value}=bind
      canShow(el,value)
      window.addEventListener('scroll',function (e) { 
        canShow(el,value,e)
       })
    }
  Vue.directive('lazy',{
    inserted:(el,bind)=>listener(el,bind),
    updated:(el,bind)=>listener(el,bind)
  })
}