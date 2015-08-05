# npm-spikes
Random experiments testing using npm as build tool inspired by  keithamus's https://github.com/keithamus/npm-scripts-example. 

I want to try to build my own up scripts as I need them step by step with very few files. 

Random notes:

##bundling - using concat & custom js file.

I've decided to use browserify for bundling, since it's the tool that's used in the npm-script example. Also, found this article 
[moving from requirejs to browserify](http://orizens.com/wp/topics/a-journey-from-require-js-to-browserify/) and it indicates that browserify is a step up from require.js, not knowing any better, I'm going to go with that as a placeholder start.

For my first experiment [branch 'bundling'](../../tree/concat), I've used concat, and a custom javascript file to call concat [build-concat.js] manually concat two test files. 

###Available Branches

1. [branch 'bundling' using concat and javascript file](../../tree/concat)

Yeah, I know I'm reproducting functionality that's already built into GITHub web browser, (and there's a dropdown with all the branches) this is my sandbox playground. ;-D