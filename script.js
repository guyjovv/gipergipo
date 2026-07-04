/* ================= DRUG DATABASE ================= */
const DRUGS = {
  aceInhibitor:{
    name:'Эналаприл',
    class:'ИАПФ',
    dose:'Старт 5 мг 1–2 р/сут; поддерживающая 10–20 мг 2 р/сут; максимум 40 мг/сут',
    titration:'Титровать каждые 2–4 недели. Начинать с низких доз у пожилых и при ХБП.',
    accumulation: true,
    accumulationNote: 'ИАПФ не имеют значимого накопительного эффекта, но требуют осторожности при ХБП.',
    sideEffects:['Сухой кашель','Ангионевротический отёк','Гиперкалиемия','Ухудшение функции почек при двустороннем стенозе почечных артерий','Гипотензия первой дозы']
  },
  arb:{
    name:'Лозартан',
    class:'БРА (сартан)',
    dose:'Старт 50 мг 1 р/сут; максимум 100 мг/сут',
    titration:'Титровать каждые 2–4 недели.',
    accumulation: true,
    accumulationNote: 'БРА не имеют значимого накопительного эффекта, но требуют контроля калия и креатинина при ХБП.',
    sideEffects:['Гиперкалиемия','Головокружение','Ухудшение функции почек при стенозе почечных артерий','Редко ангионевротический отёк']
  },
  thiazide:{
    name:'Гидрохлортиазид',
    class:'Тиазидный диуретик',
    dose:'12,5–25 мг 1 р/сут утром; максимум 50 мг/сут',
    titration:'Титровать каждые 2–4 недели.',
    accumulation: false,
    accumulationNote: 'Не имеет накопительного эффекта.',
    sideEffects:['Гипокалиемия','Гипонатриемия','Гиперурикемия (обострение подагры)','Гипергликемия','Фотосенсибилизация']
  },
  loopDiuretic:{
    name:'Фуросемид',
    class:'Петлевой диуретик',
    dose:'20–80 мг/сут внутрь, индивидуально',
    titration:'Титровать по диурезу и АД.',
    accumulation: false,
    accumulationNote: 'Не имеет накопительного эффекта.',
    sideEffects:['Гипокалиемия','Гиповолемия','Ототоксичность при высоких дозах','Гипонатриемия']
  },
  ccb_dhp:{
    name:'Амлодипин',
    class:'Дигидропиридиновый АК',
    dose:'Старт 5 мг 1 р/сут; максимум 10 мг/сут',
    titration:'Титровать каждые 2–4 недели.',
    accumulation: true,
    accumulationNote: 'Имеет длительный период полувыведения (~30–50 ч). Стабильная концентрация через 7–10 дней.',
    sideEffects:['Периферические отёки','Головная боль','Приливы','Рефлекторная тахикардия']
  },
  ccb_nondhp:{
    name:'Дилтиазем',
    class:'Недигидропиридиновый АК',
    dose:'120–360 мг/сут ретард, 1–2 приёма',
    titration:'Титровать каждые 2–4 недели.',
    accumulation: true,
    accumulationNote: 'Имеет накопительный эффект при длительном приёме. Коррекция дозы при СКФ < 30 мл/мин.',
    sideEffects:['Брадикардия','АВ-блокада','Запор','Отрицательный инотропный эффект — осторожно при сниженной ФВ']
  },
  betaBlockerCardio:{
    name:'Бисопролол',
    class:'Кардиоселективный β-блокатор',
    dose:'Старт 2,5–5 мг 1 р/сут; максимум 20 мг/сут',
    titration:'Титровать каждые 2–4 недели.',
    accumulation: false,
    accumulationNote: 'Не имеет накопительного эффекта, период полувыведения 10–12 ч.',
    sideEffects:['Брадикардия','Утомляемость','Бронхоспазм (реже)','Маскировка гипогликемии','Синдром отмены']
  },
  mra:{
    name:'Спиронолактон',
    class:'Антагонист МКР',
    dose:'Старт 25 мг 1 р/сут; максимум 50 мг/сут',
    titration:'Титровать каждые 2–4 недели, контролировать калий.',
    accumulation: true,
    accumulationNote: 'Метаболиты имеют длительный период полувыведения (до 20 ч). Коррекция дозы при СКФ < 30 мл/мин.',
    sideEffects:['Гиперкалиемия','Гинекомастия','Менструальные нарушения']
  },
  alphaBlocker:{
    name:'Доксазозин',
    class:'α1-адреноблокатор',
    dose:'Старт 1 мг на ночь; максимум 16 мг/сут',
    titration:'Титровать каждые 1–2 недели.',
    accumulation: false,
    accumulationNote: 'Не имеет накопительного эффекта.',
    sideEffects:['Ортостатическая гипотензия ("эффект первой дозы")','Головокружение','Периферические отёки']
  },
  centralAgonist:{
    name:'Клонидин',
    class:'Центральный α2-агонист',
    dose:'0,075–0,1 мг 2 р/сут; максимум 0,9 мг/сут',
    titration:'Титровать постепенно.',
    accumulation: true,
    accumulationNote: 'Имеет накопительный эффект при длительном приёме. Коррекция дозы при СКФ < 30 мл/мин. Синдром отмены.',
    sideEffects:['Сухость во рту','Седация','Синдром отмены — резкий подъём АД','Брадикардия']
  },
  moxonidine:{
    name:'Моксонидин (Максонидин)',
    class:'Агонист I1-имидазолиновых рецепторов',
    dose:'Старт 0,2 мг 1 р/сут; поддерживающая 0,2–0,4 мг 1–2 р/сут; максимум 0,6 мг/сут',
    titration:'Титровать каждые 2–4 недели. Начинать с 0,2 мг вечером.',
    accumulation: false,
    accumulationNote: 'Период полувыведения ~2,5 ч, но при ХБП (СКФ < 30 мл/мин) и у пожилых возможно удлинение.',
    sideEffects:['Сухость во рту (реже, чем у клонидина)','Головокружение','Утомляемость (менее выражена)','Синдром отмены — менее выражен','Редко: ангионевротический отёк']
  },
  vasodilator:{
    name:'Гидралазин',
    class:'Прямой вазодилататор',
    dose:'25–100 мг/сут внутрь в 2–4 приёма',
    titration:'Титровать постепенно.',
    accumulation: false,
    accumulationNote: 'Не имеет накопительного эффекта.',
    sideEffects:['Рефлекторная тахикардия','Волчаночноподобный синдром','Головная боль','Задержка жидкости']
  },
  methyldopa:{
    name:'Метилдопа',
    class:'Центральный α2-агонист — препарат выбора при беременности',
    dose:'250 мг 2–3 р/сут; максимум 3 г/сут',
    titration:'Титровать постепенно, контролировать АД.',
    accumulation: true,
    accumulationNote: 'Метаболизируется в печени, при длительном приёме возможна кумуляция метаболитов.',
    sideEffects:['Седация','Сухость во рту','Гемолитическая анемия (редко)','Гепатотоксичность (редко)','Депрессия']
  },
  labetalolPO:{
    name:'Лабеталол (внутрь)',
    class:'α/β-блокатор — разрешён при беременности',
    dose:'100–200 мг 2 р/сут; максимум 2400 мг/сут',
    titration:'Титровать постепенно.',
    accumulation: false,
    accumulationNote: 'Не имеет значимого накопительного эффекта, период полувыведения 4–8 ч.',
    sideEffects:['Утомляемость','Бронхоспазм','Брадикардия у новорождённого','Головокружение']
  },
  nifedipineER:{
    name:'Нифедипин пролонгированный',
    class:'Дигидропиридиновый АК, разрешён при беременности',
    dose:'30–60 мг 1 р/сут (ретард); максимум 120 мг/сут',
    titration:'Титровать каждые 2–4 недели.',
    accumulation: true,
    accumulationNote: 'Пролонгированная форма, стабильная концентрация через 5–7 дней.',
    sideEffects:['Периферические отёки','Головная боль','Приливы','Тахикардия']
  },
  hydralazinePO:{
    name:'Гидралазин (внутрь)',
    class:'Прямой вазодилататор, второй ряд при беременности',
    dose:'10–50 мг 3–4 р/сут; максимум 200 мг/сут',
    titration:'Титровать постепенно.',
    accumulation: false,
    accumulationNote: 'Не имеет накопительного эффекта, но ацетилирование генетически детерминировано.',
    sideEffects:['Рефлекторная тахикардия','Волчаночноподобный синдром','Головная боль','Задержка жидкости']
  },
  captoprilPO:{
    name:'Каптоприл (внутрь)',
    class:'ИАПФ короткого действия',
    dose:'12,5–25 мг однократно, при необходимости повторить через 1–2 часа',
    titration:'Разовая доза при кризе.',
    accumulation: true,
    accumulationNote: 'Имеет накопительный эффект при ХБП (период полувыведения удлиняется до 20–40 ч).',
    sideEffects:['Гипотензия','Кашель','Ангионевротический отёк','Гиперкалиемия']
  },
  labetalolIV:{
    name:'Лабеталол в/в',
    class:'α/β-блокатор, парентерально',
    dose:'Болюс 20 мг за 2 мин, далее 20–80 мг каждые 10 мин (максимум 300 мг) либо инфузия 0,5–2 мг/мин',
    titration:'Титровать по АД.',
    accumulation: false,
    accumulationNote: 'Не имеет накопительного эффекта.',
    sideEffects:['Брадикардия','АВ-блокада','Бронхоспазм','Гипотензия']
  },
  nicardipineIV:{
    name:'Никардипин в/в',
    class:'Дигидропиридиновый АК, инфузия',
    dose:'Старт 5 мг/ч, титрование по 2,5 мг/ч каждые 5–15 мин, максимум 15 мг/ч',
    titration:'Титровать по АД.',
    accumulation: false,
    accumulationNote: 'Не имеет значимого накопительного эффекта.',
    sideEffects:['Рефлекторная тахикардия','Головная боль','Флебит в месте инфузии','Гипотензия']
  },
  nitroglycerinIV:{
    name:'Нитроглицерин в/в',
    class:'Нитровазодилататор',
    dose:'Старт 5 мкг/мин, титрование каждые 5 мин, максимум 100 мкг/мин',
    titration:'Титровать по АД и клиническому эффекту.',
    accumulation: false,
    accumulationNote: 'Не имеет накопительного эффекта.',
    sideEffects:['Головная боль','Рефлекторная тахикардия','Толерантность при длительном введении','Гипотензия']
  },
  nitroprussideIV:{
    name:'Нитропруссид натрия в/в',
    class:'Артериовенозный вазодилататор',
    dose:'0,3–10 мкг/кг/мин, титрование под контролем АД',
    titration:'Титровать по АД, мониторинг цианидов.',
    accumulation: false,
    accumulationNote: 'Метаболиты (цианид, тиоцианат) накапливаются при длительном введении и при почечной недостаточности.',
    sideEffects:['Цианидная/тиоцианатная токсичность','Рефлекторная тахикардия','Выраженная гипотензия']
  },
  esmololIV:{
    name:'Эсмолол в/в',
    class:'Кардиоселективный β-блокатор ультракороткого действия',
    dose:'Нагрузочная 500 мкг/кг за 1 мин, далее инфузия 50–200 мкг/кг/мин',
    titration:'Титровать по ЧСС и АД.',
    accumulation: false,
    accumulationNote: 'Не имеет накопительного эффекта (период полувыведения ~9 мин).',
    sideEffects:['Брадикардия','Гипотензия','Бронхоспазм']
  },
  phentolamineIV:{
    name:'Фентоламин в/в',
    class:'α-адреноблокатор',
    dose:'5–15 мг в/в болюсно, повторять по необходимости',
    titration:'По АД.',
    accumulation: false,
    accumulationNote: 'Не имеет накопительного эффекта.',
    sideEffects:['Рефлекторная тахикардия','Аритмии','Приливы']
  },
  furosemideIV:{
    name:'Фуросемид в/в',
    class:'Петлевой диуретик, парентерально',
    dose:'40–80 мг в/в болюсно, повторно при необходимости',
    titration:'По диурезу.',
    accumulation: false,
    accumulationNote: 'Не имеет накопительного эффекта.',
    sideEffects:['Гипокалиемия','Гиповолемия','Ототоксичность при быстром введении высоких доз']
  },
  hydralazineIV:{
    name:'Гидралазин в/в',
    class:'Прямой вазодилататор, парентерально (в т.ч. в акушерстве)',
    dose:'5–10 мг в/в болюсно каждые 20–30 мин, максимум 20 мг',
    titration:'По АД.',
    accumulation: false,
    accumulationNote: 'Не имеет накопительного эффекта.',
    sideEffects:['Рефлекторная тахикардия','Головная боль','Гипотензия у матери — риск снижения плацентарной перфузии']
  },
  magnesiumSulfate:{
    name:'Магния сульфат',
    class:'Противосудорожная профилактика при преэклампсии/эклампсии',
    dose:'Нагрузочная 4–6 г в/в за 15–20 мин, далее инфузия 1–2 г/ч',
    titration:'По рефлексам и диурезу.',
    accumulation: true,
    accumulationNote: 'Кумулирует при почечной недостаточности. Требуется контроль уровня магния в крови.',
    sideEffects:['Угнетение дыхания при передозировке','Потеря коленных рефлексов','Приливы, тошнота']
  },
  midodrine:{
    name:'Мидодрин',
    class:'α1-адреномиметик',
    dose:'2,5–10 мг 3 р/сут, последний приём не позже чем за 4 часа до сна',
    titration:'Титровать по ортостатическим пробам.',
    accumulation: false,
    accumulationNote: 'Не имеет накопительного эффекта, но активный метаболит выводится почками.',
    sideEffects:['Пилоэрекция','Артериальная гипертензия лёжа','Задержка мочи','Рефлекторная брадикардия']
  },
  fludrocortisone:{
    name:'Флудрокортизон',
    class:'Минералокортикоид',
    dose:'0,1–0,2 мг 1 р/сут утром',
    titration:'Титровать по электролитам и АД.',
    accumulation: true,
    accumulationNote: 'Имеет накопительный эффект. Коррекция дозы при ХСН и ХБП.',
    sideEffects:['Гипокалиемия','Отёки, прибавка веса','Артериальная гипертензия лёжа','Декомпенсация ХСН']
  }
};

