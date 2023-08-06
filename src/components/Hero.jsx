import {logos} from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex
     justify-center items-center flex-col">
        <nav className="flex justify-between items-center 
        w-full mb-10 pt-3">
            <img src={logos} alt="sumz_logo" 
            className="w-28 object-contain"/>

            <button type="button"
            onClick={()=> window.open("https://")}
            className='black_btn'> Github</button>
        </nav>
        <h1 className='head_text'> 
        Summarize Articles with <br/>
        <span className='orange_gradient'>OpenAI GPT-4</span>
        </h1>
        <h2 className='desc'>
            Simply Reading with us,
            it'll transform your lenghty articles
            into something you'll love to read
        </h2>
        </header>
  )
}

export default Hero