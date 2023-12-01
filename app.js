let red=document.getElementById("rval");
let green=document.getElementById("gval");
let blue=document.getElementById("bval");
let alpha=document.getElementById("aval");
let rgb=document.querySelector(".rgb");
let h1=document.querySelector("h1");
let h2=document.querySelector("h2");
let rval=red.value;
let gval=green.value;
let bval=blue.value;
let aval=alpha.value;
rgb.style.backgroundColor=`rgba(${rval},${gval},${bval},${aval})`;

function decimalToHex(x) {
    let hex="0123456789ABCDEF"
    let a1="";
    while(x) {
        a1+=hex[x%16];
        x/=16;
        x=parseInt(x);
    }
    let u="";
    let n=a1.length;
    if(n==1) {
        a1+="0";
        n++;
    }
    for(let i=n-1;i>=0;i--) {
        u+=a1[i];
    }
    return u;
}

function convertHex() {
    let r=parseInt(rval),g=parseInt(gval),b=parseInt(bval),a=parseInt(aval);
    return `#${decimalToHex(r)?decimalToHex(r):"00"}${decimalToHex(g)?decimalToHex(g):"00"}${decimalToHex(b)?decimalToHex(b):"00"}`;
}

h2.innerText=convertHex();
alpha.addEventListener("mousemove",()=>{
    aval=alpha.value;
    rgb.style.backgroundColor=`rgba(${rval},${gval},${bval},${aval})`;
    h1.innerText=`rgba(${rval},${gval},${bval},${aval})`;
    alpha.style.backgroundColor=`rgba(255,255,255,${aval})`;
    red.style.backgroundColor=`rgba(${rval},0,0,${aval})`;
    green.style.backgroundColor=`rgba(0,${gval},0,${aval})`;
    blue.style.backgroundColor=`rgba(0,0,${bval},${aval})`;
    h2.innerText=convertHex();
});
red.addEventListener("mousemove",()=>{
    rval=red.value;
    rgb.style.backgroundColor=`rgba(${rval},${gval},${bval},${aval})`;
    h1.innerText=`rgba(${rval},${gval},${bval},${aval})`;
    red.style.backgroundColor= `rgba(${rval},0,0,${aval})`;
    h2.innerText=convertHex();

});

green.addEventListener("mousemove",()=>{
    gval=green.value;
    rgb.style.backgroundColor=`rgba(${rval},${gval},${bval},${aval})`;
    h1.innerText=`rgba(${rval},${gval},${bval},${aval})`;
    green.style.backgroundColor=`rgba(0,${gval},0,${aval})`;
    h2.innerText=convertHex();
});

blue.addEventListener("mousemove",()=>{
    bval=blue.value;
    rgb.style.backgroundColor=`rgba(${rval},${gval},${bval},${aval})`;
    h1.innerText=`rgba(${rval},${gval},${bval},${aval})`;
    blue.style.backgroundColor=`rgba(0,0,${bval},${aval})`;
    h2.innerText=convertHex();
});


alpha.addEventListener("click",()=>{
    aval=alpha.value;
    rgb.style.backgroundColor=`rgba(${rval},${gval},${bval},${aval})`;
    h1.innerText=`rgba(${rval},${gval},${bval},${aval})`;
    alpha.style.backgroundColor=`rgba(255,255,255,${aval})`;
    red.style.backgroundColor=`rgba(${rval},0,0,${aval})`;
    green.style.backgroundColor=`rgba(0,${gval},0,${aval})`;
    blue.style.backgroundColor=`rgba(0,0,${bval},${aval})`;
    h2.innerText=convertHex();
});

red.addEventListener("click",()=>{
    rval=red.value;
    rgb.style.backgroundColor=`rgba(${rval},${gval},${bval},${aval})`;
    h1.innerText=`rgba(${rval},${gval},${bval},${aval})`;
    red.style.backgroundColor= `rgba(${rval},0,0,${aval})`;
    h2.innerText=convertHex();

});

green.addEventListener("click",()=>{
    gval=green.value;
    rgb.style.backgroundColor=`rgba(${rval},${gval},${bval},${aval})`;
    h1.innerText=`rgba(${rval},${gval},${bval},${aval})`;
    green.style.backgroundColor=`rgba(0,${gval},0,${aval})`;
    h2.innerText=convertHex();
});

blue.addEventListener("click",()=>{
    bval=blue.value;
    rgb.style.backgroundColor=`rgba(${rval},${gval},${bval},${aval})`;
    h1.innerText=`rgba(${rval},${gval},${bval},${aval})`;
    blue.style.backgroundColor=`rgba(0,0,${bval},${aval})`;
    h2.innerText=convertHex();
});

h1.addEventListener("click",(event)=>{
    let text=h1.innerText;
    navigator.clipboard.writeText(text);
    console.log(text);
    console.log("Copied to clipboard");
});

h2.addEventListener("click",(event)=>{
    let text=h2.innerText;
    navigator.clipboard.writeText(text);
    console.log(text);
    console.log("Copied to clipboard");
});



