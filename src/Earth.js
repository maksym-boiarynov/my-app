import React, { useEffect } from 'react';
import * as THREE from 'three';

function Earth() {
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;
        
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    console.log(document.getElementById('earth-container').children);
    if (document.getElementById('earth-container').children.length == 0)
    document.getElementById('earth-container').appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(2, 32, 32);

    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('/Earth_texture.jpg');

    const material = new THREE.MeshBasicMaterial({ map: texture });

    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    const animate = function () {
        requestAnimationFrame(animate);
        earth.rotation.y -= 0.0002;
        renderer.render(scene, camera);
      };
    animate();
  }, []);

  return (
    <div id="earth-container"></div>
  );
}

export default Earth;