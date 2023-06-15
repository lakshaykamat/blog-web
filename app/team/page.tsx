// import { fetchTeam } from '@/lib/fetchData'
import React from 'react'
import { Suspense } from 'react'
import TeamSkeleton from './components/TeamSkeleton'
import ProfileCard from './components/ProfileCard'
const Team = async () => {
  const team = [
    {
      name:"Lakshay",
      bio:"Lakshay",
      designation:"Lakshay",
      instagram:"Lakshay",
      github:"Lakshay",
      pfp:"https://i.pinimg.com/736x/91/25/1f/91251fd79af01dc56901bc1c34e4f587.jpg"
    },
    {
      name:"Lakshay",
      bio:"Lakshay",
      designation:"Lakshay",
      instagram:"Lakshay",
      github:"Lakshay",
      pfp:"https://i.pinimg.com/736x/91/25/1f/91251fd79af01dc56901bc1c34e4f587.jpg"
    }
  ]

  return (
    <section className="body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-bold dark:text-gray-200 title-font mb-4 tracking-widest">OUR TEAM</h1>
          <p className="lg:w-2/3 mx-auto dark:text-gray-300 leading-relaxed text-base">At the heart of our projects success lies our exceptional tech team. Comprised of talented individuals with a shared passion for technology and innovation, our team is dedicated to delivering top-notch solutions and driving the project forward. With their expertise, creativity, and collaborative spirit, they ensure that our project stands out from the rest.</p>
        </div>
        <div className="flex flex-col lg:flex-row m-auto justify-around items-center sm:items-start">
          {
            team.map((item, index) => {
              return (
              <Suspense key={index} fallback={<TeamSkeleton/>}>
                <ProfileCard
                  name={item.name}
                  bio={item.bio}
                  designation={item.designation}
                  instagram={item.instagram}
                  github={item.github}
                  pfp={item.pfp} /></Suspense>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Team