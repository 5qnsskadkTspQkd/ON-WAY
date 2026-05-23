/**
 * [통합본] 안전 지도 및 서울 명소 관광 지도 다국어 번역 / 자동 매핑 스크립트
 */

// ==========================================
// 1. [데이터] 안전 지도 번역 데이터 (translations)
// ==========================================
const translations = {
    ko: {
        common: { home: "🏠 홈으로", loading: "데이터를 불러오는 중입니다...", legend: "📍 지도 마커 안내" },
        adult: { 
            title: "일반(성인) 안전 지도", 
            markers: ["📷 CCTV 설치 위치", "👥 유동인구 많은 곳", "🚗 교통사고 다발 구역", "🏥 병원", "👮 경찰서", "💡 가로등 위치", "🚶 유동인구 적은 곳", "⚠️ 범죄 발생 구역", "🚒 소방서", "🏠 지킴이집"]
        },
        disabled: { 
            title: "장애인 안전 지도", 
            markers: ["💡 가로등 위치", "♿ 장애인 편의시설", "🪑 벤치 및 휴식 공간", "🧊 무더위쉼터", "👥 유동인구 밀집 지역", "🌿 유동인구 적은 지역", "⚠️ 교통사고 다발구역"]
        },
        elder: { 
            title: "노인 안전 지도", 
            markers: ["🪑 벤치/쉼터", "🚶 평지 구간", "🔼 지하철역 에스컬레이터", "🏥 의료복지시설", "🚻 화장실", "🛗 지하철역 승강기", "♿ 휠체어 경사로", "☀️ 무더위쉼터"]
        },
        pregnant: { 
            title: "임산부 안전 지도", 
            markers: ["♿ 경사로 및 무장애 시설", "💊 약국", "🚻 개방형 화장실", "🅿️ 임산부 우선 주차/배려구역", "🏥 응급 의료 기관", "🪑 휴식 공간(벤치/쉼터)", "🤱 수유실", "🚇 지하철/대중교통 연계시설"]
        },
        child: { 
            title: "어린이 및 청소년 안전 지도", 
            markers: ["💡 가로등 위치", "📉 유동인구 적은 곳", "⚠️ 범죄 발생 구역", "🚌 대중교통", "⚠️ 공사장/공폐가", "📈 유동인구 많은 곳", "🚑 교통사고 다발 구역", "🛡️ 안심 구역", "🚲 따릉이 대여소", "🧒 어린이 보호 구역"]
        },
        moveweak: { 
            title: "이동약자 안전 지도", 
            markers: ["📷 CCTV 위치", "💡 가로등 위치", "👥 유동인구 많은 지역", "🚶 유동인구 적은지역", "⚠️ 교통사고 다발구역", "🛗 지하철 승강기 위치 및 가동 현황"]
        },
        patient: { 
            title: "응급환자 안전 지도", 
            markers: ["🚒 소방서 및 안전센터", "🏥 병원", "🚑 응급실"]
        }
    },
    en: {
        common: { home: "🏠 Home", loading: "Loading data...", legend: "📍 Map Marker Guide" },
        adult: { 
            title: "Adult Safety Map", 
            markers: ["📷 CCTV Locations", "👥 Crowded Areas", "🚗 Accident-Prone Areas", "🏥 Hospitals", "👮 Police Stations", "💡 Street Lights", "🚶 Quiet Areas", "⚠️ Crime Areas", "🚒 Fire Stations", "🏠 Safe Houses"]
        },
        disabled: { 
            title: "Disabled Safety Map", 
            markers: ["💡 Street Lights", "♿ Accessibility Facilities", "🪑 Benches & Rest Areas", "🧊 Heat Shelters", "👥 Crowded Areas", "🌿 Quiet Areas", "⚠️ Accident-Prone Areas"]
        },
        elder: { 
            title: "Senior Safety Map", 
            markers: ["🪑 Benches & Shelters", "🚶 Flat Road Sections", "🔼 Subway Escalators", "🏥 Medical & Welfare Facilities", "🚻 Restrooms", "🛗 Subway Elevators", "♿ Wheelchair Ramps", "☀️ Heat Shelters"]
        },
        pregnant: { 
            title: "Pregnant Women Safety Map", 
            markers: ["♿ Ramps & Barrier-Free Facilities", "💊 Pharmacies", "🚻 Public Restrooms", "🅿️ Priority Parking for Pregnant Women", "🏥 Emergency Medical Facilities", "🪑 Rest Areas (Benches/Shelters)", "🤱 Nursing Rooms", "🚇 Subway & Transit Facilities"]
        },
        child: { 
            title: "Children & Youth Safety Map", 
            markers: ["💡 Street Lights", "📉 Quiet Areas", "⚠️ Crime Areas", "🚌 Public Transit", "⚠️ Construction & Abandoned Sites", "📈 Crowded Areas", "🚑 Accident-Prone Areas", "🛡️ Safe Zones", "🚲 Bike Rental Stations", "🧒 School Safety Zones"]
        },
        moveweak: { 
            title: "Mobility Impaired Safety Map", 
            markers: ["📷 CCTV Locations", "💡 Street Lights", "👥 Crowded Areas", "🚶 Quiet Areas", "⚠️ Accident-Prone Areas", "🛗 Subway Elevators & Operation Status"]
        },
        patient: { 
            title: "Emergency Patient Safety Map", 
            markers: ["🚒 Fire Station & Safety Center", "🏥 Hospital", "🚑 Emergency Room"]
        }
    },
    ja: {
        common: { home: "🏠 ホーム", loading: "データを読み込み중...", legend: "📍 マーカー案内" },
        adult: { 
            title: "一般(成人) 安全マップ", 
            markers: ["📷 CCTV設置場所", "👥 人通りの多い場所", "🚗 交通事故多発地域", "🏥 病院", "👮 警察署", "💡 街灯位置", "🚶 人通りの少ない場所", "⚠️ 犯罪発生地域", "🚒 消防署", "🏠 安全の家"]
        },
        disabled: { 
            title: "障害者安全マップ", 
            markers: ["💡 街灯位置", "♿ 障害者向け施設", "🪑 ベンチ・休憩スペース", "🧊 猛暑シェルター", "👥 人通りの多い地域", "🌿 人通りの少ない地域", "⚠️ 交通事故多発地域"]
        },
        elder: { 
            title: "高齢者安全マップ", 
            markers: ["🪑 ベンチ・休憩スペース", "🚶 平坦な道", "🔼 駅エスカレーター", "🏥 医療福祉施設", "🚻 トイレ", "🛗 駅エレベーター", "♿ 車椅子スロープ", "☀️ 猛暑シェルター"]
        },
        pregnant: { 
            title: "妊産婦安全マップ", 
            markers: ["♿ スロープ・バリアフリー施設", "💊 薬局", "🚻 公共トイレ", "🅿️ 妊产妇优先停车场", "🏥 救急医療機関", "🪑 休憩スペース（ベンチ）", "🤱 授乳室", "🚇 地下鉄・交通連携施設"]
        },
        child: { 
            title: "子ども・青少年安全マップ", 
            markers: ["💡 街灯位置", "📉 人通りの少ない場所", "⚠️ 犯罪発生地域", "🚌 公共交通", "⚠️ 工事現場・廃屋", "📈 人通りの多い場所", "🚑 交通事故多発地域", "🛡️ 安心ゾーン", "🚲 レンタサイクル", "🧒 子ども保護区域"]
        },
        moveweak: { 
            title: "交通弱者安全マップ", 
            markers: ["📷 CCTV設置場所", "💡 街灯位置", "👥 人通りの多い地域", "🚶 人通りの少ない地域", "⚠️ 交通事故多発地域", "🛗 駅エレベーター位置および稼働状況"]
        },
        patient: { 
            title: "救急患者安全マップ", 
            markers: ["🚒 消防署・安全センター", "🏥 病院", "🚑 救急医療センター"]
        }
    },
    zh: {
        common: { home: "🏠 首页", loading: "正在加载数据...", legend: "📍 地图标记说明" },
        adult: { 
            title: "成人安全地图", 
            markers: ["📷 CCTV位置", "👥 人流量大的地区", "🚗 交通事故多发地区", "🏥 医院", "👮 警察局", "💡 路灯位置", "🚶 人流量少的地区", "⚠️ 犯罪发生地区", "🚒 消防局", "🏠 安全之家"]
        },
        disabled: { 
            title: "残障人士安全地图", 
            markers: ["💡 路灯位置", "♿ 无障碍设施", "🪑 长椅与休息区", "🧊 高温避难所", "👥 人流密集地区", "🌿 人流较少地区", "⚠️ 交通事故多发地区"]
        },
        elder: { 
            title: "老年人安全地图", 
            markers: ["🪑 长椅与休息区", "🚶 平坦路段", "🔼 地铁扶梯", "🏥 医疗福利设施", "🚻 厕所", "🛗 地铁电梯", "♿ 轮椅坡道", "☀️ 高温避难所"]
        },
        pregnant: { 
            title: "孕产妇安全地图", 
            markers: ["♿ 坡道及无障碍设施", "💊 药店", "🚻 公共厕所", "🅿️ 孕产妇优先停车区", "🏥 急诊医疗机构", "🪑 休息区（长椅·避难所）", "🤱 哺乳室", "🚇 地铁·公共交通设施"]
        },
        child: { 
            title: "儿童及青少年安全地图", 
            markers: ["💡 路灯位置", "📉 人流量少的地区", "⚠️ 犯罪发生地区", "🚌 公共交通", "⚠️ 施工现场·废弃建筑", "📈 人流量大的地区", "🚑 交通事故多发地区", "🛡️ 安全区域", "🚲 共享单车站", "🧒 儿童保护区"]
        },
        moveweak: { 
            title: "行动不便者安全地图", 
            markers: ["📷 CCTV位置", "💡 路灯位置", "👥 人流密集地区", "🚶 人流较少地区", "⚠️ 交通事故多发地区", "🛗 地铁电梯位置及运行状况"]
        },
        patient: { 
            title: "急诊患者安全地图", 
            markers: ["🚒 消防局及安全中心", "🏥 医院", "🚑 急诊室"]
        }
    }
};

