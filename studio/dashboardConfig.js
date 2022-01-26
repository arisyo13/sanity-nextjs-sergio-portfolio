export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61f1c8d2603b5a3fa534cb5d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-sergio-portfolio-studio',
                  apiId: '1d1241f8-3a55-4f31-8087-2b2ef115c504'
                },
                {
                  buildHookId: '61f1c8d2495aaf427967b69c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-sergio-portfolio',
                  apiId: '177eab7a-d4a5-47e6-a990-61a514a506ce'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/arisyo13/sanity-nextjs-sergio-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-sergio-portfolio.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
