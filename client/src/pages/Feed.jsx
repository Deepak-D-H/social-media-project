import React,{useState,useEffect} from 'react';
import { assets, dummyPostsData } from '../assets/assets';
import Loading from '../components/Loading';
import StoriesBar from '../components/StoriesBar';
import PostCard from '../components/PostCard';
import RecentMessages from '../components/RecentMessages';

const Feed = () => {
  const [feeds, setFeeds] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchFeeds = async () =>{
    setFeeds(dummyPostsData)
    setLoading(false)
  }
  useEffect(() => {
    fetchFeeds()
    
  }, []);
  return !loading ? (
    // this the feed page where we will show the stories and the posts of the users and also the right side bar where we will show the sponsored ads and the recent messages of the user
    // here we mounted the components of the stories bar and the story viewer and also the list of the posts of the users
    <div className='h-full overflow-y-scroll no-scrollbar py-10 xl:pr-5 flex items-start  justify-center xl:gap-8'>
      {/* {storeis and post list} */}
      <div>
        {/* <h1>Stories</h1> */}

        <StoriesBar/>

        <div className='p-4 space-y-6'>
          {/* List of Post */}

          {
            // feeds.map((post,index)=>(
            //   <PostCard key={index} post={post} />
            // ))
            feeds.map((post)=>(
              <PostCard key={post._id} post={post} />
            ))
          }


        </div>

      </div>
    {/* right side bar */}
    <div className='max-xl:hidden sticky top-0'>
      <div className='max-w-xs bg-white text-xs p-4 rounded-md inline-flex flex-col gap-2 shadow'>
        <h3 className='text-slate-800 font-semibold'>sponsered</h3>
        <img src={assets.sponsored_img} alt="" className='w-75 h-50 rounded-md' />
        <p className='text-slate-500'>Email Marketing</p>
        <p className='text-slate-400'>Upgrade your life, one smart choice at a time</p>
      </div>
      <div>
        {/* <h1>resent messages</h1> */}
        <RecentMessages/>

        
      </div>

    </div>

  </div>
  ) : (
    <Loading/>
    
  );
}

export default Feed;
