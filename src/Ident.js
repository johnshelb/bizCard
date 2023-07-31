import me from './atGertrudesNose.jpg';


export default function Ident(){
  return(
    <div class='ident'>
      <img src={me} width='317px' height='317px'/>
      <h1 className = 'name'>John Shelby</h1>
      <p class='fedev'>Full-Stack Developer</p>
      <a href = "https://johnshelb.github.io" target = "_blank">github.johnshelb.io</a>
      <a href='mailto:jsnd11@gmail.com' className = 'email'>jsnd11@gmail.com</a>
  </div>
  )
}
