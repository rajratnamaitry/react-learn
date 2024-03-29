module.exports = {
    title: 'React learning',
    description: 'Just playing around',
    base: '/react-learn/',
    themeConfig: {
        nextLinks: true,
        prevLinks: true,
        docsRepo: 'rajratnamaitry/react-learn',
        repo: 'rajratnamaitry/react-learn',
        docsDir: 'docs',
        smoothScroll: true,
        displayAllHeaders: true,
        sidebar: 'auto',
        searchPlaceholder: 'Search...',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Basics', link: '/topics/basics.html' },
          { text: 'Hooks', link: '/topics/hooks.html' },
          { text: 'Redux toolkit', link: '/topics/redux.html' }
        ]
      }
}