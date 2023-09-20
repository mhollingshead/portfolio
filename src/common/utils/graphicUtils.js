import { NCube } from '../../assets/lib/ncube';

const [width, height] = [600, 600];

const deviconClasses = [
    'devicon-firebase-plain',
    'devicon-cplusplus-plain',
    'devicon-html5-plain',
    'devicon-docker-plain',
    'devicon-sass-plain',
    'devicon-python-plain',
    'devicon-nodejs-plain',
    'devicon-css3-plain',
    'devicon-vuejs-plain',
    'devicon-javascript-plain',
    'devicon-typescript-plain',
    'devicon-express-original',
    'devicon-graphql-plain',
    'devicon-mysql-plain',
    'devicon-react-plain',
    'devicon-ocaml-plain'
];

export const isElementInViewport = (el) => {
    if (!el) return;
    const rect = el.getBoundingClientRect();
    return rect.top + rect.height >= 0 && rect.bottom - rect.height <= window.innerHeight;
};

const to2d = (v) => [
    width / 2 + v[0] * 1 + (v[2] / 2) * 1 + (v[3] / 2) * 1,
    height / 2 + v[1] - v[2] / 2 + v[3] / 2
];

export const init = () => {
    const nCube = new NCube(4, [-80, 80], {
        logos: [],
        updateLogos: function () {
            this.vertices.forEach((vertex, i) => {
                if (this.logos[i]) {
                    const [x, y] = to2d(vertex);
                    this.logos[i].style.left = x + 'px';
                    this.logos[i].style.top = y + 'px';

                    const perspectiveOffset = 0.1 + vertex[2] / 600;
                    this.logos[i].style.filter = `brightness(${0.8 + perspectiveOffset})`;
                    this.logos[i].style.transform = `scale(${
                        1 + perspectiveOffset
                    }) translateX(-50%) translateY(-50%)`;

                    if (vertex[2] < 0) {
                        this.logos[i].style.zIndex = 1;
                    } else {
                        this.logos[i].style.zIndex = 5;
                    }
                }
            });
        }
    });

    document.querySelector('.Particles').innerHTML = '';

    nCube.vertices.forEach((vertex, i) => {
        if (deviconClasses[i]) {
            const logoElement = document.createElement('i');
            logoElement.classList.add('Particles__particle');
            logoElement.classList.add(deviconClasses[i]);

            const [x, y] = to2d(vertex);
            logoElement.style.left = x + 'px';
            logoElement.style.top = y + 'px';

            if (vertex[2] < 0) {
                logoElement.style.zIndex = 1;
            } else {
                logoElement.style.zIndex = 3;
            }

            document.querySelector('.Particles').appendChild(logoElement);
            nCube.logos.push(logoElement);
        }
    });

    return nCube;
};

export const rotate = (nCube, angle, el) => {
    if (!isElementInViewport(el)) return angle;
    nCube
        .reset()
        .rotate(angle, [
            [0, 1],
            [2, 3],
            [3, 1]
        ])
        .updateLogos();
    return parseFloat((angle === 6.28 ? 0 : angle + 0.008).toFixed(3));
};

export const handleMouseMove = (e, el) => {
    if (!isElementInViewport(el)) return;
    const mouse = {
        x: e.clientX,
        y: e.clientY
    };
    const eyeElement = el;
    const eyeWidth = eyeElement.getBoundingClientRect().width;
    const eyeHeight = eyeElement.getBoundingClientRect().height;
    const pupils = {
        x: eyeElement.getBoundingClientRect().left + 0.45 * eyeWidth,
        y: eyeElement.getBoundingClientRect().top + 0.3 * eyeHeight
    };

    const offsetX = mouse.x - pupils.x;
    const offsetY = mouse.y - pupils.y;

    const [minX, maxX] = [0 - pupils.x, window.innerWidth - pupils.x];
    const [minY, maxY] = [0 - pupils.y, window.innerHeight - pupils.y];

    let transformX = 0;
    let transformY = 0;

    if (offsetX < 0) {
        transformX = (offsetX / minX) * -1;
    } else {
        transformX = offsetX / maxX;
    }
    if (offsetY < 0) {
        transformY = (offsetY / minY) * -1;
    } else {
        transformY = offsetY / maxY;
    }

    const xThreshold = 4;
    const yThreshold = 2;

    const shouldTransformY = false;

    eyeElement.style.transform = `translateX(${xThreshold * transformX}px) ${
        shouldTransformY ? `translateY(${yThreshold * transformY}px)` : ''
    }`;
};