// ==========================================
// 2. [데이터] 서울 명소 관광 지도 번역 데이터 (LANGUAGES)
// ==========================================
const LANGUAGES = {
    ko: {
        title: "🗺️ 서울 명소 관광 지도", home: "🏠 홈으로", filterTitle: "🔎 보고 싶은 카테고리를 선택하세요 (중복 선택 가능)",
        catTradition: "🏯 전통·역사", catModern: "🌆 현대·도심", catNature: "🌿 자연·힐링", catEnergy: "⚡ 쇼핑·엔터(에너지)",
        legendTitle: "📍 카테고리별 마커 안내",
        legendTradition: "🏯 전통·역사 명소 (경복궁, 북촌 한옥마을 등)", legendModern: "🌆 현대·도심 명소 (N서울타워, 명동 등)",
        legendNature: "🌿 자연·힐링 명소 (한강공원, 서울숲 등)", legendEnergy: "⚡ 쇼핑·엔터 명소 (롯데월드, 홍대 등)",
        tradition: [
            { name: "경복궁", desc: "조선 왕조의 법궁이자 서울의 상징적인 문화유산" },
            { name: "북촌 한옥마을", desc: "도심 속 실제 주민들이 거주하는 전통 한옥 보존 지역" },
            { name: "창덕궁", desc: "자연과의 조화가 아름다운 유네스코 세계문화유산" },
            { name: "인사동", desc: "전통 화랑, 고미술품, 전통찻집이 밀집한 문화의 거리" }
        ],
        modern: [
            { name: "N서울타워", desc: "남산 정상에서 서울 시내를 한눈에 내려다보는 전망대" },
            { name: "명동", desc: "트렌디한 쇼핑몰과 다양한 길거리 음식을 즐길 수 있는 번화가" },
            { name: "동대문디자인플라자 (DDP)", desc: "독창적인 디자인과 다양한 전시가 열리는 복합문화공간" },
            { name: "강남역", desc: "트렌드와 엔터테인먼트, 고층 빌딩이 밀집한 핫플레이스" }
        ],
        nature: [
            { name: "반포 한강공원", desc: "달빛무지개분수와 시원한 강바람을 즐길 수 있는 휴식처" },
            { name: "남산공원", desc: "사계절 아름다운 산책로와 자연을 품은 서울 중심의 공원" },
            { name: "서울숲", desc: "문화예술공원, 생태숲 등 다양한 테마로 꾸며진 녹색 쉼터" },
            { name: "북한산국립공원", desc: "도심 속 웅장한 바위산과 수려한 경관을 자랑하는 국립공원" }
        ],
        energy: [
            { name: "롯데월드", desc: "모험과 신비가 가득한 대형 실내외 테마파크" },
            { name: "코엑스 스타필드", desc: "별마당도서관과 쇼핑, 아쿠아리움이 결합된 대형 몰" },
            { name: "홍대거리", desc: "젊음의 에너지와 버스킹, 독특한 인디 문화가 가득한 곳" },
            { name: "이태원", desc: "다양한 세계 문화와 이국적인 맛집들이 모여있는 특구" }
        ]
    },
    en: {
        title: "🗺️ Seoul Attractions Guide Map", home: "🏠 Home", filterTitle: "🔎 Select categories you want to see (Multiple selection allowed)",
        catTradition: "🏯 Tradition/History", catModern: "🌆 Modern/Downtown", catNature: "🌿 Nature/Healing", catEnergy: "⚡ Shopping/Enter",
        legendTitle: "📍 Marker Guide by Category",
        legendTradition: "🏯 Historical Sites (Gyeongbokgung, Bukchon, etc.)", legendModern: "🌆 Modern Landmarks (N Seoul Tower, Myeongdong, etc.)",
        legendNature: "🌿 Nature & Parks (Han River Park, Seoul Forest, etc.)", legendEnergy: "⚡ Shopping & Entertainment (Lotte World, Hongdae, etc.)",
        tradition: [
            { name: "Gyeongbokgung Palace", desc: "The main royal palace of the Joseon Dynasty and an iconic cultural heritage of Seoul." },
            { name: "Bukchon Hanok Village", desc: "A traditional village where actual residents live, preserving Seoul's old alleys." },
            { name: "Changdeokgung Palace", desc: "A UNESCO World Heritage site known for its beautiful harmony with nature." },
            { name: "Insa-dong", desc: "A cultural street packed with traditional galleries, antique shops, and teahouses." }
        ],
        modern: [
            { name: "N Seoul Tower", desc: "An observatory on Namsan Mountain offering a panoramic view of downtown Seoul." },
            { name: "Myeong-dong", desc: "A bustling district famous for trendy shopping malls and diverse street food." },
            { name: "Dongdaemun Design Plaza (DDP)", desc: "A landmark multi-cultural complex featuring unique futuristic architecture." },
            { name: "Gangnam Station", desc: "A hot spot packed with skyscraper offices, trends, and nightlife entertainment." }
        ],
        nature: [
            { name: "Banpo Hangang Park", desc: "A relaxing riverside park famous for its Moonlight Rainbow Fountain show." },
            { name: "Namsan Park", desc: "A central urban park offering scenic walking trails across all four seasons." },
            { name: "Seoul Forest", desc: "A massive green oasis featuring eco-forests and art parks for citizens." },
            { name: "Bukhansan National Park", desc: "A national park boasting majestic granite peaks and stunning nature trails." }
        ],
        energy: [
            { name: "Lotte World", desc: "A major theme park filled with adventure, featuring massive indoor and outdoor zones." },
            { name: "Starfield COEX Mall", desc: "A massive underground mall home to the famous Starfield Library and an aquarium." },
            { name: "Hongdae Street", desc: "A vibrant area full of youthful energy, street busking, and indie culture." },
            { name: "Itaewon", desc: "A unique multicultural district gathered with international cuisines and diverse cultures." }
        ]
    },
    ja: {
        title: "🗺️ ソウル観光スポット案内マップ", home: "🏠 ホーム", filterTitle: "🔎 表示したいカテゴリを選択してください（複数選択可）",
        catTradition: "🏯 伝統・歴史", catModern: "🌆 現代・都市", catNature: "🌿 自然・癒やし", catEnergy: "⚡ ショッピング・エンタメ",
        legendTitle: "📍 カテゴリ別マーカー案内",
        legendTradition: "🏯 伝統・歴史名所（景福宮、北村韓屋村など）", legendModern: "🌆 現代・都市名所（Nソウルタワー、明洞など）",
        legendNature: "🌿 自然・癒やし名所（漢江公園、ソウルの森など）", legendEnergy: "⚡ ショッピング・エンタメ名所（ロッテワールド、弘大など）",
        tradition: [
            { name: "景福宮", desc: "朝鮮王朝の正宮であり、ソウルを代表する象徴的な文化遺産。" },
            { name: "北村韓屋村", desc: "実際の住民が暮らす、伝統的な韓屋が保存された人気の街並み。" },
            { name: "昌徳宮", desc: "自然との調和が見事な、ユネスコ世界文化遺産に登録された王宮。" },
            { name: "仁寺洞", desc: "伝統的な画廊、古美術品店、伝統茶屋が集まる文化の街。" }
        ],
        modern: [
            { name: "Nソウルタワー", desc: "南山の山頂にそびえ立ち、ソウル市内を一望できる展望タワー。" },
            { name: "明洞", desc: "トレンド의 ショップや賑やかな屋台フードが楽しめるソウル最大の繁華街。" },
            { name: "東大門デザインプラザ (DDP)", desc: "独創的なデザインの建築物で、様々な展示が行われる複合文化空間。" },
            { name: "江南駅", desc: "高層ビル、最新トレンド、エンターテインメントが集まるホットプレイス。" }
        ],
        nature: [
            { name: "盤浦漢江公園", desc: "月光レインボー噴水と爽やかな川の風を楽しめる市民の憩いの場。" },
            { name: "南山公園", desc: "四季折々の美しい散策路があり、自然に囲まれたソウル中心部の公園。" },
            { name: "ソウルの森", desc: "文化芸術公園や生態の森など、様々なテーマで構成された緑豊かなオアシス。" },
            { name: "北漢山国立公園", desc: "都会にいながら雄大な岩山と美しい景色が堪能できる国立公園。" }
        ],
        energy: [
            { name: "ロッテワールド", desc: "冒険と神秘をテーマにした、巨大な屋内・屋外型テーマパーク。" },
            { name: "スターフィールド COEXモール", desc: "ピョルマダン図書館やアクアリウムが融合した大型複合ショッピングモール。" },
            { name: "弘大通り", desc: "若者の熱気にあふれ、ストリートライブや独自のインディーズ文化が息づく街。" },
            { name: "梨泰院", desc: "世界各国の文化や異国情緒あふれるグルメが集まる国際色豊かな特区。" }
        ]
    },
    zh: {
        title: "🗺️ 首尔景点旅游地图", home: "🏠 返回首页", filterTitle: "🔎 请选择想查看的类别（可多选）",
        catTradition: "🏯 传统·历史", catModern: "🌆 现代·市中心", catNature: "🌿 自然·治愈", catEnergy: "⚡ 购物·娱乐",
        legendTitle: "📍 各类别标记说明",
        legendTradition: "🏯 传统·历史景点（景福宫、北村韩屋村等）", legendModern: "🌆 现代·市中心景点（N首尔塔、明洞等）",
        legendNature: "🌿 自然·治愈景点（汉江公园、首尔林等）", legendEnergy: "⚡ 购物·娱乐景点（乐天世界、弘大等）",
        tradition: [
            { name: "景福宫", desc: "朝鲜王朝的正宫，是首尔最具代表性的文化遗产。" },
            { name: "北村韩屋村", desc: "保留了传统韩屋的村落，至今仍有首尔居民在此居住。" },
            { name: "昌德宫", desc: "与自然环境和谐融合的宫殿，被列为联合国教科文组织世界文化遗产。" },
            { name: "仁寺洞", desc: "汇集了传统画廊、古董店和传统茶馆的文化街区。" }
        ],
        modern: [
            { name: "N首尔塔", desc: "坐落于南山顶峰，可将首尔市中心美景尽收眼底的观景塔。" },
            { name: "明洞", desc: "汇集了众多时尚品牌店与丰富街头小吃的人气繁华商圈。" },
            { name: "东大门设计广场 (DDP)", desc: "外观具有未来主义风格, 经常举办各种设计展览的复合文化空间。" },
            { name: "江南驿", desc: "摩天大楼林立，集潮流、娱乐与商务于一体的时尚中心。" }
        ],
        nature: [
            { name: "盘浦汉江公园", desc: "以月光彩虹喷水秀闻名，可以吹着清凉江风休息的市民公园。" },
            { name: "南山公园", desc: "四季风景如画的步道，是位于首尔市中心的绿色天然氧吧。" },
            { name: "首尔林", desc: "由文化艺术公园、生态林等多个主题打造的都会绿色生态休闲区。" },
            { name: "北汉山国立公园", desc: "在城市中即可欣赏到雄伟奇岩怪石与秀丽风景的韩国国立公园。" }
        ],
        energy: [
            { name: "乐天世界", desc: "充满冒险与神秘色彩的大型室内外主题乐园。" },
            { name: "星空 COEX Mall", desc: "融合了著名的星空图书馆、各式购物商店与水族馆的大型商场。" },
            { name: "弘大街区", desc: "洋溢着青春活力，随处可见街头路演与独特独立文化的圣地。" },
            { name: "黎泰院", desc: "多元文化交融的特色街区，汇集了世界各国的异国风味美食。" }
        ]
    }
};

