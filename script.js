(function(){
"use strict";
/* ---------- state colors ---------- */
var MAS = {
  CP:{soft:"var(--cp-s)", deep:"#C93E28"},
  NP:{soft:"var(--np-s)", deep:"#B87300"},
  A:{soft:"var(--a-s)", deep:"#0F7A6E"},
  FC:{soft:"var(--fc-s)", deep:"#3B8A22"},
  AC:{soft:"var(--ac-s)", deep:"#6247C2"}
};

var QUESTIONS = [
"다른 사람을 헐뜯기 보다는 칭찬을 잘하는 편이다.",
"대화에서 격언이나 속담을 잘 인용한다.",
"“법없이도 살아갈 수 있는 사람”이라는 소리를 잘 듣는다.",
"행동이나 말이 자유스럽고 자연스럽다.",
"말이나 행동을 냉정하고 침착하게 하므로 안정된 분위기를 느낀다.",
"“내가 하라는 대로 하면 된다”는 식으로 말한다.",
"상냥하고 부드러우며 애정이 깃들어 있는 대화나 태도를 취한다.",
"TV나 영화 등을 보면서 마음이 약해 눈물을 잘 흘리는 편이다.",
"6하원칙에 따라서 사리를 따지거나 설명하는 편이다.",
"호기심이 강하고 기발한(창의적인) 착상을 잘 한다.",
"말을 할 때 상대방의 안색을 자주 살피게 된다.",
"직장 안팎에서 사회봉사활동에 참여하기를 좋아한다.",
"사회의 윤리, 도덕, 규칙 등을 중시하고 준수한다.",
"다른 사람으로부터 부탁을 받으면 거절하지 못한다.",
"태도나 자세가 바르며 여유가 있다.",
"자기자신을 제멋대로라고 생각한다.",
"다른 사람의 마음에 들고 싶다고 생각한다.",
"부모나 상사가 시키는 대로 한다.",
"타산적이며 이해득실을 생각하고 행동한다.",
"일을 능률적으로 잘 처리한다.",
"매사에 조심스럽고 소극적인 편이다.",
"대화에서 감정적으로 되지 않고 이성적으로 풀어간다.",
"상대방의 이야기를 잘 경청하고 공감하는 편이다.",
"책임감이 강하고 약속시간을 엄수한다.",
"부하나 아이의 실패에 대해 관대하고 격려한다.",
"의리와 인정에 끌려서 아이나 부하, 동료 등 누군가를 마음에 걸려한다.",
"신이 나면 도가 지나쳐서 실수를 저지른다.",
"아이나 부하를 엄격하게 다스린다.",
"생각하고 있는 바를 입 밖으로 내지 못하는 성질이다.",
"아이나 부하 또는 동료에게 신체적 접촉과 같은 스킨십을 잘하는 편이다.",
"상대의 말을 가로막고 자신의 생각을 말한다.",
"밝고 유머가 있으며 장난을 잘 치는 편이다.",
"어떤 일이나 사실에 근거해서 판단한다.",
"상대의 실수를 곧잘 지적하고 정정한다.",
"열등감이 심한 편이고 자신의 감정을 억누르는 편이다.",
"오락이나 술 등 음식물을 만족할 때까지 섭취한다.",
"미래의 일을 냉정하고 예리하게 예측하고 행동한다.",
"욕심나는 것을 손에 넣지 않고는 못배긴다.",
"자신의 생각을 관철하기 보다는 타협하는 경우가 많다.",
"동정심이나 배려심이 강하고 어린이나 타인을 돌봐주기를 좋아한다.",
"어떤 결정을 내릴 때 사실을 확인하거나 반대의견을 듣는다.",
"중얼중얼하는 목소리로 말하거나 우물쭈물 사양하는 편이다.",
"상대를 곧잘 바보 취급하거나 멸시한다.",
"기쁨이나 화를 내는 등 희노애락을 직접적으로 표현하고 뒤끝이 없다.",
"곤경에 처해 있는 사람을 위로하거나 북돋아 주기를 즐겨한다.",
"현상을 잘 관찰, 분석하고 합리적으로 의사결정을 한다.",
"“~해도 괜찮을까요?” “~할 생각이요” “이젠 됐어요” “어차피 ~를” 같은 말을 잘 쓴다.",
"“와~ 멋있다” “굉장하군!” “아하!” 등 감탄사를 자주 쓰며 농담을 잘 한다.",
"“당연히 ~해야 한다” “~하지 않으면 안 된다”는 식의 말투를 자주 쓴다.",
"권리를 주장하기 전에 의무를 다 한다."
];
var OPTS = [{v:3,l:"항상 그렇다"},{v:2,l:"자주 그렇다"},{v:1,l:"가끔 그렇다"},{v:0,l:"드물다"}];
var PER = 10, PAGES = 5, MAX = 30;

var STATES = [
 {key:"CP", name:"비판적 어버이", en:"Critical Parent", group:"P", c:"--cp",
  tagline:"규범과 책임을 지키고 이끄는 마음",
  core:"옳고 그름을 판단하고, 규칙과 이상을 지키며 타인을 지도해요.",
  say:["당연히 ~해야 한다","내가 하라는 대로 해"],
  high:["강한 책임감, 약속 엄수","원칙과 질서를 세운다","리더십, 추진력","윤리·도덕 의식"],
  over:["비판적, 지배적","완고하고 융통성 부족","타인의 실수를 용납 못 함","권위적인 명령조"],
  low:["너그럽지만 원칙이 약함","시간·약속에 느슨함","한계 설정·거절이 어려움","결정을 미루기 쉬움"],
  items:[2,6,13,24,28,31,34,43,49,50],
  doList:["작은 원칙 하나 정해 지키기","시간·마감 약속 지키기","필요할 때 ‘아니요’ 하기"],
  sayList:["이건 안 됩니다","○시까지 부탁해요"]},
 {key:"NP", name:"양육적 어버이", en:"Nurturing Parent", group:"P", c:"--np",
  tagline:"돌보고 감싸 주는 마음",
  core:"공감하고 보살피며, 상대를 지지하고 격려해요.",
  say:["괜찮아, 잘했어","내가 도와줄게"],
  high:["따뜻함, 공감 능력","타인을 수용하고 격려","배려와 봉사","편안한 관계 분위기"],
  over:["과보호, 참견","상대의 자율성을 막음","자기희생, 소진","부탁을 거절하지 못함"],
  low:["냉담·무관심해 보임","타인 감정에 둔감","관계가 사무적","칭찬·격려에 인색"],
  items:[1,7,12,14,23,25,26,30,40,45],
  doList:["하루 한 번 칭찬·감사 표현하기","상대의 감정을 먼저 알아주기"],
  sayList:["많이 힘들었겠다","고마워, 덕분이야"]},
 {key:"A", name:"어른", en:"Adult", group:"A", c:"--a",
  tagline:"지금-여기의 현실을 판단하는 마음",
  core:"사실을 모으고 분석해 합리적으로 판단해요. 감정과 규범을 조율하는 자리예요.",
  say:["근거가 뭘까?","구체적으로 확인해 보자"],
  high:["객관적, 사실 중심","문제해결 능력","계획적이고 능률적","감정에 휩쓸리지 않음"],
  over:["냉정하고 계산적","정서적 교류가 부족","지나친 분석으로 지체","차갑다는 인상"],
  low:["감정·기분으로 결정","현실 검토가 약함","계획 없이 즉흥적","같은 실수를 반복"],
  items:[5,9,15,19,20,22,33,37,41,46],
  doList:["결정 전에 사실 세 가지 적기","일정·지출 기록하기","육하원칙으로 말하기"],
  sayList:["근거가 뭘까?","장단점을 따져 보자"]},
 {key:"FC", name:"자유로운 어린이", en:"Free Child", group:"C", c:"--fc",
  tagline:"느끼고 즐기고 탐색하는 마음",
  core:"타고난 감정·욕구·호기심을 있는 그대로 표현해요.",
  say:["와, 멋지다!","이거 해 보고 싶어!"],
  high:["활력, 생동감","창의성, 호기심","유머와 놀이","솔직한 감정 표현"],
  over:["충동적, 절제 부족","자기중심적","신나면 도가 지나침","분위기를 못 읽음"],
  low:["위축되고 표정이 적음","즐길 줄 모름","감정을 억누름","생기가 부족해 보임"],
  items:[4,8,10,16,27,32,36,38,44,48],
  doList:["하루 10분 순수하게 즐기기","감정을 소리 내어 표현하기","몸을 움직이기"],
  sayList:["와, 좋다!","이거 재밌겠다"]},
 {key:"AC", name:"순응하는 어린이", en:"Adapted Child", group:"C", c:"--ac",
  tagline:"상대에게 맞추는 마음",
  core:"주변의 기대와 규칙에 맞추어 협조하고 순응해요. 때로는 반항으로 나타나기도 해요.",
  say:["~해도 괜찮을까요?","어차피 제가 뭘…"],
  high:["협조적, 온순함","인내심, 규칙 준수","타인을 존중","갈등을 피하고 조율"],
  over:["눈치 보기, 의존","자기주장을 못 함","열등감, 자기비하","쌓인 감정의 폭발·우울"],
  low:["독립적, 자기 페이스","타인 의견을 덜 들음","고집, 협조성 부족","제멋대로로 보일 수 있음"],
  items:[3,11,17,18,21,29,35,39,42,47],
  doList:["상대의 말을 끝까지 듣기","한 번은 먼저 양보하기","내 행동에 피드백 구하기"],
  sayList:["당신 생각은 어때요?","제가 놓친 게 있을까요?"]}
];
var EXTRA = {
 CP:{lead:"옳고 그름을 분명히 하고 맡은 일에 책임을 다하는 데 에너지를 많이 쓰는 편이에요",
     leadLow:"규칙을 세우거나 단호하게 선을 긋는 일은 상대적으로 덜 하는 편이에요",
     mid:"필요할 때는 원칙을 지키되 지나치게 엄격하지는 않은, 적당한 수준이에요",
     look:"믿음직하고 원칙이 분명한", kw:["책임감","원칙","리더십"],
     gain:"필요할 때 선을 긋고 나를 지키는 힘이 생겨요",
     rel:"약속과 기준을 중요하게 여겨 믿음직한 사람으로 보여요. 다만 상대에게도 같은 기준을 기대해서, 상대는 평가받는다고 느낄 수 있어요.",
     work:"목표와 규칙을 세우고 끝까지 책임지는 스타일이에요. 조별 과제나 모임에서 자연스럽게 이끄는 역할을 맡기 쉬워요.",
     stress:"통제하려는 마음이 커져 잔소리나 지적이 늘고, 스스로에게도 ‘더 잘했어야 해’라며 엄격해지기 쉬워요.",
     hard:"단호하게 거절하거나, 마감과 약속을 스스로 지켜야 할 때 어려움을 느끼기 쉬워요. 결정을 미루다 일이 쌓일 수 있어요."},
 NP:{lead:"주변 사람을 살피고 돌보며 따뜻하게 격려하는 데 에너지를 많이 쓰는 편이에요",
     leadLow:"다른 사람을 챙기고 감정을 보듬어 주는 표현은 상대적으로 덜 하는 편이에요",
     mid:"상대를 배려하면서도 지나치게 떠안지 않는, 적당한 수준이에요",
     look:"따뜻하고 배려 깊은", kw:["공감","배려","돌봄"],
     gain:"관계가 한결 부드럽고 따뜻해져요",
     rel:"상대의 감정을 먼저 알아채고 챙겨 주어, 주변에 기대려는 사람이 많아요. 다만 부탁을 거절하지 못해 혼자 짐을 떠안기 쉬워요.",
     work:"팀 분위기를 살피고 동료를 돕는 역할에서 빛나요. 함께하는 과제나 사람을 돕는 일에서 보람을 크게 느껴요.",
     stress:"내 일보다 남의 일을 먼저 챙기다 지치고, 도와준 만큼 알아주지 않으면 서운함이 쌓이기 쉬워요.",
     hard:"친구가 힘들어할 때 위로의 말을 찾거나, 칭찬과 감사를 표현하는 일이 어색하게 느껴질 수 있어요. 의도와 달리 차갑다는 인상을 줄 수 있어요."},
 A:{lead:"상황을 차분히 살피고 사실에 근거해 판단하는 데 에너지를 많이 쓰는 편이에요",
     leadLow:"한 걸음 물러나 사실을 확인하고 따져 보는 일은 상대적으로 덜 하는 편이에요",
     mid:"필요할 때 사실을 따져 보는 힘이 적당히 있는 수준이에요",
     look:"차분하고 합리적인", kw:["객관성","계획","문제해결"],
     gain:"감정과 규범 사이에서 균형 잡힌 결정을 내리기 쉬워져요",
     rel:"감정에 휩쓸리지 않고 현실적인 조언을 해 주어 고민 상담 상대로 신뢰받아요. 다만 공감보다 해결책이 먼저 나와 서운하게 할 수 있어요.",
     work:"계획을 세우고 정보를 정리해 효율적으로 처리하는 데 강해요. 시험 준비나 과제를 체계적으로 해내는 편이에요.",
     stress:"생각이 많아지고 분석만 거듭하다 행동이 늦어지거나, 감정을 꺼 두고 일만 하게 되기 쉬워요.",
     hard:"중요한 결정을 앞두고 정보를 정리하거나 계획을 세울 때 막막할 수 있어요. 기분에 따라 결정했다가 같은 실수를 반복하기 쉬워요."},
 FC:{lead:"느끼는 대로 표현하고 호기심을 따라 즐기는 데 에너지를 많이 쓰는 편이에요",
     leadLow:"하고 싶은 것을 솔직하게 드러내고 마음껏 즐기는 일은 상대적으로 덜 하는 편이에요",
     mid:"즐길 때는 즐기고 절제할 때는 절제하는, 적당한 수준이에요",
     look:"밝고 솔직한", kw:["활력","창의성","유머"],
     gain:"생활에 활력과 즐거움이 더해지고 표정이 밝아져요",
     rel:"밝고 솔직해서 금방 친해지고 분위기를 띄우는 역할을 해요. 다만 신이 나면 상대의 기분이나 상황을 놓칠 수 있어요.",
     work:"아이디어가 많고 흥미 있는 일에는 깊이 몰입해요. 반복적인 일이나 흥미 없는 과제는 미루기 쉬워요.",
     stress:"기분대로 행동하거나 먹기·놀기·쇼핑처럼 즉각적인 만족으로 스트레스를 풀려고 하기 쉬워요.",
     hard:"쉬거나 노는 시간에도 마음껏 즐기지 못하고, 감정을 드러내야 할 때 머뭇거릴 수 있어요. 주변에서 무표정하거나 지쳐 보인다고 할 수 있어요."},
 AC:{lead:"주변의 기대에 맞추고 협조하며 갈등을 피하는 데 에너지를 많이 쓰는 편이에요",
     leadLow:"다른 사람에게 맞추거나 눈치를 살피는 일은 상대적으로 덜 하는 편이에요",
     mid:"상대에게 맞출 때와 내 뜻을 지킬 때를 적당히 오가는 수준이에요",
     look:"성실하고 협조적인", kw:["협조","인내","배려"],
     gain:"다른 사람의 의견을 듣고 함께 맞춰 가는 여유가 생겨요",
     rel:"배려심이 깊고 갈등을 피하며 상대에게 잘 맞춰 줘요. 다만 하고 싶은 말을 참다 보니 속마음을 알기 어렵다는 말을 듣기도 해요.",
     work:"지시를 성실하게 따르고 규칙을 잘 지켜요. 혼자 판단해야 하는 상황에서는 ‘이래도 될까’ 망설이기 쉬워요.",
     stress:"참고 쌓아 두다가 우울해지거나 어느 순간 갑자기 폭발하기 쉽고, 문제를 ‘내 탓’으로 돌리기 쉬워요.",
     hard:"팀의 규칙에 맞추거나 다른 사람의 의견을 받아들여야 할 때 답답함을 느낄 수 있어요. 고집이 세다거나 제멋대로라는 오해를 받을 수 있어요."}
};
var LIFE = {
 "++":{t:"자기긍정 · 타인긍정",en:"I'm OK, You're OK",d:"‘나도 괜찮고 너도 괜찮다’는 태도에 가까워요. 자신을 솔직하게 표현하면서도 상대를 존중하는 자세로, 교류분석에서 가장 건강하다고 보는 생활자세예요. 지금의 균형을 유지하되, 지치거나 갈등이 생길 때 한쪽으로 기울지 않는지 살펴보세요."},
 "+-":{t:"자기긍정 · 타인부정",en:"I'm OK, You're not OK",d:"내 생각과 감정은 분명히 표현하지만, 상대에게는 엄격하거나 기대가 높은 편일 수 있어요. 일이 잘못되면 남의 탓을 먼저 떠올리기 쉬워요. 상대의 입장과 노력을 먼저 인정하는 말을 연습해 보세요."},
 "-+":{t:"자기부정 · 타인긍정",en:"I'm not OK, You're OK",d:"다른 사람은 잘 존중하고 챙기지만, 나 자신은 뒤로 미루거나 낮게 보는 경향이 있어요. 비교하며 위축되거나 ‘내가 부족해서’라고 생각하기 쉬워요. 다른 사람에게 주는 관심을 내 감정과 욕구에도 나눠 주세요."},
 "--":{t:"자기부정 · 타인부정",en:"I'm not OK, You're not OK",d:"나에게도 남에게도 만족하기 어려운 상태에 가까워요. 요즘 많이 지쳐 있다는 신호일 수 있어요. 혼자 버티기보다 믿을 수 있는 사람과 이야기를 나누거나, 학생상담센터 같은 도움을 활용해 보세요."}
};
var SHAPES = [
 {name:"역N형", sub:"균형형", t:[0,1,1,0.7,-1], desc:"NP·A·FC가 높고 AC가 낮아요. 따뜻하고 합리적이며 자발적인 모습이에요."},
 {name:"N형", sub:"헌신형", t:[-1,1,0,-1,1], desc:"NP·AC가 높고 CP·FC가 낮아요. 남을 먼저 챙기고 자기주장은 뒤로 미루는 편이에요."},
 {name:"M형", sub:"명랑형", t:[-1,1,-0.4,1,-1], desc:"NP·FC가 높아요. 정이 많고 표현이 풍부하지만 논리·원칙은 약할 수 있어요."},
 {name:"W형", sub:"고뇌형", t:[1,-1,1,-1,1], desc:"CP·A·AC가 높고 NP·FC가 낮아요. 완벽주의와 자기비판으로 긴장이 많은 편이에요."}
];

/* ---------- storage ---------- */
var KEY = "egogram.web.v1";
function load(){ try{ var s=localStorage.getItem(KEY); return s?JSON.parse(s):null; }catch(e){ return null; } }
function save(){ try{ localStorage.setItem(KEY, JSON.stringify(store)); }catch(e){} }
var store = load() || {};
if(!Array.isArray(store.answers) || store.answers.length !== 50) store.answers = new Array(50).fill(null);
if(!Array.isArray(store.history)) store.history = [];
if(!store.note || typeof store.note!=="object") store.note = {};
if(typeof store.page !== "number") store.page = 0;

/* ---------- helpers ---------- */
function $(id){ return document.getElementById(id); }
function cv(v){ return "var("+v+")"; }
function esc(s){ return String(s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c];}); }
function answered(){ return store.answers.filter(function(a){return a!==null;}).length; }
function scoreFrom(a){ return STATES.map(function(s){ return s.items.reduce(function(t,n){return t+(a[n-1]||0);},0); }); }
function ranks(sc){ return sc.map(function(v){ return 1+sc.filter(function(o){return o>v;}).length; }); }
function corr(a,b){var n=a.length,ma=0,mb=0,i;for(i=0;i<n;i++){ma+=a[i];mb+=b[i];}ma/=n;mb/=n;var num=0,da=0,db=0;for(i=0;i<n;i++){num+=(a[i]-ma)*(b[i]-mb);da+=(a[i]-ma)*(a[i]-ma);db+=(b[i]-mb)*(b[i]-mb);}return (da===0||db===0)?0:num/Math.sqrt(da*db);}
function josa(w,a,b){ var c=w.charCodeAt(w.length-1); if(c<0xAC00||c>0xD7A3) return w+b; return w+((c-0xAC00)%28?a:b); }
function shortName(s){ return {CP:"비판적",NP:"양육적",A:"어른",FC:"자유로운",AC:"순응하는"}[s.key]; }
function fmtDate(d){ var x=new Date(d); return x.getFullYear()+"."+String(x.getMonth()+1).padStart(2,"0")+"."+String(x.getDate()).padStart(2,"0"); }
var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
function smooth(){ return reduce ? "auto" : "smooth"; }
function ticks(arr, cls, color){ return "<ul class='ticks"+(cls?" "+cls:"")+"'"+(color?" style='--c:"+color+"'":"")+">"+arr.map(function(t){return "<li>"+esc(t)+"</li>";}).join("")+"</ul>"; }

