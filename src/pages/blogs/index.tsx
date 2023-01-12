import React from 'react'
import {LatestBlogs} from '../../components/latest_blogs'
import { PopularBlogs } from './../../components/popular_blogs'
import SideBar from '../../components/sidebar'
import Menu from '../../components/menu'
// import Image from 'next/image'
// import { latest } from '../../utils/blog_posts'

const Index = () => {
  
  return (
    <div data-theme="mydark" className=' h-screen'>
      {/* <Head>
        <title>Dev Mohib | Blogs</title>
        <meta name="dev mohib" content="Dev Mohib Portfolio, Blogs, Articles, Web development, Programming, Javascrip, Flutter" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <SideBar>
        <Menu active='blogs' />
        <div className='flex justify-start flex-wrap'>
        {/* {
          latest.map((blog, index) => <Blog key={index} title={blog.title} description={blog.description} slug={blog.slug} />)
        } */}
        <LatestBlogs />
        </div>
      </SideBar>

    </div>
  )
}


export const Head = () => (<>
<title>Dev Mohib | Blogs</title>
<meta name="blogs" content="Dev Mohib Portfolio, Blogs, Articles, Web development, Programming, Javascrip, Flutter" />
<link rel="icon" href="/favicon.ico" /></>)

export default Index