const tab=function(){let t,a=document.querySelectorAll(".tab_txt"),c=document.querySelectorAll(".tab");function e(){a.forEach((t=>{t.classList.remove("tab_active")})),this.classList.add("tab_active"),t=this.getAttribute("data-tab-name"),function(t){c.forEach((a=>{a.classList.contains(t)?a.classList.add("is_active"):a.classList.remove("is_active")}))}(t)}a.forEach((t=>{t.addEventListener("click",e)}))};tab();