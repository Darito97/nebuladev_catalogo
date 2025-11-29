const PHONE="4431083083";
const BRAND="Tecnología NebulaDev Motul";
const DEFAULT_MSG=`Hola David, me gustaría más información sobre ${BRAND}.`;
const serviceTexts={
  asesorias:`Hola David, me interesa asesoría/curso de programación, tecnología o matemáticas. ¿Qué opciones manejas y horarios?`,
  proyectos:`Hola David, quiero desarrollar un proyecto (web/app/mejora). ¿Podemos revisar requerimientos y presupuesto?`,
  diseno:`Hola David, necesito apoyo de diseño/edición para mi marca o contenido. ¿Podemos cotizar?`,
  reparacion_computadoras:`Hola David, tengo una computadora con problema de hardware/software. ¿Podrías revisarla y cotizar la reparación?`,
  reparacion_telefonos:`Hola David, mi teléfono necesita reparación (pantalla/centro de carga/bloqueo/piezas/optimización). ¿Cuál sería el costo estimado?`,
  limpieza_equipos:`Hola David, requiero limpieza interna/externa de equipo. ¿Cuándo podrías realizarla y costo?`,
  impresoras:`Hola David, necesito configuración o reparación de impresora. ¿Me apoyas con diagnóstico y costo?`,
  otros_dispositivos:`Hola David, tengo otro dispositivo que requiere revisión. ¿Podemos agendar diagnóstico?`,
  armado_pc:`Hola David, quiero cotización y armado de una PC/Setup personalizado según mi presupuesto. ¿Qué me recomiendas?`,
  infraestructura_oficina:`Hola David, busco cotización y armado de infraestructura de oficina. ¿Podemos revisar un plan según presupuesto?`,
  instalacion_software:`Hola David, necesito instalación de programas/aplicaciones. ¿Cuáles manejas y costo?`
};
function openWhatsApp(message){
  const base=`https://wa.me/${PHONE}?text=`;
  const text=`${message} \n${BRAND}`;
  const url=base+encodeURIComponent(text);
  window.open(url,"_blank");
}
function handleCardClick(e){
  const key=e.currentTarget.getAttribute("data-service");
  const msg=serviceTexts[key]||DEFAULT_MSG;
  openWhatsApp(msg);
}
document.querySelectorAll(".service-card").forEach(el=>{
  el.addEventListener("click",handleCardClick);
});
document.querySelectorAll(".quote-btn").forEach(btn=>{
  btn.addEventListener("click",function(ev){
    ev.stopPropagation();
    const parent=ev.currentTarget.closest(".service-card");
    const key=parent?parent.getAttribute("data-service"):undefined;
    const msg=serviceTexts[key]||DEFAULT_MSG;
    openWhatsApp(msg);
  });
});
const cta=document.getElementById("ctaWhatsApp");
if(cta){
  cta.addEventListener("click",function(ev){
    ev.preventDefault();
    openWhatsApp(DEFAULT_MSG);
  });
}
const footerBtn=document.getElementById("footerWhatsApp");
if(footerBtn){
  footerBtn.addEventListener("click",function(ev){
    ev.preventDefault();
    openWhatsApp(DEFAULT_MSG);
  });
}
const mapBtn=document.getElementById("mapWhatsApp");
if(mapBtn){
  mapBtn.addEventListener("click",function(ev){
    ev.preventDefault();
    openWhatsApp(DEFAULT_MSG);
  });
}
const y=document.getElementById("year");
if(y){y.textContent=new Date().getFullYear();}
