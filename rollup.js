const path = require('path');
const rollup = require('rollup');
const uglify = require('rollup-plugin-uglify-es');

async function build() {
    const bundle = await rollup.rollup({
        input: path.join(__dirname,'/src/tornis.js'),
        plugins: [
            uglify()
        ]
    });

    await bundle.write({
        format: 'umd',
        name: 'tornis',
        file: path.join(__dirname, '/dist/tornis.js')
    });
};

build();