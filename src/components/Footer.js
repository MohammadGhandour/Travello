import { Link } from 'react-router-dom'
import '../styles/Footer.css'
import Button from './Button'

function Footer() {
    return (
        <footer className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>Join the <span>Adventure Newsletter</span> to receive our best vacation deals.</p>
                <p className='footer-subscription-text'>You can unsubscribe at any time</p>
                <form>
                    <input type='email' name='email' placeholder='Your email...' className='footer-input' />
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonial</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/sign-up'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/sign-up'>Submit Video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencers</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/sign-up'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Twitter</Link>
                        <Link to='/'>LinkedIn</Link>
                        <Link to='/'>Youtube</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrapper'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            TRAVELLO<i className="fa-solid fa-plane-departure"></i>
                        </Link>
                    </div>
                    <small className='website-rights'>TRAVELLO © 2022</small>
                    <div className='social-icons'>
                        <Link
                            className='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i className='fab fa-facebook-f' />
                        </Link>
                        <Link
                            className='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i className='fab fa-instagram' />
                        </Link>
                        <Link
                            className='social-icon-link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i className='fab fa-youtube' />
                        </Link>
                        <Link
                            className='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i className='fab fa-twitter' />
                        </Link>
                        <Link
                            className='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i className='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer