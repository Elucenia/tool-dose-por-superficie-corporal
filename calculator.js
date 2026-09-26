/* tool-dose-por-superficie-corporal · Elucenia · https://github.com/Elucenia/tool-dose-por-superficie-corporal
   Copyright (c) 2026 Elucenia · Felipe Guedes (fgxdev.com). Licensed under the Apache License 2.0: keep this notice and the NOTICE file, and mark your changes.
   Standalone integration. Package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"dose-por-superficie-corporal","title":"Dose por superfície corporal (mg/m²)","fields":[["dose","Dose prescrita","num",{"min":0.01,"max":10000,"step":0.01,"unit":"mg/m²","ph":"75"}],["peso","Peso","num",{"min":2,"max":300,"step":0.1,"unit":"kg","ph":"70"}],["altura","Altura","num",{"min":45,"max":230,"step":1,"unit":"cm","ph":"170"}],["formula","Fórmula da superfície corporal","radio",{"opts":{"m":"Mosteller","d":"DuBois"}}],["teto","Limitar a SC em 2,0 m²?","radio",{"opts":{"0":"Não (dose plena)","1":"Sim"}}]],"config":null,"reviewStatus":"restricted","clinicalValidation":"not-performed"});
function calculate(){return {error:'Cálculo suspenso: consulte a revisão e a fonte oficial.',code:'REVIEW_REQUIRED',id:TOOL.id};}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
