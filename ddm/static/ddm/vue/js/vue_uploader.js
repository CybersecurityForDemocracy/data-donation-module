(function(){"use strict";var e={7844:function(e,t,n){var a=n(821);const o={class:"row"},r={class:"col"},s={class:"modal custom-modal",id:"processingModal",ref:"processingModal",style:{display:"none"}},i={class:"modal-dialog modal-dialog-centered custom-modal-container"},l={class:"modal-content fs-1 text-center custom-modal-content"},d={class:"p-3 modal-message"},c=(0,a._)("div",{class:"dot-floating"},null,-1),u={class:"default-modal",id:"infoModal",ref:"infoModal",style:{display:"none"}},p={class:"modal-body d-flex flex-row align-items-center pt-5"},f=(0,a._)("div",{class:"ps-2 pe-3 color-blue"},[(0,a._)("i",{class:"bi bi-info-circle-fill fs-1"})],-1),h={class:"modal-footer"},m={class:"default-modal",id:"statusModal",ref:"statusModal",style:{display:"none"}},g={class:"modal-body d-flex flex-row align-items-center pt-5"},b=(0,a._)("div",{class:"ps-2 pe-3 color-blue"},[(0,a._)("i",{class:"bi bi-info-circle-fill fs-1"})],-1),y={class:"modal-footer"},w={class:"modal-backdrop",ref:"modalBackdrop",style:{display:"none"}};function _(e,t,n,_,v,z){const D=(0,a.up)("FileUploader");return(0,a.wg)(),(0,a.iD)(a.HY,null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(v.parsedUploadConfig,((e,t)=>((0,a.wg)(),(0,a.j4)(D,{key:t,"component-id":t,"expects-zip":"zip file"===e.upload_type,name:e.name,blueprints:e.blueprints,instructions:e.instructions,"exception-url":this.exceptionUrl,onChangedData:z.updatePostData},null,8,["component-id","expects-zip","name","blueprints","instructions","exception-url","onChangedData"])))),128)),(0,a._)("div",o,[(0,a._)("div",r,[(0,a._)("button",{class:"flow-btn",type:"button",onClick:t[0]||(t[0]=e=>z.processData(!1))},(0,a.zw)(e.$t("next-btn-label"))+"  ›",1)])]),(0,a._)("div",s,[(0,a._)("div",i,[(0,a._)("div",l,[(0,a._)("div",d,(0,a.zw)(e.$t("data-submit-wait")),1),c])])],512),(0,a._)("div",u,[(0,a._)("div",p,[f,(0,a._)("div",null,(0,a.zw)(this.infoModalMsg),1)]),(0,a._)("div",h,[(0,a._)("button",{class:"ddm-btn",type:"button",id:"closeInfoModal",onClick:t[1]||(t[1]=(...e)=>z.closeInfoModal&&z.closeInfoModal(...e))},"OK")])],512),(0,a._)("div",m,[(0,a._)("div",g,[b,(0,a._)("div",{id:"statusModalMsg",ref:"statusModalMsg"},(0,a.zw)(e.$t("status-info-msg")),513)]),(0,a._)("div",y,[(0,a._)("button",{class:"ddm-btn",type:"button",id:"cancelStatusModal",onClick:t[2]||(t[2]=(...e)=>z.closeStatusModal&&z.closeStatusModal(...e))},(0,a.zw)(e.$t("cancel-label")),1),(0,a._)("button",{class:"ddm-btn",type:"button",id:"closeStatusModal",onClick:t[3]||(t[3]=e=>z.processData(!0))},(0,a.zw)(e.$t("continue-anyway-label")),1)])],512),(0,a._)("div",w,null,512)],64)}n(6699);const v=e=>((0,a.dD)("data-v-84a40a76"),e=e(),(0,a.Cn)(),e),z={class:"mb-5"},D={class:"float-left bg-dark text-white pt-2 ps-2 pb-1 rounded-top"},x={class:"col-sm"},S=["id"],k={class:"accordion-item"},$=["id"],E=["data-bs-target","aria-controls"],M=["id","data-bs-parent"],I={class:"accordion-body"},T={key:1},O={class:"accordion-body border"},C={class:"row align-items-center"},j=v((()=>(0,a._)("div",{class:"col-auto ul-status-icon"},[(0,a._)("i",{class:"bi bi-upload"})],-1))),U={class:"col ul-status-description"},H={key:0},A={key:1},Y={class:"col ul-status-message"},F={class:"select-file-btn"},P=["name"],q=v((()=>(0,a._)("div",{class:"col-auto ul-status-icon"},[(0,a._)("div",{class:"clearfix"},[(0,a._)("p",null,[(0,a._)("span",{class:"spinner-border float-right me-3",role:"status"},[(0,a._)("span",{class:"sr-only"})])])])],-1))),L={class:"col ul-status-description"},N=v((()=>(0,a._)("div",{class:"col ul-status-message"},null,-1))),Z=v((()=>(0,a._)("div",{class:"col-auto ul-status-icon"},[(0,a._)("i",{class:"bi bi-file-check"})],-1))),B={class:"col ul-status-description"},K={class:"text-success fw-bold"},J=v((()=>(0,a._)("div",{class:"col ul-status-message"},null,-1))),V=v((()=>(0,a._)("div",{class:"col-auto ul-status-icon"},[(0,a._)("i",{class:"bi bi-exclamation-diamond text-warning"})],-1))),G={class:"col-auto ul-status-description"},R={class:"fw-bold"},W={class:"col ul-status-message"},Q=v((()=>(0,a._)("div",{class:"col-auto ul-status-icon"},[(0,a._)("i",{class:"bi bi-exclamation-diamond text-danger"})],-1))),X={class:"col-auto ul-status-description"},ee={class:"fw-bold"},te={class:"col ul-status-message"},ne={class:"text-danger"},ae={class:"ul-feedback-container row border-bottom mt-3"},oe={class:"col"},re=v((()=>(0,a._)("div",{class:"col w-small bp-ul-icon"},[(0,a._)("i",{class:"bi bi-file-earmark-fill text-grey"})],-1))),se={class:"col-2 bp-description"},ie={class:"col bp-ul-status"},le=v((()=>(0,a._)("div",{class:"col bp-ul-data"},null,-1))),de=v((()=>(0,a._)("div",{class:"col bp-ul-consent"},null,-1))),ce={class:"row pb-2"},ue=v((()=>(0,a._)("div",{class:"col w-small bp-ul-icon"},[(0,a._)("i",{class:"bi bi-file-earmark-check-fill text-success"})],-1))),pe={class:"col-2 bp-description"},fe={class:"col bp-ul-status"},he={class:"row fs-09"},me=v((()=>(0,a._)("div",{class:"col w-small"},null,-1))),ge={class:"col"},be={class:"pb-2"},ye={class:"data-donation-container pb-3"},we=["id"],_e=["id"],ve=["id"],ze=["id","onClick"],De=["id"],xe={class:"row"},Se=v((()=>(0,a._)("div",{class:"col w-small"},null,-1))),ke={class:"col fs-09 pb-3 pt-1"},$e={class:"fw-bold"},Ee={class:"consent-question-container"},Me={class:"question-choice-item form-check"},Ie=["for"],Te=["id","onUpdate:modelValue"],Oe={class:"question-choice-item form-check"},Ce=["for"],je=["id","onUpdate:modelValue"],Ue=v((()=>(0,a._)("div",{class:"col w-small bp-ul-icon"},[(0,a._)("i",{class:"bi bi-file-earmark-x-fill text-danger"})],-1))),He={class:"col-2 bp-description"},Ae={class:"col bp-ul-status"},Ye={key:1},Fe=v((()=>(0,a._)("div",{class:"col-auto bp-ul-data"},null,-1))),Pe=v((()=>(0,a._)("div",{class:"col-auto bp-ul-consent"},null,-1)));function qe(e,t,n,o,r,s){const i=(0,a.up)("DonationInstructions");return(0,a.wg)(),(0,a.iD)("div",z,[(0,a._)("div",D,[(0,a._)("div",x,[(0,a._)("h4",null,(0,a.zw)(n.name),1)])]),(0,a._)("div",{class:"accordion",id:"ul-acc-"+n.componentId},[(0,a._)("div",k,[(0,a._)("h3",{class:"accordion-header",id:"acc-instr-head-"+n.componentId},[(0,a._)("button",{class:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#acc-instr-body-"+n.componentId,"aria-expanded":"true","aria-controls":"acc-instr-body-"+n.componentId},[(0,a._)("b",null,(0,a.zw)(e.$t("instructions")),1)],8,E)],8,$),(0,a._)("div",{id:"acc-instr-body-"+n.componentId,class:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#ul-acc-"+n.componentId},[(0,a._)("div",I,[n.instructions.length?((0,a.wg)(),(0,a.j4)(i,{key:0,instructions:n.instructions,"component-id":n.componentId},null,8,["instructions","component-id"])):((0,a.wg)(),(0,a.iD)("div",T,(0,a.zw)(e.$t("no-instructions-defined"))+".",1))])],8,M)])],8,S),(0,a._)("div",O,[(0,a._)("div",C,["pending"===r.uploadStatus?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[j,(0,a._)("div",U,[r.uploadAttempts?r.uploadAttempts?((0,a.wg)(),(0,a.iD)("p",A,(0,a.zw)(e.$t("upload-different-file"))+":",1)):(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("p",H,(0,a.zw)(e.$t("upload-file"))+":",1))]),(0,a._)("div",Y,[(0,a._)("label",F,[(0,a._)("input",{name:"ul-"+n.componentId,type:"file",onChange:t[0]||(t[0]=(...e)=>s.processFile&&s.processFile(...e)),class:"d-none"},null,40,P),(0,a.Uk)(" "+(0,a.zw)(e.$t("choose-file")),1)])])],64)):"processing"===r.uploadStatus?((0,a.wg)(),(0,a.iD)(a.HY,{key:1},[q,(0,a._)("div",L,[(0,a._)("p",null,(0,a.zw)(e.$t("file-is-being-uploaded")),1)]),N],64)):"success"===r.uploadStatus?((0,a.wg)(),(0,a.iD)(a.HY,{key:2},[Z,(0,a._)("div",B,[(0,a._)("p",K,(0,a.zw)(e.$t("upload-success")),1),(0,a._)("p",null,[(0,a._)("a",{onClick:t[1]||(t[1]=e=>r.uploadStatus="pending"),class:"upload-other"},(0,a.zw)(e.$t("choose-different-file")),1)])]),J],64)):"partial"===r.uploadStatus?((0,a.wg)(),(0,a.iD)(a.HY,{key:3},[V,(0,a._)("div",G,[(0,a._)("p",R,(0,a.zw)(e.$t("partial-upload-status")),1),(0,a._)("p",null,[(0,a._)("a",{onClick:t[2]||(t[2]=e=>r.uploadStatus="pending"),class:"upload-other"},(0,a.zw)(e.$t("choose-different-file")),1)])]),(0,a._)("div",W,[(0,a._)("p",null,(0,a.zw)(e.$t("partial-upload-message")),1)])],64)):"failed"===r.uploadStatus?((0,a.wg)(),(0,a.iD)(a.HY,{key:4},[Q,(0,a._)("div",X,[(0,a._)("p",ee,(0,a.zw)(e.$t("upload-failed")),1),(0,a._)("p",null,[(0,a._)("a",{onClick:t[3]||(t[3]=e=>r.uploadStatus="pending"),class:"upload-other"},(0,a.zw)(e.$t("choose-different-file")),1)])]),(0,a._)("div",te,[(0,a._)("ul",ne,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.generalErrors,(e=>((0,a.wg)(),(0,a.iD)("li",{key:e},(0,a.zw)(e),1)))),128))])])],64)):(0,a.kq)("",!0)]),(0,a._)("div",ae,[(0,a._)("div",oe,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.blueprints,(n=>((0,a.wg)(),(0,a.iD)("div",{key:n,class:(0,a.C_)(["ul-status row align-items-center border-top pt-2 pb-2",{"ul-success":"success"===r.blueprintData[n.id.toString()].status,"ul-failed":"failed"===r.blueprintData[n.id.toString()].status}])},["pending"===r.blueprintData[n.id.toString()].status?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[re,(0,a._)("div",se,(0,a.zw)(n.name),1),(0,a._)("div",ie,(0,a.zw)(e.$t("not-yet-extracted")),1),le,de],64)):(0,a.kq)("",!0),"success"===r.blueprintData[n.id.toString()].status?((0,a.wg)(),(0,a.iD)(a.HY,{key:1},[(0,a._)("div",ce,[ue,(0,a._)("div",pe,(0,a.zw)(n.name),1),(0,a._)("div",fe,(0,a.zw)(e.$t("upload-success-short")),1)]),(0,a._)("div",he,[me,(0,a._)("div",ge,[(0,a._)("p",be,(0,a.zw)(e.$t("extracted-data-intro"))+":",1),(0,a._)("div",ye,[(0,a._)("div",{id:"donation-container-"+n.id.toString(),class:"ul-data-container ul-data-condensed bg-white"},[(0,a._)("table",{id:"ul-result-"+n.id.toString(),class:"table table-sm"},[(0,a._)("thead",null,[(0,a._)("tr",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(Object.keys(r.blueprintData[n.id.toString()].extracted_data[0]),(e=>((0,a.wg)(),(0,a.iD)("th",{key:e},(0,a.zw)(e),1)))),128))])]),(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.blueprintData[n.id.toString()].extracted_data,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e,(e=>((0,a.wg)(),(0,a.iD)("td",{key:e},(0,a.zw)(e),1)))),128))])))),128))])],8,_e)],8,we),(0,a._)("div",{id:"expansion-control-"+n.id.toString(),class:"ul-data-expansion-control control-condensed"},[(0,a._)("a",{class:"text-decoration-none fw-bold",id:"collapse-toggle-"+n.id.toString(),onClick:e=>s.showHideData(n.id.toString())},[(0,a._)("span",{id:"donation-container-"+n.id.toString()+"-toggle-label"},(0,a.zw)(e.$t("show-extracted-data")),9,De)],8,ze)],8,ve)])])]),(0,a._)("div",xe,[Se,(0,a._)("div",ke,[(0,a._)("p",$e,(0,a.zw)(e.$t("donation-question")),1),(0,a._)("div",Ee,[(0,a._)("div",Me,[(0,a._)("label",{class:"form-check-label rb-cb-label",for:"donate-agree-"+n.id.toString()},[(0,a.wy)((0,a._)("input",{type:"radio",id:"donate-agree-"+n.id.toString(),value:"true","onUpdate:modelValue":e=>r.blueprintData[n.id.toString()].consent=e,onChange:t[4]||(t[4]=(...e)=>s.emitToParent&&s.emitToParent(...e)),required:""},null,40,Te),[[a.G2,r.blueprintData[n.id.toString()].consent]]),(0,a.Uk)(" "+(0,a.zw)(e.$t("donation-agree")),1)],8,Ie)]),(0,a._)("div",Oe,[(0,a._)("label",{class:"form-check-label rb-cb-label",for:"donate-disagree-"+n.id.toString()},[(0,a.wy)((0,a._)("input",{type:"radio",id:"donate-disagree-"+n.id.toString(),value:"false","onUpdate:modelValue":e=>r.blueprintData[n.id.toString()].consent=e,onChange:t[5]||(t[5]=(...e)=>s.emitToParent&&s.emitToParent(...e))},null,40,je),[[a.G2,r.blueprintData[n.id.toString()].consent]]),(0,a.Uk)(" "+(0,a.zw)(e.$t("donation-disagree")),1)],8,Ce)])])])])],64)):(0,a.kq)("",!0),"failed"===r.blueprintData[n.id.toString()].status?((0,a.wg)(),(0,a.iD)(a.HY,{key:2},[Ue,(0,a._)("div",He,(0,a.zw)(n.name),1),(0,a._)("div",Ae,[r.blueprintData[n.id.toString()].errors.length?((0,a.wg)(!0),(0,a.iD)(a.HY,{key:0},(0,a.Ko)(r.blueprintData[n.id.toString()].errors,(e=>((0,a.wg)(),(0,a.iD)("p",{key:e},(0,a.zw)(e),1)))),128)):((0,a.wg)(),(0,a.iD)("p",Ye,(0,a.zw)(e.$t("extraction-failed")),1))]),Fe,Pe],64)):(0,a.kq)("",!0)],2)))),128))])])])])}var Le=n(5733),Ne=n.n(Le);const Ze=e=>((0,a.dD)("data-v-39892445"),e=e(),(0,a.Cn)(),e),Be=["id"],Ke={class:"carousel-indicators"},Je=["data-bs-target","data-bs-slide-to","aria-label","aria-current"],Ve={class:"carousel-inner"},Ge=["innerHTML"],Re=["data-bs-target"],We=Ze((()=>(0,a._)("span",{class:"carousel-control-prev-icon","aria-hidden":"true"},null,-1))),Qe=Ze((()=>(0,a._)("span",{class:"visually-hidden"},"Previous",-1))),Xe=[We,Qe],et=["data-bs-target"],tt=Ze((()=>(0,a._)("span",{class:"carousel-control-next-icon","aria-hidden":"true"},null,-1))),nt=Ze((()=>(0,a._)("span",{class:"visually-hidden"},"Next",-1))),at=[tt,nt];function ot(e,t,n,o,r,s){return(0,a.wg)(),(0,a.iD)("div",{id:"carousel-"+n.componentId,class:"carousel carousel-dark slide","data-bs-interval":"false","data-bs-ride":"carousel"},[(0,a._)("div",Ke,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.instructions,((e,t)=>((0,a.wg)(),(0,a.iD)("button",{key:t,type:"button","data-bs-target":"#carousel-"+n.componentId,"data-bs-slide-to":t,"aria-label":"Step "+t,class:(0,a.C_)({active:0===t}),"aria-current":0===t},null,10,Je)))),128))]),(0,a._)("div",Ve,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.instructions,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{key:t,class:(0,a.C_)(["carousel-item",{active:0===t}]),innerHTML:e.text},null,10,Ge)))),128))]),(0,a._)("button",{class:"carousel-control-prev",type:"button","data-bs-target":"#carousel-"+n.componentId,"data-bs-slide":"prev"},Xe,8,Re),(0,a._)("button",{class:"carousel-control-next",type:"button","data-bs-target":"#carousel-"+n.componentId,"data-bs-slide":"next"},at,8,et)],8,Be)}var rt={name:"DonationInstructions",props:{instructions:Array,componentId:Number},data(){return{}},methods:{}},st=n(3744);const it=(0,st.Z)(rt,[["render",ot],["__scopeId","data-v-39892445"]]);var lt=it,dt=n(9669),ct=n.n(dt),ut=n(7460),pt=n.n(ut),ft={name:"ProcessFile",components:{DonationInstructions:lt},props:{expectsZip:Boolean,blueprints:Array,instructions:Array,componentId:Number,name:String,exceptionUrl:String},emits:["changedData"],data(){return{blueprintData:{},uploadStatus:"pending",uploadAttempts:0,generalErrors:[]}},created(){this.blueprints.forEach((e=>{let t=e.id,n={name_uploaded_file:null,consent:"",extracted_data:[],status:"pending",errors:[]};this.blueprintData[t.toString()]=n})),this.resetErrorLog(),this.emitToParent()},methods:{processFile(e){let t=this;t.uploadStatus="processing",t.uploadAttempts+=1,t.resetErrorLog();const n=e.target.files;if(t.expectsZip&&1===n.length)Ne().loadAsync(n[0]).then((e=>{t.blueprints.forEach((n=>{let a=new RegExp(n.regex_path),o=!1;e.file(a).forEach((e=>{o=!0,e.async("string").then((e=>t.processContent(e,n))).catch((e=>{t.postError(4199,e.message),t.recordError(t.$t("error-generic")+e.message,n.id.toString())}))})),o||(t.postError(4180,t.$t("error-regex-not-matched"),n.id),t.recordError(t.$t("error-regex-not-matched"),n.id.toString()))}))})).catch((e=>{let n="",a=0;e.message.includes("zip")&&e.message.includes("central")?(n=t.$t("error-not-zip"),a=4101):e.message.includes("Corrupted zip")?(n=t.$t("error-zip-corrupted"),a=4102):e.message.includes("Encrypted zip")?(n=t.$t("error-zip-encrypted"),a=4103):(n=t.$t("error-generic")+e.message,a=4198),t.postError(a,e.message),t.recordError(n,"general")}));else if(t.expectsZip||1!==n.length)t.postError(4104,t.$t("error-multiple-files","en")),t.recordError(t.$t("error-multiple-files"),"general");else{if("json"===t.blueprints[0].format&&!n[0].name.endsWith(".json")){let e=t.$t("error-wrong-file-type","en",{actualType:n[0].name.substr(n[0].name.lastIndexOf(".")),expectedType:".json"});t.postError(4105,e,t.blueprints[0].id),t.recordError(t.$t("error-wrong-file-type",{actualType:n[0].name.substr(n[0].name.lastIndexOf(".")),expectedType:".json"}),t.blueprints[0].id.toString())}if("csv"===t.blueprints[0].format&&!n[0].name.endsWith(".csv")){let e=t.$t("error-wrong-file-type","en",{actualType:n[0].name.substr(n[0].name.lastIndexOf(".")),expectedType:".csv"});t.postError(4105,e,t.blueprints[0].id),t.recordError(t.$t("error-wrong-file-type",{actualType:n[0].name.substr(n[0].name.lastIndexOf(".")),expectedType:".csv"}),t.blueprints[0].id.toString())}let e=new FileReader;e.onload=function(e){let n=e.target.result;try{t.processContent(n,t.blueprints[0])}catch(a){t.postError(4199,a.message,t.blueprints[0].id),t.recordError(t.$t("error-generic")+a.message,t.blueprints[0].id.toString())}},e.readAsText(n[0])}setTimeout((()=>{t.updateStatus(),t.emitToParent()}),1e3)},processContent(e,t){let n=this,a=t.id.toString(),o=null,r=[];if("json"===t.format)try{o=JSON.parse(e)}catch(s){n.postError(4106,s.message,t.id),n.recordError(n.$t("error-json-syntax"),n.blueprints[0].id.toString())}else if("csv"===t.format)try{let n=pt().parse(e,{header:!0,delimiter:t.csv_delimiter});o=n.data}catch(s){n.postError(4106,s.message,t.id),n.recordError(n.$t("error-json-syntax"),n.blueprints[0].id.toString())}if(o){let e=0,i=0;if(o.forEach((a=>{let o=[];if(t.f_expected.every((t=>!!Object.keys(a).includes(t)||(o.push(t),e+=1,!1)))){if(t.f_extract.every((e=>Object.keys(a).includes(e)))){let e={};try{for(let n in a){let o=t.filter_rules.filter((e=>e.field===n));o.length>0&&o.forEach((t=>{switch(t.comparison_operator){case null:e[n]=a[n];break;case"==":if(a[n]===t.comparison_value)throw`Field "${n}" matches filter value "${t.comparison_value}" for entry.`;e[n]=a[n];break;case"!=":if(a[n]!==t.comparison_value)throw`Field "${n}" matches filter value "${t.comparison_value}" for entry.`;e[n]=a[n];break;case"<=":if(!(a[n]>t.comparison_value))throw`Field "${n}" matches filter value "${t.comparison_value}" for entry.`;e[n]=a[n];break;case">=":if(!(a[n]<t.comparison_value))throw`Field "${n}" matches filter value "${t.comparison_value}" for entry.`;e[n]=a[n];break;case"<":if(!(a[n]>=t.comparison_value))throw`Field "${n}" matches filter value "${t.comparison_value}" for entry.`;e[n]=a[n];break;case">":if(!(a[n]<=t.comparison_value))throw`Field "${n}" matches filter value "${t.comparison_value}".`;e[n]=a[n];break;case"regex":n in a&&(e[n]=a[n].replaceAll(t.comparison_value,""));break;default:break}}))}r.push(e)}catch(s){i+=1,n.postError(4206,`${s}`,t.id)}}}else{let e=`Entry does not contain the expected field(s) "${o.toString()}".`;n.postError(4203,e,t.id)}})),n.blueprintData[a].extracted_data=r,e===o.length){let a=`No data extracted: Expected fields missing in ${e}/${o.length} entries.`;n.postError(4201,a,t.id),n.recordError(n.$t("error-all-expected-fields-missing"),t.id.toString())}else if(i===o.length){let e=`No data extracted: All entries (${i}/${o.length}) were filtered out.`;n.postError(4204,e,t.id),n.recordError(n.$t("error-all-fields-filtered-out"),t.id.toString())}else if(e+i===o.length){let a=`No data extracted: Expected fields missing in ${e}/${o.length} entries and ${i}/${o.length} filtered out.`;n.postError(4205,a,t.id),n.recordError(n.$t("error-all-fields-filtered-out"),t.id.toString())}}},emitToParent(){let e=JSON.parse(JSON.stringify(this.blueprintData));Object.keys(e).forEach((t=>{""===e[t].consent?(e[t].consent=null,e[t].extracted_data=[]):e[t].consent?e[t].consent=!0:e[t].extracted_data=[]})),this.$emit("changedData",e)},resetErrorLog(){this.generalErrors=[];for(let e in this.blueprintData)this.blueprintData[e].errors=[]},recordError(e,t){"general"==t?this.generalErrors.push(e):this.blueprintData[t].errors.push(e)},postError(e,t,n=null){let a={status_code:e,message:this.name+": "+t,raised_by:"client",blueprint:n};ct().post(this.exceptionUrl,a).catch((e=>console.error(`Could not post error message, ${e}`)))},updateStatus(){let e=0,t=Object.keys(this.blueprintData).length;for(let n in this.blueprintData)this.blueprintData[n].errors.length?(this.blueprintData[n].status="failed",e+=1):this.blueprintData[n].status="success";if(this.generalErrors.length||0!==e)if(!this.generalErrors.length&&e<t)this.uploadStatus="partial";else{this.uploadStatus="failed";for(let e in this.blueprintData)this.blueprintData[e].status="failed"}else this.uploadStatus="success"},showHideData(e){let t="donation-container-"+e,n=document.getElementById(t),a=document.getElementById(t.concat("-toggle-label")),o=document.getElementById("expansion-control-"+e),r="";n.classList.contains("ul-data-condensed")?(n.classList.replace("ul-data-condensed","ul-data-expanded"),o.classList.replace("control-condensed","control-expanded"),r=this.$t("hide-extracted-data")):(n.classList.replace("ul-data-expanded","ul-data-condensed"),o.classList.replace("control-expanded","control-condensed"),r=this.$t("show-extracted-data")),a.innerHTML=r}}};function ht(e){e.__i18n=e.__i18n||[],e.__i18n.push({locale:"",resource:{en:{instructions:e=>{const{normalize:t}=e;return t(["Instructions"])},"no-instructions-defined":e=>{const{normalize:t}=e;return t(["No instructions defined"])},"upload-file":e=>{const{normalize:t}=e;return t(["Upload File"])},"upload-different-file":e=>{const{normalize:t}=e;return t(["Upload a different file"])},"upload-success":e=>{const{normalize:t}=e;return t(["Upload was successful"])},"upload-failed":e=>{const{normalize:t}=e;return t(["Upload failed"])},"choose-different-file":e=>{const{normalize:t}=e;return t(["select a different file"])},"choose-file":e=>{const{normalize:t}=e;return t(["Select file"])},"file-is-being-uploaded":e=>{const{normalize:t}=e;return t(["file is being uploaded"])},"extracted-files":e=>{const{normalize:t}=e;return t(["Extracted files"])},"not-yet-extracted":e=>{const{normalize:t}=e;return t(["not yet extracted"])},"upload-success-short":e=>{const{normalize:t}=e;return t(["Successfully Uploaded"])},"upload-failed-short":e=>{const{normalize:t}=e;return t(["Upload Failed"])},"show-extracted-data":e=>{const{normalize:t}=e;return t(["Show more"])},"hide-extracted-data":e=>{const{normalize:t}=e;return t(["Show less"])},"donation-question":e=>{const{normalize:t}=e;return t(["Do you agree to donate and submit the data listed above?"])},"donation-agree":e=>{const{normalize:t}=e;return t(["Yes, I agree to submit these data"])},"donation-disagree":e=>{const{normalize:t}=e;return t(["No, I do not want to submit these data"])},"extracted-data-intro":e=>{const{normalize:t}=e;return t(["The following data have been extracted and will be transmitted to the researchers with your consent"])},file:e=>{const{normalize:t}=e;return t(["file"])},"error-multiple-files":e=>{const{normalize:t}=e;return t(["More than one file uploaded, but only one is expected."])},"error-not-zip":e=>{const{normalize:t}=e;return t(["A zip-file is expected but another file type was uploaded."])},"error-generic":e=>{const{normalize:t}=e;return t(["An error occurred: "])},"error-zip-corrupted":e=>{const{normalize:t}=e;return t(["The provided zip file is corrupted. Please download the zip file again from the original source and try again."])},"error-zip-encrypted":e=>{const{normalize:t}=e;return t(["The provided zip file is encrypted. Unfortunately, encrypted files are not supported."])},"error-all-expected-fields-missing":e=>{const{normalize:t}=e;return t(["Uploaded file does not contain all expected data fields."])},"error-regex-not-matched":e=>{const{normalize:t}=e;return t(["The provided zip container does not contain the matching file."])},"error-json-syntax":e=>{const{normalize:t}=e;return t(["The provided file contains a syntax error."])},"error-wrong-file-type":e=>{const{normalize:t,interpolate:n,named:a}=e;return t(["The provided file is of type '",n(a("actualType")),"' but '",n(a("expectedType")),"' is expected."])},"error-all-fields-filtered-out":e=>{const{normalize:t}=e;return t(["All entries were filtered out and deleted."])},"extraction-failed":e=>{const{normalize:t}=e;return t(["Information could not be extracted from uploaded file"])},"partial-upload-status":e=>{const{normalize:t}=e;return t(["Only partially uploaded"])},"partial-upload-message":e=>{const{normalize:t}=e;return t(["Zip file was successfully uploaded but only parts of the expected information were successfully extracted (see below)"])}},de:{instructions:e=>{const{normalize:t}=e;return t(["Instruktionen"])},"no-instructions-defined":e=>{const{normalize:t}=e;return t(["Es wurden keine Instruktionen definiert"])},"upload-file":e=>{const{normalize:t}=e;return t(["Datei hochladen"])},"upload-different-file":e=>{const{normalize:t}=e;return t(["Andere Datei hochladen"])},"upload-success":e=>{const{normalize:t}=e;return t(["Upload erfolgreich abgeschlossen"])},"upload-failed":e=>{const{normalize:t}=e;return t(["Etwas ging schief"])},"choose-different-file":e=>{const{normalize:t}=e;return t(["eine andere Datei auswählen"])},"choose-file":e=>{const{normalize:t}=e;return t(["Datei auswählen"])},"file-is-being-uploaded":e=>{const{normalize:t}=e;return t(["Datei wird hochgeladen"])},"extracted-files":e=>{const{normalize:t}=e;return t(["Ausgelesene Dateien"])},"not-yet-extracted":e=>{const{normalize:t}=e;return t(["noch nicht ausgelesen"])},"upload-success-short":e=>{const{normalize:t}=e;return t(["erfolgreich hochgeladen"])},"upload-failed-short":e=>{const{normalize:t}=e;return t(["Upload fehlgeschlagen"])},"show-extracted-data":e=>{const{normalize:t}=e;return t(["mehr anzeigen"])},"hide-extracted-data":e=>{const{normalize:t}=e;return t(["weniger anzeigen"])},"donation-question":e=>{const{normalize:t}=e;return t(["Sind Sie damit einverstanden, diese Daten zu spenden?"])},"donation-agree":e=>{const{normalize:t}=e;return t(["Ja, ich bin damit einverstanden, diese Daten zu spenden und an die Forschenden zu übermitteln."])},"donation-disagree":e=>{const{normalize:t}=e;return t(["Nein, ich möchte diese Daten nicht spenden."])},"extracted-data-intro":e=>{const{normalize:t}=e;return t(["Die folgenden Daten wurden ausgelesen und werden bei Ihrer Zustimmung an die Forschenden übermittelt"])},file:e=>{const{normalize:t}=e;return t(["Datei"])},"error-multiple-files":e=>{const{normalize:t}=e;return t(["Mehr als eine Datei hochgeladen, aber nur eine wird erwartet"])},"error-not-zip":e=>{const{normalize:t}=e;return t(["Es wird eine Zip-Datei erwartet, aber es wurde ein anderer Dateityp hochgeladen."])},"error-generic":e=>{const{normalize:t}=e;return t(["Es ist ein Fehler aufgetreten: "])},"error-zip-corrupted":e=>{const{normalize:t}=e;return t(["Die hochgeladene Zip-Datei scheint beschädigt zu sein. Bitte laden Sie die Zip-Datei erneut von der Originalquelle herunter und versuchen Sie, sie erneut hochzuladen."])},"error-zip-encrypted":e=>{const{normalize:t}=e;return t(["Die hochgeladene Zip-Datei ist password-geschützt. Leider werden verschlüsselte Dateien nicht unterstützt."])},"error-all-expected-fields-missing":e=>{const{normalize:t}=e;return t(["Die hochgeladene Datei enthält nicht alle erwarteten Datenfelder."])},"error-regex-not-matched":e=>{const{normalize:t}=e;return t(["Die entsprechende Datei ist nicht im hochgeladenen Zip-Container enthalten."])},"error-json-syntax":e=>{const{normalize:t}=e;return t(["Die json-Datei enthält einen Syntaxfehler."])},"error-wrong-file-type":e=>{const{normalize:t,interpolate:n,named:a}=e;return t(["Die ausgewählte Datei ist eine '",n(a("actualType")),"'-Datei; es wird aber eine '",n(a("expectedType")),"'-Datei erwartet."])},"error-all-fields-filtered-out":e=>{const{normalize:t}=e;return t(["Alle Einträge in der hochgeladenen Datei wurden herausgefiltert."])},"extraction-failed":e=>{const{normalize:t}=e;return t(["Es konnten nicht alle erwarteten Dateien ausgelesen werden."])},"partial-upload-status":e=>{const{normalize:t}=e;return t(["Nur teilweise hochgeladen"])},"partial-upload-message":e=>{const{normalize:t}=e;return t(["Der Zip-Container wurde erfolgreich hochgeladen, aber es wurde nur ein Teil der erwarteten Daten erfolgreich extrahiert (siehe unten)"])}}}})}"function"===typeof ht&&ht(ft);const mt=(0,st.Z)(ft,[["render",qe],["__scopeId","data-v-84a40a76"]]);var gt=mt,bt={name:"UApp",components:{FileUploader:gt},props:{uploadConfig:String,actionUrl:String,exceptionUrl:String,language:String},data(){return this.$i18n.locale=this.language,{parsedUploadConfig:JSON.parse(this.uploadConfig),postData:{},locale:this.language,donationStatus:0,infoModalMsg:"undefined"}},watch:{locale(e){this.$i18n.locale=e}},methods:{updatePostData(e){Object.keys(e).forEach((t=>{this.postData[t]=e[t]}))},getStatus(){let e=[],t=[],n=[];Object.keys(this.postData).forEach((a=>{switch(this.postData[a].status){case"success":e.push(this.postData[a]);break;case"failed":t.push(this.postData[a]);break;case"pending":n.push(this.postData[a])}})),e.length||t.length||!n.length?!e.length&&n.length&&t.length?this.donationStatus=2:e.length||n.length?e.length&&n.length?this.donationStatus=4:e.length&&!n.length&&t.length?this.donationStatus=5:!e.length||n.length||t.length||(this.donationStatus=6):this.donationStatus=3:this.donationStatus=1},consentValid(){let e=[];return Object.keys(this.postData).forEach((t=>{"pending"!==this.postData[t].status&&e.push(this.postData[t].consent)})),!0!==e.includes(null)||(this.$refs.processingModal.style.display="none",this.infoModalMsg=this.$t("consent-error-msg"),this.$refs.infoModal.style.display="block",!1)},cleanConsent(){Object.keys(this.postData).forEach((e=>{null==this.postData[e].consent&&(this.postData[e].consent=!1)}))},processData(e=!1){if(this.$refs.statusModal.style.display="none",this.$refs.processingModal.style.display="block",this.$refs.modalBackdrop.style.display="block",this.consentValid()){if(!e){if(this.getStatus(),1===this.donationStatus)return this.$refs.processingModal.style.display="none",this.$refs.statusModalMsg.innerHTML=this.$t("status-info-msg-none-attempted"),void(this.$refs.statusModal.style.display="block");if(2===this.donationStatus||4===this.donationStatus)return this.$refs.processingModal.style.display="none",this.$refs.statusModalMsg.innerHTML=this.$t("status-info-msg-not-all-attempted"),void(this.$refs.statusModal.style.display="block")}this.zipData()}},zipData(){this.cleanConsent();let e=document.querySelectorAll("input[type=file]");e.forEach((e=>{e.disabled=!0}));let t=new FormData(document.getElementById("uploader-form")),n=new(Ne());n.file("ul_data.json",JSON.stringify(this.postData)).generateAsync({type:"blob"}).then((e=>{t.append("post_data",e),fetch(this.actionUrl,{method:"POST",body:t}).then((e=>{e.redirected&&(window.location.href=e.url)})).catch((e=>{console.info(e)}))}))},closeInfoModal(){this.$refs.infoModal.style.display="none",this.$refs.modalBackdrop.style.display="none"},closeStatusModal(){this.$refs.statusModal.style.display="none",this.$refs.modalBackdrop.style.display="none"}}};function yt(e){e.__i18n=e.__i18n||[],e.__i18n.push({locale:"",resource:{en:{"data-submit-wait":e=>{const{normalize:t}=e;return t(["Just a moment, your data donation is being submitted"])},"next-btn-label":e=>{const{normalize:t}=e;return t(["Submit Data"])},"consent-error-msg":e=>{const{normalize:t}=e;return t(["You did not indicate for all uploads whether you consent to the donation of your data. Please go back and indicate whether you want to donate your data."])},"back-label":e=>{const{normalize:t}=e;return t(["back"])},"cancel-label":e=>{const{normalize:t}=e;return t(["Cancel"])},"continue-anyway-label":e=>{const{normalize:t}=e;return t(["Yes, continue anyway"])},"status-info-msg-not-all-attempted":e=>{const{normalize:t}=e;return t(["You have skipped some data uploads. Are you sure you want to continue?"])},"status-info-msg-none-attempted":e=>{const{normalize:t}=e;return t(["You have not uploaded any data. Are you sure you want to continue?"])}},de:{"data-submit-wait":e=>{const{normalize:t}=e;return t(["Einen Moment bitte, Ihre Datenspende wird gerade übermittelt"])},"next-btn-label":e=>{const{normalize:t}=e;return t(["Daten übermitteln"])},"consent-error-msg":e=>{const{normalize:t}=e;return t(["Sie haben nicht bei allen Uploads angegeben, ob Sie mit der Spende Ihrer Daten einverstanden sind. Bitte gehen Sie zurück und geben Sie an, ob Sie mit der Spende Ihrer Daten einverstanden sind."])},"back-label":e=>{const{normalize:t}=e;return t(["zurück"])},"continue-anyway-label":e=>{const{normalize:t}=e;return t(["Ja, trotzdem fortfahren"])},"cancel-label":e=>{const{normalize:t}=e;return t(["Abbrechen"])},"status-info-msg-not-all-attempted":e=>{const{normalize:t}=e;return t(["Sie haben einige Daten nicht hochgeladen. Sind Sie sicher, dass Sie fortfahren möchten?"])},"status-info-msg-none-attempted":e=>{const{normalize:t}=e;return t(["Sie haben keine Daten hochgeladen. Sind Sie sicher, dass Sie fortfahren möchten?"])}}}})}"function"===typeof yt&&yt(bt);const wt=(0,st.Z)(bt,[["render",_]]);var _t=wt,vt=n(9150);const zt=new vt.o({fallbackLocale:"en"}),Dt="#uapp",xt=document.querySelector(Dt),St=(0,a.ri)(_t,{...xt.dataset});St.use(zt),St.mount(Dt)}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={exports:{}};return e[a].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,r){if(!a){var s=1/0;for(c=0;c<e.length;c++){a=e[c][0],o=e[c][1],r=e[c][2];for(var i=!0,l=0;l<a.length;l++)(!1&r||s>=r)&&Object.keys(n.O).every((function(e){return n.O[e](a[l])}))?a.splice(l--,1):(i=!1,r<s&&(s=r));if(i){e.splice(c--,1);var d=o();void 0!==d&&(t=d)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[a,o,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={93:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,r,s=a[0],i=a[1],l=a[2],d=0;if(s.some((function(t){return 0!==e[t]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(l)var c=l(n)}for(t&&t(a);d<s.length;d++)r=s[d],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},a=self["webpackChunkvue_frontend"]=self["webpackChunkvue_frontend"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(7844)}));a=n.O(a)})();
//# sourceMappingURL=vue_uploader.js.map