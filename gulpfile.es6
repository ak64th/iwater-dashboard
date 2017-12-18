/* eslint-env node */
import autoprefixer from 'gulp-autoprefixer';
import buffer from 'vinyl-buffer';
import Browserify from 'browserify';
import {create as createBrowserSync} from 'browser-sync';
import cssnano from 'gulp-cssnano';
import data from 'gulp-data';
import del from 'del';
import eyeglass from 'eyeglass';
import favicons from 'gulp-favicons';
import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';
import gutil from 'gulp-util';
import image from 'gulp-image';
import MockAPI from 'mock-api-middleware';
import nunjucksRender from 'gulp-nunjucks-render';
import path from 'path';
import prettify from 'gulp-jsbeautifier';
import rename from 'gulp-rename';
import sass from 'gulp-sass';
import size from 'gulp-size';
import source from 'vinyl-source-stream';
import sourceMaps from 'gulp-sourcemaps';
import smith from 'gulp.spritesmith';
import uglify from 'gulp-uglify';
import watchify from 'watchify';

const browserSync = createBrowserSync();

let PATH = {
    APP: './app',
    DIST: './dist',
};

PATH.TEMPLATES = `${PATH.APP}/templates`;
PATH.SCRIPTS = `${PATH.APP}/scripts`;
PATH.STYLES = `${PATH.APP}/styles`;
PATH.IMAGES = `${PATH.APP}/images`;
PATH.SPRITES = `${PATH.IMAGES}/sprites`;
PATH.JS = `${PATH.DIST}/js`;
PATH.CSS = `${PATH.DIST}/css`;
PATH.DIST_IMAGES = `${PATH.DIST}/images`;

gulp.task('clean', () => del([`${PATH.DIST}/**/*`]));

gulp.task('html', () => {
    return gulp.src(`${PATH.TEMPLATES}/!(_)*.njk`)
        .pipe(
            data((file) => Object.assign({
                bodyClass: path.basename(file.path, '.njk'),
            }))
        )
        .pipe(
            nunjucksRender({
                path: PATH.TEMPLATES,
            })
        )
        .pipe(prettify({indent_size: 2}))
        .pipe(gulp.dest(PATH.DIST));
});

gulp.task('reload-html', ['html'], () => browserSync.reload());

gulp.task('vendor-scripts', () => {
    const b = new Browserify({
        debug: true,
        entries: `${PATH.SCRIPTS}/vendor.js`,
    });
    return b.bundle()
        .pipe(source('vendor.js'))
        .pipe(buffer())
        .pipe(sourceMaps.init({loadMaps: true}))
        .pipe(sourceMaps.write('./'))
        .pipe(gulp.dest(PATH.JS));
});

const bundleScripts = (watch = false) => {
    let b;
    let opts = {
        debug: true,
        standalone: 'TahoeBI',
        entries: `${PATH.SCRIPTS}/app.js`,
    };
    const _bundle = (b) => {
        return b
            .bundle().on('error', (error) => {
                gutil.log(error.toString());
                browserSync.notify('Browserify Error');
                return b.emit('end');
            })
            .pipe(source('tahoe-bi.js'))
            .pipe(buffer())
            .pipe(sourceMaps.init({loadMaps: true}))
            .pipe(sourceMaps.write('./'))
            .pipe(gulp.dest(PATH.JS))
            .pipe(browserSync.stream());
    };
    if (watch) {
        b = watchify(new Browserify(
            Object.assign({}, watchify.args, opts)
        ));
        b.on('log', gutil.log);
        b.on('update', () => {
            _bundle(b);
            browserSync.notify('Browserify Update');
        });
    } else {
        b = new Browserify(opts);
    }
    return _bundle(b);
};

gulp.task('scripts', () => bundleScripts());
gulp.task('watch-scripts', () => bundleScripts(true));

gulp.task('style', () => {
    return gulp.src(`${PATH.STYLES}/app.scss`)
        .pipe(sourceMaps.init())
        .pipe(sass(eyeglass()))
        .on('error', sass.logError)
        .pipe(autoprefixer())
        .pipe(rename('tahoe-bi.css'))
        .pipe(sourceMaps.write('./'))
        .pipe(gulp.dest(PATH.CSS))
        .pipe(browserSync.stream());
});

gulp.task('image', () => {
    return gulp.src(`${PATH.IMAGES}/*.{jpg,png}`)
        .pipe(image())
        .pipe(gulp.dest(PATH.DIST_IMAGES));
});

gulp.task('sprite', () => {
    const spriteData = gulp.src(`${PATH.SPRITES}/*.png`)
        .pipe(smith({
            imgName: '../images/sprite.png',
            cssName: 'sprite.css',
        }));
    spriteData.css.pipe(gulp.dest(PATH.CSS));
    spriteData.img.pipe(buffer())
        .pipe(image())
        .pipe(gulp.dest(PATH.DIST_IMAGES));
    return spriteData;
});

gulp.task('favicon', () => {
    return gulp.src(`${PATH.APP}/images/drop.png`)
        .pipe(favicons({
            appName: 'Tahoe BI',
            appDescription: 'Tahoe water purifier BI module',
            developerName: 'Elmer Yu',
            developerURL: 'https://github.com/ak64th/iwater-dashboard',
            background: '#fff',
            path: '/',
            url: 'http://zen.iwater.com',
            version: 1.0,
            logging: false,
            online: false,
            html: false,
            pipeHTML: false,
            replace: false,
            icons: {
                'favicons': true,
                'android': false,
                'appleIcon': false,
                'appleStartup': false,
                'coast': false,
                'firefox': false,
                'windows': false,
                'yandex': false,
            },
        })).on('error', gutil.log)
        .pipe(image())
        .pipe(gulp.dest(PATH.DIST));
});

gulp.task('clean-map', () => del([`${PATH.DIST}/**/*.map`]));

gulp.task('min-scripts', ['clean-map'], () => {
    return gulp.src([`${PATH.JS}/*.js`, `!${PATH.JS}/*.min.js`])
        .pipe(sourceMaps.init({loadMaps: false}))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(size({title: 'js', showFiles: true}))
        .pipe(sourceMaps.write('./'))
        .pipe(gulp.dest(PATH.JS));
});

gulp.task('min-styles', ['clean-map'], () => {
    return gulp.src([`${PATH.CSS}/*.css`, `!${PATH.CSS}/*.min.css`])
        .pipe(sourceMaps.init({loadMaps: false}))
        .pipe(rename({suffix: '.min'}))
        .pipe(cssnano())
        .pipe(size({title: 'css', showFiles: true}))
        .pipe(sourceMaps.write('./'))
        .pipe(gulp.dest(PATH.CSS));
});

gulp.task('build',
    gulpSequence(
        'clean',
        'vendor-scripts',
        ['html', 'style', 'scripts'],
        ['image', 'sprite', 'favicon']
    )
);

gulp.task('compress', gulpSequence(
    'build',
    ['min-scripts', 'min-styles']
));

gulp.task('watch', ['html', 'style', 'watch-scripts'], () => {
    gulp.watch(`${PATH.TEMPLATES}/*.{njk,html}`, ['reload-html']);
    gulp.watch(`${PATH.STYLES}/**/*.{scss,sass}`, ['style']);
});

gulp.task('server', ['watch'], () => {
    browserSync.init({
        open: false,
        server: {baseDir: PATH.DIST},
        middleware: [
            new MockAPI('/mock', {mockPath: './mocks/'}),
        ],
    });
});

gulp.task('default', ['server']);
