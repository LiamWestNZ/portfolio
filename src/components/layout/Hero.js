import React ,{useRef, useMemo} from 'react';
import {Canvas, useFrame} from '@react-three/fiber';
import * as THREE from 'three';







export function Stars(){
    let group = useRef()
    let theta = 0
    useFrame(() => {
        const r = 5 * Math.sin(THREE.Math.degToRad((theta += 0.1)))
        const s = Math.cos(THREE.Math.degToRad(theta * 2))
        group.current.rotation.set(r, r, r)
        group.current.scale.set(s, s, s)
    })
    
    const [geo, mat, coords] = useMemo(() => {
        const geo = new THREE.SphereBufferGeometry(1, 10, 10)
        const mat = new THREE.MeshBasicMaterial({ color: new THREE.Color('lightblue'), transparent: true })
        const coords = new Array(2000).fill().map(i => [Math.random() * 800 - 400, Math.random() * 800 - 400, Math.random() * 800 - 400])
        return [geo, mat, coords]
      }, [])
    
    
    return (
        <group ref={group} >
        {coords.map(([p1, p2, p3], i) => (
            <mesh key={i} geometry={geo} material={mat} position={[p1, p2, p3]} />
        ))}
        </group>
    )
}
export default Stars;