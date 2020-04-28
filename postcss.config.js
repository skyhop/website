const purgecss = require('@fullhuman/postcss-purgecss')({  
    content: [
        // Jekyll output directory
        './_site/**/*.html',
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {  
    plugins: [
        require('tailwindcss'),
        require('postcss-nesting'),
        require('autoprefixer'),
        require('cssnano')(),
        ...process.env.NODE_ENV === 'production'
            ? [purgecss]
            : []
    ]
};