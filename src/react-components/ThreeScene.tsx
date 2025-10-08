import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

interface ThreeSceneProps {
  className?: string;
}

export const ThreeScene: React.FC<ThreeSceneProps> = ({ className }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const cameraRef = useRef<THREE.PerspectiveCamera>(
    new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  );
  // Removed blobRef as we're not using it anymore
  const clockRef = useRef<THREE.Clock>(new THREE.Clock());
  const buttonsRef = useRef<THREE.Mesh[]>([]);

  // Configuration
  const CONFIG = {
    // Snow Globe
    globe: {
      radius: 6,
      segments: 64,  // Smoother sphere
      opacity: 0.2,  // Slightly more visible wireframe
      wireframe: true
    },
    // Buttons
    buttons: {
      count: 12, // Increased number of buttons
      radius: 0.35, // Larger buttons for better visibility
      minDistance: 1, // Minimum distance from center
      maxDistance: 4, // Maximum distance from center
      speed: 0.3, // Slower movement
      colors: [
        0xff6b6b, // Soft Red (Circle)
        0x4caf50, // Green (Triangle)
        0x42a5f5, // Bright Blue (Cross)
        0xffeb3b, // Bright Yellow (Square)
        0x9c27b0, // Purple (R1)
        0x00bcd4, // Cyan (L1)
        0xf8f8f8, // Off-White (Options)
        0x78909c, // Light Gray (Share)
        0xff9800, // Orange
        0x7e57c2, // Light Purple
        0x26c6da, // Light Teal
        0xff4081  // Pink
      ],
      symbols: ['○', '△', '✕', '□', 'R1', 'L1', 'OPT', 'SHARE', 'L2', 'R2', 'PS', 'TOUCH']
    },
    // Animation
    animation: {
      rotationSpeed: 0.001,
      floatSpeed: 0.5,
      floatAmount: 0.1
    }
  };
  

  // Create snow globe
  const createSnowGlobe = (scene: THREE.Scene) => {
    // Create a transparent sphere to contain the buttons
    const geometry = new THREE.SphereGeometry(
      CONFIG.globe.radius,
      CONFIG.globe.segments,
      CONFIG.globe.segments
    );
    
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: CONFIG.globe.opacity,
      wireframe: CONFIG.globe.wireframe,
      wireframeLinewidth: 2,
      wireframeLinecap: 'round',
      wireframeLinejoin: 'round'
    });
    
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);
    return globe;
  };

  // Create floating button meshes
  const createButtonMeshes = (scene: THREE.Scene) => {
    const buttons: THREE.Mesh[] = [];
    const loader = new FontLoader();
    
    // Create a group to hold all buttons
    const buttonsGroup = new THREE.Group();
    scene.add(buttonsGroup);
    
    // Load font for button text
    loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', (font) => {
      for (let i = 0; i < CONFIG.buttons.count; i++) {
        // Create button base (circle)
        const geometry = new THREE.CircleGeometry(CONFIG.buttons.radius, 32);
        const material = createButtonMaterial(CONFIG.buttons.colors[i % CONFIG.buttons.colors.length]);
        const button = new THREE.Mesh(geometry, material);
        
        // Start position at top of the globe with some randomness
        const x = (Math.random() - 0.5) * CONFIG.globe.radius * 1.5;
        const z = (Math.random() - 0.5) * CONFIG.globe.radius * 1.5;
        const y = CONFIG.globe.radius + Math.random() * 2; // Start above the globe
        
        button.position.set(x, y, z);
        
        // Downward velocity with slight horizontal drift
        const velocity = new THREE.Vector3(
          (Math.random() - 0.5) * 0.02, // Small horizontal drift
          -0.05 - Math.random() * 0.03, // Downward velocity (faster)
          (Math.random() - 0.5) * 0.02  // Small depth drift
        );
        
        // Add text to button if font loaded
        if (font) {
          const textGeometry = new TextGeometry(CONFIG.buttons.symbols[i % CONFIG.buttons.symbols.length], {
            font: font,
            size: CONFIG.buttons.radius * 0.6,
            height: 0.05,
          });
          
          const textMaterial = new THREE.MeshBasicMaterial({ 
            color: 0x000000,
            transparent: true,
            opacity: 0.9
          });
          
          const text = new THREE.Mesh(textGeometry, textMaterial);
          
          // Center the text on the button
          textGeometry.computeBoundingBox();
          const textWidth = textGeometry.boundingBox!.max.x - textGeometry.boundingBox!.min.x;
          const textHeight = textGeometry.boundingBox!.max.y - textGeometry.boundingBox!.min.y;
          text.position.set(-textWidth / 2, -textHeight / 2, 0.1);
          
          // Add text as a child of the button
          button.add(text);
        }
        
        // Add some random rotation
        button.rotation.set(
          Math.random() * Math.PI * 2,
          Math.random() * Math.PI * 2,
          Math.random() * Math.PI * 2
        );
        
        // Add custom properties for animation
        (button as any).velocity = velocity;
        (button as any).timeOffset = Math.random() * Math.PI * 2;
        
        // Add button to the scene and store reference
        buttonsGroup.add(button);
        buttons.push(button);
      }
    });
    
    return buttons;
  };

  // Create button material
  const createButtonMaterial = (color: number) => {
    return new THREE.MeshPhongMaterial({
      color: color,
      transparent: true,
      opacity: 0.95, // More opaque
      shininess: 150, // More shine
      specular: 0xffffff, // Brighter specular highlight
      emissive: color, // Glow with button color
      emissiveIntensity: 0.5, // Stronger glow
      flatShading: false // Smoother appearance
    });
  };

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = null; // Make background transparent
    sceneRef.current = scene;
    

    // Camera setup
    cameraRef.current.position.set(0, 0, 10); // Move camera back further
    cameraRef.current.lookAt(0, 0, 0);
    cameraRef.current.fov = 60; // Wider field of view
    cameraRef.current.updateProjectionMatrix();

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    mountRef.current.appendChild(renderer.domElement);

    // Create snow globe
    const globe = createSnowGlobe(scene);
    
    // Create floating buttons
    buttonsRef.current = createButtonMeshes(scene);
    

    // Add ambient light for overall illumination
    const ambientLight = new THREE.AmbientLight(0x888888, 1.5); // Brighter ambient light
    scene.add(ambientLight);

    // Add directional light for highlights
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.8);
    directionalLight.position.set(2, 3, 4);
    scene.add(directionalLight);

    // Add point lights for dynamic lighting
    const pointLight1 = new THREE.PointLight(0xffc107, 4.0, 40, 1);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x69b4ff, 3.5, 40, 1);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);
    
    // Add a fill light from below
    const fillLight = new THREE.DirectionalLight(0xffffff, 1.2);
    fillLight.position.set(0, -2, 0);
    scene.add(fillLight);
    
    // Add a rim light for better edge definition
    const rimLight = new THREE.DirectionalLight(0xffffff, 1.5);
    rimLight.position.set(0, 0, 5);
    scene.add(rimLight);

    // Animation variables
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;

    // Mouse movement handler
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = (event.clientY / window.innerHeight) * 2 - 1;
      
      // Map mouse position to rotation targets
      targetRotationY = mouseX * 0.5;
      targetRotationX = mouseY * 0.5;
    };

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      const time = clockRef.current.getElapsedTime();
      
      // Smooth rotation towards target
      currentRotationX += (targetRotationX - currentRotationX) * 0.05;
      currentRotationY += (targetRotationY - currentRotationY) * 0.05;
      
      // Apply rotation to the scene
      scene.rotation.x = currentRotationX + time * 0.1;
      scene.rotation.y = currentRotationY + time * 0.15;
      
      // Animate point lights to create a subtle moving light effect
      if (pointLight1) {
        pointLight1.position.x = Math.sin(time * 0.1) * 8;
        pointLight1.position.z = Math.cos(time * 0.15) * 8;
      }
      if (pointLight2) {
        pointLight2.position.x = Math.cos(time * 0.2) * 6;
        pointLight2.position.z = Math.sin(time * 0.1) * 6;
      }
      
      // Animate buttons with floating and bouncing effect
      buttonsRef.current.forEach((button) => {
        if (button) {
          // Get the button's velocity
          const velocity = (button as any).velocity as THREE.Vector3;
          
          // Update position based on velocity
          button.position.add(velocity);
          
          // Check if button has fallen below the globe
          if (button.position.y < -CONFIG.globe.radius - 2) {
            // Reset to top with new random position
            button.position.x = (Math.random() - 0.5) * CONFIG.globe.radius * 1.5;
            button.position.y = CONFIG.globe.radius + Math.random() * 2;
            button.position.z = (Math.random() - 0.5) * CONFIG.globe.radius * 1.5;
            
            // Reset velocity
            velocity.set(
              (Math.random() - 0.5) * 0.02,
              -0.05 - Math.random() * 0.03,
              (Math.random() - 0.5) * 0.02
            );
          }
          
          // Add slight gravity acceleration
          velocity.y -= 0.001;
          
          // Rotate slowly
          button.rotation.x += 0.001;
          button.rotation.y += 0.002;
          button.rotation.z += 0.0015;
          
          // Slight pulsing effect
          const scale = 1 + Math.sin(time * 0.5 + (button as any).timeOffset) * 0.05;
          button.scale.set(scale, scale, scale);
        }
      });
      
      if (cameraRef.current) {
        renderer.render(scene, cameraRef.current);
      }
    };

    // Handle window resize
    const handleResize = () => {
      if (cameraRef.current && renderer) {
        cameraRef.current.aspect = window.innerWidth / window.innerHeight;
        cameraRef.current.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Start animation loop
    animate();

    // Cleanup function
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      if (mountRef.current && renderer.domElement && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose of Three.js objects
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose());
          } else if (object.material) {
            object.material.dispose();
          }
        }
      });
      
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={className}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        opacity: 1,
        transition: 'opacity 1s ease-in-out',
        pointerEvents: 'none',
        backgroundColor: '#0f0f23', // Fallback background
      }}
    />
  );
};