var NS="http://www.w3.org/2000/svg";
function el(tag,attrs,parent,text){ var e=document.createElementNS(NS,tag); for(var k in attrs) e.setAttribute(k,attrs[k]); if(text!==undefined) e.textContent=text; if(parent) parent.appendChild(e); return e; }
function clear(svg){ while(svg.firstChild) svg.removeChild(svg.firstChild); }

/* ---------- views ---------- */
var VIEWS = {home:$("vHome"), test:$("vTest"), loading:$("vLoading"), manual:$("vManual"), result:$("vResult")};
function show(name){
  if(name!=="result") document.body.classList.remove("interp-mode");
  Object.keys(VIEWS).forEach(function(k){ VIEWS[k].hidden = k!==name; });
  $("gnb").hidden = name !== "home";
  $("hdrStart").hidden = name === "test" || name === "loading";
  $("hdrStart").textContent = name === "result" ? "처음으로" : "검사하기";
  $("hdrResult").hidden = !(name === "home" && store.history.length && answered() === 50);
  VIEWS[name].classList.remove("fade"); void VIEWS[name].offsetWidth; VIEWS[name].classList.add("fade");
  window.scrollTo({top:0});
}

/* ---------- bar art (hero + result) ---------- */
function drawBars(svg, vals, opts){
  opts = opts || {};
  var W=520, H=opts.h||380, base=H-(opts.labels?70:40), top=opts.labels?54:30, bw=64, gap=(W-5*bw)/6;
  svg.setAttribute("viewBox","0 0 "+W+" "+H);
  clear(svg);
  for(var g=0; g<=3; g++){
    var gy = base - (base-top)*g/3;
    el("line",{x1:10,x2:W-10,y1:gy,y2:gy,stroke:cv("--line"),"stroke-width":1,"stroke-dasharray":g?"4 6":""},svg);
  }
  var pts=[];
  vals.forEach(function(v,i){
    var x=gap+i*(bw+gap), h=Math.max(10,(base-top)*v/MAX), y=base-h;
    el("rect",{x:x,y:y,width:bw,height:h,rx:16,fill:cv(STATES[i].c)},svg);
    pts.push([x+bw/2,y]);
    if(opts.labels){
      el("text",{x:x+bw/2,y:y-14,"text-anchor":"middle","font-size":22,"font-weight":900,fill:cv("--ink")},svg,String(v));
      el("text",{x:x+bw/2,y:base+28,"text-anchor":"middle","font-size":17,"font-weight":900,fill:cv(STATES[i].c)},svg,STATES[i].key);
      el("text",{x:x+bw/2,y:base+50,"text-anchor":"middle","font-size":14,fill:cv("--ink-2")},svg,shortName(STATES[i]));
    }else{
      el("text",{x:x+bw/2,y:base+28,"text-anchor":"middle","font-size":17,"font-weight":900,fill:cv("--ink-2")},svg,STATES[i].key);
    }
  });
  el("polyline",{points:pts.map(function(p){return p.join(",");}).join(" "),fill:"none",stroke:cv("--ink"),"stroke-width":3,"stroke-linejoin":"round","stroke-linecap":"round",opacity:.85},svg);
  pts.forEach(function(p){ el("circle",{cx:p[0],cy:p[1],r:7,fill:"#fff",stroke:cv("--ink"),"stroke-width":3},svg); });
}

