import twit from './Twitter.png'
import fb from './fb.png'
import insta from './Insta.png'
import linked from './Linked.png'
import git from './GitHub.png'

export default function Footer(){
  return(
    <footer class = 'footer'>
      <img src = {twit}/>
      <img src = {fb}/>
      <img src = {insta}/>
      <img src = {linked}/>
      <img src = {git}/>

    </footer>
  )
}
