import { Vector3 } from "three";
import { FOV, SCALE_FACTOR } from "../constants";

export const normalizeVec3 = (val: Vector3) => {
    const scale = FOV / SCALE_FACTOR;
    const result = new Vector3().copy(val).divideScalar(scale);

    return result;
}