/* ---------- landing ---------- */
function buildHome(){
  drawBars($("heroArt"), [16,23,27,19,11]);
  var groups = [{g:"P",n:"어버이 자아",d:"부모에게서 배운 마음",idx:[0,1]},{g:"A",n:"어른 자아",d:"지금-여기의 판단",idx:[2]},{g:"C",n:"어린이 자아",d:"어린 시절의 감정·욕구",idx:[3,4]}];
  $("pacGroups").innerHTML = groups.map(function(gr){
    return "<div class='pg'><div class='pg-h'><b>"+gr.g+"</b>"+gr.n+" · "+gr.d+"</div><div class='pg-cards"+(gr.idx.length>1?" two":"")+"'>"+
      gr.idx.map(function(i){ var s=STATES[i];
        return "<div class='sc' style='--cs:"+MAS[s.key].soft+"'><div class='sc-top'><span class='key' style='background:"+cv(s.c)+"'>"+s.key+"</span><h3 style='color:"+MAS[s.key].deep+"'>"+s.name+"</h3><span class='en'>"+s.en+"</span></div>"+
          "<p>"+esc(s.core)+"</p><span class='quote'>“"+esc(s.say[0])+"”</span></div>";
      }).join("")+"</div></div>";
  }).join("");
  $("lbars").innerHTML = STATES.map(function(s){ return "<i style='background:"+cv(s.c)+"'></i>"; }).join("");
}
function refreshHome(){
  var n = answered(), note = $("resumeNote");
  if(n>0 && n<50){
    note.hidden=false;
    note.innerHTML = "진행 중인 검사가 있어요 ("+n+"/50). <button type='button' id='resetBtn'>처음부터 새로 하기</button>";
    $("startBtn").textContent = "이어서 검사하기";
    $("resetBtn").onclick = function(){ store.answers=new Array(50).fill(null); store.page=0; save(); refreshHome(); };
  }else if(n===50){
    note.hidden=false;
    note.innerHTML = "완료한 검사가 있어요. <button type='button' id='lastBtn'>내 결과 다시 보기</button>";
    $("startBtn").textContent = "새로 검사하기";
    $("lastBtn").onclick = function(){ openResult(scoreFrom(store.answers),"test",false); };
  }else{
    note.hidden=true;
    $("startBtn").textContent = "무료로 검사 시작하기";
  }
}