const GROUP_OF = {
  aceInhibitor:'ACEi', arb:'ARB', thiazide:'THIAZIDE', loopDiuretic:'LOOP',
  ccb_dhp:'CCB_DHP', ccb_nondhp:'CCB_NONDHP',
  betaBlockerCardio:'BB', mra:'MRA', alphaBlocker:'ALPHA',
  centralAgonist:'CENTRAL', moxonidine:'MOXONIDINE', vasodilator:'VASO',
  captoprilPO:'ACEi',
  methyldopa:'PREG_METHYLDOPA', labetalolPO:'PREG_LABETALOL',
  nifedipineER:'PREG_NIFEDIPINE', hydralazinePO:'PREG_HYDRALAZINE',
  labetalolIV:'BB', nicardipineIV:'CCB_DHP',
  nitroglycerinIV:'VASO', nitroprussideIV:'VASO',
  esmololIV:'BB', phentolamineIV:'ALPHA',
  furosemideIV:'LOOP', hydralazineIV:'VASO', magnesiumSulfate:'OTHER',
  midodrine:'MIDODRINE', fludrocortisone:'FLUDROCORTISONE'
};

const GROUP_TO_DRUG = {
  ACEi:'aceInhibitor', ARB:'arb', THIAZIDE:'thiazide', LOOP:'loopDiuretic',
  CCB_DHP:'ccb_dhp', CCB_NONDHP:'ccb_nondhp',
  BB:'betaBlockerCardio', MRA:'mra', ALPHA:'alphaBlocker',
  CENTRAL:'centralAgonist', MOXONIDINE:'moxonidine', VASO:'vasodilator',
  PREG_METHYLDOPA:'methyldopa', PREG_LABETALOL:'labetalolPO',
  PREG_NIFEDIPINE:'nifedipineER', PREG_HYDRALAZINE:'hydralazinePO'
};

