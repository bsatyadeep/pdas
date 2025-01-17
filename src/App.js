import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App () {
  console.log(AlexaImage);
  console.log(SiriImage);
  return (<div>
    <section className='hero is-primary'>
      <div className='hero-body'>
        <p className='title'>
        Personal Digital Assistances
        </p>
      </div>
    </section>
    <div className='container'>
      <section className='section'>
        <div className='columns'>
          <div className='column is-3'>
            <ProfileCard 
              title='Alexa' 
              handle='@alexa99' 
              image={AlexaImage}></ProfileCard>
          </div>
          <div className='column is-3'>
            <ProfileCard 
              title='Cortana' 
              handle='@cortana32' 
              image={CortanaImage}></ProfileCard>
          </div>
          <div className='column is-3'>
            <ProfileCard 
              title='Siri' 
              handle='@seri01' 
              image={SiriImage}></ProfileCard>
          </div>
        </div>
      </section>
    </div>
  </div>);
}

export default App;