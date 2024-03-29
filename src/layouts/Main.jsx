
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/navbar';

const Main = () => {
   
    return (
        <div>
            <Navbar></Navbar>
        <div className='min-h-screen'>
        <Outlet></Outlet>
        </div>
        <div className='z-10'>
        <footer className="footer p-10 bg-neutral text-neutral-content">
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
        </footer>
        </div>
        </div>
    );
};

export default Main;