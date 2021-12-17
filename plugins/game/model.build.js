import * as THREE from 'three';
import TipoTextura from './enum/tipoTextura.enum.js';
import TipoGeometria from './enum/tipoGeometry.enum.js';
import Grama from './model/Grama.model.js';

var cacheMaterial = {};


export default class Model{

    static build( entity, loader, scopo ){
        
        if(typeof entity == "undefined")return null;

        let geometria = Model.buildGeometria(entity, loader, scopo);
        let material  = Model.buildMaterial(entity, loader, scopo);

        let figure = new THREE.Mesh( geometria, material );
        figure.position.x = entity.position.x;
        figure.position.y = entity.position.y;
        figure.position.z = entity.position.z;
        figure.rotation.x += entity.rotation.x;
        figure.rotation.y += entity.rotation.y;

        scopo.world[figure.id] = { figure: figure, entity };

        scopo.sena.add(figure);

    }
    static buildAll( entitys, loader, scopo ){
        // Vazio
        if(entitys.length < 1)return null;

        let entity    = entitys[0];
        let geometria = Model.buildGeometria(entity, loader, scopo);
        let material  = Model.buildMaterial(entity, loader, scopo);

        entitys.forEach(entity=>{
            
            let figure = new THREE.Mesh( geometria, material );
            
            figure.position.x = entity.position.x;
            figure.position.y = entity.position.y;
            figure.position.z = entity.position.z;

            figure.rotation.x += entity.rotation.x;
            figure.rotation.y += entity.rotation.y;

            scopo.world[figure.id] = { figure: figure, entity };
            scopo.sena.add(figure); 
        })
        
      
    }


    static buildGeometria(entity, loader, scopo){

        let geometria = {};

        switch(entity.geometria.tipo){
            case TipoGeometria.CAIXA:
                geometria = new THREE.BoxGeometry(  entity.geometria.data[0],
                                                    entity.geometria.data[1],
                                                    entity.geometria.data[2] );
                break;
            case TipoGeometria.PLANO:
                geometria = new THREE.PlaneGeometry(entity.geometria.data[0],
                                                    entity.geometria.data[1])
                break;
            default:
                console.log("Tipo de textura nao encotrado");
        }

        return geometria;
    }

    static buildMaterial(entity, loader, scopo){
        let material = {};

        if(typeof cacheMaterial[entity.constructor.name] != "undefined")return cacheMaterial[entity.constructor.name].material;

        switch(entity.textura.tipo){
            case TipoTextura.FACE:

                let faces = [];
                entity.textura.data.forEach(face=>{
                    faces.push(new THREE.MeshBasicMaterial({ 
                        map: loader.load( require(`~/static/${face}`) )
                    }))
                })
                material = new THREE.MeshFaceMaterial(faces);

                break;

            case TipoTextura.BASIC:

                material = new THREE.MeshBasicMaterial({
                    map: loader.load( require(`~/static/${entity.textura.data}`) ),
                    opacity: 0.85,
                    transparent: true,
                });

                break;

            default:
                console.log("Tipo de textura nao encotrado");
        }
        
        cacheMaterial[entity.constructor.name] = { material };

        return material;
    }
    static buildMaterialSelecionavel(entity, loader, scopo){
        let material = {};

        if(typeof cacheMaterial[entity.constructor.name] != "undefined" &&
           typeof cacheMaterial[entity.constructor.name].materiaSelecionavel != "undefined" )return cacheMaterial[entity.constructor.name].materiaSelecionavel;


        switch(entity.textura.tipo){
            case TipoTextura.FACE:

                let faces = [];
                entity.textura.dataSelecionado.forEach(face=>{
                    faces.push(new THREE.MeshBasicMaterial({ 
                        map: loader.load( require(`~/static/${face}`) )
                    }))
                })
                material = new THREE.MeshFaceMaterial(faces);

                break;

            case TipoTextura.BASIC:

                material = new THREE.MeshBasicMaterial({
                    map: loader.load( require(`~/static/${entity.textura.data}`) ),
                    opacity: 0.75,
                    transparent: true,
                });

                break;

            default:
                console.log("Tipo de textura nao encotrado");
        }

        cacheMaterial[entity.constructor.name].materiaSelecionavel = material;
        
        return material;
    }
}
