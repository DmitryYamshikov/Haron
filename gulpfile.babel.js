import gulp from 'gulp';
import del from 'del';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import named from 'vinyl-named';
import hb from 'gulp-hb';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import beautify from 'gulp-beautify';
import gulpIf from 'gulp-if';
import filter from 'gulp-filter';
import svgMin from 'gulp-svgmin';
import svgStore from 'gulp-svgstore';
import svgSprite from 'gulp-svg-sprite';
import imagemin from 'gulp-imagemin';
import tap from 'gulp-tap';
import merge from 'merge-stream';
import inject from 'gulp-inject';
import browserSync from 'browser-sync';
import sort from 'gulp-sort';
import {argv} from 'yargs';

import fs from 'fs';
import path from 'path';

import config from './config';

const isProd = !!argv.production;
const isDev = !isProd;
const inputDir = config.inputDir;
const outputDir = config.outputDir;

const clean = () => del([config.outputDir]);

const buildWebpack = () => {
  return gulp.src([`./${inputDir}/js/main.js`, `./${inputDir}/styles/main.scss`])
    .pipe(plumber())
    .pipe(named())
    .pipe(webpackStream(require('./webpack.config.js', webpack)))
    .pipe(plumber.stop())
    .pipe(gulp.dest(`./${outputDir}/`))
    .pipe(gulpIf(isDev, browserSync.stream()));
};

const buildPages = () => gulp.src(`./${inputDir}/*.hbs`)
  .pipe(plumber())
  .pipe(hb()
    // Partials
    .partials(`./${inputDir}/partials/**/*.hbs`)
    // Helpers
    .helpers(require('handlebars-helpers'))
    .helpers(require('handlebars-layouts'))
    .helpers(`./${inputDir}/helpers/**/*.js`)
    // Data
    .data(`./${inputDir}/data/**/*.{js,json}`)
    .data({
      publicPath: config.publicPath
    })
  )
  .pipe(gulpIf(isProd, beautify.html(config.htmlBeautify)))
  .pipe(rename({ extname: '.html' }))
  .pipe(plumber.stop())
  .pipe(gulp.dest(`./${outputDir}`))
  .pipe(gulpIf(isDev, browserSync.stream()));

const svgSymbols = () => {
  return gulp.src(`./${inputDir}/icons/symbols/**/*.svg`)
    .pipe(plumber())
    .pipe(filter(file => file.stat && file.stat.size))
    .pipe(svgMin({
      plugins: [
        { removeViewBox: false },
        { cleanupIDs: { minify: true } },
        //{ removeAttrs: { attrs: 'fill' } }
      ]
    }))
    .pipe(svgStore())
    .pipe(rename({ basename: 'icons-symbols' }))
    .pipe(gulp.dest(`./${outputDir}/images/`))
    .pipe(gulpIf(isDev, browserSync.stream()));
};

const svgSprites = () => gulp.src(`./${inputDir}/icons/sprites/**/*.svg`)
  .pipe(plumber())
  .pipe(filter(file => file.stat && file.stat.size))
  .pipe(svgSprite({
    shape: {
      spacing: {
        padding: 2
      }
    },
    mode: {
      css: {
        dest: '.',
        layout: 'horizontal',
        sprite: 'icons-sprite.svg',
        bust: false,
        render: {
          scss: {
            dest: `../styles/_svg-icons.scss`,
            template: `./${inputDir}/icons/sprites/svg-template.hbs`
          }
        },
        common: 'icons'
      }
    }
  }))
  .pipe(gulp.dest(`./${inputDir}/images/`))
  .pipe(gulpIf(isDev, browserSync.stream()));

const copyVuePagesStyles = () => gulp.src([`./${inputDir}/styles/vue_pages/product_card/*.css`])
  .pipe(gulp.dest(`./${outputDir}/vue_pages/product_card/css`))

const copyVuePagesDialogStyles = () => gulp.src([`./${inputDir}/styles/vue_pages/basket_dialog/*.css`])
  .pipe(gulp.dest(`./${outputDir}/vue_pages/basket_dialog/css`))