/* ---------- test ---------- */
function startTest(){
  if(answered()===50){ archive(); store.note={}; store.answers=new Array(50).fill(null); store.page=0; save(); }
  else{
    var f = store.answers.findIndex(function(a){return a===null;});
    store.page = f>=0 ? Math.floor(f/PER) : 0;
  }
  renderPage(); show("test");
}
function renderPage(){
  var p = store.page, start = p*PER;
  var html = "";
  for(var i=start;i<start+PER;i++){
    var a = store.answers[i];
    html += "<div class='q"+(a!==null?" done":"")+"' id='q"+i+"'><span class='q-no'>"+String(i+1).padStart(2,"0")+" / 50</span>"+
      "<p class='q-text' id='qt"+i+"'>"+esc(QUESTIONS[i])+"</p>"+
      "<div class='scale' role='radiogroup' aria-labelledby='qt"+i+"'>"+
      OPTS.map(function(o){ var on=a===o.v;
        return "<button type='button' class='opt' role='radio' data-i='"+i+"' data-v='"+o.v+"' aria-checked='"+on+"' tabindex='"+((a===null&&o.v===3)||on?0:-1)+"'><span class='dot'></span><span class='lb'>"+o.l+"</span></button>";
      }).join("")+"</div></div>";
  }
  $("qList").innerHTML = html;
  $("testIntro").hidden = p !== 0;
  $("prevBtn").disabled = p===0;
  $("pagerMsg").textContent = "";
  $("pdots").innerHTML = Array.from({length:PAGES},function(_,k){
    var full = store.answers.slice(k*PER,k*PER+PER).every(function(x){return x!==null;});
    return "<i class='"+(k===p?"on":full?"done":"")+"'></i>";
  }).join("");
  updateProgress();
}
function updateProgress(){
  var n=answered(), p=store.page;
  $("tbPage").textContent = (p+1)+" / "+PAGES;
  $("tbPct").textContent = Math.round(n/50*100)+"%";
  $("tbBar").style.width = (n/50*100)+"%";
  $("nextBtn").textContent = p===PAGES-1 ? "결과 보기" : "다음";
}
function pageMissing(){
  var out=[]; for(var i=store.page*PER;i<store.page*PER+PER;i++) if(store.answers[i]===null) out.push(i); return out;
}
$("qList").addEventListener("click", function(e){
  var b = e.target.closest(".opt"); if(!b) return;
  var i = Number(b.dataset.i), v = Number(b.dataset.v);
  store.answers[i] = v; save();
  var q = $("q"+i);
  q.classList.add("done"); q.classList.remove("flag");
  Array.prototype.forEach.call(q.querySelectorAll(".opt"), function(o){ var on=o===b; o.setAttribute("aria-checked",on); o.tabIndex=on?0:-1; });
  updateProgress();
  var miss = pageMissing();
  if(!miss.length) $("pagerMsg").textContent = "";
  setTimeout(function(){
    var next = miss.filter(function(k){return k>i;})[0];
    if(next===undefined) next = miss[0];
    if(VIEWS.test.hidden || !$("q"+i)) return;
    if(next!==undefined){
      var nq = $("q"+next); if(nq) nq.scrollIntoView({block:"center",behavior:smooth()});
    }else{
      $("nextBtn").scrollIntoView({block:"center",behavior:smooth()});
      $("nextBtn").focus({preventScroll:true});
    }
  }, 180);
});
$("qList").addEventListener("keydown", function(e){
  var b = e.target.closest(".opt"); if(!b) return;
  var sib = Array.prototype.slice.call(b.parentNode.children), k = sib.indexOf(b);
  if(e.key==="ArrowRight"||e.key==="ArrowDown"){ e.preventDefault(); sib[Math.min(3,k+1)].focus(); }
  if(e.key==="ArrowLeft"||e.key==="ArrowUp"){ e.preventDefault(); sib[Math.max(0,k-1)].focus(); }
});
$("prevBtn").onclick = function(){ if(store.page>0){ store.page--; save(); renderPage(); window.scrollTo({top:0}); } };
$("nextBtn").onclick = function(){
  var miss = pageMissing();
  if(miss.length){
    miss.forEach(function(k){ $("q"+k).classList.add("flag"); });
    $("pagerMsg").textContent = "아직 답하지 않은 문항이 "+miss.length+"개 있어요.";
    $("q"+miss[0]).scrollIntoView({block:"center",behavior:smooth()});
    return;
  }
  if(store.page < PAGES-1){ store.page++; save(); renderPage(); window.scrollTo({top:0}); }
  else{
    var all = store.answers.findIndex(function(a){return a===null;});
    if(all>=0){ store.page=Math.floor(all/PER); renderPage(); window.scrollTo({top:0}); return; }
    show("loading");
    setTimeout(function(){ openResult(scoreFrom(store.answers),"test",true); }, reduce?300:1500);
  }
};

/* ---------- result ---------- */
var current = {sc:null, source:"test"};
function pushHistory(sc){
  var last=store.history[store.history.length-1];
  if(last && last.s.join(",")===sc.join(",") && fmtDate(last.d)===fmtDate(Date.now())) return;
  store.history.push({d:Date.now(),s:sc}); if(store.history.length>6) store.history=store.history.slice(-6); save();
}
function archive(){ if(answered()===50) pushHistory(scoreFrom(store.answers)); }
function openResult(sc, source, record){
  current.sc=sc; current.source=source;
  var prev=null;
  for(var h=store.history.length-1;h>=0;h--){ if(store.history[h].s.join(",")!==sc.join(",")){ prev=store.history[h]; break; } }
  if(record) pushHistory(sc);
  document.body.classList.remove("interp-mode");
  show("result");
  renderResult(sc, prev);
  requestAnimationFrame(function(){ Array.prototype.forEach.call(document.querySelectorAll("#meters .track i"), function(i){ i.style.width=i.dataset.w; }); });
}

function drawChart(svg, sc, prev){
  var narrow = (svg.parentNode.clientWidth||600) < 520;
  var W=narrow?400:600,H=narrow?330:380,L=narrow?34:44,R=narrow?10:20,T=24,B=58,pw=W-L-R,ph=H-T-B,cw=pw/5;
  svg.setAttribute("viewBox","0 0 "+W+" "+H); clear(svg);
  function x(i){return L+cw*i+cw/2;} function y(v){return T+ph-(v/MAX)*ph;}
  for(var v=0;v<=MAX;v+=5){
    el("line",{x1:L,x2:L+pw,y1:y(v),y2:y(v),stroke:cv("--line"),"stroke-width":1},svg);
    el("text",{x:L-10,y:y(v)+4,"text-anchor":"end","font-size":12,fill:cv("--ink-3")},svg,String(v));
  }
  var mx=Math.max.apply(null,sc), mn=Math.min.apply(null,sc), flat=mx===mn;
  STATES.forEach(function(s,i){
    el("text",{x:x(i),y:H-B+26,"text-anchor":"middle","font-size":15,"font-weight":900,fill:cv(s.c)},svg,s.key);
    el("text",{x:x(i),y:H-B+45,"text-anchor":"middle","font-size":12,fill:cv("--ink-2")},svg,narrow?shortName(s):s.name);
  });
  if(prev){
    el("polyline",{points:prev.map(function(v,i){return x(i)+","+y(v);}).join(" "),fill:"none",stroke:cv("--ink-3"),"stroke-width":2,"stroke-dasharray":"6 6"},svg);
    prev.forEach(function(v,i){ el("circle",{cx:x(i),cy:y(v),r:4,fill:"#fff",stroke:cv("--ink-3"),"stroke-width":2},svg); });
  }
  // area
  var area = "M"+x(0)+","+y(0)+" "+sc.map(function(v,i){return "L"+x(i)+","+y(v);}).join(" ")+" L"+x(4)+","+y(0)+" Z";
  el("path",{d:area,fill:cv("--brand"),opacity:.08},svg);
  el("polyline",{points:sc.map(function(v,i){return x(i)+","+y(v);}).join(" "),fill:"none",stroke:cv("--ink"),"stroke-width":3,"stroke-linejoin":"round","stroke-linecap":"round"},svg);
  sc.forEach(function(v,i){
    if(!flat && (v===mx||v===mn)) el("circle",{cx:x(i),cy:y(v),r:17,fill:"none",stroke:cv("--brand"),"stroke-width":2.5},svg);
    el("circle",{cx:x(i),cy:y(v),r:7.5,fill:cv(STATES[i].c),stroke:"#fff","stroke-width":3},svg);
    var ty = y(v)-26 > T ? y(v)-26 : y(v)+36;
    el("text",{x:x(i),y:ty,"text-anchor":"middle","font-size":17,"font-weight":900,fill:cv("--ink")},svg,String(v));
  });
}
function drawMini(svg,t,best){
  var W=200,H=80,P=16; svg.setAttribute("viewBox","0 0 "+W+" "+H); clear(svg);
  function x(i){return P+i*(W-2*P)/4;} function y(v){return H-22-((v+1)/2)*(H-36);}
  el("line",{x1:P,x2:W-P,y1:H-22,y2:H-22,stroke:cv("--line"),"stroke-width":1},svg);
  el("polyline",{points:t.map(function(v,i){return x(i)+","+y(v);}).join(" "),fill:"none",stroke:best?cv("--brand"):cv("--ink-3"),"stroke-width":3,"stroke-linejoin":"round"},svg);
  t.forEach(function(v,i){
    el("circle",{cx:x(i),cy:y(v),r:4.5,fill:cv(STATES[i].c)},svg);
    el("text",{x:x(i),y:H-5,"text-anchor":"middle","font-size":11,"font-weight":700,fill:cv("--ink-3")},svg,STATES[i].key);
  });
}

