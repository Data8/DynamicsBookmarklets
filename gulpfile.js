var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var bookmarklet = require('gulp-bookmarklet');

var scriptsPath = 'js';

function getFolders(dir) {
    return fs.readdirSync(dir)
        .filter(function(file) {
            return fs.statSync(path.join(dir, file)).isDirectory();
        });
}

gulp.task('default', function () {
    var folders = getFolders(scriptsPath);

    var tasks = folders.map(function(folder) {
        return gulp.src(path.join(scriptsPath, folder, '*.js'))
            .pipe(bookmarklet({
                format: 'htmlsingle',
                file: 'dynamics-bookmarklets-' + folder + '.html'
            }))
            .pipe(gulp.dest('./'));
    });

    return tasks;
});