const REDUCE_REASONS = {
  ACEi:'ИАПФ системно снижает АД — частая причина гипотензии, особенно на старте терапии или при дегидратации.',
  ARB:'БРА системно снижает АД — частая причина гипотензии у пожилых и при гиповолемии.',
  THIAZIDE:'Диуретик уменьшает объём циркулирующей крови — прямая причина гиповолемической гипотензии.',
  LOOP:'Петлевой диуретик значительно уменьшает ОЦК — частая причина гипотензии.',
  CCB_DHP:'Дигидропиридиновый АК вызывает периферическую вазодилатацию — может провоцировать гипотензию.',
  CCB_NONDHP:'Недигидропиридиновый АК снижает сердечный выброс и ЧСС — может усугублять гипотензию.',
  BB:'β-блокатор снижает сердечный выброс и ЧСС — может усугублять гипотензию.',
  MRA:'Калийсберегающий диуретик способствует снижению ОЦК и АД.',
  ALPHA:'α-блокатор вызывает вазодилатацию — частая причина ортостатической гипотензии.',
  CENTRAL:'Центральный агонист снижает симпатический тонус — может усугублять гипотензию.',
  MOXONIDINE:'Агонист имидазолиновых рецепторов снижает симпатический тонус — может усугублять гипотензию.',
  VASO:'Прямой вазодилататор может усугублять гипотензию.',
  PREG_METHYLDOPA:'Антигипертензивный препарат при беременности — при гипотензии требуется пересмотр дозы.',
  PREG_LABETALOL:'Антигипертензивный препарат при беременности (α/β-блокатор) — может усугублять гипотензию.',
  PREG_NIFEDIPINE:'Антигипертензивный препарат при беременности (вазодилататор) — может усугублять гипотензию.',
  PREG_HYDRALAZINE:'Антигипертензивный препарат при беременности (вазодилататор) — может усугублять гипотензию.'
};

const INTERACTIONS = [
  {a:'ACEi', b:'ARB', msg:'Сочетание ИАПФ и БРА не рекомендуется: риск гиперкалиемии, гипотензии, ухудшения функции почек.'},
  {a:'BB', b:'CCB_NONDHP', msg:'Сочетание повышает риск брадикардии и АВ-блокады.'},
  {a:'MRA', b:'ACEi', msg:'Требуется строгий контроль калия и креатинина.'},
  {a:'MRA', b:'ARB', msg:'Требуется строгий контроль калия и креатинина.'}
];

/* ================= HELPERS ================= */
function classifyBP(sys,dia){
  if(sys<90 || dia<60) return {key:'hypo', label:'Гипотензия', cls:'hypo'};
  if(sys<120 && dia<80) return {key:'normal', label:'Оптимальное АД', cls:'ok'};
  if(sys<130 && dia<80) return {key:'normal', label:'АД в норме', cls:'ok'};
  if(sys<140 || dia<90) return {key:'stage1', label:'АГ 1 степени', cls:'warn'};
  if(sys<180 && dia<120) return {key:'stage2', label:'АГ 2 степени', cls:'warn'};
  return {key:'crisis', label:'Гипертонический криз', cls:'crisis'};
}

function toggle(id, show){
  var el = document.getElementById(id);
  if(el) el.style.display = show ? 'block' : 'none';
}

document.getElementById('pregnant').addEventListener('change', function(e){
  toggle('pregExtra', e.target.checked);
  toggle('curGridPreg', e.target.checked);
});

document.getElementById('sex').addEventListener('change', function(e){
  var female = e.target.value === 'female';
  var row = document.getElementById('pregnancyRow');
  if(row) row.style.display = female ? 'flex' : 'none';
  if(!female){
    document.getElementById('pregnant').checked = false;
    toggle('pregExtra', false);
    toggle('curGridPreg', false);
  }
});

function getChecks(ids){
  var o = {};
  ids.forEach(function(id){
    var el = document.getElementById(id);
    o[id] = el ? el.checked : false;
  });
  return o;
}

function getCurrentGroups(){
  var checks = document.querySelectorAll('#curGrid input:checked, #curGridPreg input:checked');
  return Array.from(checks).map(function(cb){ return cb.getAttribute('data-g'); });
}

function resolveAgainstCurrentMeds(primary, alternates, currentGroups){
  var pool = [primary].concat(alternates);
  var free = pool.find(function(k){ return !currentGroups.includes(GROUP_OF[k]); });
  var note = '', finalPrimary = primary, finalAlternates = alternates;
  if(currentGroups.includes(GROUP_OF[primary])){
    if(free){
      finalPrimary = free;
      finalAlternates = pool.filter(function(k){ return k !== free; });
      note = 'Препарат первой линии для этого профиля пациент уже принимает — предложена следующая по приоритету группа (' + (DRUGS[free] ? DRUGS[free].class : '') + ').';
    } else {
      note = 'Пациент уже принимает препараты всех предпочтительных для этого профиля групп — рассмотреть оптимизацию дозы текущей терапии.';
    }
  }
  return {finalPrimary: finalPrimary, finalAlternates: finalAlternates, note: note};
}