function renderResult(sc, prev){
  var mx=Math.max.apply(null,sc), mn=Math.min.apply(null,sc), flat=mx===mn;
  var hi=[], lo=[]; sc.forEach(function(v,i){ if(v===mx) hi.push(i); if(v===mn) lo.push(i); });
  var mean=sc.reduce(function(a,b){return a+b;},0)/5, rk=ranks(sc), spread=mx-mn;
  var rs=SHAPES.map(function(s){return corr(sc,s.t);}), bi=0; rs.forEach(function(r,i){ if(r>rs[bi]) bi=i; });
  var best=SHAPES[bi], matched = spread>4 && rs[bi]>=0.6;

  // hero
  $("rEye").textContent = "나의 이고그램 결과 · " + fmtDate(Date.now()) + (current.source==="manual"?" · 점수 입력":"");
  if(spread<=4){
    $("rTitle").innerHTML = "평탄형<small>다섯 에너지를 고르게 쓰는 프로필</small>";
    $("rDesc").textContent = "다섯 점수의 차이가 "+spread+"점 이내예요. 특정 자아상태로 쏠리지 않았다는 뜻일 수도, 중간값 위주로 답한 결과일 수도 있어요.";
  }else if(matched){
    $("rTitle").innerHTML = esc(best.name)+" · "+esc(best.sub)+"<small>"+STATES[hi[0]].key+" "+josa(STATES[hi[0]].name,"이","가")+" 가장 강한 프로필</small>";
    $("rDesc").textContent = best.desc;
  }else{
    var hs=STATES[hi[0]];
    $("rTitle").innerHTML = hs.key+" 우세형<small>"+josa(hs.name,"이","가")+" 가장 강한 프로필</small>";
    $("rDesc").textContent = "대표 유형 중 뚜렷하게 들어맞는 모양은 없어요. 가장 높은 "+josa(hs.name,"은","는")+" "+hs.tagline+"이에요.";
  }
  $("rChips").innerHTML = flat ? "" :
    hi.map(function(i){ var s=STATES[i]; return "<span class='chip'><i style='background:"+cv(s.c)+"'>"+s.key+"</i>가장 높음 · "+sc[i]+"점</span>"; }).join("") +
    lo.map(function(i){ var s=STATES[i]; return "<span class='chip'><i style='background:"+cv(s.c)+"'>"+s.key+"</i>가장 낮음 · "+sc[i]+"점</span>"; }).join("");
  drawBars($("rArt"), sc, {labels:true, h:400});
  var topK = flat ? "A" : STATES[hi[0]].key, rh = document.querySelector(".r-hero");
  rh.style.setProperty("--tbg", flat ? "var(--hero)" : MAS[topK].soft);
  rh.style.setProperty("--tc", flat ? "var(--ink)" : MAS[topK].deep);

  // meters
  $("meters").innerHTML = STATES.map(function(s,i){
    var tag = flat ? "" : hi.indexOf(i)>=0 ? "<span class='tag hi'>가장 높음</span>" : lo.indexOf(i)>=0 ? "<span class='tag lo'>가장 낮음</span>" :
      (sc[i]-mean>=3 ? "<span class='tag mid'>높은 편</span>" : mean-sc[i]>=3 ? "<span class='tag mid'>낮은 편</span>" : "<span class='tag mid'>보통</span>");
    return "<div style='--ms:"+MAS[s.key].soft+"'><div class='meter-top'><div class='nm'><b style='color:"+MAS[s.key].deep+"'>"+s.key+" "+s.name+"</b><span>"+s.tagline+"</span></div>"+tag+
      "<span class='val tnum'>"+sc[i]+"<small> / 30</small></span></div>"+
      "<div class='track'><i data-w='"+(sc[i]/MAX*100)+"%' style='width:0;background:"+cv(s.c)+"'></i><span class='avg' style='left:"+(mean/MAX*100)+"%'></span></div></div>";
  }).join("") + "<p class='meters-note'>순위: "+STATES.map(function(s,i){return s.key+" "+rk[i]+"위";}).join(" · ")+" · 평균 "+mean.toFixed(1)+"점</p>";

  // chart
  drawChart($("chart"), sc, null);
  var leg = "<span><i></i>이번 검사</span><span><i class='ring'></i>가장 높은 곳·낮은 곳</span>";
  $("legend").innerHTML = leg;
  if(prev){
    $("prevWrap").hidden=false; $("prevLabel").textContent="이전 검사("+fmtDate(prev.d)+")와 겹쳐 보기"; $("prevChk").checked=false;
    $("prevChk").onchange=function(){ drawChart($("chart"),sc,this.checked?prev.s:null); $("legend").innerHTML = leg+(this.checked?"<span><i class='dash'></i>이전 검사</span>":""); };
  }else $("prevWrap").hidden=true;

  // types
  $("typeLead").textContent = spread<=4 ? "높낮이 차이가 작아 특정 유형으로 보기 어려워요. 참고로 네 가지 대표 유형과의 일치도를 보여 드려요."
    : matched ? "내 그래프는 "+best.name+" · "+best.sub+"과 가장 비슷해요 (일치도 "+Math.round(rs[bi]*100)+"%)."
    : "네 가지 대표 유형 중 뚜렷하게 들어맞는 것은 없어요. 그나마 가까운 것은 "+best.name+"이에요.";
  var tb=$("types"); tb.innerHTML="";
  SHAPES.forEach(function(s,i){
    var isB = i===bi && spread>4, pct=Math.round(Math.max(0,rs[i])*100);
    var d=document.createElement("div"); d.className="type"+(isB?" best":"");
    d.innerHTML=(isB?"<span class='best-tag'>나와 가장 비슷</span>":"")+"<h3>"+s.name+"<small>"+s.sub+"</small></h3><svg aria-hidden='true'></svg><p>"+s.desc+"</p><span class='m'>일치도 "+pct+"%</span><div class='mbar'><i style='width:"+pct+"%'></i></div>";
    tb.appendChild(d); drawMini(d.querySelector("svg"), s.t, isB);
  });

  // focus
  var fc=$("focus");
  if(flat){ fc.innerHTML="<div class='principle'><b>모든 점수가 같아요</b><span>가장 높은 곳과 낮은 곳을 정할 수 없어요. 아래 자아상태별 특징을 하나씩 살펴보세요.</span></div>"; }
  else{
    var h=STATES[hi[0]], l=STATES[lo[0]];
    fc.innerHTML =
      "<article class='fcard'><div class='fcard-top' style='--fs:"+MAS[h.key].soft+";--fc-c:"+MAS[h.key].deep+"'><div><span class='k'>강점 · 가장 높은 자아상태</span><h3>"+hi.map(function(i){return STATES[i].name;}).join(", ")+"</h3></div><span class='pts'>"+mx+"<small>점</small></span></div>"+
      "<div class='fcard-body'><p>"+esc(h.core)+"</p><div class='cols2'><div><h4>이럴 때 빛나요</h4>"+ticks(h.high,"",cv(h.c))+"</div><div><h4>지나치면 이렇게 보일 수 있어요</h4>"+ticks(h.over,"warn")+"</div></div>"+
      "<div class='saybox'><span style='font-size:13px;font-weight:500;color:var(--ink-3)'>자주 하는 말</span>“"+esc(h.say[0])+"” “"+esc(h.say[1])+"”</div></div></article>"+
      "<article class='fcard'><div class='fcard-top' style='--fs:"+MAS[l.key].soft+";--fc-c:"+MAS[l.key].deep+"'><div><span class='k'>성장 포인트 · 가장 낮은 자아상태</span><h3>"+lo.map(function(i){return STATES[i].name;}).join(", ")+"</h3></div><span class='pts'>"+mn+"<small>점</small></span></div>"+
      "<div class='fcard-body'><p>"+esc(l.core)+"</p><div><h4>낮을 때 나타나기 쉬운 모습</h4>"+ticks(l.low,"warn")+"</div>"+
      "<div><h4>이렇게 해 보세요</h4>"+ticks(l.doList,"",cv(l.c))+"</div>"+
      "<div class='saybox'><span style='font-size:13px;font-weight:500;color:var(--ink-3)'>이렇게 말해 보세요</span>"+l.sayList.map(function(t){return "“"+esc(t)+"”";}).join(" ")+"</div></div></article>";
  }

  // tabs
  var tabs=$("tabs");
  tabs.innerHTML = STATES.map(function(s,i){ return "<button class='tab' role='tab' type='button' id='tab"+i+"' aria-controls='tabpanel' aria-selected='false' data-i='"+i+"'>"+s.name+"</button>"; }).join("");
  function sel(i){
    Array.prototype.forEach.call(tabs.children,function(t,k){ t.setAttribute("aria-selected",k===i); t.tabIndex=k===i?0:-1; });
    var s=STATES[i];
    $("tabpanel").setAttribute("aria-labelledby","tab"+i);
    $("tabpanel").innerHTML = "<div class='tp-head'><h3 style='color:"+MAS[s.key].deep+"'>"+s.key+" "+s.name+"</h3><span>"+s.en+" · 내 점수 "+sc[i]+"점 ("+rk[i]+"위)</span></div>"+
      "<p>"+esc(s.core)+" 대표 말투는 <b>“"+esc(s.say[0])+"”</b>, <b>“"+esc(s.say[1])+"”</b>예요.</p>"+
      (function(){ var lv=lvlOf(sc[i],mean), ex=EXTRA[s.key];
        var t = lv==="hi" ? ["나에게는 높은 편이에요 ("+sc[i]+"점)", ex.lead+". 아래 ‘높을 때’와 ‘지나칠 때’를 함께 살펴보세요."]
              : lv==="lo" ? ["나에게는 낮은 편이에요 ("+sc[i]+"점)", ex.leadLow+". 아래 ‘낮을 때’의 모습이 익숙한지 확인해 보세요."]
              : ["나에게는 보통 수준이에요 ("+sc[i]+"점)", ex.mid+"."];
        return "<div class='lvl interp-only' style='--c:"+cv(s.c)+"'><b>"+t[0]+"</b><span>"+t[1]+"</span></div>"; })()+
      "<div class='tp-cols'><div class='tp-col'><h4>높을 때 · 강점</h4>"+ticks(s.high,"",cv(s.c))+"</div><div class='tp-col'><h4>지나칠 때 · 주의</h4>"+ticks(s.over,"warn")+"</div><div class='tp-col'><h4>낮을 때</h4>"+ticks(s.low,"warn")+"</div></div>"+
      "<p class='tp-items'>관련 문항: "+s.items.join(", ")+"</p>";
  }
  Array.prototype.forEach.call(tabs.children,function(t){ t.onclick=function(){ sel(Number(t.dataset.i)); }; });
  tabs.onkeydown=function(e){ var k=Number(e.target.dataset.i); if(isNaN(k)) return; if(e.key==="ArrowRight"){ sel((k+1)%5); tabs.children[(k+1)%5].focus(); } if(e.key==="ArrowLeft"){ sel((k+4)%5); tabs.children[(k+4)%5].focus(); } };
  sel(flat?0:hi[0]);

  renderInterp(sc, {hi:hi, lo:lo, mx:mx, mn:mn, flat:flat, mean:mean,
    typeLabel: spread<=4 ? "평탄형" : matched ? best.name+" · "+best.sub : STATES[hi[0]].key+" 우세형"});

  // interpreter note
  current.low = flat ? STATES[2] : STATES[lo[0]];
  if(store.note.sig !== sc.join(",")){ store.note = {sig:sc.join(",")}; save(); }
  renderNote();

  $("editBtn").hidden = current.source!=="test";
  $("copyBox").hidden=true; $("toast").textContent=""; $("retakeConfirm").hidden=true;
}
function lvlOf(v, mean){ return v-mean>=3 ? "hi" : mean-v>=3 ? "lo" : "mid"; }
function nm(i){ return STATES[i].key+"("+STATES[i].name+")"; }

