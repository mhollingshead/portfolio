const ncubeTo2d = point => {
    const x = 200 + (point[0] * 80 || 0) + (point[2] * 80 / 2 || 0);
    const y = 200 + (point[1] * 80 || 0) - (point[2] * 80 / 2 || 0);
    return [x, y];
}

const draw = (edge, cube) => {
    const v1 = [...edge[0]].splice(0, 2);
    const v2 = [...edge[1]].splice(0, 2);

    const p1 = ncubeTo2d(v1);
    const p2 = ncubeTo2d(v2);

    const line = svg.line(...p1, ...p2);
    line.stroke({ width: 1, color: 'white' })
}

let ncubeRotationInterval, svg, n = 5;

const createNCube = () => {
    if (ncubeRotationInterval) clearInterval(ncubeRotationInterval);

    svg.clear();

    const cube = new NCube(n);

    const interval = setInterval(() => {
        if (!isElementInViewport(document.querySelector('.ncube-cube'))) return;
        try {
            svg.clear();
            cube.rotate(1 / Math.PI ** 4);
            cube.edges.forEach(edge => draw(edge, cube));
        } catch (e) {
            console.log(e);
            clearInterval(ncubeRotationInterval || interval);
        }
    }, 25);

    ncubeRotationInterval = interval;
};

svg = window.SVG().addTo(document.querySelector('.ncube-cube')).size(400, 400);

createNCube();

document.querySelector('.ncube-form input').addEventListener('input', e => {
    n = parseInt(e.target.value);
    document.querySelector('#n-value').innerHTML = n;
    createNCube();
});