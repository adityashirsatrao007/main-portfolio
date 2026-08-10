import { PerspectiveCamera, useTexture } from '@react-three/drei';
import { useEffect, useState } from 'react';

import { Physics } from '@react-three/rapier';
import Sticker from '@src/components/dom/prefooter/Sticker';
import useIsMobile from '@src/hooks/useIsMobile';
import { A } from '@src/constants/assets';
import { useThree } from '@react-three/fiber';

function Lighting() {
  return (
    <>
      <ambientLight intensity={1.3} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <directionalLight position={[-5, 5, 5]} intensity={1} />
      <directionalLight position={[0, 5, -5]} intensity={1} />
    </>
  );
}

function useFruitSpawner(viewport, textures, slicedTextures, isMobile) {
  const [fruits, setFruits] = useState([]);

  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const spawnFruitInterval = (interval = 1.5) => {
    const intervalTimer = setInterval(() => {
      const width = viewport.width / 2 - 1;

      setFruits((prevFruits) => {
        const newFruits = Array.from({ length: getRandomNumber(1, 6) }, (_, i) => {
          const randomX = getRandomNumber(width * -1, width);
          const randomImage = getRandomNumber(0, textures.length - 1);

          return <Sticker key={`${Date.now()}-${i}`} positionX={randomX} image={textures[randomImage]} imageSliced={slicedTextures[randomImage]} />;
        });

        return [...prevFruits, ...newFruits];
      });
    }, interval * 1000);

    return intervalTimer;
  };

  useEffect(() => {
    const spawnInterval = spawnFruitInterval(isMobile ? 5 : 3);
    return () => {
      clearInterval(spawnInterval);
    };
  }, [isMobile]);

  return fruits;
}

function FruitNinja() {
  const { viewport } = useThree();
  const isMobile = useIsMobile();
  const textures = useTexture([
    A('/logos/threejs.webp'),
    A('/logos/bug.webp'),
    A('/logos/docker.webp'),
    A('/logos/git.webp'),
    A('/logos/gsap.webp'),
    A('/logos/nodejs.webp'),
    A('/logos/npm.webp'),
    A('/logos/react.webp'),
    A('/logos/typescript.webp'),
    A('/logos/vscode.webp'),
  ]);
  const slicedTextures = useTexture([
    A('/logos/sliced/threejsSliced.webp'),
    A('/logos/sliced/bugSliced.webp'),
    A('/logos/sliced/dockerSliced.webp'),
    A('/logos/sliced/gitSliced.webp'),
    A('/logos/sliced/gsapSliced.webp'),
    A('/logos/sliced/nodejsSliced.webp'),
    A('/logos/sliced/npmSliced.webp'),
    A('/logos/sliced/reactSliced.webp'),
    A('/logos/sliced/typescriptSliced.webp'),
    A('/logos/sliced/vscodeSliced.webp'),
  ]);
  const fruits = useFruitSpawner(viewport, textures, slicedTextures, isMobile);

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      <Lighting />
      <Physics interpolate timeStep={1 / 60} gravity={[0, -15, 0]} colliders={false}>
        {fruits}
      </Physics>
    </>
  );
}

export default FruitNinja;
