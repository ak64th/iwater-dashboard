import autoprefixer from 'gulp-autoprefixer';
import {create as createBrowserSync} from 'browser-sync';
import buffer from 'vinyl-buffer';
import del from 'del';
import eyeglass from 'eyeglass';
import gulp from 'gulp';
import image from 'gulp-image';
import sass from 'gulp-sass';
import sourceMaps from 'gulp-sourcemaps';
import smith from 'gulp.spritesmith';

const browserSync = createBrowserSync();

let PATH = {
    APP: './app',
    DIST: './dist',
};

PATH.INDEX = `${PATH.APP}/index.html`;
PATH.STYLES = `${PATH.APP}/styles`;
PATH.IMAGES = `${PATH.APP}/images`;
PATH.SPRITES = `${PATH.IMAGES}/sprites`;
PATH.CSS = `${PATH.DIST}/css`;
PATH.DIST_IMAGES = `${PATH.DIST}/images`;

gulp.task('clean', () => del([PATH.DIST + '/**/*']));

gulp.task('html', () => {
    return gulp.src(PATH.INDEX).pipe(gulp.dest(PATH.DIST));
});

gulp.task('reload-html', ['html'], () => browserSync.reload());

gulp.task('style', () => {
    return gulp.src(`${PATH.STYLES}/app.scss`)
        .pipe(sourceMaps.init())
        .pipe(sass(
            eyeglass()
        )).on('error', sass.logError)
        .pipe(autoprefixer())
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

gulp.task('watch', ['html', 'style'], () => {
    gulp.watch(PATH.INDEX, ['reload-html']);
    gulp.watch(`${PATH.STYLES}/**/*.{scss,sass}`, ['style']);
});

gulp.task('server', ['image', 'watch'], () => {
    browserSync.init({
        open: true,
        browser: 'chromium-browser',
        server: {baseDir: PATH.DIST},
    });
});

gulp.task('default', ['server']);
