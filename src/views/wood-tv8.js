import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import PlaceCard from '../components/place-card'
import './wood-tv8.css'

const WoodTV8 = (props) => {
  return (
    <div className="wood-tv8-container">
      <Helmet>
        <title>WoodTV8 - Michael Furman's Portfolio</title>
        <meta
          property="og:title"
          content="WoodTV8 - Michael Furman's Portfolio"
        />
      </Helmet>
      <div className="wood-tv8-top-container">
        <nav data-role="Header" className="wood-tv8-navbar">
          <Link to="/" className="wood-tv8-navlink">
            <h1 className="wood-tv8-logo">Home</h1>
          </Link>
          <div className="wood-tv8-right-side">
            <div className="wood-tv8-links-container">
              <Link to="/" className="wood-tv8-navlink1">
                Home
              </Link>
              <Link to="/about-me" className="wood-tv8-navlink2">
                About
              </Link>
              <Link to="/videos" className="wood-tv8-navlink3">
                Videos
              </Link>
            </div>
            <SolidButton
              button="Contact"
              className="wood-tv8-contact"
            ></SolidButton>
          </div>
          <div data-role="BurgerMenu" className="wood-tv8-burger-menu">
            <svg viewBox="0 0 1024 1024" className="wood-tv8-burger-menu1">
              <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="wood-tv8-mobile-menu">
            <div className="wood-tv8-nav">
              <div className="wood-tv8-top">
                <h1>Travel</h1>
                <div
                  data-role="CloseMobileMenu"
                  className="wood-tv8-close-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="wood-tv8-icon03">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="wood-tv8-right-side1">
                <div className="wood-tv8-links-container1">
                  <span className="wood-tv8-text">Home</span>
                  <span className="wood-tv8-text1">About</span>
                  <span className="wood-tv8-text2">Tour Packages</span>
                  <span>Contact</span>
                </div>
                <SolidButton button="Explore places"></SolidButton>
              </div>
            </div>
            <div className="wood-tv8-follow-container">
              <span className="wood-tv8-text4">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="wood-tv8-icons-container">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="wood-tv8-link"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="wood-tv8-icon05"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="wood-tv8-link1"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="wood-tv8-icon07"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="wood-tv8-link2"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="wood-tv8-icon09"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="wood-tv8-hero">
          <div className="wood-tv8-content-container">
            <div className="wood-tv8-container1"></div>
          </div>
        </div>
      </div>
      <div id="main-section" className="wood-tv8-main">
        <h1 className="wood-tv8-text5">WoodTV8 Experience</h1>
        <div className="wood-tv8-cards-container">
          <PlaceCard
            city="Conducting Interviews"
            image="/Videos &amp; Pictures/20240504_063148-300h.jpg"
            description="Worked with reporters to film local leaders, both for live broadcasts, and with recorded interviews "
            className="wood-tv8-component1"
          ></PlaceCard>
          <PlaceCard
            city="WOODTV8's Drone Footage"
            image="https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI1MHx8ZHJvbmUlMjBmb290YWdlfGVufDB8fHx8MTcxNzQzMjkyN3ww&amp;ixlib=rb-4.0.3&amp;w=300"
            description="Livestreamed and recorded local Grand Rapids stories using both private and the company's drone"
            className="wood-tv8-component2"
          ></PlaceCard>
          <PlaceCard
            city="Connecting With Communities "
            image="/Videos &amp; Pictures/20240430_110550-300h.jpg"
            description="Filmed meaningful stories often  informing the public"
            className="wood-tv8-component3"
          ></PlaceCard>
          <PlaceCard
            city="Important Coverage"
            image="/Videos &amp; Pictures/20240430_110734-300h.jpg"
            description="Designed and planned company's rebranding, including website designs, graphic designs, and creating new video advertisements."
            className="wood-tv8-component4"
          ></PlaceCard>
          <PlaceCard
            city="Favorite Projects"
            image="/Videos &amp; Pictures/20240601_061033-300w.jpg"
            description="Directed crews of camera operators, replay managers and graphic effect teams wielding smooth transitions for productions. Coordination management with Disney's ESPN headquarters for maintaining the quality broadcasts."
            className="wood-tv8-component5"
          ></PlaceCard>
          <PlaceCard
            city="Extras!"
            image="/Videos &amp; Pictures/20240504_0724282-300w.jpg"
            description="Recorded and livestreamed local news stories; filming and editing interviews,  live reporters, emergency stories, and studio packages."
            rootClassName="place-card-root-class-name3"
            className="wood-tv8-component6"
          ></PlaceCard>
        </div>
      </div>
      <div className="wood-tv8-footer">
        <div className="wood-tv8-menu">
          <h1>Home</h1>
          <div className="wood-tv8-links-container2">
            <div className="wood-tv8-container2">
              <span className="wood-tv8-text6">Drone Footage</span>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="wood-tv8-link3"
              >
                Personal Projects
              </a>
              <span className="wood-tv8-text7">Special deals</span>
              <Link to="/videos" className="wood-tv8-link4">
                Video Projects
              </Link>
            </div>
            <div className="wood-tv8-container3">
              <Link to="/about-me" className="wood-tv8-navlink4">
                About Michael
              </Link>
              <Link to="/under-construction" className="wood-tv8-navlink5">
                FAQ
              </Link>
              <Link to="/under-construction" className="wood-tv8-navlink6">
                Adventures
              </Link>
              <Link to="/about-me" className="wood-tv8-navlink7">
                Contact
              </Link>
            </div>
          </div>
          <div className="wood-tv8-follow-container1">
            <span className="wood-tv8-text8">
              Follow on
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <div className="wood-tv8-icons-container1">
              <a
                href="https://www.instagram.com/myclefurball/"
                target="_blank"
                rel="noreferrer noopener"
                className="wood-tv8-link5"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="wood-tv8-icon11"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/michael.furman.961"
                target="_blank"
                rel="noreferrer noopener"
                className="wood-tv8-link6"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="wood-tv8-icon13"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="wood-tv8-link7"
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="wood-tv8-icon15"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WoodTV8
