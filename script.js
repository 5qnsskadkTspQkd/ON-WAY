// ==============================
// 언어 데이터
// ==============================

const langData = {

    ko: {

        title: "ON:WAY",

        subtitle:
        "사용자 맞춤형 안전 지도 서비스",

        serviceTitle:
        "서비스 소개",

        serviceText:
        "ON:WAY는 '안전한 길 위에 있다'는 뜻으로<br>사용자에 따른 맞춤형 안전 이동 경로와 필요한 시설 정보를 제공하는<br>스마트 안전 지도 서비스입니다.",

        selectTitle:
        "사용자 유형 선택",

        child:
        "어린이 및 청소년",

        disabled:
        "장애인",

        senior:
        "노인",

        pregnant:
        "임산부",

        tourist:
        "관광",

        moveweak:
        "이동약자",

        emergency:
        "응급환자",

        adult:
        "일반(성인)"
    },



    en: {

        title: "ON:WAY",

        subtitle:
        "Personalized Safety Map Service",

        serviceTitle:
        "Service Introduction",

        serviceText:
        "ON:WAY means 'on the path to safety'<br>and provides personalized safe routes and essential facility information<br>through a smart safety map service.",

        selectTitle:
        "Select User Type",

        child:
        "Children & Youth",

        disabled:
        "Disabled",

        senior:
        "Senior",

        pregnant:
        "Pregnant Women",

        tourist:
        "Tourist",

        moveweak:
        "Mobility Support",

        emergency:
        "Emergency Patient",

        adult:
        "Adult"
    },



    ja: {

        title: "ON:WAY",

        subtitle:
        "ユーザー別安全地図サービス",

        serviceTitle:
        "サービス紹介",

        serviceText:
        "ON:WAYは『安全な道の上にいる』という意味を持ち、<br>利用者に合わせた安全移動経路と必要な施設情報を提供する<br>スマート安全地図サービスです。",

        selectTitle:
        "利用者タイプ選択",

        child:
        "子供・青少年",

        disabled:
        "障害者",

        senior:
        "高齢者",

        pregnant:
        "妊婦",

        tourist:
        "観光",

        moveweak:
        "移動弱者",

        emergency:
        "救急患者",

        adult:
        "一般成人"
    },



    zh: {

        title: "ON:WAY",

        subtitle:
        "用户定制安全地图服务",

        serviceTitle:
        "服务介绍",

        serviceText:
        "ON:WAY 意味着“走在安全的道路上”，<br>根据不同用户提供个性化安全路线与必要设施信息的<br>智能安全地图服务。",

        selectTitle:
        "选择用户类型",

        child:
        "儿童及青少年",

        disabled:
        "残障人士",

        senior:
        "老年人",

        pregnant:
        "孕妇",

        tourist:
        "旅游",

        moveweak:
        "行动不便者",

        emergency:
        "急救患者",

        adult:
        "成人"
    }
};



// ==============================
// 언어 변경 함수
// ==============================

function changeLanguage(lang) {

    localStorage.setItem("language", lang);



    document.getElementById("subtitle").innerText =
    langData[lang].subtitle;

    document.getElementById("serviceTitle").innerText =
    langData[lang].serviceTitle;

    document.getElementById("serviceText").innerHTML =
    langData[lang].serviceText;

    document.getElementById("selectTitle").innerText =
    langData[lang].selectTitle;

    document.getElementById("childBtn").innerText =
    langData[lang].child;

    document.getElementById("disabledBtn").innerText =
    langData[lang].disabled;

    document.getElementById("seniorBtn").innerText =
    langData[lang].senior;

    document.getElementById("pregnantBtn").innerText =
    langData[lang].pregnant;

    document.getElementById("touristBtn").innerText =
    langData[lang].tourist;

    document.getElementById("moveweakBtn").innerText =
    langData[lang].moveweak;

    document.getElementById("emergencyBtn").innerText =
    langData[lang].emergency;

    document.getElementById("adultBtn").innerText =
    langData[lang].adult;
}



// ==============================
// 언어 선택 이벤트
// ==============================

const langSelect =
document.getElementById("langSelect");



langSelect.addEventListener("change", function() {

    changeLanguage(this.value);

});



// ==============================
// 페이지 이동 함수
// ==============================

function movePage(page) {

    location.href = page;

}



// ==============================
// 처음 실행 시 저장된 언어 적용
// ==============================

const savedLang =
localStorage.getItem("language") || "ko";



langSelect.value = savedLang;

changeLanguage(savedLang);