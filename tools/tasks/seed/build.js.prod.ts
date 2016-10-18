import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import {join} from 'path';
import {TMP_DIR, TOOLS_DIR, API_ROOT, PAYMENT_API_ROOT, PLANNER_URL} from '../../config';
import {templateLocals, makeTsProject} from '../../utils';
const plugins = <any>gulpLoadPlugins();

const INLINE_OPTIONS = {
    base: TMP_DIR,
    useRelativePaths: false,
    removeLineBreaks: true
};

export = () => {
    let tsProject = makeTsProject();
    let src = [
        'typings/browser.d.ts',
        TOOLS_DIR + '/manual_typings/**/*.d.ts',
        join(TMP_DIR, '**/*.ts')
    ];
    let result = gulp.src(src)
        .pipe(plugins.plumber())
        .pipe(plugins.inlineNg2Template(INLINE_OPTIONS))
        .pipe(plugins.replace('%%API_ROOT%%', API_ROOT))
        .pipe(plugins.replace('%%PAYMENT_API_ROOT%%', PAYMENT_API_ROOT))
        .pipe(plugins.replace('%%PLANNER_URL%%', PLANNER_URL))
        .pipe(plugins.typescript(tsProject));

    return result.js
        .pipe(plugins.template(templateLocals()))
        .pipe(gulp.dest(TMP_DIR));
};
