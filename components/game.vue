<template>
  <div id="renderer">
  </div>
</template>

<script>
    import * as THREE from 'three'
    import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
    var world = {};
    export default {
        data() {
            return {
                acconts:null
             }
        },
        methods:{
           
        },
        mounted() {
            const SCREEN_WIDTH = window.innerWidth;
            const SCREEN_HEIGHT = window.innerHeight;
            const raycaster = new THREE.Raycaster();
            const mouse = new THREE.Vector2();
            
            var gameRender = document.getElementById("renderer");
            const scene = new THREE.Scene();

            scene.background = new THREE.Color('#6BC5D0');
            const camera = new THREE.OrthographicCamera(
                        window.innerWidth / - 16,
                        window.innerWidth / 16,
                        window.innerHeight / 16,
                        window.innerHeight / - 16,
                        -100,
                        500 );

            const renderer = new THREE.WebGLRenderer();
            renderer.setSize( window.innerWidth, window.innerHeight );
            gameRender.appendChild( renderer.domElement );

            camera.lookAt(scene.position);
            camera.rotation.x = 0.7;
            camera.rotation.y = 0.7;
            camera.rotation.z = 0.7;
            camera.position.z = 3.8;
            camera.position.y = -3.3;
            camera.position.x = 3.3;
            camera.zoom = 6.8;
            
            camera.updateProjectionMatrix();

            // GRAMA 
            const geometry = new THREE.BoxGeometry( 1, 1, 0.6 );
            var texture_grama = new THREE.TextureLoader().load( `${ require(`~/static/game/texture04.png`) }` );
            var texture_grama_select = new THREE.TextureLoader().load( `${ require(`~/static/game/texture04-select.png`) }` );
            var texture_grama_face2 = new THREE.TextureLoader().load( `${ require(`~/static/game/texture07.png`) }` );
            var texture_grama_face3 = new THREE.TextureLoader().load( `${ require(`~/static/game/texture06.png`) }` );

            var material_grama_faces = [    new THREE.MeshBasicMaterial({ map: texture_grama_face2 }),
                                            new THREE.MeshBasicMaterial({ map: texture_grama_face2 }),
                                            new THREE.MeshBasicMaterial({ map: texture_grama_face3 }),
                                            new THREE.MeshBasicMaterial({ map: texture_grama_face3 }),
                                            new THREE.MeshBasicMaterial({ map: texture_grama       }),
                                            new THREE.MeshBasicMaterial({ map: texture_grama_face2 })
                                        ];

            var material_grama_selection_faces = [  new THREE.MeshBasicMaterial({ map: texture_grama_face2 }),
                                                    new THREE.MeshBasicMaterial({ map: texture_grama_face2 }),
                                                    new THREE.MeshBasicMaterial({ map: texture_grama_face3 }),
                                                    new THREE.MeshBasicMaterial({ map: texture_grama_face3 }),
                                                    new THREE.MeshBasicMaterial({ map: texture_grama_select}),
                                                    new THREE.MeshBasicMaterial({ map: texture_grama_face2 })
                                                ];
            // Gerar tabuleiro de 8 blocos
            var material_grama = new THREE.MeshFaceMaterial(material_grama_faces);
            let mapLength = 8;
            for(var i = -(mapLength/2); i < (mapLength / 2) ; i++ ){
                for(var j = -(mapLength/2); j < (mapLength/2); j++ ){
                    let cube = new THREE.Mesh( geometry, material_grama );
                    cube.position.x = i;
                    cube.position.y = j;
                    world[cube.uuid] = cube;
                    scene.add( cube );
                }
            }

            renderer.render( scene, camera );
            setInterval(function(){renderer.render( scene, camera );},70)

            

            let selection = (event) => {
                var bounds = gameRender.getBoundingClientRect()
                mouse.x = ( (event.clientX - bounds.left) / gameRender.clientWidth ) * 2 - 1;
                mouse.y = - ( (event.clientY - bounds.top) / gameRender.clientHeight ) * 2 + 1;
                raycaster.setFromCamera( mouse, camera );
                var intersects = raycaster.intersectObjects(scene.children, true);
                console.log(intersects);
                if (intersects.length > 0) {
                    intersects[ 0 ].object.material = material_grama_selection_faces;
                    Object.keys(world).forEach(object=>{
                        if(object != intersects[ 0 ].object.uuid){
                            world[object].material = material_grama;
                        }
                    })
                }
            };

            gameRender.addEventListener('mouseover', selection, false)
            gameRender.addEventListener( 'click', selection, false)
            gameRender.addEventListener( 'mousemove', selection, false)
        }
    }
</script>