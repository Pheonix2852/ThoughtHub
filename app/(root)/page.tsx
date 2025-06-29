import React from 'react'
import SearchForm from '../../components/SearchForm'
import StartupCard, {StartupTypeCard} from '@/components/StartupCard';
import { BLOGS_QUERY } from '@/sanity/lib/queries';
import { sanityFetch, SanityLive } from '@/sanity/lib/live';
import { auth } from '@/auth';

const page = async ({ searchParams } : { searchParams : Promise < {query? : string }> }) => {
    
    const query = (await searchParams).query;
    const params = {search : query || null};

    const session = await auth();   
    

    const {data : posts} = await sanityFetch ({query : BLOGS_QUERY, params});

  return (
    <>
    <section className='pink_container'>
      <h1 className="heading">ThoughtHub <br /> Stories, Insights, Inspiration</h1>
      <p className='sub-heading !max-w-3xl'>
        Unleash your creativity and explore fresh perspectives through stories that inspire and insights that ignite
      </p>
      <SearchForm query={query}/>
    </section>

    <section className='section_container'>
      <p className='text-30-semibold'>
        {query? `Search Results for ${query}` : "All Blogs"}
      </p>

      <ul className='mt-7 card_grid'>
        {posts?.length > 0 ?(
          posts.map((post: StartupTypeCard) => (
            <StartupCard key={post._id} post={post} />
          ))
        ) : (<p className='no-result'>No Blogs Found</p>)}
      </ul>
    </section>

    

    <SanityLive/>
      
    </>
  )
}

export default page