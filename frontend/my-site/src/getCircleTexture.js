import * as THREE from "three";

export function getCircleTexture(size = 64) {
    // const canvas = document.createElement("canvas");
    // canvas.width = size;
    // canvas.height = size;

    // const ctx = canvas.getContext("2d");
    // ctx.beginPath();
    // ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    // ctx.fillStyle = "#ffffff";
    // ctx.fill();

    // const texture = new THREE.CanvasTexture(canvas);
    // return texture;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;

    const ctx = canvas.getContext("2d");
    const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    // gradient.addColorStop(0, "rgba(255,255,255,1)");
    // gradient.addColorStop(1, "rgba(255,255,255,0)");
    gradient.addColorStop(0, "rgba(255, 0, 0, 1)");
    gradient.addColorStop(0.3, "rgba(255, 0, 0, 0.5)");
    gradient.addColorStop(1, "rgba(255, 0, 0, 0)");

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    ctx.fill();

  return new THREE.CanvasTexture(canvas);
}