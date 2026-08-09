import * as THREE from 'three';
document.addEventListener('touchmove', function (e) {
  e.preventDefault();
}, { passive: false });

for(let i = 0;i<10;i++){
    
    let div = document.createElement("div");
    let windowWidth = window.innerWidth;
    let edge = Math.floor(Math.random()*50)/100*windowWidth;
    div.style.cssText = `
        position:absolute;
        width:${edge}px;
        height:${edge}px;
        top:${Math.floor(Math.random()*100)}%;
        left:${Math.floor(Math.random()*100)}%;
        border: .5mm solid white;
    `;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, 1, 0.1, 1000 );


    const renderer = new THREE.WebGLRenderer();
    console.log(div.style.width);
    renderer.setSize( edge,edge);
    div.appendChild( renderer.domElement );

    document.body.append(div);

    

    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 5;

    let xFactor = Math.random()*1000-500;
    let yFactor = Math.random()*1000-500;
    console.log(xFactor,yFactor);
    function animate( time ) {
        
        cube.rotation.x = time / xFactor;
        cube.rotation.y = time / yFactor;
        renderer.render( scene, camera );
    }
    renderer.setAnimationLoop( animate );
    
}

function autoRefresh() {
        window.location = window.location.href;
    }
setInterval(autoRefresh, 1000);
