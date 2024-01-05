import React from 'react'
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const MyFooter = () => {
  return (
    <Footer className='bg-rose-100'>
      <div className="w-full px-4 lg:px-24">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <Footer.Title title="Explore" />
            <Footer.LinkGroup col>
              <Footer.Link href="/shop">New Releases</Footer.Link>
              <Footer.Link href="#">Best Sellers</Footer.Link>
              <Footer.Link href="#">Genres</Footer.Link>
              <Footer.Link href="#">Authors</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Connect" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Join Book Club</Footer.Link>
              <Footer.Link href="#">Events</Footer.Link>
              <Footer.Link href="#">Newsletter</Footer.Link>
              <Footer.Link href="#">Contact Us</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Terms & Conditions</Footer.Link>
              <Footer.Link href="#">Refund Policy</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Download Our App" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">iOS</Footer.Link>
              <Footer.Link href="#">Android</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-rose-200 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="EBook" year={2023} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>

  )
}

export default MyFooter
