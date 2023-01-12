import { graphql } from 'gatsby';
import React from 'react'
import {
  AmpStory,
  AmpStoryPage,
  AmpStoryGridLayer,
  AmpImg,
  AmpHeader,
  AmpParagraph,
  AmpQuote,
  AmpStoryBookend,
  AmpVideo,
  AmpSource,
} from 'react-google-stories'


function StoryScreen({data}) {
  const { storyCover, storytitle, storyPages, description } = data.sanityWebStory
  return (
    /* Cover page */
    <AmpStory
      title={storytitle}
      publisher="react-google-stories tutorial"
      publisher-logo-src="/AMP-Brand-White-Icon.svg"
      poster-portrait-src={storyCover.asset.publicUrl}
    >
      <AmpStoryPage id="cover">
        <AmpStoryGridLayer template="fill">
          <AmpImg src={storyCover.asset.publicUrl}
              width="720" height="1280"
              layout="responsive">
          </AmpImg>
        </AmpStoryGridLayer>
        <AmpStoryGridLayer template="vertical">
          <AmpHeader title={storytitle} level={1} />
          <AmpParagraph text={description??'Story Description'}/>
        </AmpStoryGridLayer>
      </AmpStoryPage>

      {
        storyPages.map((story, index) => <AmpStoryPage 
          id={`page-${index}`}>
            <AmpStoryGridLayer 
              template="vertical"
              class="noedge"
              >
              <AmpHeader title={story.storyHeader}/>
              {
                story.mediaType == 'image' ? 
            <AmpImg src={story.mediaSource.asset.url}
                width="720" height="1280"
                layout="responsive" 
                animate-in="fade-in"
                animate-in-delay="0.4s">
            </AmpImg>
            :
            <AmpVideo
                autoplay
                loop
                width="720" height="1280"
                poster="/rabbit.jpg"
                layout="responsive"
              >
                <AmpSource src={story.mediaSource.asset.url} type="video/mp4" />
              </AmpVideo>
              }
            </AmpStoryGridLayer>
          </AmpStoryPage>)
      }
      {/* Bookend */}
      <AmpStoryBookend src="bookend.json" />

      </AmpStory>
  );
}

export const query = graphql`
query WebStoryBySlug ($slug: String){
  sanityWebStory(slug: {current: {eq: $slug}}) {
    storyCover {
      asset {
        publicUrl
      }
    }
    storyTitle
    storyPages {
      paragraph
      mediaType
      storyHeader
      mediaSource {
        asset {
          url
        }
      }
    }
    description
  }
}

`
export default StoryScreen;