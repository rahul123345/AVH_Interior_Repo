const marquee = document.getElementById('marquee');
const marqueeContainer = document.getElementById('marqueeContainer');
let isMovingLeft = true;
let position = 0;
const speed = 1; // pixels per frame
const blockCount = 15;
const blockWidth = 50; // 100px width + 20px margin

function duplicateBlocks() {
    const originalBlocks = marquee.innerHTML;
    marquee.innerHTML = originalBlocks + originalBlocks;
}

function animate() {
    if (isMovingLeft) {
        position -= speed;
        if (position <= -blockWidth * blockCount) {
            position += blockWidth * blockCount;
        }
    } else {
        position += speed;
        if (position >= 0) {
            position -= blockWidth * blockCount;
        }
    }

    marquee.style.transform = `translateX(${position}px)`; // Fixed line
    requestAnimationFrame(animate);
}

function changeMarqueeDirection(event) {
    const mouseX = event.clientX;
    const containerRect = marqueeContainer.getBoundingClientRect();
    const containerCenterX = containerRect.left + containerRect.width / 2;

    isMovingLeft = mouseX <= containerCenterX;
}

function resetMarqueeDirection() {
    isMovingLeft = true;
}

marqueeContainer.addEventListener('mousemove', changeMarqueeDirection);
marqueeContainer.addEventListener('mouseleave', resetMarqueeDirection);

duplicateBlocks();
animate();