function checkInteractions(currentGroups, newGroup){
  var w = [];
  INTERACTIONS.forEach(function(r){
    if((currentGroups.includes(r.a) && newGroup === r.b) || (currentGroups.includes(r.b) && newGroup === r.a)){
      w.push(r.msg);
    }
  });
  return w;
}

function getTargetBP(p){
  var target = '';
  if(p.pregnant){
    target = 'Целевое АД при беременности: < 140/90 мм рт.ст. (при преэклампсии — < 160/110).';
  } else if(p.com.dm || p.com.ckd || p.com.cad){
    target = 'Целевое АД: < 130/80 мм рт.ст. (для диабета, ХБП, ИБС).';
  } else if(p.age >= 65){
    target = 'Целевое АД: < 140/90 мм рт.ст. (у пациентов ≥65 лет индивидуально, при переносимости < 130/80).';
  } else {
    target = 'Целевое АД: < 140/90 мм рт.ст.';
  }
  return target;
}

/* ================= DECISION ENGINE ================= */
function evaluate(p){
  var sys = p.sys, dia = p.dia, hr = p.hr;
  var bp = classifyBP(sys, dia);

  // ---------- PREGNANCY ----------
  if(p.pregnant){
    var target = 'Целевое АД при беременности: < 140/90 мм рт.ст. (при преэклампсии — < 160/110).';
    
    if(p.eclampsia){
      return {
        bp: bp,
        triage: {label:'ЭКЛАМПСИЯ — НЕОТЛОЖНАЯ ПОМОЩЬ!', cls:'crisis'},
        rationale: 'Эклампсия — судороги на фоне преэклампсии. Неотложная терапия: магния сульфат для купирования судорог, лабеталол или гидралазин в/в для снижения АД. Целевое АД 140–155/90–105 мм рт.ст. Показана экстренная госпитализация в отделение реанимации.',
        primary: 'magnesiumSulfate',
        alternates: ['labetalolIV','hydralazineIV'],
        extra: [],
        toReduce: [],
        target: target
      };
    }
    
    if(p.preeclampsia){
      var primary = 'labetalolIV';
      var alternates = ['hydralazineIV','nifedipineER'];
      var rationale = 'Признаки тяжёлой преэклампсии: показана противосудорожная профилактика (магния сульфат) и контролируемое снижение АД. Целевое АД при преэклампсии — < 160/110 мм рт.ст. (иногда < 150/100). Показана госпитализация.';
      if(p.special.brady){
        primary = 'hydralazineIV';
        alternates = ['nifedipineER'];
        rationale += ' При брадикардии предпочтителен гидралазин. Часто назначается гидралазин 5–10 мг в/в болюсно. При рефрактерности — лабеталол 20 мг в/в болюсно. Строго контролировать АД для профилактики гипоперфузии плаценты.';
      }
      return {
        bp: bp,
        triage: {label:'ТЯЖЁЛАЯ ПРЕЭКЛАМПСИЯ — госпитализация', cls:'crisis'},
        rationale: rationale,
        primary: primary,
        alternates: alternates,
        extra: ['magnesiumSulfate'],
        toReduce: [],
        target: target
      };
    }

    if(sys >= 160 || dia >= 110){
      var rationale = 'АД ' + sys + '/' + dia + ' мм рт.ст. — тяжёлая АГ при беременности (≥160/110), риск инсульта и эклампсии, требуется быстрое контролируемое снижение АД. Целевое АД — 140–155/90–105 мм рт.ст. Показано внутривенное введение препаратов (лабеталол, гидралазин, никардипин). При неэффективности — перевод в отделение реанимации.';
      if(p.preeclampsia) rationale += ' У пациентки с преэклампсией риск эклампсии крайне высок — показан магния сульфат.';
      return {
        bp: bp,
        triage: {label:'ЭКСТРЕННАЯ ПОМОЩЬ — тяжёлая АГ при беременности', cls:'crisis'},
        rationale: rationale,
        primary: 'labetalolIV',
        alternates: ['hydralazineIV','nifedipineER'],
        extra: p.preeclampsia ? ['magnesiumSulfate'] : [],
        toReduce: [],
        target: target
      };
    }
    
    var rationale = 'Хроническая АГ при беременности вне кризового диапазона. Препараты выбора — метилдопа, лабеталол внутрь или нифедипин пролонгированного действия; второй ряд — гидралазин внутрь. ИАПФ, БРА и прямые ингибиторы ренина противопоказаны из-за тератогенности и фетотоксичности.';
    var primary = 'methyldopa';
    var alternates = ['labetalolPO','nifedipineER','hydralazinePO'];
    if(p.special.asthma) rationale += ' При бронхиальной астме/ХОБЛ лабеталол — с осторожностью, метилдопа или нифедипин предпочтительнее.';
    if(p.special.brady){
      rationale += ' При брадикардии предпочтителен гидралазин — не влияет на ЧСС в отличие от лабеталола.';
      primary = 'hydralazinePO';
      alternates = ['methyldopa','nifedipineER'];
    }
    if(p.currentGroups.length){
      var r = resolveAgainstCurrentMeds(primary, alternates, p.currentGroups);
      primary = r.finalPrimary;
      alternates = r.finalAlternates;
      if(r.note) rationale += ' ' + r.note;
    }
    return {
      bp: bp,
      triage: {label:'Плановая терапия АГ при беременности', cls:'ok'},
      rationale: rationale,
      primary: primary,
      alternates: alternates,
      extra: [],
      toReduce: [],
      target: target
    };
  }

  // ---------- CRISIS (УНИКАЛЬНЫЙ ПРОТОКОЛ) ----------
  if(bp.key === 'crisis'){
    var anySevere = false;
    for(var key in p.organ){
      if(p.organ[key]) { anySevere = true; break; }
    }
    
    if(anySevere){
      var primary, alternates, rationale, crisisLabel, target;
      
      if(p.organ.aorta){
        primary = 'esmololIV';
        alternates = ['nitroprussideIV','labetalolIV'];
        crisisLabel = 'РАССЛОЕНИЕ АОРТЫ — экстренная терапия';
        rationale = '🚨 РАССЛОЕНИЕ АОРТЫ: первоочередная задача — снижение скорости нарастания давления (dP/dt). Целевая ЧСС < 60/мин (эсмолол в/в), затем контролируемое снижение АД (нитропруссид натрия). Целевое САД 100–120 мм рт.ст. (при переносимости).';
        target = 'Цель: ЧСС < 60/мин, САД 100–120 мм рт.ст.';
        if(p.special.brady) {
          primary = 'nitroprussideIV';
          alternates = ['nicardipineIV'];
          rationale += ' При брадикардии эсмолол противопоказан — сразу вазодилататор.';
        }
      }
      else if(p.organ.edema){
        primary = 'nitroglycerinIV';
        alternates = ['furosemideIV','nicardipineIV'];
        crisisLabel = 'ОТЁК ЛЁГКИХ / ОЛЖН — экстренная терапия';
        rationale = '🚨 ОСТРАЯ ЛЕВОЖЕЛУДОЧКОВАЯ НЕДОСТАТОЧНОСТЬ: нитроглицерин в/в снижает пред- и постнагрузку, улучшает гемодинамику. При перегрузке объёмом — фуросемид в/в. Контроль диуреза и сатурации. Целевое САД 140–160 мм рт.ст. (при переносимости).';
        target = 'Цель: САД 140–160 мм рт.ст., уменьшение одышки и застоя в лёгких.';
        if(p.pot && p.pot < 3.5) {
          rationale += ' Гипокалиемия — фуросемид с осторожностью, контролировать калий.';
        }
      }
      else if(p.organ.neuro){
        primary = 'nicardipineIV';
        alternates = ['labetalolIV'];
        crisisLabel = 'ОСТРЫЙ ИНСУЛЬТ / ГЕМОРРАГИЯ — экстренная терапия';
        rationale = '🚨 ОСТРЫЙ НЕВРОЛОГИЧЕСКИЙ ДЕФИЦИТ: контролируемое снижение АД на 15–20% за первый час, избегая гипоперфузии зоны ишемии. При геморрагическом инсульте цель САД < 180 мм рт.ст. (при внутримозговом кровоизлиянии < 160 мм рт.ст.).';
        target = 'Цель: снижение АД на 15–20% за 1-й час, САД < 180 (при геморрагии < 160).';
        if(p.special.brady) {
          primary = 'nicardipineIV';
          alternates = [];
          rationale += ' Брадикардия — избегаем лабеталола.';
        }
      }
      else if(p.organ.chest){
        primary = 'nitroglycerinIV';
        alternates = ['esmololIV','labetalolIV'];
        crisisLabel = 'ОКС / НЕСТАБИЛЬНАЯ СТЕНОКАРДИЯ — экстренная терапия';
        rationale = '🚨 ОСТРЫЙ КОРОНАРНЫЙ СИНДРОМ: нитроглицерин снижает преднагрузку и потребность миокарда в кислороде. При отсутствии противопоказаний — β-блокатор для снижения ЧСС и потребления О₂. Целевая ЧСС 50–60/мин, САД > 100 мм рт.ст.';
        target = 'Цель: ЧСС 50–60/мин, САД > 100 мм рт.ст., купирование боли.';
        if(p.special.asthma) {
          alternates = ['nitroglycerinIV'];
          rationale += ' При астме β-блокаторы с осторожностью — предпочтительнее нитроглицерин.';
        }
      }
      else if(p.organ.pheo){
        primary = 'phentolamineIV';
        alternates = [];
        crisisLabel = 'ФЕОХРОМОЦИТОМА — экстренная терапия';
        rationale = '🚨 ПОДОЗРЕНИЕ НА ФЕОХРОМОЦИТОМУ: абсолютно необходима альфа-адреноблокация (фентоламин) до начала бета-блокаторов, иначе риск парадоксального подъёма АД и криза. Затем титровать АД. Показана экстренная консультация хирурга/эндокринолога.';
        target = 'Цель: стабилизация АД альфа-блокаторами, подготовка к хирургическому лечению.';
      }
      else if(p.organ.aki){
        primary = 'nicardipineIV';
        alternates = ['labetalolIV'];
        crisisLabel = 'ОСТРОЕ ПОВРЕЖДЕНИЕ ПОЧЕК — экстренная терапия';
        rationale = '🚨 ОСТРОЕ ПОВРЕЖДЕНИЕ ПОЧЕК: предпочтительны никардипин или лабеталол в/в. Избегать нитропруссида из-за риска накопления тиоцианата при сниженной СКФ. Контроль диуреза и электролитов.';
        target = 'Цель: контролируемое снижение АД, поддержание диуреза > 0,5 мл/кг/ч.';
        if(p.pot && p.pot > 5.5) {
          rationale += ' Гиперкалиемия — избегаем ИАПФ, контроль калия.';
        }
      }
      else {
        primary = 'labetalolIV';
        alternates = ['nicardipineIV'];
        crisisLabel = 'ГИПЕРТОНИЧЕСКИЙ КРИЗ С ПОМ — экстренная терапия';
        rationale = 'Гипертонический криз с поражением органов-мишеней: показано контролируемое парентеральное снижение АД. Предпочтительны лабеталол или никардипин в/в. Цель — снижение не более чем на 25% в первый час.';
        target = 'Цель: снижение АД на 25% за 1-й час, затем до 160/100 за 2–6 часов.';
      }
      
      if(p.pot && p.pot > 5.5 && (primary === 'captoprilPO' || GROUP_OF[primary] === 'ACEi')){
        primary = 'labetalolIV';
        alternates = ['nicardipineIV'];
        rationale += ' Гиперкалиемия — ИАПФ не используются.';
      }
      
      return {
        bp: bp,
        triage: {label: crisisLabel, cls:'crisis'},
        rationale: rationale,
        primary: primary,
        alternates: alternates,
        extra: [],
        toReduce: [],
        target: target
      };
    }
    
    // Бессимптомный криз
    var primary = 'captoprilPO';
    var alternates = ['moxonidine','centralAgonist','labetalolPO'];
    var rationale = 'Бессимптомная тяжёлая АГ без острого поражения органов-мишеней: допустимо постепенное снижение АД пероральными препаратами в течение 24–48 часов без парентерального введения.';
    if(p.pot && p.pot > 5.5){
      primary = 'moxonidine';
      alternates = ['centralAgonist','labetalolPO'];
      rationale += ' Гиперкалиемия — ИАПФ (каптоприл) не используется, выбран моксонидин (не влияет на калий).';
    }
    if(p.special.brady){
      alternates = alternates.filter(function(k){ return k !== 'centralAgonist' && k !== 'labetalolPO'; });
      rationale += ' Брадикардия — избегаем центральных агонистов и лабеталола, предпочтителен моксонидин.';
    }
    return {
      bp: bp,
      triage: {label:'Криз без поражения органов — плановое снижение', cls:'warn'},
      rationale: rationale,
      primary: primary,
      alternates: alternates,
      extra: [],
      toReduce: [],
      target: 'Цель: достижение уровня < 140/90 в течение 24–48 часов.'
    };
  }

  // ---------- HYPOTENSION ----------
  if(bp.key === 'hypo'){
    var tachy = p.hr && p.hr > 100;
    var orthostatic = p.special.orthostatic;
    var recommended = [];
    var excluded = [];
    var rationale = '';
    
    if(orthostatic){
      recommended.push('midodrine');
      recommended.push('fludrocortisone');
      rationale = 'АД ' + sys + '/' + dia + ' мм рт.ст. — артериальная гипотензия с признаками ортостатической недостаточности. В первую очередь рекомендуется коррекция образа жизни (обильное питьё, солевая нагрузка, компрессионный трикотаж, избегать резких вставаний). При необходимости — мидодрин или флудрокортизон. С осторожностью при ХСН, АГ и отёках.';
    } else if(tachy || p.special.afib_flag){
      excluded.push('Тахикардия/фибрилляция предсердий: α-адреномиметик (мидодрин) может усиливать тахиаритмию.');
      recommended.push('fludrocortisone');
    } else {
      recommended.push('midodrine');
      recommended.push('fludrocortisone');
    }
    
    if(p.com.hf || p.special.edema){
      excluded.push('ХСН/отёки: минералокортикоид (флудрокортизон) может усугубить перегрузку объёмом.');
      recommended = recommended.filter(function(k){ return k !== 'fludrocortisone'; });
    }

    var toReduce = p.currentGroups.map(function(g){
      var key = GROUP_TO_DRUG[g] || null;
      var reason = '';
      if(g === 'BB' && p.special.brady){
        reason = REDUCE_REASONS.BB + ' Особенно на фоне уже имеющейся брадикардии — повышенный риск.';
      } else {
        reason = REDUCE_REASONS[g] || 'Антигипертензивный препарат — может вносить вклад в текущую гипотензию.';
      }
      return {group: g, key: key, reason: reason};
    }).filter(function(x){ return x.key; });

    if(!orthostatic){
      rationale = 'АД ' + sys + '/' + dia + ' мм рт.ст. соответствует артериальной гипотензии.';
    }
    if(toReduce.length) rationale += ' В первую очередь целесообразно пересмотреть/снизить дозу текущей антигипертензивной терапии (см. ниже), прежде чем добавлять препараты, повышающие АД.';
    if(excluded.length) rationale += ' ' + excluded.join(' ');

    return {
      bp: bp,
      triage: {label:'Гипотензия — коррекция терапии', cls:'hypo'},
      rationale: rationale,
      primary: recommended[0] || null,
      alternates: recommended.slice(1),
      extra: [],
      toReduce: toReduce,
      target: 'Целевое АД: индивидуально, обычно систолическое ≥ 100 мм рт.ст. при отсутствии симптомов.'
    };
  }

  // ---------- CHRONIC ROUTINE ----------
  var primary, alternates, rationale;
  
  var africanEthnicity = p.ethnicity === 'african';
  
  if(africanEthnicity){
    if(p.com.hf){
      primary = 'aceInhibitor';
      alternates = ['betaBlockerCardio','mra'];
      rationale = 'ХСН со сниженной ФВ: ИАПФ, β-блокатор и антагонист МКР доказанно снижают смертность. У пациентов афро-карибского происхождения ИАПФ в комбинации с диуретиком и БКК предпочтительнее, чем монотерапия.';
    } else if(p.com.ckd){
      primary = 'aceInhibitor';
      alternates = ['arb','ccb_dhp'];
      rationale = 'ХБП/протеинурия: ИАПФ/БРА дают нефропротекцию. У афро-карибских пациентов комбинация ИАПФ + дигидропиридиновый АК предпочтительна.';
    } else {
      primary = 'ccb_dhp';
      alternates = ['thiazide','aceInhibitor'];
      rationale = 'У пациентов афро-карибского происхождения монотерапия ИАПФ/БРА часто менее эффективна — предпочтительны БКК или тиазидные диуретики.';
    }
  } else if(p.com.hf){
    primary = 'aceInhibitor';
    alternates = ['betaBlockerCardio','mra'];
    rationale = 'ХСН со сниженной ФВ: ИАПФ, кардиоселективный β-блокатор и антагонист МКР доказанно снижают смертность и контролируют АД.';
  } else if(p.com.cad){
    primary = 'betaBlockerCardio';
    alternates = ['aceInhibitor'];
    rationale = 'ИБС/перенесённый ИМ: β-блокатор снижает потребность миокарда в кислороде и риск повторных событий; ИАПФ добавляет кардио- и вазопротекцию.';
  } else if(p.com.ckd){
    primary = 'aceInhibitor';
    alternates = ['arb'];
    rationale = 'ХБП/протеинурия: ИАПФ (или БРА при непереносимости) снижают внутриклубочковое давление и дают нефропротекцию.';
  } else if(p.com.dm){
    primary = 'aceInhibitor';
    alternates = ['arb','ccb_dhp'];
    rationale = 'Сахарный диабет: ИАПФ/БРА — первая линия за счёт нефропротекции; при недостаточном контроле добавляют антагонист кальция.';
  } else if(p.com.afib){
    primary = 'betaBlockerCardio';
    alternates = ['ccb_nondhp'];
    rationale = 'Фибрилляция предсердий: необходим контроль ЧСС — β-блокатор или недигидропиридиновый АК (избегают при сниженной ФВ).';
  } else if(p.com.isys){
    primary = 'ccb_dhp';
    alternates = ['thiazide'];
    rationale = 'Изолированная систолическая АГ: дигидропиридиновые АК или тиазидные диуретики эффективно снижают систолическое АД.';
  } else if(p.special.gout){
    primary = 'ccb_dhp';
    alternates = ['aceInhibitor','arb'];
    rationale = 'Подагра в анамнезе: тиазиды повышают урикемию — предпочтительны антагонисты кальция или ИАПФ/БРА.';
  } else if(p.highRisk && (sys >= 130 || dia >= 80)){
    primary = 'aceInhibitor';
    alternates = ['ccb_dhp','thiazide'];
    rationale = 'Высокий сердечно-сосудистый риск + АД ≥ 130/80: целесообразно начать терапию для снижения риска событий.';
  } else {
    primary = 'thiazide';
    alternates = ['aceInhibitor','ccb_dhp'];
    rationale = 'Отдельных "принуждающих" показаний не выявлено — первая линия: тиазидный диуретик, ИАПФ/БРА или дигидропиридиновый АК.';
  }

  if(bp.key === 'stage2' && !p.currentGroups.includes(GROUP_OF[primary])){
    var secondLine = alternates.length > 0 ? alternates[0] : 'ccb_dhp';
    rationale += ' АД ≥ 160/100 мм рт.ст. — целесообразен старт с комбинации двух препаратов. Рекомендуется: ' + DRUGS[primary].class + ' + ' + DRUGS[secondLine].class + '.';
    alternates = alternates.filter(function(k){ return k !== secondLine; });
    alternates.unshift(secondLine);
  }

  if(p.special.asthma && (primary === 'betaBlockerCardio' || alternates.indexOf('betaBlockerCardio') !== -1)){
    rationale += ' При астме/ХОБЛ β-блокатор используют с осторожностью, строго кардиоселективный.';
  }

  if(p.pot && p.pot > 5.0 && (GROUP_OF[primary] === 'ACEi' || GROUP_OF[primary] === 'ARB')){
    alternates = [primary].concat(alternates.filter(function(k){ return k !== 'mra'; }));
    primary = 'ccb_dhp';
    rationale += ' Гиперкалиемия (K+ >5,0) — блокаторы РААС и антагонист МКР смещены из первой линии, выбран антагонист кальция.';
  } else if(p.pot && p.pot > 5.0){
    alternates = alternates.filter(function(k){ return k !== 'mra'; });
  }
  if(p.egfr && p.egfr < 30){
    alternates = alternates.filter(function(k){ return k !== 'mra'; });
    if(GROUP_OF[primary] === 'THIAZIDE'){
      primary = 'loopDiuretic';
      rationale += ' СКФ <30 мл/мин — тиазидные диуретики малоэффективны, заменены петлевым.';
    } else if(alternates.indexOf('loopDiuretic') === -1 && !p.currentGroups.includes('LOOP')){
      alternates.push('loopDiuretic');
    }
  }

  if(p.meds.nsaids){
    rationale += ' Пациент регулярно принимает НПВП — они могут снижать эффективность антигипертензивных препаратов и задерживать жидкость. Рекомендуется минимизировать приём НПВП.';
  }
  if(p.meds.ocs){
    rationale += ' Пациентка принимает гормональные контрацептивы — они могут повышать АД у некоторых женщин. Рассмотреть альтернативные методы контрацепции.';
  }

  var dupNote = '';
  if(p.currentGroups.length){
    var r = resolveAgainstCurrentMeds(primary, alternates, p.currentGroups);
    primary = r.finalPrimary;
    alternates = r.finalAlternates;
    dupNote = r.note;
  }

  var target = getTargetBP(p);

  return {
    bp: bp,
    triage: {label: bp.key === 'stage1' ? 'АГ 1 степени — плановая терапия' : (bp.key === 'stage2' ? 'АГ 2 степени — комбинированная терапия' : 'Плановая терапия'), cls: bp.key === 'stage2' ? 'warn' : 'ok'},
    rationale: rationale,
    primary: primary,
    alternates: alternates,
    extra: [],
    toReduce: [],
    dupNote: dupNote,
    target: target
  };
}

