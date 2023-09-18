 import * as THREE from 'three';
 import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';





var ContainerWidth = document.getElementById('objetContainer').clientWidth;
var ContainerHeight = document.getElementById('objetContainer').clientHeight;

const aspectRatio = window.innerWidth / window.innerHeight;
const rendererHeight = ContainerWidth/aspectRatio;

const canvas = document.querySelector("#webgl");
const renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true, alpha: true});
renderer.setSize(ContainerWidth, ContainerHeight);




const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 15, ContainerWidth / ContainerHeight, 0.1, 1000 );

camera.position.z = 10;
camera.position.y = 0.4;
const light = new THREE.AmbientLight( 0xFFFFF ); // soft white light
scene.add( light );

const topLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
topLight.position.set(20, 20, 20) //top-left-ish
topLight.castShadow = true;
scene.add(topLight);

let object;

const loader = new GLTFLoader();

loader.load( 'Ressource/puzzle2.glb', function ( gltf ) {object = gltf.scene; scene.add( gltf.scene );})




function animate() {
	requestAnimationFrame( animate );
	object.rotation.y += 0.001;
	//object.rotation.y =4;
	
     

	renderer.render( scene, camera );
}

animate();