// [글로벌 환경 안전장치] 외부 지도 변수 선언 유무 예외처리
if (typeof map === 'undefined') var map = null;
if (typeof categoryMarkers === 'undefined') var categoryMarkers = null;
if (typeof activeInfoWindow === 'undefined') var activeInfoWindow = null;
if (typeof CATEGORY_COLORS === 'undefined') {
    var CATEGORY_COLORS = { tradition: '#e67e22', modern: '#3498db', nature: '#2ecc71', energy: '#9b59b6' };
}

// Helper 함수: DOM 안전 갱신
const setTxt = (id, text) => { const el = document.getElementById(id); if (el) el.innerText = text; };
const setHtml = (id, html) => { const el = document.getElementById(id); if (el) el.innerHTML = html; };


/**
 * ==========================================
 * 3. [로직] 안전 지도 번역 시스템 (applyLanguage)
 * ==========================================
 */
function applyLanguage(page) {
    // [핵심 해결] 언제나 동기화된 전역 브라우저 메모리(localStorage) 값에서 언어 추출
    const lang = localStorage.getItem("language") || "ko";
    
    let activePage = page;
    const href = window.location.href;
    if (href.includes("patient") || href.includes("emergency")) activePage = "patient";
    else if (href.includes("moveweak")) activePage = "moveweak";
    else if (href.includes("disabled")) activePage = "disabled";
    else if (href.includes("elder")) activePage = "elder";
    else if (href.includes("pregnant")) activePage = "pregnant";
    else if (href.includes("child")) activePage = "child";
    else if (href.includes("adult")) activePage = "adult";

    if (!translations[lang] || !translations[lang][activePage]) {
        console.warn(`번역 데이터를 찾을 수 없습니다. Lang: ${lang}, Page: ${activePage}`);
        return;
    }

    const pageData = translations[lang][activePage];
    const commonData = translations[lang].common;

    // 텍스트 매핑
    setTxt("pageTitle", pageData.title);
    setTxt("mapTitle", pageData.title);
    setTxt("legendTitle", commonData.legend);
    setTxt("homeBtn", commonData.home);
    setTxt("loadingText", commonData.loading);

    // [버그 수정] 범례 마커 리스트 매핑 시, 안전 검증 절차 최적화
    const markerElements = document.querySelectorAll(".legend-list li, .legend-item span, [id$='Text']");
    if (markerElements.length > 0 && pageData.markers) {
        let textIndex = 0;
        markerElements.forEach((element) => {
            // 화면 렌더링 검증 조건 완화 및 순수 데이터 바인딩 보장
            if (pageData.markers[textIndex]) {
                element.innerText = pageData.markers[textIndex];
                textIndex++;
            }
        });
    }
}


