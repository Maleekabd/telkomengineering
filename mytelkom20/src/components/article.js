import Blockchain from '../assets/blockhain.jpg'
import Security from '../assets/sekurity.jpg'
import TeknologyRadar from '../assets/teknologi radar.jpg'
import AI from '../assets/AI.jpg'
import Machinelearning from '../assets/ai-nuclear-energy-background-future-innovation-disruptive-technology.jpg'
import fiveG from '../assets/5g.jpg'

function Article() {
  return (
    <div class="container">
      <div class="container-content">
        <div class="content">
          <h1 id='lab301'>Telecommunication Engineering</h1>
        </div>
        <div className="container-flex">
          <div>
            <img className='border' src={Blockchain} />
          </div>
          <div>
            <img className='border' src={AI} />
          </div>
          <div>
            <img className='border' src={Machinelearning} />
          </div>
          <div>
            <img className='border' src={Security} />
          </div>
          <div>
            <img className='border' src={TeknologyRadar} />
          </div>
          <div>
            <img className='border' src={fiveG} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article