!function(){
    "use strict";
    console.log("     \nThis blog is using hexo-theme-kaze based on MIT license\nSee theme at https://github.com/theme-kaze/hexo-theme-kaze\n");
    const e=document.body.scrollWidth||document.documentElement.scrollWidth;
    let t=null;
    function o(e){
        const t=e.target,n=document.getElementById("mobiletoc");
        n&&t&&!n.contains(t)&&(n.style.display="none",window.mask.remove(),document.removeEventListener("click",o))
    }
        
    window.searchControlButton=null,
    e<=742?(
        t=document.getElementsByClassName("darkwidget")[0],window.searchControlButton=document.getElementsByClassName("searchwidget")[0]
    ):(t=document.getElementsByClassName("darknavbar")[0],window.searchControlButton=document.getElementsByClassName("searchnavbar")[0]),
    t.addEventListener("click",(()=>{window.setDarkmode(window.reverseDarkModeSetting())}));
    const n=()=>{const e=document.getElementById("mobiletoc");if(!e)return;e.style.display="block";
        const t=document.createElement("div");
        t.id="mask",document.body.append(t),setTimeout((()=>{document.addEventListener("click",o)}),0)
    };
    setTimeout((()=>{
        const e=document.getElementById("menubutton");
        e&&(e.onclick=n)
    }),0);
    const l=()=>{
        const e=document.getElementById("scrollbutton"),
        t=document.getElementById("menubutton"),
        o=document.getElementById("popbutton"),
        n=document.body.scrollWidth||document.documentElement.scrollWidth;
        "1"===e.style.opacity?(e.style.bottom="32px",e.style.opacity="0",o.style.transform="none"):(o.style.transform="rotate(90deg)",e.style.bottom="85px",e.style.opacity="1");
        const l=document.getElementById("mobiletoc");
        n<=862&&l&&("1"===t.style.opacity?(t.style.right="32px",t.style.opacity="0"):(t.style.right="85px",t.style.opacity="1"));
        const s=document.querySelector(".darkwidget"),c=document.querySelector(".searchwidget");
        n<=742&&("1"===s.style.opacity?(s.style.bottom="32px",s.style.opacity="0",s.style.transform="none"):(s.style.display="flex",o.style.transform="rotate(90deg)",s.style.bottom="138px",s.style.opacity="1"),
        "1"===c.style.opacity?(c.style.bottom="32px",c.style.opacity="0",c.style.transform="none"):(c.style.display="flex",c.style.transform="rotate(90deg)",c.style.bottom="191px",c.style.opacity="1"))};
        setTimeout((()=>{document.getElementById("popbutton").addEventListener("click",l)}),0);
        const s=()=>{let e=window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop;
        e>1?(window.requestAnimationFrame(s),scrollTo(0,Math.floor(.85*e))):scrollTo(0,0)};
        function c(e){const t=document.querySelector("#local-search");
            if(!t.contains(e.target)){
                const e=document.querySelector("#search-input"),o=document.querySelector("#search-content");
                e.value="",t.style.display="none",o.innerHTML="",window.mask.remove(),document.removeEventListener("click",c)
            }
        }
        setTimeout((()=>{const e=document.getElementById("scrollbutton");e&&(e.onclick=s)}),0),
        setTimeout((()=>{window.searchControlButton&&window.searchControlButton.addEventListener("click",(()=>{
            const e=document.createElement("div");
            e.id="mask",document.body.append(e);
            document.querySelector("#local-search").style.display="block",
            setTimeout((()=>{document.addEventListener("click",c)}),0)
        }))})),
        window.localSearch=function(e){
            fetch(e).then((e=>e.json())).then((e=>{let t=document.getElementById("search-input"),o=document.getElementById("search-content");
                t.addEventListener("input",(function(){
                    let t='<ul class="search-result-list">',n=this.value.trim().toLowerCase().replace(/[<>&"]/g,(e=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"}[e])));
                    if(o.innerHTML="",!(this.value.trim().length<=0)){
                        if(e.forEach((function(e){
                            let o=!0;e.title&&""!==e.title.trim()||(e.title="Untitled");
                            let l=e.title.trim().toLowerCase();
                            const s=e.content.trim().replace(/<[^>]+>/g,"").toLowerCase();
                            let c=-1;const i=l.indexOf(n);
                            let r=0;
                            if(""!==s&&(r=s.indexOf(n),c=r),i<0&&r<0&&(o=!1),r<0&&(c=0),o){
                                t+=`<li><a href="${e.url}" class="search-result-title" >'${l}</a>`;
                                const o=e.content;
                                if(c>=0){
                                    const e=Math.max(0,c-12),l=Math.min(o.length,c+12);
                                    let s=o.substr(e,l);
                                    s=s.replace(new RegExp(n,"gi"),'<em class="search-keyword">'+n+"</em>"),t+='<p class="search-result">'+s+"...</p>"}t+="</li>"}
                                })),
                                t+="</ul>",-1===t.indexOf("<li>")
                            )
                            return o.innerHTML='<ul><span class="local-search-empty">没有搜索到结果<span></ul>';o.innerHTML=t
                        }
                    }
                ))
            }))
        }
    }();
