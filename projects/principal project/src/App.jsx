import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App (){
    const formatUsername = (userName) => `@${userName}`
    return( 
        <section className="App">
            <TwitterFollowCard formatUsername={formatUsername} isfollowing userName="elonmusk" name ="Elon Musk" />
            <TwitterFollowCard formatUsername={formatUsername} isfollowing={false} userName="danirep" name ="Dani Rep Rep" />
            <TwitterFollowCard formatUsername={formatUsername} isfollowing={false} userName="vxnder" name ="Vanderhart" />
            <TwitterFollowCard formatUsername={formatUsername} isfollowing={false} userName="danirep" name ="Dani Rep Rep" />
        </section>
        
    )
}