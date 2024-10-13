import { Vector3 } from "three";
import { normalizeVec3 } from "./helpers/normalize";

export const FOV = 100;
export const SCALE_FACTOR = 10;
export const CAMERA_POS = new Vector3(0, 0, 3);
export const CONTROLS_OFFSET = normalizeVec3(new Vector3(-15, 35, 0));
export const SCALED_IMAGE_SIZE = normalizeVec3(new Vector3(35, 35, 1));
export const IMAGE_SIZE = normalizeVec3(new Vector3(30, 30, 1));

