AFRAME.registerComponent('game', {
    schema: {
        elementId: {type: 'string', default: '#coin1'}
    },
    update: function(){
        this.checkCollider(this.data.elementId)
    },
    is_collided: function(elementId){
        const element = document.querySelector(elementId)
        element.addEventListener('collide', e=>{
            if(elementId.includes('#coin')){
                console.log(elementId + ' collision')
            }
            else if(elementId.includes('#fish')){
                console.log(elementId + ' collision')
            }
        })
    },
    init: function () {
        var duration = 120;
        var timerEl = document.querySelector("#timer");
        this.startTimer(duration, timerEl);
      },
    
      update: function () {
        this.isCollided(this.data.elementId);
      },
    
      startTimer: function (duration, timerEl) {
        var minutes;
        var seconds;
    
        setInterval(()=> {
          if (duration >=0) {
            minutes = parseInt(duration / 60);
            seconds = parseInt(duration % 60);
    
            if (minutes < 10) {
              minutes = "0" + minutes;
            }
            if (seconds < 10) {
              seconds = "0" + seconds;
            }
    
            timerEl.setAttribute("text", {
              value: minutes + ":" + seconds,
            });
    
            duration -= 1;
          } 
          else {
            this.gameOver();        
          }
        },1000)
      },
      isCollided: function (elemntId) {
        var element = document.querySelector(elemntId);
        element.addEventListener("collide", (e) => {
          if (elemntId.includes("#ring")) {
            element.setAttribute("visible", false);
            this.updateScore();
            this.updateTargets();
          } 
          else {
            this.gameOver();
          }
        });
      },
      updateTargets: function () {
        var element = document.querySelector("#fish");
        var count = element.getAttribute("text").value;
        var currentTargets = parseInt(count);
        currentTargets -= 1;
        element.setAttribute("text", {
          value: currentTargets,
        });
      },
      updateScore: function () {
        var element = document.querySelector("#score");
        var count = element.getAttribute("text").value;
        var currentScore = parseInt(count);
        currentScore += 50;
        element.setAttribute("text", {
          value: currentScore,
        });
      },
      gameOver: function () {
        var diverEl = document.querySelector("#scuba_diver");
        var element = document.querySelector("#game_over_text");
        element.setAttribute("visible", true);
        diverEl.setAttribute("dynamic-body", {
          mass: 1
        });
      },
})
 