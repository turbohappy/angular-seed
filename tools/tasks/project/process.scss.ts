import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import {join} from 'path';
import {APP_SRC, SCSS_TMP_DIR} from '../../config';
const plugins = <any>gulpLoadPlugins();

export = () => {
    return gulp.src(join(APP_SRC, '**', '*.scss'))
        .pipe(plugins.sass().on('error', plugins.sass.logError))
        .pipe(gulp.dest(SCSS_TMP_DIR));
};
