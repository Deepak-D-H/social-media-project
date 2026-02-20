import React,{useState,useEffect} from 'react';
import { dummyPostsData } from '../assets/assets';
import Loading from '../components/Loading';
import StoriesBar from '../components/StoriesBar';
import PostCard from '../components/PostCard';

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
    <div>
      <div>
        <h1>sponsered</h1>
      </div>
      <div>
        <h1>resent messages

        </h1>
      </div>

    </div>

  </div>
  ) : (
    <Loading/>
    
  );
}

export default Feed;
