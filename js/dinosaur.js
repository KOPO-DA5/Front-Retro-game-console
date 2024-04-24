function loadGameDino() {
  const content = document.getElementById("content");

  var newStyle = document.createElement("link");
  newStyle.setAttribute("rel", "stylesheet");

  resetAnimation(content); // 애니메이션 초기화
  updateGameContent(); // 콘텐츠 업데이트

  // 애니메이션 시작
  content.classList.add("fade-in");
}

function resetAnimation(element) {
  element.classList.remove("fade-in");
  void element.offsetWidth; // DOM 리플로우 강제 실행으로 CSS 애니메이션 리셋
  element.classList.add("fade-in");
}

function updateGameContent() {
  const content = document.getElementById("content");
  content.innerHTML = `
                  <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet"/>
                  <link rel="stylesheet" href="./css/dinosaur.css" />
                  <div id="game" class="game">
         <div id="score" class="score">0</div>
         <div id="start-message" class="start-message">Press any key to start</div>
         <img src="./images/dinosaur/ground.png" class="ground">
         <img src="./images/dinosaur/ground.png" class="ground">
         <img src="./images/dinosaur/dino-stationary.png" id="dino" class="dino">
         <div id="gameover-message" class="gameover-message hide">
            <p>Game over</p>
            <span>Press any key to restart</span>
         </div>
      </div>
                  
              `;
  /* js부르는 법 */

  let scriptTomain = document.createElement("script");
  scriptTomain.type = "text/javascript";
  scriptTomain.src = "./js/dinosaur/main.js";
  document.body.appendChild(scriptTomain);
}
