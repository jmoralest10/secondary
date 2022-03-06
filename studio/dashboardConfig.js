export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '62251ba72b0fcce173a484a3',
                  title: 'Sanity Studio',
                  name: 'secondary-studio',
                  apiId: '02d352b3-47d0-4928-b02c-76ed24a99ad5'
                },
                {
                  buildHookId: '62251ba77cd5722ef98f709e',
                  title: 'Portfolio Website',
                  name: 'secondary',
                  apiId: 'aca554ab-f457-4f83-9111-6d88d691e053'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jmoralest10/secondary',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://secondary.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
