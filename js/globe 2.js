import * as THREE from 'three';
import vertexShader from './shaders/vertex.glsl';
import fragmentShader from './shaders/fragment.glsl';
import atmosphereShader from './shaders/atmosphereVertex.glsl';
import atmosphereFragmentShader from './shaders/atmosphereFragment.glsl';
import { Float32BufferAttribute } from 'three';

const canvasContainer = document.getElementById('canvas-container')

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, canvasContainer.offsetWidth / canvasContainer.offsetHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
        antialias: true,
        canvas: document.querySelector('canvas')
});


renderer.setSize(canvasContainer.offsetWidth, canvasContainer.offsetHeight)
renderer.setPixelRatio(window.devicePixelRatio)

// create a sphere
const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(5, 50, 50),
    /*
    new THREE.MeshBasicMaterial({ 
        // color: 0xff0000
        map: new THREE.TextureLoader().load('img/globe.jpeg') 
    })*/
    new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
            globeTexture: {
                value: new THREE.TextureLoader().load('img/globe.jpeg')
            }
        }
    })
)

scene.add(sphere)

// create atmosphere
const atmosphere = new THREE.Mesh(
    new THREE.SphereGeometry(5, 50, 50),
    /*
    new THREE.MeshBasicMaterial({ 
        // color: 0xff0000
        map: new THREE.TextureLoader().load('img/globe.jpeg') 
    })*/
    new THREE.ShaderMaterial({
        vertexShader: atmosphereShader,
        fragmentShader: atmosphereFragmentShader,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
    })
)
atmosphere.scale.set(1.1, 1.1, 1.1)
scene.add(atmosphere)

const group = new THREE.Group()
group.add(sphere)
scene.add(group)

const starGeometry = new THREE.BufferGeometry()
const starMaterial = new THREE.PointsMaterial({
    color: 0xffffff
})

const starVertices = []
for(let i = 0; i < 10000; i++) {
    const x = (Math.random() - 0.5) * 2000
    const y = (Math.random() - 0.5) * 2000
    const z = -Math.random() * 2000 

    starVertices.push(x, y, z)
}

starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3))

const stars = new THREE.Points(starGeometry, starMaterial)
scene.add(stars)

camera.position.z = 15

const mouse = {
    x: undefined,
    y: undefined,
    prevX: undefined,
    prevY: undefined
}

function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    sphere.rotation.y += 0.002
    group.rotation.y = mouse.x
    group.rotation.x = -mouse.y
}
animate()

const container = document.getElementById('container')

var mouseDown = false

document.body.onmousedown = function() {
    mouseDown = true
}
document.body.onmouseup = function() {
    mouseDown = false
}

function onMouseMove(event) {
    if (mouseDown) {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
    }
}
addEventListener('mousemove', onMouseMove)