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
    'devicon-ocaml-plain',
];

const to2d = v => [width / 2 + v[0] * 1 + v[2] / 2 * 1 + v[3] / 2 * 1, height / 2 + v[1] - v[2] / 2 + v[3] / 2];

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
                this.logos[i].style.transform = `scale(${1 + perspectiveOffset}) translateX(-50%) translateY(-50%)`;

                if (vertex[2] < 0) {
                    this.logos[i].style.zIndex = 1;
                } else {
                    this.logos[i].style.zIndex = 5;
                }
            }
        })
    }
});

nCube.vertices.forEach((vertex, i) => {
    if (deviconClasses[i]) {
        const logoElement = document.createElement('i');
        logoElement.classList.add('particle');
        logoElement.classList.add(deviconClasses[i]);
        
        const [x, y] = to2d(vertex);
        logoElement.style.left = x + 'px';
        logoElement.style.top = y + 'px';

        if (vertex[2] < 0) {
            logoElement.style.zIndex = 1;
        } else {
            logoElement.style.zIndex = 3;
        }

        document.querySelector('.particles').appendChild(logoElement);
        nCube.logos.push(logoElement);
    }
});

let angle = 0;

const rotate = setInterval(() => {
    if (!isElementInViewport(document.querySelector('.graphic-wrapper'))) return;
    nCube.reset().rotate(angle, [[0, 1], [2, 3], [3, 1]]).updateLogos();
    angle = parseFloat((angle === 6.28 ? 0 : angle + 0.01).toFixed(2));
}, 25);