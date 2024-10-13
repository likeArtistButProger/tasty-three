import { FC, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { Token } from '../model/token';
import { ImageCard } from '../components/ImageCard';
import { CAMERA_POS, CONTROLS_OFFSET, FOV } from '../constants';

interface GalleryProps {
    tokens: Token[];
}

export const Gallery: FC<GalleryProps> = ({ tokens }) => {
  const [selectedToken, setSelectedToken] = useState<number|null>(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setSelectedToken(selectedToken === index ? null : index);
  };

  const handleSlide = (direction: number) => {
    setSlideIndex((prev) => prev + direction);
  };

  return (
    <Canvas style={{ height: "400px" }} camera={{ position: CAMERA_POS, fov: FOV }}>
      <ambientLight />
      <group position={[-slideIndex * 2.5, 0, 0]}>
        {tokens.map((token, index) => (
          <ImageCard
            key={token.url}
            url={token.url}
            name={token.name}
            index={index}
            selected={selectedToken === index}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </group>
      <Html position={CONTROLS_OFFSET}>
        <div className="controls">
          <button onClick={() => handleSlide(-1)}>Previous</button>
          <button onClick={() => handleSlide(1)}>Next</button>
        </div>
      </Html>
    </Canvas>
  );
};