/* ================= UI ================= */
var currentResult = null;
var hasCalculated = false;

function calculate(){
  var sys = parseFloat(document.getElementById('sys').value);
  var dia = parseFloat(document.getElementById('dia').value);
  if(isNaN(sys) || isNaN(dia)){
    alert('Введите значения систолического и диастолического АД.');
    return;
  }

  var age = parseFloat(document.getElementById('age').value);
  var sex = document.getElementById('sex').value;
  var hr = parseFloat(document.getElementById('hr').value);
  var creat = parseFloat(document.getElementById('creat').value);
  var pot = parseFloat(document.getElementById('pot').value);
  var egfr = parseFloat(document.getElementById('egfr').value);
  var pregnant = (sex === 'female') && document.getElementById('pregnant').checked;
  var preeclampsia = document.getElementById('preeclampsia').checked;
  var eclampsia = document.getElementById('eclampsia').checked;
  var ethnicity = document.getElementById('ethnicity').value;
  var highRisk = document.getElementById('highRisk').checked;

  var organ = getChecks(['of_chest','of_edema','of_neuro','of_aorta','of_aki','of_pheo']);
  var organMap = {chest: organ.of_chest, edema: organ.of_edema, neuro: organ.of_neuro, aorta: organ.of_aorta, aki: organ.of_aki, pheo: organ.of_pheo};
  var com = getChecks(['c_hf','c_cad','c_ckd','c_dm','c_afib','c_isys']);
  var comMap = {hf: com.c_hf, cad: com.c_cad, ckd: com.c_ckd, dm: com.c_dm, afib: com.c_afib, isys: com.c_isys};
  var spec = getChecks(['s_gout','s_asthma','s_brady','s_edema','s_orthostatic']);
  var specMap = {gout: spec.s_gout, asthma: spec.s_asthma, brady: spec.s_brady, edema: spec.s_edema, orthostatic: spec.s_orthostatic, afib_flag: com.c_afib};
  var meds = getChecks(['med_nsaids','med_ocs','med_gcs']);
  var medsMap = {nsaids: meds.med_nsaids, ocs: meds.med_ocs, gcs: meds.med_gcs};

  var currentGroups = getCurrentGroups();

  var result = evaluate({
    age: age,
    sys: sys,
    dia: dia,
    hr: hr,
    creat: creat,
    pot: pot,
    egfr: egfr,
    pregnant: pregnant,
    preeclampsia: preeclampsia,
    eclampsia: eclampsia,
    ethnicity: ethnicity,
    highRisk: highRisk,
    organ: organMap,
    com: comMap,
    special: specMap,
    meds: medsMap,
    currentGroups: currentGroups
  });

  if(!isNaN(age) && age >= 65){
    result.rationale += ' Возраст ≥65 лет: осторожная титрация диуретиков и α-блокаторов из-за риска ортостатической гипотензии и падений.';
  }

  var warnings = [];
  if(result.primary){
    checkInteractions(currentGroups, GROUP_OF[result.primary]).forEach(function(w){
      if(warnings.indexOf(w) === -1) warnings.push(w);
    });
  }
  if(result.alternates){
    result.alternates.forEach(function(key){
      checkInteractions(currentGroups, GROUP_OF[key]).forEach(function(w){
        if(warnings.indexOf(w) === -1) warnings.push(w);
      });
    });
  }

  if(currentGroups.indexOf('ACEi') !== -1 && currentGroups.indexOf('ARB') !== -1){
    warnings.push('Одновременный приём ИАПФ и БРА не рекомендуется (риск гиперкалиемии, гипотензии, ухудшения функции почек).');
  }
  if(currentGroups.indexOf('MRA') !== -1 && currentGroups.indexOf('ACEi') !== -1){
    warnings.push('Антагонист МКР + ИАПФ: требуется строгий контроль калия и креатинина.');
  }
  if(currentGroups.indexOf('MRA') !== -1 && currentGroups.indexOf('ARB') !== -1){
    warnings.push('Антагонист МКР + БРА: требуется строгий контроль калия и креатинина.');
  }

  currentResult = result;
  hasCalculated = true;
  renderResult(result, warnings);
}