function renderInterp(sc, info){
  var hi=info.hi, lo=info.lo, mx=info.mx, mn=info.mn, flat=info.flat, mean=info.mean;
  var CP=sc[0], NP=sc[1], A=sc[2], FC=sc[3], AC=sc[4];
  var sum = sc.reduce(function(a,b){return a+b;},0);
  var order = sc.map(function(v,i){return i;}).sort(function(a,b){return sc[b]-sc[a];});

  /* ---- 종합 해석 ---- */
  var ps = [];
  if(flat){
    ps.push("<p class='q1'>다섯 자아상태 점수가 모두 "+mx+"점으로 같아요.</p>");
    ps.push("<p>특정 마음으로 쏠리지 않은 고른 프로필이에요. 다만 문항에 비슷한 값으로 답했을 때도 이런 모양이 나와요. 최근 일주일을 떠올리며 다시 답해 보면 더 뚜렷한 모양을 볼 수 있어요.</p>");
  }else{
    var H=STATES[hi[0]], L=STATES[lo[0]];
    ps.push("<p class='q1'>당신은 <b>"+josa(H.name,"의","의")+" 에너지</b>를 가장 많이 쓰고, <b>"+josa(L.name,"의","의")+" 에너지</b>를 가장 적게 쓰고 있어요.</p>");
    ps.push("<p>"+H.name+"("+mx+"점)이 다섯 가지 중 가장 높아요. 평소 "+EXTRA[H.key].lead+". 반대로 "+L.name+"("+mn+"점)은 가장 낮아서, "+EXTRA[L.key].leadLow+".</p>");
    // balance sentence
    var bs=[];
    if(NP-CP>=4) bs.push("어버이 자아에서는 엄격함보다 따뜻함이 앞서고");
    else if(CP-NP>=4) bs.push("어버이 자아에서는 따뜻함보다 원칙과 기준이 앞서고");
    else bs.push("어버이 자아에서는 원칙과 따뜻함이 비교적 고르게 섞여 있고");
    if(FC-AC>=4) bs.push("어린이 자아에서는 맞추기보다 솔직하게 표현하는 쪽이 강해요");
    else if(AC-FC>=4) bs.push("어린이 자아에서는 표현하기보다 상대에게 맞추는 쪽이 강해요");
    else bs.push("어린이 자아에서는 표현하는 마음과 맞추는 마음이 비슷해요");
    var aTxt = A>=mx ? "어른 자아(A)가 가장 높아 감정과 규범 사이에서 중심을 잡아 주는 힘이 든든해요."
      : A-mean>=3 ? "어른 자아(A)도 평균보다 높아 상황을 현실적으로 판단하는 힘이 받쳐 주고 있어요."
      : mean-A>=3 ? "다만 어른 자아(A)가 평균보다 낮아, 감정이나 ‘해야 한다’는 생각이 판단을 앞지르기 쉬워요."
      : "어른 자아(A)는 평균 정도로, 필요할 때 사실을 따져 보는 힘이 있어요.";
    ps.push("<p>"+bs.join(", ")+". "+aTxt+"</p>");
    var t1=STATES[order[0]], t2=STATES[order[1]];
    ps.push("<p>그래서 다른 사람에게는 <b>"+EXTRA[t1.key].look+"</b> 사람, 또 <b>"+EXTRA[t2.key].look+"</b> 사람으로 보이기 쉬워요. 다만 "+H.name+"의 에너지가 지나치면 ‘"+H.over[0]+"’, ‘"+H.over[1]+"’ 같은 모습으로 비칠 수 있으니 상황에 따라 강약을 조절해 보세요.</p>");
    var tot = sum>=100 ? "전체 점수 합은 "+sum+"점(150점 만점)으로 높은 편이라, 다섯 에너지를 전반적으로 활발하게 쓰고 있어요. "
      : sum<=60 ? "전체 점수 합은 "+sum+"점(150점 만점)으로 낮은 편이에요. 요즘 지쳐 있거나 문항에 조심스럽게 답했을 수 있어요. "
      : "";
    if(mx-mn<=4) ps.push("<p>다만 가장 높은 점수와 낮은 점수의 차이가 "+(mx-mn)+"점밖에 되지 않아, 다섯 에너지를 비교적 고르게 쓰는 편이에요. 위의 경향은 ‘조금 더, 조금 덜’ 정도로 받아들이세요.</p>");
    ps.push("<p>"+tot+"성장의 열쇠는 가장 낮은 <b>"+L.name+"</b>에 있어요. 이 에너지를 조금씩 키우면 "+EXTRA[L.key].gain+". 높은 곳을 억지로 깎을 필요는 없어요.</p>");
  }
  $("storyText").innerHTML = ps.join("");
  var kws=[]; if(!flat){ EXTRA[STATES[order[0]].key].kw.forEach(function(k){kws.push(k);}); kws.push(EXTRA[STATES[order[1]].key].kw[0]); }
  $("storyKeys").innerHTML = (flat?"":"<h3>나를 나타내는 키워드</h3><div class='kw'>"+kws.map(function(k){return "<span>#"+k+"</span>";}).join("")+"</div>")+
    "<div class='kv'><span>가장 높은 자아상태</span><b>"+(flat?"—":hi.map(function(i){return STATES[i].key;}).join(", "))+"</b></div>"+
    "<div class='kv'><span>가장 낮은 자아상태</span><b>"+(flat?"—":lo.map(function(i){return STATES[i].key;}).join(", "))+"</b></div>"+
    "<div class='kv'><span>그래프 유형</span><b>"+info.typeLabel+"</b></div>"+
    "<div class='kv'><span>생활자세 경향</span><b>"+LIFE[lifeKey(sc)].t+"</b></div>"+
    "<div class='kv'><span>전체 점수 합</span><b>"+sum+" / 150</b></div>";

  /* ---- 균형 분석 ---- */
  function seesaw(li, ri){
    var l=sc[li], r=sc[ri], d=r-l, w=Math.min(50, Math.abs(d)/MAX*100);
    var fill = d>=0 ? "left:50%;width:"+w+"%;background:"+cv(STATES[ri].c) : "right:50%;width:"+w+"%;background:"+cv(STATES[li].c);
    return "<div class='seesaw'><span class='lab'><span class='sc-ic' style='width:30px;height:30px;border-radius:9px;font-size:11px;background:"+cv(STATES[li].c)+"'>"+STATES[li].key+"</span>"+l+"</span>"+
      "<span class='pole'><i style='"+fill+"'></i><span class='mid'></span></span>"+
      "<span class='lab'>"+r+"<span class='sc-ic' style='width:30px;height:30px;border-radius:9px;font-size:11px;background:"+cv(STATES[ri].c)+"'>"+STATES[ri].key+"</span></span></div>";
  }
  var pT, pD, cT, cD, aT, aD;
  if(NP-CP>=4){ pT="따뜻함이 엄격함보다 앞서요"; pD="상대를 수용하고 격려하는 쪽에 무게가 실려 있어요. 관계는 편안하지만, 필요한 순간에 선을 긋거나 바른 소리를 하는 일은 어려울 수 있어요."; }
  else if(CP-NP>=4){ pT="엄격함이 따뜻함보다 앞서요"; pD="기준을 세우고 바로잡는 쪽에 무게가 실려 있어요. 믿음직하지만 상대는 평가받는다고 느낄 수 있어요. 지적하기 전에 노력을 먼저 인정해 보세요."; }
  else { pT="엄격함과 따뜻함이 균형을 이뤄요"; pD="원칙을 지키면서도 상대를 배려하는 양쪽 에너지를 고르게 쓰고 있어요. 상황에 따라 어느 쪽을 꺼낼지 고르기 쉬운 상태예요."; }
  if(FC-AC>=4){ cT="표현하는 마음이 맞추는 마음보다 강해요"; cD="하고 싶은 것과 느끼는 것을 솔직하게 드러내는 편이에요. 활기차지만 주변의 기대나 분위기를 놓칠 때가 있을 수 있어요."; }
  else if(AC-FC>=4){ cT="맞추는 마음이 표현하는 마음보다 강해요"; cD="주변의 기대에 맞추느라 내 감정과 욕구를 뒤로 미루기 쉬워요. 참은 감정이 쌓이지 않도록 작은 것부터 표현해 보세요."; }
  else { cT="표현과 순응이 균형을 이뤄요"; cD="내 감정을 드러낼 때와 상대에게 맞출 때를 적절히 오가고 있어요."; }
  var others=(CP+NP+FC+AC)/4;
  if(A>=mx && !flat){ aT="어른 자아가 중심을 잡고 있어요"; aD="A가 가장 높아 감정(C)과 규범(P) 사이에서 현실적으로 조율하는 힘이 있어요. 다만 지나치면 계산적이거나 차갑게 보일 수 있으니 감정 표현도 함께 챙겨 보세요."; }
  else if(A-others>=3){ aT="어른 자아가 든든하게 받쳐 줘요"; aD="A가 다른 자아상태의 평균보다 높아, 감정이나 규범에 휩쓸리기 전에 한 번 따져 보는 힘이 있어요."; }
  else if(others-A>=3){ aT="어른 자아가 상대적으로 약해요"; aD="A가 다른 자아상태의 평균보다 낮아, 기분이나 ‘해야 한다’는 생각이 판단을 앞지르기 쉬워요. 결정 전에 사실을 세 가지 적어 보는 연습이 도움이 돼요."; }
  else { aT="어른 자아가 평균 수준이에요"; aD="A가 다른 자아상태들과 비슷한 수준이에요. 중요한 결정 앞에서는 의식적으로 사실과 근거를 확인해 보세요."; }
  $("bal").innerHTML =
    "<div class='bcard'><span class='k'>어버이 자아 (P) · CP ↔ NP</span><h3>"+pT+"</h3>"+seesaw(0,1)+"<p>"+pD+"</p></div>"+
    "<div class='bcard'><span class='k'>어린이 자아 (C) · FC ↔ AC</span><h3>"+cT+"</h3>"+seesaw(4,3)+"<p>"+cD+"</p></div>"+
    "<div class='bcard'><span class='k'>어른 자아 (A) · 나머지 평균과 비교</span><h3>"+aT+"</h3>"+
      "<div class='seesaw'><span class='lab'><em>평균</em>"+others.toFixed(1)+"</span><span class='pole'><i style='"+(A>=others?"left:50%;width:"+Math.min(50,(A-others)/MAX*100)+"%":"right:50%;width:"+Math.min(50,(others-A)/MAX*100)+"%")+";background:"+cv("--a")+"'></i><span class='mid'></span></span><span class='lab'>"+A+"<span class='sc-ic' style='width:30px;height:30px;border-radius:9px;font-size:11px;background:"+cv("--a")+"'>A</span></span></div>"+
      "<p>"+aD+"</p></div>";

  /* ---- 눈에 띄는 조합 ---- */
  function H_(i){ return sc[i]-mean>=3 || (order[0]===i && mx-mn>=6); }
  function L_(i){ return mean-sc[i]>=3 || (order[4]===i && mx-mn>=6); }
  var combos=[];
  if(H_(0)&&L_(1)) combos.push([[0,1],"엄격한 기준, 아끼는 칭찬","기준이 높고 칭찬에 인색해 보일 수 있어요. 결과보다 노력과 과정을 인정하는 말을 의식적으로 늘려 보세요."]);
  if(H_(1)&&L_(0)) combos.push([[1,0],"따뜻하지만 경계가 약함","잘 품어 주지만 거절과 한계 설정이 어려워 손해를 보거나 지치기 쉬워요. ‘여기까지는 어렵다’는 말을 연습해 보세요."]);
  if(H_(1)&&H_(4)&&L_(3)) combos.push([[1,4],"헌신형 패턴","남을 먼저 챙기고 맞추느라 나의 욕구와 즐거움은 뒤로 미루기 쉬워요. 나를 위한 시간을 일정에 먼저 넣어 보세요."]);
  if(H_(0)&&H_(4)) combos.push([[0,4],"나에게도 엄격한 완벽주의","‘해야 한다’는 기준과 ‘잘 보여야 한다’는 마음이 함께 높아 자기비판과 긴장이 커지기 쉬워요. 80점이면 충분한 일을 골라 보세요."]);
  if(H_(2)&&L_(3)) combos.push([[2,3],"이성은 앞서고 즐거움은 뒤로","차분하고 합리적이지만 감정 표현과 놀이가 부족해 보일 수 있어요. 하루 10분, 목적 없이 즐기는 시간을 가져 보세요."]);
  if(H_(3)&&L_(2)) combos.push([[3,2],"에너지는 넘치고 계획은 약함","활기차고 창의적이지만 즉흥적으로 움직여 마무리가 약할 수 있어요. 시작 전에 ‘언제까지, 무엇을’만 적어 보세요."]);
  if(H_(4)&&L_(3)) combos.push([[4,3],"감정을 눌러 두는 경향","맞추는 마음이 강하고 표현은 약해 감정이 쌓이기 쉬워요. 작은 불편함부터 ‘나는 ~해서 불편했어’라고 말해 보세요."]);
  if(H_(3)&&L_(4)) combos.push([[3,4],"자유롭고 자기 페이스가 강함","솔직하고 독립적이지만 협조가 필요한 자리에서 고집스럽게 보일 수 있어요. 결정 전에 ‘너는 어떻게 생각해?’를 먼저 물어 보세요."]);
  if(H_(0)&&L_(2)) combos.push([[0,2],"사실보다 ‘해야 한다’가 먼저","규범이 판단을 앞질러 상황을 충분히 확인하기 전에 결론을 내리기 쉬워요. ‘정말 그런가?’ 한 번 더 확인해 보세요."]);
  $("combos").innerHTML = combos.length ? "<h3 style='font-size:18px;font-weight:900;margin:8px 0 2px'>눈에 띄는 점수 조합</h3>"+combos.slice(0,4).map(function(c){
    return "<div class='combo'><span class='pair'>"+c[0].map(function(i){return "<i style='background:"+cv(STATES[i].c)+"'>"+STATES[i].key+"</i>";}).join("")+"</span><div><b>"+c[1]+"</b><span>"+c[2]+"</span></div></div>";
  }).join("") : "";

  /* ---- 생활자세 ---- */
  var key=lifeKey(sc), lf=LIFE[key], sx=FC-AC, sy=NP-CP;
  drawLife($("lifePlot"), sx, sy);
  $("lifeText").innerHTML = "<span class='tagline'>나의 생활자세 경향</span><h3>"+lf.t+"<small>"+lf.en+"</small></h3><p>"+lf.d+"</p>"+
    "<div class='life-axes'><div>자신을 대하는 태도<b>"+axisWord(sx)+" ("+(sx>0?"+":"")+sx+")</b><span class='small-note'>FC "+FC+" − AC "+AC+"</span></div>"+
    "<div>타인을 대하는 태도<b>"+axisWord(sy)+" ("+(sy>0?"+":"")+sy+")</b><span class='small-note'>NP "+NP+" − CP "+CP+"</span></div></div>"+
    ((Math.abs(sx)<=2||Math.abs(sy)<=2) ? "<p>차이가 ±2점 이내인 축은 어느 한쪽으로 기울지 않은 균형 상태로 보고 ‘긍정’ 쪽에 넣었어요.</p>" : "")+
    "<p class='small-note'>이 해석은 경향을 보는 참고 자료이며, 상황에 따라 생활자세는 달라질 수 있어요.</p>";

  /* ---- 상황별 ---- */
  if(flat){ $("situ").innerHTML = "<div class='scard'><p>점수가 모두 같아 상황별 경향을 뽑기 어려워요.</p></div>"; }
  else{
    var h=EXTRA[STATES[hi[0]].key], l=EXTRA[STATES[lo[0]].key];
    $("situ").innerHTML =
      "<div class='scard'><span class='ic' aria-hidden='true'>👥</span><h3>사람들과 있을 때</h3><p>"+h.rel+"</p></div>"+
      "<div class='scard'><span class='ic' aria-hidden='true'>📚</span><h3>공부하거나 일할 때</h3><p>"+h.work+"</p></div>"+
      "<div class='scard'><span class='ic' aria-hidden='true'>🌧️</span><h3>스트레스를 받을 때</h3><p>"+h.stress+"</p></div>"+
      "<div class='scard'><span class='ic' aria-hidden='true'>🧭</span><h3>어려울 수 있는 상황</h3><p>"+l.hard+"</p></div>";
  }

  /* ---- 더 생각해 보기 ---- */
  var parts=[];
  if(H_(0)) parts.push(["CP가 높다면 · ‘관리자’ 부분","실수와 비난을 막으려고 미리 통제하고 다그치는 부분일 수 있어요. 이 부분은 무엇이 잘못될까 봐 걱정하고 있을까요?"]);
  if(H_(4)) parts.push(["AC가 높다면 · ‘순응하는 보호자’","거절당하지 않으려 상대에게 맞추는 부분일 수 있어요. 그 아래에서 상처받지 않으려 애쓰는 마음은 무엇일까요?"]);
  if(H_(3)) parts.push(["FC가 높다면 · ‘소방관’이 될 때","즐거움이 충동적으로 커질 때는 올라온 불편함을 빨리 끄려는 시도일 수 있어요. 무엇을 잊고 싶었는지 살펴보세요."]);
  if(!parts.length) parts.push(["높은 자아상태를 ‘부분’으로 보기","가장 높은 자아상태는 오랫동안 나를 지켜 온 방식이에요. “이 부분은 무엇을 걱정하고 있을까?”라고 호기심을 갖고 물어보면, 낮은 자아상태가 쓰일 공간이 생겨요."]);
  $("parts").innerHTML = parts.map(function(p){return "<div class='part'><b>"+p[0]+"</b><span>"+p[1]+"</span></div>";}).join("")+
    "<p class='small-note'>※ 내면가족체계(IFS)의 ‘부분(parts)’ 관점을 빌린 해석이에요. A는 IFS의 Self와 같지 않아요. A는 정보처리 기능, Self는 부분들과 관계 맺는 중심이에요.</p>";
  var qs = flat ? ["최근 일주일 동안 가장 자주 쓴 자아상태는 무엇이었나요?","가까운 사람은 내 그래프를 어떻게 그릴까요?","다시 검사한다면 어떤 장면을 떠올리며 답하고 싶나요?"]
    : ["‘"+STATES[hi[0]].name+"’의 에너지가 나를 도와준 순간과, 오히려 부담이 됐던 순간을 하나씩 떠올려 보세요.",
       "최근 일주일 동안 ‘"+STATES[lo[0]].name+"’의 에너지를 써 본 순간이 있었나요? 그때 기분은 어땠나요?",
       "이 그래프는 언제부터 이런 모양이었을까요? 가족이나 학교에서 어떤 마음이 칭찬받고, 어떤 마음이 눈치 보였는지 떠올려 보세요.",
       "가까운 친구나 가족이 나를 평가한다면 그래프가 어떻게 달라질까요? 직접 물어봐도 좋아요."];
  $("reflect").innerHTML = qs.map(function(q){return "<li>"+esc(q)+"</li>";}).join("");
}
function axisWord(d){ return d>=3 ? "긍정" : d<=-3 ? "부정" : "균형"; }
function lifeKey(sc){ return ((sc[3]-sc[4])>=-2?"+":"-")+((sc[1]-sc[0])>=-2?"+":"-"); }
function drawLife(svg, sx, sy){
  var S=360, P=40, c=S/2, R=c-P;
  svg.setAttribute("viewBox","0 0 "+S+" "+S); clear(svg);
  var q=[["++",c,P,"자기긍정·타인긍정"],["-+",P,P,"자기부정·타인긍정"],["+-",c,c,"자기긍정·타인부정"],["--",P,c,"자기부정·타인부정"]];
  var mine=(sx>=-2?"+":"-")+(sy>=-2?"+":"-");
  q.forEach(function(z){
    el("rect",{x:z[1],y:z[2],width:R,height:R,fill:z[0]===mine?cv("--brand-soft"):cv("--bg-soft"),stroke:"#fff","stroke-width":3,rx:12},svg);
    el("text",{x:z[1]+R/2,y:z[2]+(z[2]===P?22:R-12),"text-anchor":"middle","font-size":12,"font-weight":z[0]===mine?900:500,fill:z[0]===mine?cv("--ink"):cv("--ink-3")},svg,z[3]);
  });
  el("line",{x1:P,x2:S-P,y1:c,y2:c,stroke:cv("--ink-3"),"stroke-width":1.2},svg);
  el("line",{x1:c,x2:c,y1:P,y2:S-P,stroke:cv("--ink-3"),"stroke-width":1.2},svg);
  el("text",{x:S-P,y:c-6,"text-anchor":"end","font-size":11,fill:cv("--ink-2")},svg,"자기긍정 →");
  el("text",{x:P,y:c-6,"text-anchor":"start","font-size":11,fill:cv("--ink-2")},svg,"← 자기부정");
  el("text",{x:c+6,y:P-10,"font-size":11,fill:cv("--ink-2")},svg,"↑ 타인긍정");
  el("text",{x:c+6,y:S-P+20,"font-size":11,fill:cv("--ink-2")},svg,"↓ 타인부정");
  var lim=15, px=c+Math.max(-lim,Math.min(lim,sx))/lim*(R-14), py=c-Math.max(-lim,Math.min(lim,sy))/lim*(R-14);
  el("circle",{cx:px,cy:py,r:16,fill:cv("--brand"),opacity:.2},svg);
  el("circle",{cx:px,cy:py,r:8,fill:cv("--brand"),stroke:"#fff","stroke-width":3},svg);
  el("text",{x:px,y:py-20,"text-anchor":"middle","font-size":13,"font-weight":900,fill:cv("--ink")},svg,"나");
}

