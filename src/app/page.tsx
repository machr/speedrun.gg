import { supabase } from "@/lib/supabase"

type Run = {
    id: number
    created_at: string,
    map: string,
    time: string,
    week_number: number,
    players: Players[],
    modifier: string[],
    mapId: number
}

type Players = {
  class: string,
  username: string,
  video_link: string,
}

async function getAllRuns(){
  const { data: runs } = await supabase.from('speedruns').select()
  return runs
}


export default async function Home() {
  const runs = await getAllRuns()
  console.log('runs', runs)
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <article className="run">
        <div className="container flex">
          <header className="run-information">
          <h2><span>Week #13</span> Defense of Aoi Village</h2>
          <p>Time 11:12</p>
          </header>
          
          <div className="youtube-thumbnail"><img src="https://picsum.photos/400/200" alt="placeholder" /></div>  </div>
      </article>
    </main>
  )
}