function drugCardHtml(key, roleClass, roleLabel, reduceReason){
  var d = DRUGS[key];
  if(!d) return '';
  var cardCls = roleClass === 'primary' ? 'primary' : (roleClass === 'remove' ? 'remove' : '');
  var titrationHtml = d.titration ? '<div class="titration">📈 Титрование: ' + d.titration + '</div>' : '';
  var accumHtml = (d.accumulation !== undefined) ? '<span class="accum-badge">' + (d.accumulation ? '📊 Накопление' : '⏱ Без накопления') + '</span>' : '';
  return '<div class="drugcard ' + cardCls + '">' +
    '<span class="role ' + roleClass + '">' + roleLabel + '</span>' +
    '<div class="name">' + d.name + ' ' + accumHtml + '</div>' +
    '<div class="class">' + d.class + '</div>' +
    '<div class="btnrow">' +
      '<button class="btn-mini" onclick="openModal(\'' + key + '\',\'dose\')">Данные и дозировка</button>' +
      '<button class="btn-mini" onclick="openModal(\'' + key + '\',\'why\',\'' + roleClass + '\',\'' + (reduceReason || '').replace(/'/g, "\\'") + '\')">Почему выбран</button>' +
      '<button class="btn-mini" onclick="openModal(\'' + key + '\',\'side\')">Побочные эффекты</button>' +
      '<button class="btn-mini" onclick="openModal(\'' + key + '\',\'titration\')">Титрование</button>' +
    '</div>' +
    titrationHtml +
  '</div>';
}

function renderResult(r, warnings){
  var area = document.getElementById('resultArea');
  if(area) area.style.display = 'block';

  var bpBadge = document.getElementById('bpBadgeBox');
  if(bpBadge) bpBadge.innerHTML = '<span class="bpbadge ' + r.bp.cls + '">АД ' + document.getElementById('sys').value + '/' + document.getElementById('dia').value + ' — ' + r.bp.label + '</span>';

  var triage = document.getElementById('triageBox');
  if(triage) triage.innerHTML = '<div class="triage ' + r.triage.cls + '"><span class="dot"></span>' + r.triage.label + '</div>';

  var targetBox = document.getElementById('targetBox');
  if(targetBox){
    var targetHtml = r.target ? '<div class="target-box"><strong>🎯 Целевое АД:</strong> ' + r.target + '</div>' : '';
    targetBox.innerHTML = targetHtml;
  }

  var rationaleBox = document.getElementById('rationaleBox');
  if(rationaleBox) rationaleBox.textContent = r.rationale;

  var warnHtml = '';
  if(r.dupNote) warnHtml += '<div class="triage warn" style="margin-bottom:7px;font-size:0.8rem;"><span class="dot"></span>' + r.dupNote + '</div>';
  if(warnings){
    warnings.forEach(function(w){
      warnHtml += '<div class="triage warn" style="margin-bottom:7px;font-size:0.8rem;"><span class="dot"></span>' + w + '</div>';
    });
  }
  var warnBox = document.getElementById('warnBox');
  if(warnBox) warnBox.innerHTML = warnHtml;

  var html = '';
  if(r.toReduce && r.toReduce.length){
    r.toReduce.forEach(function(g){
      html += drugCardHtml(g.key, 'remove', 'Снизить дозу / отменить', g.reason);
    });
  }
  if(r.primary) html += drugCardHtml(r.primary, 'primary', 'Основной выбор');
  if(r.alternates){
    r.alternates.forEach(function(key){
      html += drugCardHtml(key, 'alt', 'Альтернатива / дополнение');
    });
  }
  if(r.extra){
    r.extra.forEach(function(key){
      html += drugCardHtml(key, 'extra', 'Дополнительно');
    });
  }
  if(!html) html = '<div class="rationale-box">Дополнительные препараты не требуются.</div>';

  var cardsArea = document.getElementById('cardsArea');
  if(cardsArea) cardsArea.innerHTML = html;

  var monitor = 'Контроль: АД в динамике.';
  if(r.bp.key === 'crisis') {
    if(r.primary === 'esmololIV') monitor = 'Контроль: ЧСС, АД (инвазивно), ЭКГ, неврологический статус. Целевая ЧСС < 60/мин.';
    else if(r.primary === 'nitroglycerinIV') monitor = 'Контроль: АД (инвазивно), сатурация, диурез, ЭКГ, симптомы ОЛЖН.';
    else if(r.primary === 'nicardipineIV') monitor = 'Контроль: АД каждые 5–15 мин, неврологический статус, диурез.';
    else if(r.primary === 'phentolamineIV') monitor = 'Контроль: АД, ЧСС, ЭКГ, глюкоза (риск гипогликемии).';
    else monitor = 'Контроль: АД каждые 5–15 мин, ЭКГ-мониторинг, диурез, неврологический статус; цель — снижение не более чем на 25% в первый час.';
  } else if(r.bp.key === 'hypo') monitor = 'Контроль: ортостатические пробы, АД лёжа/стоя, ЧСС, симптомы гипоперфузии.';
  else if(r.primary && (GROUP_OF[r.primary] === 'ACEi' || GROUP_OF[r.primary] === 'ARB' || GROUP_OF[r.primary] === 'MRA')) monitor = 'Контроль: креатинин и калий через 1–2 недели после начала/титрации.';
  else if(r.primary && (GROUP_OF[r.primary] === 'THIAZIDE' || GROUP_OF[r.primary] === 'LOOP')) monitor = 'Контроль: электролиты (K+, Na+) и мочевая кислота через 2–4 недели.';
  
  var monitorBox = document.getElementById('monitorBox');
  if(monitorBox) monitorBox.textContent = monitor;

  if(area) area.scrollIntoView({behavior:'smooth', block:'start'});
}

function openModal(key, type, roleClass, reduceReason){
  var d = DRUGS[key];
  if(!d) return;
  var overlay = document.getElementById('overlay');
  document.getElementById('modalTitle').textContent = d.name;
  document.getElementById('modalSub').textContent = d.class;
  var tag = document.getElementById('modalTag');
  var body = document.getElementById('modalBody');

  if(type === 'dose'){
    tag.textContent = 'Данные и дозировка';
    var html = '<div class="dosebox">' + d.dose + '</div>';
    if(d.accumulation !== undefined){
      if(d.accumulation){
        html += '<div class="accum-box"><strong>📊 Накопительный эффект:</strong> ' + d.accumulationNote + '</div>';
      } else {
        html += '<div class="no-accum-box">⏱ Накопительного эффекта не имеет.</div>';
      }
    }
    body.innerHTML = html;
  } else if(type === 'titration'){
    tag.textContent = 'Титрование дозы';
    body.innerHTML = '<div class="dosebox">' + (d.titration || 'Титровать постепенно, под контролем АД.') + '</div>';
  } else if(type === 'why'){
    tag.textContent = 'Обоснование';
    var text;
    if(roleClass === 'remove'){
      text = reduceReason || 'Рекомендуется снижение дозы/отмена как один из вкладов в текущую гипотензию.';
    } else if(currentResult && currentResult.primary === key){
      text = currentResult.rationale;
    } else if(currentResult && currentResult.extra && currentResult.extra.indexOf(key) !== -1){
      text = 'Назначается дополнительно к основному препарату по отдельному клиническому показанию.';
    } else {
      text = 'Рассматривается как альтернатива или средство усиления терапии при недостаточном эффекте либо непереносимости основного препарата.';
    }
    body.innerHTML = '<p>' + text + '</p>';
  } else if(type === 'side'){
    tag.textContent = 'Побочные эффекты';
    body.innerHTML = '<ul>' + d.sideEffects.map(function(s){ return '<li>' + s + '</li>'; }).join('') + '</ul>';
  }
  overlay.classList.add('open');
}

function closeModal(){
  document.getElementById('overlay').classList.remove('open');
}
document.getElementById('overlay').addEventListener('click', function(e){
  if(e.target.id === 'overlay') closeModal();
});

// Привязка кнопки рассчёта
document.getElementById('calcBtn').addEventListener('click', calculate);

// live recalculation once first result has been produced
['age','sex','hr','sys','dia','creat','pot','egfr','ethnicity','highRisk'].forEach(function(id){
  var el = document.getElementById(id);
  if(el){
    el.addEventListener('input', function(){
      if(hasCalculated) calculate();
    });
    el.addEventListener('change', function(){
      if(hasCalculated) calculate();
    });
  }
});
document.querySelectorAll('input[type=checkbox], select').forEach(function(el){
  el.addEventListener('change', function(){
    if(hasCalculated) calculate();
  });
});

// Инициализация
document.getElementById('pregnancyRow').style.display = 'flex';
toggle('pregExtra', false);
toggle('curGridPreg', false);