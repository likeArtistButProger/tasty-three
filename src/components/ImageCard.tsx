import { FC } from "react";
import { useTexture } from "@react-three/drei";
import { a, useSpring } from '@react-spring/three';
import { ThreeEvent } from "@react-three/fiber";
import { IMAGE_SIZE, SCALED_IMAGE_SIZE } from "../constants";

interface ImageCardProps {
    url: string,
    name:string,
    index: number,
    selected: boolean;
    onClick: (event: ThreeEvent<MouseEvent>) => void
}

export const ImageCard: FC<ImageCardProps> = ({ url, index, selected, onClick }) => {
  const texture = useTexture(url);
  const { scale } = useSpring({
    scale: selected ? SCALED_IMAGE_SIZE : IMAGE_SIZE,
    config: { tension: 200, friction: 12 },
  });

  return (
    <a.mesh
      position={[index * 3.2, 0, 0]}
      scale={scale}
      onClick={onClick}
    >
      <planeGeometry args={[1, 1.5]} />
      <meshBasicMaterial map={texture} />
    </a.mesh>
  );
};