/* ---------- interpreter note ---------- */
var NOTE_FIELDS = [
 {k:"sum", l:"종합 해석", ph:"그래프 모양과 가장 높은·낮은 자아상태를 보고, 응답자와 나눈 이야기를 바탕으로 적어 주세요."},
 {k:"str", l:"강점", ph:"응답자가 잘 쓰고 있는 에너지와 그게 드러나는 모습"},
 {k:"grow", l:"성장 포인트", ph:"조금 더 키워 보면 좋을 에너지"},
 {k:"act", l:"이번 주 실천 제안", ph:"함께 정한 행동이나 말 한 가지", sugg:true}
];
function isInterp(){ return document.body.classList.contains("interp-mode"); }
function setMode(on){
  document.body.classList.toggle("interp-mode", !!on);
  if(current.sc) renderNote();
}
function renderNote(){
  var n = store.note || {}, box = $("note");
  if(isInterp()){
    box.innerHTML = "<div class='nfield'><label for='n_who'>해석자</label><input id='n_who' data-k='who' type='text' autocomplete='off' placeholder='이름 (선택)' value='"+esc(n.who||"")+"'></div>"+
      NOTE_FIELDS.map(function(f){
        var sg = "";
        if(f.sugg && current.low){
          var ls = current.low;
          sg = "<span class='hint'>참고 예시 ("+ls.key+" "+ls.name+") · 누르면 덧붙여져요</span><div class='sugg'>"+
            ls.doList.concat(ls.sayList.map(function(t){return "“"+t+"”";})).map(function(t){return "<button type='button' data-add='"+esc(t)+"'>"+esc(t)+"</button>";}).join("")+"</div>";
        }
        return "<div class='nfield'><label for='n_"+f.k+"'>"+f.l+"</label><textarea id='n_"+f.k+"' data-k='"+f.k+"' placeholder='"+esc(f.ph)+"'>"+esc(n[f.k]||"")+"</textarea>"+sg+"</div>";
      }).join("");
    Array.prototype.forEach.call(box.querySelectorAll("[data-k]"), function(inp){
      inp.addEventListener("input", function(){ store.note[inp.dataset.k] = inp.value; save(); });
    });
    Array.prototype.forEach.call(box.querySelectorAll("[data-add]"), function(b){
      b.onclick = function(){ var ta=$("n_act"); ta.value = (ta.value.trim() ? ta.value.replace(/\s+$/,"")+"\n" : "") + b.dataset.add; store.note.act = ta.value; save(); ta.focus(); };
    });
  }else{
    var filled = NOTE_FIELDS.filter(function(f){ return (n[f.k]||"").trim(); });
    box.innerHTML = filled.length
      ? (n.who && n.who.trim() ? "<p class='note-by'>해석자 · "+esc(n.who.trim())+"</p>" : "") +
        filled.map(function(f){ return "<div class='nfield'><b>"+f.l+"</b><p>"+esc(n[f.k].trim())+"</p></div>"; }).join("")
      : "<div class='note-empty'>아직 적힌 해석이 없어요.<br>이 화면을 해석자에게 보여 주고 함께 이야기해 보세요.</div>";
  }
}