const copyVuePagesBasketStyles = () => gulp.src([`./${inputDir}/styles/vue_pages/shopping_basket/*.css`])
  .pipe(gulp.dest(`./${outputDir}/vue_pages/shopping_basket/css`))

const copyVuePagesConfiguratorStyles = () => gulp.src([`./${inputDir}/styles/vue_pages/configurator_page/*.css`])
  .pipe(gulp.dest(`./${outputDir}/vue_pages/configurator_page/css`))

const copyVuePagesScripts = () => gulp.src([`./${inputDir}/js/vue_pages/product_card/*.js`])
  .pipe(gulp.dest(`./${outputDir}/vue_pages/product_card/js`))

const copyVuePagesDialogScripts = () => gulp.src([`./${inputDir}/js/vue_pages/basket_dialog/*.js`])
  .pipe(gulp.dest(`./${outputDir}/vue_pages/basket_dialog/js`))

const copyVuePagesBasketScripts = () => gulp.src([`./${inputDir}/js/vue_pages/shopping_basket/*.js`])
  .pipe(gulp.dest(`./${outputDir}/vue_pages/shopping_basket/js`))

const copyVuePagesConfiguratorScripts = () => gulp.src([`./${inputDir}/js/vue_pages/configurator_page/*.js`])
  .pipe(gulp.dest(`./${outputDir}/vue_pages/configurator_page/js`))

const copyVuePagesImages = () => gulp.src([`./${inputDir}/images/vue_pages/product_card/*`])
.pipe(gulp.dest(`./${outputDir}/vue_pages/product_card/images/`))

const copyVuePagesBasketImages = () => gulp.src([`./${inputDir}/images/vue_pages/shopping_basket/*`])
  .pipe(gulp.dest(`./${outputDir}/vue_pages/shopping_basket/images/`))

const copyVuePagesDialogImages = () => gulp.src([`./${inputDir}/images/vue_pages/basket_dialog/*`])
  .pipe(gulp.dest(`./${outputDir}/vue_pages/basket_dialog/images/`))

const copyVuePagesConfiguratorImages = () => gulp.src([`./${inputDir}/images/vue_pages/configurator_page/*`])
  .pipe(gulp.dest(`./${outputDir}/vue_pages/configurator_page/images/`))


const copyImages = () => gulp.src([`./${inputDir}/images/**/*`, `!./${inputDir}/images/icons-*.svg`])
  .pipe(gulpIf(isProd, imagemin({
    progressive: true,
    interlaced: true
  })))
  .pipe(gulp.dest(`./${outputDir}/images/`))
  .pipe(gulpIf(isDev, browserSync.stream()));

const copyStatic = () => gulp.src([`./${inputDir}/static/**/*`,`!./${inputDir}/static/**/*.png`,`!./${inputDir}/static/**/*.jpg`])
  .pipe(gulp.dest(`./${outputDir}/static/`))
  .pipe(gulpIf(isDev, browserSync.stream()));

const copyStaticImages = () => gulp.src([`./${inputDir}/static/**/*.png`,`./${inputDir}/static/**/*.jpg`])
  .pipe(gulpIf(isProd, imagemin({
    progressive: true,
    interlaced: true
  })))
  .pipe(gulp.dest(`./${outputDir}/static/`))
  .pipe(gulpIf(isDev, browserSync.stream()));

const devServer = () => browserSync.init({
  server: {
    baseDir: `./${outputDir}`
  },
  host: config.devServer.host,
  port: config.devServer.port
});

const meta = () => {
  let meta = {
    symbols: {},
    sprites: {}
  };

  const icons = gulp.src(`./${inputDir}/icons/{sprites,symbols}/**/*.svg`, { read: false })
    .pipe(tap(file => {
      const parsed = path.parse(file.relative);
      let key;
      let group = 'common';
      if (parsed.dir.indexOf(path.sep) >= 0) {
        key = path.dirname(parsed.dir);
        group = path.basename(parsed.dir);
      } else {
        key = parsed.dir;
      }
      if (typeof meta[key][group] === 'undefined') {
        meta[key][group] = [];
      }
      meta[key][group].push(parsed.name);
    }));

  return merge(icons)
    .on('end', () => {
      fs.writeFileSync(config.metaPath, JSON.stringify(meta));
    });
};

