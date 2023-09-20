import { NCube } from "../../assets/lib/ncube";

const isElementInViewport = (el) => {
    if (!el) return;
    const rect = el.getBoundingClientRect();
    return rect.top + rect.height >= 0 && rect.bottom - rect.height <= window.innerHeight;
};

const ncubeTo2d = point => {
    const x = 200 + (point[0] * 80 || 0) + (point[2] * 80 / 2 || 0);
    const y = 200 + (point[1] * 80 || 0) - (point[2] * 80 / 2 || 0);
    return [x, y];
}

const draw = (edge, i, svg) => {
    const v1 = [...edge[0]].splice(0, 2);
    const v2 = [...edge[1]].splice(0, 2);

    const p1 = ncubeTo2d(v1);
    const p2 = ncubeTo2d(v2);

    const line = svg.line(...p1, ...p2).id(`l${i}`);
    line.stroke({ width: 1, color: 'white' });
}

const update = (edge, i, svg) => {
    const v1 = [...edge[0]].splice(0, 2);
    const v2 = [...edge[1]].splice(0, 2);

    const p1 = ncubeTo2d(v1);
    const p2 = ncubeTo2d(v2);

    document.querySelector(`#l${i}`).instance.attr({
        x1: p1[0],
        y1: p1[1],
        x2: p2[0],
        y2: p2[1]
    });
}

export const init = (n, el) => {
    const cube = new NCube(n);

    el.innerHTML = '';
    const svg = window.SVG().addTo(el).size(400, 400);
    cube.edges.forEach((edge, i) => draw(edge, i, svg));

    return { cube, svg };
}

export const rotate = (nCube, svg, el) => {
    if (!isElementInViewport(el)) return;
    
    nCube.rotate(1 / Math.PI ** 4.5);
    nCube.edges.forEach((edge, i) => update(edge, i, svg));
};