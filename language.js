function applyLanguage(pageType) {

    const lang = localStorage.getItem("language") || "ko";



    // =========================
    // 공통 홈 버튼 번역
    // =========================

    let homeText = "🏠 홈으로";

    if(lang === "en") {
        homeText = "🏠 Home";
    }

    else if(lang === "ja") {
        homeText = "🏠 ホーム";
    }

    else if(lang === "zh") {
        homeText = "🏠 首页";
    }

    document.querySelector(".back-btn").innerText =
    homeText;



    // =========================
    // 페이지 제목 번역
    // =========================

    const titles = {

        adult: {
            ko: "일반(성인) 안전 지도",
            en: "Adult Safety Map",
            ja: "一般成人安全地図",
            zh: "成人安全地图"
        },

        child: {
            ko: "어린이 및 청소년 안전 지도",
            en: "Children & Youth Safety Map",
            ja: "子供・青少年安全地図",
            zh: "儿童及青少年安全地图"
        },

        disabled: {
            ko: "장애인 안전 지도",
            en: "Disabled Safety Map",
            ja: "障害者安全地図",
            zh: "残障人士安全地图"
        },

        emergency: {
            ko: "응급환자 안전 지도",
            en: "Emergency Patient Safety Map",
            ja: "救急患者安全地図",
            zh: "急救患者安全地图"
        },

        moveweak: {
            ko: "이동약자 안전 지도",
            en: "Mobility Support Safety Map",
            ja: "移動弱者安全地図",
            zh: "行动不便者安全地图"
        },

        pregnant: {
            ko: "임산부 안전 지도",
            en: "Pregnant Women Safety Map",
            ja: "妊婦安全地図",
            zh: "孕妇安全地图"
        },

        senior: {
            ko: "노인 안전 지도",
            en: "Senior Safety Map",
            ja: "高齢者安全地図",
            zh: "老年人安全地图"
        },

        tourist: {
            ko: "관광 안전 지도",
            en: "Tourist Safety Map",
            ja: "観光安全地図",
            zh: "旅游安全地图"
        }
    };



    // 제목 변경

    document.getElementById("mapTitle").innerText =
    titles[pageType][lang];



    // html lang 속성 변경

    document.documentElement.lang = lang;
}