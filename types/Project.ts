export interface ContentfulProject {
  fields: {
    demoUrl: string
    descriptionDetailed: string
    githubRepo: string
    img: ContentfulMedia
    preview: ContentfulMedia
    subTitle: string
    techUsed: string
    title: string
  }
  sys: any
}

interface ContentfulMedia {
  fields: {
    file: {
      contentType: string
      url: string
    }
  }
  sys: any
}
