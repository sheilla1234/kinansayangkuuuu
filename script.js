const intro = document.getElementById("intro");
const music = document.getElementById("music");

/* INTRO TEXT */
setTimeout(()=>line1.style.opacity=1,1000);
setTimeout(()=>line2.style.opacity=1,3000);
setTimeout(()=>line3.style.opacity=1,5000);
setTimeout(()=>enterText.style.opacity=1,7000);

/* MASUK + AUDIO */
intro.addEventListener("click", ()=>{

  music.volume=0;
  music.play();

  let vol=0;
  let fade=setInterval(()=>{
    if(vol<0.6){
      vol+=0.05;
      music.volume=vol;
    }else clearInterval(fade);
  },300);

  intro.style.opacity="0";
  setTimeout(()=>intro.style.display="none",2000);
});

/* FOTO CINEMATIC */
const scenes=document.querySelectorAll(".scene");
let i=0;

setInterval(()=>{
  scenes[i].classList.remove("active");
  i=(i+1)%scenes.length;
  scenes[i].classList.add("active");
},5000);

/* UCAPAN */
const text=`Selamat ulang tahun ke-24 ya Kinan ❤️

Terima kasih sudah hadir di hidup aku...
kamu bukan cuma cinta...
kamu rumah...

Aku harap semua mimpi kamu tercapai...
dan aku tetap jadi bagian dari hidup kamu... ❤️`;

let t=0;
function type(){
  if(t<text.length){
    longText.innerHTML+=text[t];
    t++;
    setTimeout(type,20);
  }
}
type();

/* VIDEO TEXT */
const vt="Setiap detik sama kamu adalah kebahagiaan...";
let v=0;

function tv(){
  if(v<vt.length){
    videoText.innerHTML+=vt[v];
    v++;
    setTimeout(tv,40);
  }
}
tv();

/* SURAT */
const suratText=`Kinan...

aku mau tetap sama kamu...
hari ini...
besok...
dan seterusnya ❤️`;

let s=0;
function ts(){
  if(s<suratText.length){
    surat.innerHTML+=suratText[s];
    s++;
    setTimeout(ts,20);
  }
}
ts();

/* END */
setTimeout(()=>finalText.style.opacity=1,15000);
setTimeout(()=>fade.style.opacity=1,26000);