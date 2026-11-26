const {JSDOM}=require('jsdom');const fs=require('fs');
let html=fs.readFileSync(require('path').join(__dirname,'..','index.html'),'utf8').replace('<script src="two.min.js"></script>','').replace('let db=null,room=null,gameRoom=null,G=null','var db=null,room=null,gameRoom=null,G=null').replace('let L=','var L=').replace('let MODE=null;','var MODE=null;').replace('let CODE=null;','var CODE=null;').replace('let ME=null;','var ME=null;');
const STORE={};let clock=1e12;
async function fakeFetch(u,o={}){await new Promise(r=>setTimeout(r,20));const m=u.match(/documents\/(.*?)\?(.*)$/);if(!m)return {ok:false,status:404,json:async()=>({})};const path=decodeURIComponent(m[1]),q=new URLSearchParams(m[2]);const meth=o.method||'GET';const R=(st,b)=>({ok:st<300,status:st,json:async()=>b});
 if(meth==='GET'){if(path==='jogadores'){return R(200,{documents:Object.keys(STORE).filter(k=>k.startsWith('jogadores/')).map(k=>({name:'x/'+k,fields:STORE[k].fields}))})}if(path==='albuns')return R(200,{documents:[]});const d=STORE[path];return d?R(200,d):R(404,{})}
 const pre=q.get('currentDocument.updateTime'),ex=q.get('currentDocument.exists');if(pre&&(!STORE[path]||STORE[path].updateTime!==pre))return R(400,{});if(ex==='false'&&STORE[path])return R(400,{});
 const ut=new Date(clock+=7).toISOString();STORE[path]={fields:JSON.parse(o.body).fields,updateTime:ut};return R(200,STORE[path])}
const mk=()=>new JSDOM(html,{runScripts:'dangerously',pretendToBeVisual:true,url:'https://x.test/',beforeParse(w){w.fetch=fakeFetch;w.scrollTo=()=>{}}}).window;
const sleep=ms=>new Promise(r=>setTimeout(r,ms));const tx=w=>w.document.querySelector('main').textContent.replace(/\s+/g,' ');
(async()=>{const errs=[];const mk=()=>new JSDOM(html,{runScripts:'dangerously',pretendToBeVisual:true,url:'https://x.test/',beforeParse(w){w.fetch=fakeFetch;w.scrollTo=()=>{};w.addEventListener('error',e=>errs.push(e.message+' @'+(e.error&&e.error.stack||'').split('\n').slice(0,4).join(' | ')))}}).window;
 const A=mk();await sleep(1200);const B=mk();await sleep(1200);A.setMe('miguel');B.setMe('clara');await sleep(300);
 const E=(w,x)=>w.eval(x);
 console.log('lisNow',JSON.stringify(E(A,'(()=>{const n=lisNow();return [n.hh,n.f(n.rise),n.f(n.set),todNow(n)]})()')));
 A.eval('openRoom()');await sleep(400);console.log('start BPM',E(A,'roomCoins()'),'canEdit',E(A,'canEdit()'));
 // give missions progress
 A.eval("profAdd('games')");B.eval("profAdd('games')");await sleep(2500);
 A.eval("profLoad('p1')");await sleep(800);
 console.log('after estreia both BPM:',E(A,'roomCoins()'),'discs',E(A,'discOwned().length'));
 // cheat: add music bpm to afford
 A.eval("(()=>{const q=roomQ();q.mus=3000;roomSave(q)})()");await sleep(1500);
 A.eval("roomTry('pet-gato');roomBuy('pet-gato')");B.eval("openRoom()");await sleep(200);B.eval("sqPull()");await sleep(1500);
 console.log('B sees BPM',E(B,'roomCoins()'),'gato',E(B,'roomQ().eq.pet'));
 // concurrent purchases
 A.eval("roomBuy('cm-laranja')");B.eval("roomBuy('l-onair')");await sleep(3500);A.eval('sqPull()');B.eval('sqPull()');await sleep(1500);
 console.log('A eq',E(A,'JSON.stringify([roomQ().eq.cama,roomQ().eq.luz,roomQ().spent])'),'B eq',E(B,'JSON.stringify([roomQ().eq.cama,roomQ().eq.luz,roomQ().spent])'));
 // play
 const k=E(A,'discOwned()[0]');A.eval(`discMove('${k}','p')`);await sleep(300);console.log('on',E(A,'roomQ().on'),'playbar',!!A.document.querySelector('.rplay.on'));
 A.eval('SND.on=true');E(A,'bpmTick()');console.log('tick mus',E(A,'roomQ().mus'));
 // render all tabs & cats
 for(const [c] of E(A,'RSLOT')){A.L.rCat=c;A.render()}for(const t of ['discos','ganhar']){A.L.rTab=t;A.render()}for(const s of ['loja','excl']){A.L.rTab='discos';A.L.rDsub=s;A.render()}
 for(const it of E(A,'RITEMS')){const s=E(A,`roomSvg(0,{eq:{${it.s}:'${it.id}'},tod:'noite'})`);if(!s.includes('</svg>'))console.log('bad',it.id)}
 const g=E(A,'roomSvg(0,{})');console.log('svg len',g.length,'NaN?',/NaN|undefined/.test(g));
 for(const it of E(A,'RITEMS')){const s=E(A,`roomSvg(0,{eq:{${it.s}:'${it.id}'}})`);if(/NaN|undefined/.test(s))console.log('NaN in',it.id)}
 const C=mk();await sleep(1200);C.eval("guestStart&&0");C.eval("PLAYERS['u-rita-x']={id:'u-rita-x',n:'Rita',e:'🦄',g:'a'};setMe('u-rita-x')");C.eval('openRoom()');await sleep(1500);console.log('guest edit?',E(C,'canEdit()'),/visita/.test(C.document.querySelector('main').textContent));
 console.log('errs',errs.slice(0,5));process.exit(0)})();
