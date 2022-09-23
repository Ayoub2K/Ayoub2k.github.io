let camera, scene, renderer, sphere;

function init() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
        100,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    //object
    const geometry = new THREE.SphereGeometry(15, 200, 200);

    //material
    const textureLoader = new THREE.TextureLoader()
    const  normalTexture = textureLoader.load('resources/normalmap.png')
    const material = new THREE.MeshStandardMaterial();
    material.metalness = 0.2;
    material.roughness = 0.5;
    material.normalMap = normalTexture;

    sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    const pointlight = new THREE.PointLight(0xffffff, 0.1)
    pointlight.position.set(2, 3 ,4)
    scene.add(pointlight)


    const pointlight2 = new THREE.PointLight(0xff0000, 0.1)
    pointlight2.position.set(5, 5 ,5)
    pointlight2.intensity = 0.5
    scene.add(pointlight2)

    const pointlight3 = new THREE.PointLight(0x0000ff, 0.1)
    pointlight3.position.set(20, 10 ,10)
    pointlight3.intensity = 0.7
    scene.add(pointlight3)

    camera.position.z = 50;
}

function animate() {
    requestAnimationFrame(animate);

    sphere.rotation.y += 0.01;
    sphere.rotation.x += 0.01;

    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
animate();
