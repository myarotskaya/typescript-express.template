const gulp = require('gulp');
const gulpTs = require('gulp-typescript');
const tslint = require("tslint");
const gulpTslint = require("gulp-tslint");

const JSON_FILES = ['src/*.json', 'src/**/*.json'];

const project = gulpTs.createProject('tsconfig.json');
const linterProject = gulpTs.createProject('tsconfig.json');

gulp.task('scripts', () => {
    const result = project.src()
        .pipe(project());

    return result.js.pipe(gulp.dest('dist'));
});

gulp.task('watch', ['scripts'], () => {
    gulp.watch('src/**/*.ts', ['scripts']);
});

gulp.task('assets', () => {
    return gulp.src(JSON_FILES)
        .pipe(gulp.dest('dist'));
});

gulp.task('lint', () => {
    const program = tslint.Linter.createProgram('./tsconfig.json', '.');
    linterProject.src()
        .pipe(gulpTslint({ program }))
        .pipe(gulpTslint.report())
        .pipe(linterProject());
});

gulp.task('default', ['watch', 'assets', 'lint']);
