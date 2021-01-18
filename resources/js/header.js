(function () {
    const header = document.querySelector("header");
    header.innerHTML = (`
        <div id="header">
            <div class="container">
                <div class="header">
                    <div class="header_title">
                        <h1>Anvil Publishing Guide</h1>
                    </div>
                    <div class="header_menu">
                        <ul>
                            <li data-prop="menu1"><a href="#">About</a></li>
                            <li data-prop="menu2"><a href="#">HTML5</a></li>
                            <li data-prop="menu3"><a href="#">CSS3</a></li>
                            <li data-prop="menu4"><a href="#">JS</a></li>
                            <li data-prop="menu5"><a href="#">TRAINING</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <nav id="nav" class="off" >
            <div class="container">
                <div class="nav">
                    <ul>
                        <li><a href="#">About</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">HTML5</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">CSS3</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">JS</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">TRAINING</a></li>
                        <li><a href="http://kwoon.dothome.co.kr/responsive/html5/index.html">반응형 사이트</a></li>
                        <li><a href="https://jeongkyeowoon.github.io/momentum/">Momentum</a></li>
                        <li><a href="https://clone-391b6.web.app/">Amazon-clone</a></li>
                        <li><a href="https://jeongkyeowoon.github.io/megabox/">megabox-clone</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    `);
    /* 헤더 마우스 오버 시 */
    header.querySelector(".header_menu").addEventListener('mouseover', function (e) {
        if (e.target.tagName === "A") {
            header.querySelector("#nav").classList.remove("off"); // 네비 열기
            header.querySelectorAll(".header_menu ul li").forEach(li => { // 요소 각각 함수 실행
                li.classList.remove("active"); // 활성 클래스 삭제
            });
            e.target.parentElement.classList.add("active"); // 해당 요소에 클래스 추가
            header.querySelectorAll("#nav .nav ul").forEach(ul => {
                ul.classList.remove("active");
            });
            const menuNum = e.target.parentElement.getAttribute("data-prop").replace("menu", "");
            header.querySelector(`#nav .nav ul:nth-child(${menuNum})`).classList.add("active");
        }

    });
    /* 헤더 마우스 아웃 시 */
    header.addEventListener('mouseleave', function (e) {
        header.querySelector("#nav").classList.add("off"); // 네비 닫기
        header.querySelectorAll(".header_menu ul li").forEach(element => { // 요소 각각 함수 실행
            element.classList.remove("active"); // 활성 클래스 삭제
        });
    });
})();