export const injectAssets = () => {
  const breakpoints = config.breakpoints || {};
  const sortableBreakpoints = Object.entries(breakpoints)
    .sort(([, a], [, b]) => a - b)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
  const breakpointValues = Object.values(sortableBreakpoints);

  return gulp.src(`./${outputDir}/*.html`)
    .pipe(inject(
      gulp
        .src(`./${outputDir}/**/vendor*.{js,css}`, { read: false })
        .pipe(gulp.src([
          `./${outputDir}/**/*.{js,css}`,
          `!./${outputDir}/vue_pages/**/*.{js,css}`,
          `!./${outputDir}/**/vendor*.{js,css}`,
          `!./${outputDir}/static/**/*.{js,css}`,
          `!./${outputDir}/css/main-*.css`
        ], { read: false, passthrough: true }))
        .pipe(gulp.src(`./${outputDir}/css/main-*.css`, { read: false, passthrough: true, allowEmpty: true }))
        .pipe(sort((f1, f2) => {
          const m1 = path.basename(f1.path).match(/^main-(.+)\.css$/);
          const m2 = path.basename(f2.path).match(/^main-(.+)\.css$/);

          if (m1 && m2) {
            return sortableBreakpoints[m1[1]] > sortableBreakpoints[m2[1]] ? 1 : -1;
          }

          return 0;
        })),
      {
        relative: true,
        transform: function (filepath) {
          const ts = Date.now();
          if (isDev) {
            arguments[0] = filepath + '?v=' + ts;
          }

          const found = path.basename(filepath).match(/^main-(.+).css$/);
          if (found) {
            const breakpointName = found[1];
            const index = breakpointValues.findIndex(value => value === breakpoints[breakpointName]);
            return `<link rel="stylesheet" href="${filepath}${isDev ? '?v=' + ts : ''}" media="only screen and (min-width: ${breakpointValues[index]}px)">`;
          }
          return inject.transform.apply(inject.transform, arguments);
        }
      }))
    .pipe(gulp.dest(`./${outputDir}`));
};

export const build = gulp.series(
  clean,
  svgSprites,
  gulp.parallel(buildWebpack, meta, svgSymbols, copyVuePagesStyles, copyVuePagesScripts, copyVuePagesImages,copyVuePagesConfiguratorStyles, copyVuePagesConfiguratorScripts, copyVuePagesConfiguratorImages,copyVuePagesDialogImages,copyVuePagesDialogStyles, copyVuePagesDialogScripts, copyVuePagesBasketStyles, copyVuePagesBasketScripts , copyVuePagesBasketImages, copyImages, copyStatic,copyStaticImages),
  buildPages,
  injectAssets
);

const watch = () => {
  gulp.watch([
    `./${inputDir}/styles/**/*.scss`,
    `./${inputDir}/partials/blocks/**/*.scss`,
    `./${inputDir}/js/**/*.js`,
    `./${inputDir}/partials/blocks/**/*.js`
  ]).on('all', buildWebpack);
  gulp.watch([
    `./${inputDir}/data/**/*`,
    `./${inputDir}/helpers/**/*`,
    `./${inputDir}/partials/**/*`,
    `./${inputDir}/*.hbs`
  ]).on('all', gulp.series(buildPages, injectAssets));
  gulp.watch(`./${inputDir}/icons/sprites/**/*`).on('all', gulp.parallel(svgSprites, meta));
  gulp.watch(`./${inputDir}/icons/symbols/**/*`).on('all', gulp.parallel(svgSymbols, meta));
  gulp.watch([`./${inputDir}/images/**/*`, `!./${inputDir}/images/icons-*.svg`]).on('all', copyImages);
  gulp.watch(`./${inputDir}/static/**/*`).on('all', copyStatic);
  gulp.watch(`./${inputDir}/static/**/*`).on('all', copyStaticImages);
};

export const start = gulp.series(build, gulp.parallel(devServer, watch));
