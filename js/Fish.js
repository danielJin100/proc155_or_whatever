AFRAME.registerComponent("fish", {
    init: function () {
      for (var i = 1; i <= 10; i++) {
        const id = `fish${i}`;
  
        const posX = Math.random() * 100 + -50;
        const posY = Math.random() * 5 + 5;
        const posZ = Math.random() * 60 + -40;
        const position = { x: posX, y: posY, z: posZ };
        this.genrateFish(id, position);
      }
    },
    genrateFish: function (id, position) {
    //Task 1 :-select the correct option to call the entity from index .htm
      //const fishModelEntity = document.querySelector("fishModels");
      //const fishModelEntity = querySelector.document("#fishModels");
      const fishModelEntity = document.querySelector("#fishModels");
      //const fishModelEntity = document.querySelect("#fishModels");
     
     
       //Task 2 :-select the correct option to create your own customized entity
  
     
     
      // var fishEl = document.createElement("#a-entity");
      // var fishEl = document.createElement("entity");
      // var fishEl = document.createelement("a-entity");
      var fishEl = document.createElement("a-entity");
  
  
      fishEl.setAttribute("id", id);
      fishEl.setAttribute("position", position);
      fishEl.setAttribute("rotation", { x: 0, y: 180, z: 0 });
  
      fishEl.setAttribute("scale", { x: 0.3, y: 0.3, z: 0.3 });
  
      fishEl.setAttribute("gltf-model", "./assets/fish/scene.gltf");
  
           //Task 3 :-add the animation to the fish
  
   
      fishEl.setAttribute("animation-mixer", {});
      fishEl.setAttribute('static-body', {shape: 'sphere', sphereRadius: 5})
      fishEl.setAttribute('game', {elementId: `#${id}`})
  
      fishModelEntity.appendChild(fishEl);
    }
  })