import '../styles/HeroSection.css';
import Button from './Button';

function HeroSection() {
    return (
        <div className='hero-container'>
            <img src='/images/img-9.jpg' alt='heading' />
            <h1>Adventure</h1>
            <p>What are you waiting for ?</p>
            <div className='hero-btns'>
                <Button classNameb='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
                <Button classNameb='btns' buttonStyle='btn--primary' buttonSize='btn--large'>WATCH TRAILER <i className='far fa-play-circle'></i></Button>
            </div>
        </div>
    )
}

export default HeroSection