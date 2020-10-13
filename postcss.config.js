const purgecss = require('@fullhuman/postcss-purgecss')({  
    content: [
        // Jekyll output directory
        './_site/**/*.html',
    ],
    defaultExtractor: content => {
      // Capture as liberally as possible, including things like `h-(screen-1.5)`
      const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []

      // Capture classes within other delimiters like .block(class="w-1/2") in Pug
      const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []

      return broadMatches.concat(innerMatches)
  }
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