function resultText(){
  var sc=current.sc, rk=ranks(sc), out=["[나의 이고그램 결과] "+fmtDate(Date.now())];
  STATES.forEach(function(s,i){ out.push(s.key+" "+s.name+": "+sc[i]+"점 ("+rk[i]+"위)"); });
  var n=store.note||{};
  if((n.who||"").trim()) out.push("\n해석자: "+n.who.trim());
  NOTE_FIELDS.forEach(function(f){ if((n[f.k]||"").trim()) out.push("\n["+f.l+"]\n"+n[f.k].trim()); });
  return out.join("\n");
}

/* ---------- manual ---------- */
$("manualRows").innerHTML = STATES.map(function(s){
  return "<div class='mrow'><label for='m"+s.key+"'>"+s.key+" "+s.name+"<small>문항 "+s.items.join(", ")+"</small></label>"+
    "<input id='m"+s.key+"' type='number' inputmode='numeric' min='0' max='30' step='1' placeholder='0–30'></div>";
}).join("");
$("manualForm").addEventListener("submit",function(e){
  e.preventDefault();
  var sc=[],bad=[];
  STATES.forEach(function(s){ var raw=$("m"+s.key).value.trim(), v=Number(raw); if(raw===""||!Number.isInteger(v)||v<0||v>30) bad.push(s.key); else sc.push(v); });
  if(bad.length){ $("manualErr").textContent=bad.join(", ")+" 점수를 0부터 30 사이 정수로 입력해 주세요."; $("m"+bad[0]).focus(); return; }
  $("manualErr").textContent=""; openResult(sc,"manual",true);
});

/* ---------- wiring ---------- */
function goHome(){ refreshHome(); show("home"); }
$("logoBtn").onclick = goHome;
$("startBtn").onclick = startTest;
$("startBtn2").onclick = startTest;
$("hdrStart").onclick = function(){ if(!VIEWS.home.hidden || !VIEWS.manual.hidden) startTest(); else goHome(); };
$("hdrResult").onclick = function(){ openResult(scoreFrom(store.answers),"test",false); };
$("manualBtn").onclick = function(){ $("manualErr").textContent=""; show("manual"); };
$("manualBack").onclick = goHome;
Array.prototype.forEach.call(document.querySelectorAll("[data-go]"),function(b){
  b.onclick=function(){ var t=$(b.dataset.go); if(t) t.scrollIntoView({behavior:smooth(),block:"start"}); };
});
$("editBtn").onclick = function(){ store.page=0; save(); renderPage(); show("test"); };
$("retakeBtn").onclick = function(){ $("retakeConfirm").hidden=false; $("retakeYes").focus(); };
$("retakeNo").onclick = function(){ $("retakeConfirm").hidden=true; };
$("retakeYes").onclick = function(){ archive(); store.note={}; store.answers=new Array(50).fill(null); store.page=0; save(); renderPage(); show("test"); };
$("interpBtn").onclick = function(){ setMode(true); window.scrollTo({top:0}); };
$("exitInterp").onclick = function(){ setMode(false); window.scrollTo({top:0}); };
$("copyBtn").onclick = function(){
  var txt=resultText(), box=$("copyBox");
  function fb(){ box.hidden=false; box.value=txt; box.focus(); box.select(); $("toast").textContent="자동 복사가 안 되는 환경이에요. 아래 글을 길게 눌러 복사해 주세요."; }
  try{ navigator.clipboard.writeText(txt).then(function(){ $("toast").textContent="결과를 복사했어요. 메신저나 메모에 붙여 넣어 보세요."; },fb); }catch(err){ fb(); }
};

buildHome();
goHome();
})();
