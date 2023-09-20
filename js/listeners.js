document.querySelector('#theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('light');
    document.body.classList.toggle('dark');
});

document.addEventListener('mousemove', e => {
    if (!isElementInViewport(document.querySelector('.graphic-wrapper'))) return;
    const mouse = {
        x: e.clientX,
        y: e.clientY
    }
    const eyeElement = document.querySelector('#eyes');
    const eyeWidth = eyeElement.getBoundingClientRect().width;
    const eyeHeight = eyeElement.getBoundingClientRect().height;
    const pupils = {
        x: eyeElement.getBoundingClientRect().left + 0.45 * eyeWidth,
        y: eyeElement.getBoundingClientRect().top + 0.3 * eyeHeight
    }

    const offsetX = mouse.x - pupils.x;
    const offsetY = mouse.y - pupils.y;

    const [minX, maxX] = [0 - pupils.x, window.innerWidth - pupils.x];
    const [minY, maxY] = [0 - pupils.y, window.innerHeight - pupils.y];

    let transformX = 0;
    let transformY = 0;

    if (offsetX < 0) {
        transformX = offsetX / minX * -1;
    } else {
        transformX = offsetX / maxX;
    }
    if (offsetY < 0) {
        transformY = offsetY / minY * -1;
    } else {
        transformY = offsetY / maxY;
    }

    const xThreshold = 4;
    const yThreshold = 2;

    const shouldTransformY = false;

    eyeElement.style.transform = `translateX(${xThreshold * transformX}px) ${shouldTransformY ? `translateY(${yThreshold * transformY}px)` : ''}`
});