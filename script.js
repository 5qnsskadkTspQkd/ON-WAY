// ==============================
// 페이지 이동 함수
// ==============================

function movePage(page) {

    location.href = page;
}



// ==============================
// 언어 선택
// ==============================

const langSelect =
document.getElementById("langSelect");



langSelect.addEventListener("change", function () {

    const lang = langSelect.value;



    // ==========================
    // 한국어
    // ==========================

    if (lang === "ko") {

        document.getElementById("subtitle").innerText =
        "사용자 맞춤 안전 지도 서비스";



        document.getElementById("serviceTitle").innerText =
        "서비스 소개";



        document.getElementById("serviceText").innerHTML =
        "SafeMap은 사용자 유형에 따라<br>안전한 이동 경로와 필요한 시설 정보를 제공하는<br>스마트 안전 지도 서비스입니다.";



        document.getElementById("selectTitle").innerText =
        "사용자 유형 선택";



        document.getElementById("childBtn").innerText =
        "어린이 및 청소년";



        document.getElementById("disabledBtn").innerText =
        "장애인";



        document.getElementById("seniorBtn").innerText =
        "노인";



        document.getElementById("pregnantBtn").innerText =
        "임산부";



        document.getElementById("touristBtn").innerText =
        "관광";



        document.getElementById("weakBtn").innerText =
        "이동약자";



        document.getElementById("emergencyBtn").innerText =
        "응급환자";



        document.getElementById("adultBtn").innerText =
        "일반(성인)";
    }



    // ==========================
    // 영어
    // ==========================

    else if (lang === "en") {

        document.getElementById("subtitle").innerText =
        "Personalized Safety Navigation Service";



        document.getElementById("serviceTitle").innerText =
        "About Service";



        document.getElementById("serviceText").innerHTML =
        "SafeMap provides safe routes and useful facility information<br>depending on the user's situation and type.";



        document.getElementById("selectTitle").innerText =
        "Select User Type";



        document.getElementById("childBtn").innerText =
        "Children & Teenagers";



        document.getElementById("disabledBtn").innerText =
        "Disabled";



        document.getElementById("seniorBtn").innerText =
        "Senior";



        document.getElementById("pregnantBtn").innerText =
        "Pregnant Woman";



        document.getElementById("touristBtn").innerText =
        "Tourist";



        document.getElementById("weakBtn").innerText =
        "Mobility Weak";



        document.getElementById("emergencyBtn").innerText =
        "Emergency Patient";



        document.getElementById("adultBtn").innerText =
        "Adult";
    }



    // ==========================
    // 일본어
    // ==========================

    else if (lang === "ja") {

        document.getElementById("subtitle").innerText =
        "ユーザー別安全地図サービス";



        document.getElementById("serviceTitle").innerText =
        "サービス紹介";



        document.getElementById("serviceText").innerHTML =
        "SafeMapは利用者タイプに応じて<br>安全な移動経路と必要な施設情報を提供する<br>スマート安全地図サービスです。";



        document.getElementById("selectTitle").innerText =
        "利用者タイプ選択";



        document.getElementById("childBtn").innerText =
        "子供・青少年";



        document.getElementById("disabledBtn").innerText =
        "障害者";



        document.getElementById("seniorBtn").innerText =
        "高齢者";



        document.getElementById("pregnantBtn").innerText =
        "妊婦";



        document.getElementById("touristBtn").innerText =
        "観光";



        document.getElementById("weakBtn").innerText =
        "移動弱者";



        document.getElementById("emergencyBtn").innerText =
        "救急患者";



        document.getElementById("adultBtn").innerText =
        "一般成人";
    }



    // ==========================
    // 중국어
    // ==========================

    else if (lang === "zh") {

        document.getElementById("subtitle").innerText =
        "用户定制安全地图服务";



        document.getElementById("serviceTitle").innerText =
        "服务介绍";



        document.getElementById("serviceText").innerHTML =
        "SafeMap根据用户类型提供<br>安全路线和设施信息的智能地图服务。";



        document.getElementById("selectTitle").innerText =
        "选择用户类型";



        document.getElementById("childBtn").innerText =
        "儿童及青少年";



        document.getElementById("disabledBtn").innerText =
        "残疾人";



        document.getElementById("seniorBtn").innerText =
        "老人";



        document.getElementById("pregnantBtn").innerText =
        "孕妇";



        document.getElementById("touristBtn").innerText =
        "旅游";



        document.getElementById("weakBtn").innerText =
        "行动不便者";



        document.getElementById("emergencyBtn").innerText =
        "急诊患者";



        document.getElementById("adultBtn").innerText =
        "普通成人";
    }

});