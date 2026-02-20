import React, { useState, useEffect } from 'react';
import { dummyStoriesData } from '../assets/assets';
import { Plus } from 'lucide-react';
import moment from 'moment'
import StoryModel from './StoryModel';
import StoryViewer from './StoryViewer';

const StoriesBar = () => {

  const [stories, setStories] = useState([])
  const [showModel, setShowModel] = useState(false)
  const [viewStory, setViewStory] = useState(null)
  const fetchStories = async () => {
    setStories(dummyStoriesData)
  }
  useEffect(() => {
    fetchStories()

  }, [])
  return (
    // no-scrollbar is class name not a css property it is used to hide the scrollbar in the div and it is defined in the index.css file
    
    <div className='w-screen sm:w-[calc(100vw-240px)] lg:max-w-2xl  overflow-x-auto no-scrollbar   px-4'>
      <div className='flex gap-4 pb-5'>
        {/* {add a story card} */}
        <div onClick={()=>setShowModel(true)} className='rounded-lg shadow-sm min-w-30 max-w-30 max-h-40 aspect-3/4 cursor-pointer hover:shadow-lg transition-all duration-200 border-2 border-dashed border-indigo-300 bg-linear-to-b from-indigo-300 to-white'>

          <div className='h-full flex flex-col items-center justify-center p-3'>
            <div className='size-10 bg-indigo-500 rounded-full flex items-center justify-center mb-3'>
              <Plus className='w-5 h-5 text-white' />
            </div>
            <p className='text-orange-400 text-sm font-medium text-center '>your story</p>
          </div>

        </div>
        {/* {Stories cards} */}
        {
          stories.map((story, index) => (
            // rounded-lg shadow-sm min-w-30 max-w-30 max-h-40 aspect-3/4 cursor-pointer
            <div
            onClick={()=> setViewStory(story)} 
            key={index} className={`relative rounded-lg shadow min-w-30 max-w-30 max-h-40 cursor-pointer hover:shadow-lg transition-all duration-200 bg-linear-to-b from-indigo-500 to-purple-500 hover:from-indigo-700 hover:to-purple-800 active:scale-95`}>

              <img src={story.user.profile_picture} alt="" className='absolute size-8 top-3 left-3 z-10 rounded-full ring ring-gray-100 shadow' />

              <p className='absolute top-18 left-3 text-white/60  text-sm  truncate max-w-24'>{story.content}</p>

              {/* <p className='text-white absolute bottom-1 right-2 z-10 text-[7px]'>{story.createdAt}</p> */}
              <p className='text-white absolute bottom-1 right-2 z-10 text-xs'>{moment(story.createdAt).fromNow()}</p>

              {
                story.media_type !== 'text' && (
                  <div className='absolute inset-0  z-1 rounded-lg bg-black overflow-hidden'>
                    {
                      story.media_type === "image" ?
                        <img src={story.media_url} alt="" className='h-full w-full object-cover hover:scale-110 transition duration-500 opacity-70 hover:opacity-80' />
                        :
                        <video src={story.media_url} 
                        className='h-full w-full object-cover hover:scale-110 transition duration-500 opacity-70 hover:opacity-80' />


                    }

                  </div>
                )
              }



            </div>
          ))
        }
      </div>
      {/* Add story model */}
      {
      showModel && <StoryModel setShowModel={setShowModel} fetchStories={fetchStories}/>
      }

      {/* view story model */}
      {
        viewStory && <StoryViewer viewStory={viewStory} setViewStory={setViewStory}/>
      }


    </div>
  );
}

export default StoriesBar;