/**
 * ==========================================
 * 4. [로직] 서울 명소 관광 지도 번역 시스템 (changeLanguage)
 * ==========================================
 */
function changeLanguage(lang) {
    if (!LANGUAGES[lang]) return;
    
    // [핵심 해결] 유저가 선택한 언어 설정을 브라우저 메모리에 영구 보존하여 페이지 이동 시 유지되도록 함
    localStorage.setItem("language", lang);

    setTxt("txt-title", LANGUAGES[lang].title);
    setTxt("txt-home", LANGUAGES[lang].home);
    setTxt("txt-filter-title", LANGUAGES[lang].filterTitle);
    setTxt("txt-legend-title", LANGUAGES[lang].legendTitle);
  
    // 카테고리 필터 버튼 텍스트 변경
    const categories = ['tradition', 'modern', 'nature', 'energy'];
    const emojis = { tradition: '🏯', modern: '🌆', nature: '🌿', energy: '⚡' };
    
    categories.forEach(cat => {
        const btn = document.querySelector(`[data-category="${cat}"]`);
        const key = 'cat' + cat.charAt(0).toUpperCase() + cat.slice(1); 
        if (btn && LANGUAGES[lang][key]) {
            btn.innerHTML = `${emojis[cat]} ${LANGUAGES[lang][key]}`;
        }
    });

    // 범례 안내 구역 동적 마킹
    setHtml("txt-leg-tradition", `<div class="legend-dot" style="background:#e67e22;"></div> ${LANGUAGES[lang].legendTradition}`);
    setHtml("txt-leg-modern", `<div class="legend-dot" style="background:#3498db;"></div> ${LANGUAGES[lang].legendModern}`);
    setHtml("txt-leg-nature", `<div class="legend-dot" style="background:#2ecc71;"></div> ${LANGUAGES[lang].legendNature}`);
    setHtml("txt-leg-energy", `<div class="legend-dot" style="background:#9b59b6;"></div> ${LANGUAGES[lang].legendEnergy}`);

    // 언어 선택 인터페이스 디자인 동적 활성화
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if(btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // 지도 런타임 마커 세트 리프레시 호출
    updateMapLanguage();
}


/**
 * 5. 관광 지도 전용 마커 및 인포윈도우 동적 리프레시 함수
 */
function updateMapLanguage() {
    const savedLang = localStorage.getItem("language") || "ko";
    if (!map || !categoryMarkers || typeof google === 'undefined') return;

    if (activeInfoWindow) {
        activeInfoWindow.close();
    }

    Object.keys(categoryMarkers).forEach(category => {
        const color = CATEGORY_COLORS[category] || '#333';
        if (!Array.isArray(categoryMarkers[category])) return;

        categoryMarkers[category].forEach((marker, index) => {
            if (!LANGUAGES[savedLang][category] || !LANGUAGES[savedLang][category][index]) return;
            
            const placeLangData = LANGUAGES[savedLang][category][index];
            
            if (typeof marker.setTitle === 'function') {
                marker.setTitle(placeLangData.name);
            }

            const infoWindow = new google.maps.InfoWindow({
                content: `
                    <div style="padding:10px; font-family:'Malgun Gothic',sans-serif; color:#333; line-height: 1.5; max-width:200px;">
                        <strong style="font-size:15px; color:${color};">${placeLangData.name}</strong><br>
                        <p style="margin:5px 0 0 0; font-size:12px; color:#666;">${placeLangData.desc}</p>
                    </div>
                `
            });

            google.maps.event.clearInstanceListeners(marker);
            marker.addListener("click", () => {
                if (activeInfoWindow) activeInfoWindow.close();
                infoWindow.open(map, marker);
                activeInfoWindow = infoWindow;
            });
        });
    });
}


/**
 * ==========================================
 * 6. [초기화] 자동 도메인 판별 및 언어 로드 트리거
 * ==========================================
 */
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("language") || "ko";
    const href = window.location.href;

    // 1. 현재 주소가 명소 관광 지도 페이지인 경우
    if (href.includes("tour") || href.includes("attraction") || document.getElementById("txt-title")) {
        changeLanguage(savedLang);
    } 
    // 2. 그 외 안전 지도 시스템 관할 페이지일 경우
    else {
        applyLanguage();
    }
});