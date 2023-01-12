exports.createPages = async function ({ actions, graphql }) {
const {data} = await graphql(`
query MyQuery {
  allSanitySampleProject {
    nodes {
      title
      slug {
        current
      }
    }
  }
}
`)

const { data : stories} = await graphql(`
query AllWebBuildPage {
  allSanityWebStory {
    nodes {
      slug {
        current
      }
      _id
    }
  }
}
`)
console.log('Web Story')
console.log(JSON.stringify(stories))
stories.allSanityWebStory.nodes.forEach(story => {
  actions.createPage({
    path : `web-story/${story.slug.current}`,
    component : require.resolve(`./src/templates/web-story.js`),
    context : {slug : story.slug.current}
  })
})
data.allSanitySampleProject.nodes.forEach(project => {
  actions.createPage({
    path : `portfolio/${project.slug.current}`,
    component : require.resolve(`./src/templates/sanity-project.js`),
    context : {slug : project.slug.current}
  })
});
}