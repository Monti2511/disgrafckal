import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../interfaces/post'
import { useEffect, useState } from 'react'
import Nav from '../components/nav'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  const [isRotated, setIsRotated] = useState(false);
  const [isSlided, setIsSlided] = useState(false);

  function handleMenu() {
    if (isRotated) {
      setIsRotated(false);
    }
    if (isSlided) {
      setIsSlided(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleMenu);

    return () => {
      window.removeEventListener('scroll', handleMenu);
    };
  });

  return (
    <div onScroll={() => handleMenu()}>
      <Nav isRotated={isRotated} setIsRotated={setIsRotated} isSlided={isSlided} setIsSlided={setIsSlided} />
      <div onClick={() => handleMenu()}>
        <Layout>
          <Head>
            <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
          </Head>
          <Container>
            <Intro />
            {heroPost && (
              <HeroPost
                title={heroPost.title}
                coverImage={heroPost.coverImage}
                date={heroPost.date}
                author={heroPost.author}
                slug={heroPost.slug}
                excerpt={heroPost.excerpt}
              />
            )}
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </Container>
        </Layout>
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
