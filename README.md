# Clicker Heroes 1.0 HS Optimizer

Here are the sources of the [Clicker Heroes 1.0 HS Optimizer](https://superbob.github.io/clicker-heroes-1.0-hsoptimizer).

It is based on formulas proposed in
[Math and Transcendance](https://www.reddit.com/r/ClickerHeroes/comments/4naohc/math_and_transcendance)
by [/u/sugima](https://www.reddit.com/user/sugima) and
[Updated Rules of Thumb!](https://www.reddit.com/r/ClickerHeroes/comments/3y57jd/updated_rules_of_thumb/)
by [/u/TinDragon](https://www.reddit.com/user/TinDragon) plus some other formulas gathered from
here and there, to compute the idle, active and hybrid builds.

Main formulas can be found in [formulas.service.js](src/app/components/formulas/formulas.service.js).

The "algorithm" used to optimize can be found in [hsoptimizer.service.js](src/app/components/hsoptimizer/hsoptimizer.service.js) in the
_computeOptimumLevels_ function.

The rest is spread across all the other files.

## Development

This project is generated with [Yeoman generator for AngularJS + Gulp](https://github.com/Swiip/generator-gulp-angular)
version 1.1.0.

### Prerequisites

You need node/npm in recent versions (5.x/3.x), for example:

    $ node --version
    v5.0.0

    $ npm --version
    3.3.6

Then you need gulp and bower installed globally:

    npm install -g yo gulp bower

Finally you need to install project dependencies:

    npm install && bower install

### Build & development

Run `gulp` for building and `gulp serve` for preview.

### Testing

Running `gulp test` will run the unit tests with karma.
