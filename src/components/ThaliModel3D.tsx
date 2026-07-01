'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// Configure the useGLTF loader to use Draco decompression decoder from standard CDN
try {
  useGLTF.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/');
} catch (e) {
  console.warn('Draco decoder path failed to set or already initialized', e);
}

interface ThaliModel3DProps {
  neonColor: 'amber' | 'blue';
  itemId: string;
}

export const ThaliModel3D: React.FC<ThaliModel3DProps> = ({ neonColor, itemId }) => {
  const groupRef = useRef<THREE.Group>(null);

  // Slow continuous rotation loop
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.35;
      // Subtle float up and down
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 1.2) * 0.12 - 0.2;
    }
  });

  const accentColor = '#FF5400'; // Hot orange branding highlight

  const isFish = itemId.includes('fish');
  const isVeg = itemId.includes('veg') && !itemId.includes('non');

  // Realistic color palette for traditional Indian gravies
  // Index 0: Main curry, 1: Dal Tadka, 2: Dahi Baingan/Subji, 3: Special Gravy, 4: White Raita/Curd
  const bowlCurryColors = isFish 
    ? ['#E65100', '#FFAB00', '#2E7D32', '#BF360C', '#F5F5F5'] // Fish curry orange, yellow dal, green subji, red mutton gravy, raita
    : isVeg
      ? ['#2E7D32', '#FFC107', '#D84315', '#E65100', '#F5F5F5'] // Green veg, yellow dal, paneer orange, mix subji, raita
      : ['#BF360C', '#FFC107', '#E65100', '#3E2723', '#F5F5F5']; // Chicken red-brown, yellow dal, orange butter paneer, dark mutton gravy, raita

  return (
    <group ref={groupRef} scale={1.45} position={[0, -0.15, 0]}>
      
      {/* 1. Main Highly Polished Stainless Steel Thali Tray */}
      <mesh castShadow receiveShadow position={[0, -0.05, 0]}>
        <cylinderGeometry args={[2, 2.05, 0.1, 64]} />
        <meshStandardMaterial 
          color="#E5E7EB" // Clean steel
          roughness={0.08} 
          metalness={0.95} 
          envMapIntensity={2.0}
        />
      </mesh>

      {/* Plate Lip Glow Ring (Branding Orange) */}
      <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.97, 2.0, 64]} />
        <meshBasicMaterial color={accentColor} side={THREE.DoubleSide} transparent opacity={0.6} />
      </mesh>

      {/* 2. Steamed Basmati Rice Mound (Center) */}
      <group position={[0, 0.01, 0]}>
        {/* Rice Dome */}
        <mesh castShadow position={[0, 0.08, 0]}>
          <sphereGeometry args={[0.72, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial 
            color="#FAFAFA" 
            roughness={0.9} 
            metalness={0.0} 
          />
        </mesh>

        {/* Scattered Realistic Cumin Seeds (Jeera) on Rice */}
        {[
          [0.15, 0.65, 0.2, 0.5, 0.3],
          [-0.2, 0.68, 0.1, -0.4, 0.8],
          [0.3, 0.55, -0.3, 0.8, -0.2],
          [-0.35, 0.58, -0.2, 0.2, -0.9],
          [0.05, 0.72, -0.05, 1.2, 0.4],
          [-0.1, 0.64, 0.3, -0.8, -0.5],
          [0.4, 0.48, 0.25, 0.3, 1.1],
          [-0.45, 0.45, 0.15, 0.6, -1.2]
        ].map((pos, idx) => (
          <mesh 
            key={idx} 
            position={[pos[0], pos[1], pos[2]]} 
            rotation={[pos[3], pos[4], 0.2]}
            castShadow
          >
            <boxGeometry args={[0.04, 0.015, 0.11]} />
            <meshStandardMaterial color="#4E342E" roughness={0.9} />
          </mesh>
        ))}
        
        {/* Warm spot glow */}
        <pointLight color="#FF9E00" intensity={0.3} distance={1.2} position={[0, 0.4, 0]} />
      </group>

      {/* 3. Outer Glowing Katoris (Steel Bowls) and Delicious Curries */}
      {[0, 1, 2, 3, 4].map((index) => {
        const angle = (index * (Math.PI * 2)) / 5;
        const radius = 1.35;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;

        return (
          <group key={index} position={[x, 0.01, z]}>
            {/* Stainless Steel Bowl */}
            <mesh castShadow position={[0, 0.08, 0]}>
              <cylinderGeometry args={[0.42, 0.35, 0.22, 24]} />
              <meshStandardMaterial color="#D1D5DB" roughness={0.1} metalness={0.9} />
            </mesh>

            {/* Bowl Glow Rim */}
            <mesh position={[0, 0.191, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <ringGeometry args={[0.41, 0.42, 24]} />
              <meshBasicMaterial color={accentColor} side={THREE.DoubleSide} transparent opacity={0.2} />
            </mesh>

            {/* Tasty Curry Surface */}
            <mesh position={[0, 0.17, 0]}>
              <cylinderGeometry args={[0.39, 0.39, 0.02, 24]} />
              <meshStandardMaterial 
                color={bowlCurryColors[index]} 
                roughness={0.15}
                metalness={0.0}
              />
            </mesh>

            {/* Injected Procedural Culinary Garnish/Details */}
            {index === 1 && ( // Yellow Dal: Red Chilli garnish
              <mesh position={[0.05, 0.185, -0.05]} rotation={[0.1, 0.4, 0]}>
                <boxGeometry args={[0.12, 0.01, 0.03]} />
                <meshStandardMaterial color="#B71C1C" roughness={0.8} />
              </mesh>
            )}

            {index === 0 && !isFish && ( // Green Veg Paneer: White paneer blocks
              <group position={[0, 0.17, 0]}>
                <mesh position={[-0.1, 0.03, 0.05]} rotation={[0, 0.2, 0]}>
                  <boxGeometry args={[0.12, 0.08, 0.12]} />
                  <meshStandardMaterial color="#FFFFFF" roughness={0.9} />
                </mesh>
                <mesh position={[0.1, 0.02, -0.1]} rotation={[0.2, -0.4, 0.1]}>
                  <boxGeometry args={[0.11, 0.07, 0.11]} />
                  <meshStandardMaterial color="#FAFAFA" roughness={0.9} />
                </mesh>
              </group>
            )}

            {index === 3 && ( // Rich Orange Gravy: Melting butter cube
              <mesh position={[-0.05, 0.185, 0.05]} rotation={[0, 0.3, 0.1]} castShadow>
                <boxGeometry args={[0.08, 0.05, 0.08]} />
                <meshStandardMaterial color="#FFF9C4" roughness={0.4} />
              </mesh>
            )}
          </group>
        );
      })}

      {/* 4. Fresh Hot Chapatis (Toasted Spots on side) */}
      <group position={[-0.8, 0.05, 0.9]} rotation={[0.08, Math.PI / 6, 0.1]}>
        {/* Chapati 1 */}
        <mesh castShadow position={[0, 0.05, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.13, 0.13, 1.2, 16]} />
          <meshStandardMaterial color="#EEDCA5" roughness={0.85} metalness={0.0} />
        </mesh>
        
        {/* Toasted Brown Spot on Chapati */}
        <mesh position={[0.131, 0.1, 0.2]} rotation={[0, Math.PI / 2, 0]}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshStandardMaterial color="#5D4037" roughness={0.9} />
        </mesh>
        <mesh position={[0.129, -0.1, -0.2]} rotation={[0, Math.PI / 2, 0]}>
          <sphereGeometry args={[0.035, 8, 8]} />
          <meshStandardMaterial color="#4E342E" roughness={0.9} />
        </mesh>

        {/* Chapati 2 */}
        <mesh castShadow position={[0.18, 0.12, -0.15]} rotation={[0.05, Math.PI / 8, Math.PI / 2 + 0.1]}>
          <cylinderGeometry args={[0.11, 0.11, 1.1, 16]} />
          <meshStandardMaterial color="#E5D096" roughness={0.85} metalness={0.0} />
        </mesh>
      </group>

      {/* 5. Crunchy Papad (Curved Crispy Sheet with Pepper Spots) */}
      <group position={[0.9, 0.08, -0.7]} rotation={[0.2, -Math.PI / 4, 0.1]}>
        <mesh castShadow>
          <boxGeometry args={[0.9, 0.02, 0.8]} />
          <meshStandardMaterial color="#F0E2BE" roughness={0.9} metalness={0.0} />
        </mesh>
        
        {/* Black pepper cracks on papad */}
        {[-0.2, 0.1, 0.3, -0.3, 0.25, -0.15].map((posZ, i) => (
          <mesh key={i} position={[(i - 1.5) * 0.25, 0.015, posZ]}>
            <sphereGeometry args={[0.018, 4, 4]} />
            <meshStandardMaterial color="#212121" roughness={0.9} />
          </mesh>
        ))}
      </group>

      {/* Soft Ambient Shadow Plane underneath */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.105, 0]} receiveShadow>
        <planeGeometry args={[6, 6]} />
        <shadowMaterial opacity={0.45} />
      </mesh>
    </group>
  );
};
