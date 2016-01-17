var BigScene = (function() {
  "use strict";

  Physijs.scripts.worker = 'physi.js/physijs_worker.js';
  Physijs.scripts.ammo = '/ammo.js/builds/ammo.js';

  var scene = new Physijs.Scene(),
    renderer = new THREE.WebGLRenderer(),
    light = new THREE.AmbientLight(0xffffff),
    camera,
    ground,
    box;

  function initScene() {
    scene.setGravity(new THREE.Vector3(0, -50, 0));

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("webgl-container").appendChild(renderer.domElement);

    scene.add(light);
    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(60, 50, 60);
    camera.lookAt(scene.position);
    scene.add(camera);


    var boxMaterial = Physijs.createMaterial(
      new THREE.MeshBasicMaterial({
        color: 0xFF0000
      }),
      0,
      0.2
    );

    box = new Physijs.BoxMesh(
      new THREE.CubeGeometry(15, 15, 15),
      boxMaterial
    );

    box.position.y = 40;
    box.rotation.x = 45;
    box.rotation.z = 45;
    box.rotation.y = 45;


    box.name = "Hello World Box";
    scene.add(box);

    var groundMaterial = Physijs.createMaterial(
      new THREE.MeshBasicMaterial({
        color: 0x008888
      }),
      0,
      0
    );

    ground = new Physijs.BoxMesh(
      new THREE.CubeGeometry(150, 5, 150),
      groundMaterial,
      0
    );

    ground.name = 'ground';
    ground.position.y =-25;
    scene.add(ground);


    var stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);

    var update = function() {
      stats.begin();
      stats.end();
      requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
    render();
  }

  function render() {
    scene.simulate();
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }

  window.onload = initScene;

  return {
    scene: scene
  }

})();
