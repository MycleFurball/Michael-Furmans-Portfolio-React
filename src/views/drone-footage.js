import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import PlaceCard from '../components/place-card'
import './drone-footage.css'

const DroneFootage = (props) => {
  return (
    <div className="drone-footage-container">
      <Helmet>
        <title>Drone-Footage - Michael Furman's Portfolio</title>
        <meta
          property="og:title"
          content="Drone-Footage - Michael Furman's Portfolio"
        />
      </Helmet>
      <div className="drone-footage-top-container">
        <nav data-role="Header" className="drone-footage-navbar">
          <Link to="/" className="drone-footage-navlink">
            <h1 className="drone-footage-logo">Home</h1>
          </Link>
          <div className="drone-footage-right-side">
            <div className="drone-footage-links-container">
              <Link to="/" className="drone-footage-navlink1">
                Home
              </Link>
              <Link to="/about-me" className="drone-footage-navlink2">
                About
              </Link>
              <Link to="/videos" className="drone-footage-navlink3">
                Videos
              </Link>
            </div>
            <SolidButton
              button="Contact"
              className="drone-footage-contact"
            ></SolidButton>
          </div>
          <div data-role="BurgerMenu" className="drone-footage-burger-menu">
            <svg viewBox="0 0 1024 1024" className="drone-footage-burger-menu1">
              <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="drone-footage-mobile-menu">
            <div className="drone-footage-nav">
              <div className="drone-footage-top">
                <h1>Travel</h1>
                <div
                  data-role="CloseMobileMenu"
                  className="drone-footage-close-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="drone-footage-icon03">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="drone-footage-right-side1">
                <div className="drone-footage-links-container1">
                  <span className="drone-footage-text">Home</span>
                  <span className="drone-footage-text01">About</span>
                  <span className="drone-footage-text02">Tour Packages</span>
                  <span>Contact</span>
                </div>
                <SolidButton button="Explore places"></SolidButton>
              </div>
            </div>
            <div className="drone-footage-follow-container">
              <span className="drone-footage-text04">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="drone-footage-icons-container">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="drone-footage-link"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="drone-footage-icon05"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="drone-footage-link1"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="drone-footage-icon07"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="drone-footage-link2"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="drone-footage-icon09"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="drone-footage-hero">
          <h1 className="drone-footage-text05">
            <span>
              Michael Furman&apos;s
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>Drone Footage</span>
          </h1>
          <div className="drone-footage-content-container"></div>
        </div>
      </div>
      <div id="main-section" className="drone-footage-main">
        <h1 className="drone-footage-text09">Drone Highlights</h1>
        <div className="drone-footage-cards-container">
          <PlaceCard
            city="House Tours"
            image="/Videos &amp; Pictures/dji_00661-300h.jpg"
            description="Filmed houses and land for property tours, giving both developers, property managers and potential buyers a chance to see a preview of the properties"
            className="drone-footage-component1"
          ></PlaceCard>
          <PlaceCard
            city="WOODTV8's Drone Missions"
            image="https://images.unsplash.com/photo-1495764506633-93d4dfed7c6b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxkcm9uZXxlbnwwfHx8fDE3MTc0MzE0ODd8MA&amp;ixlib=rb-4.0.3&amp;w=300"
            description="Livestreamed and recorded local Grand Rapids stories using both private and the company's drone"
            className="drone-footage-component2"
          ></PlaceCard>
          <PlaceCard
            city="Advertisements"
            image="https://images.unsplash.com/photo-1654961393717-e20d3f7529f6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2Mnx8ZHJvbmUlMjBwaWN8ZW58MHx8fHwxNzE3NDMxNDM5fDA&amp;ixlib=rb-4.0.3&amp;w=300"
            description="Worked freelance for advertisements involving the use of drone shots for a variety of companies"
            className="drone-footage-component3"
          ></PlaceCard>
          <PlaceCard
            city="Marketing &amp; Social Media"
            image="https://images.unsplash.com/photo-1697394900698-8c88df19396f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzOHx8ZHJvbmUlMjBwaWN8ZW58MHx8fHwxNzE3NDMxNDE2fDA&amp;ixlib=rb-4.0.3&amp;w=300"
            description="Designed and planned company's rebranding, including website designs, graphic designs, and creating new video advertisements."
            className="drone-footage-component4"
          ></PlaceCard>
          <PlaceCard
            city="Land Surveys"
            image="https://images.unsplash.com/photo-1590523814792-4bbd9d7ddde4?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE0MXx8ZHJvbmUlMjBwaWN8ZW58MHx8fHwxNzE3NDMxNDE2fDA&amp;ixlib=rb-4.0.3&amp;w=300"
            description="Worked with property managers of farms, and other local land surveyors to both analyze the property, as well as gatehr footage of their farms"
            className="drone-footage-component5"
          ></PlaceCard>
          <PlaceCard
            city="Extras!"
            image="/Videos &amp; Pictures/img_4056-300h.jpg"
            description="Gathering drone footage is incredibly rewarding as the footage of sunsets, cities and people's lifestyles can be truly breathtaking"
            rootClassName="place-card-root-class-name2"
            className="drone-footage-component6"
          ></PlaceCard>
        </div>
      </div>
      <div className="drone-footage-footer">
        <div className="drone-footage-menu">
          <h1>Home</h1>
          <div className="drone-footage-links-container2">
            <div className="drone-footage-container1">
              <span className="drone-footage-text10">Drone Footage</span>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="drone-footage-link3"
              >
                Personal Projects
              </a>
              <span className="drone-footage-text11">Special deals</span>
              <Link to="/videos" className="drone-footage-link4">
                Video Projects
              </Link>
            </div>
            <div className="drone-footage-container2">
              <Link to="/about-me" className="drone-footage-navlink4">
                About Michael
              </Link>
              <Link to="/under-construction" className="drone-footage-navlink5">
                FAQ
              </Link>
              <Link to="/under-construction" className="drone-footage-navlink6">
                Adventures
              </Link>
              <Link to="/about-me" className="drone-footage-navlink7">
                Contact
              </Link>
            </div>
          </div>
          <div className="drone-footage-follow-container1">
            <span className="drone-footage-text12">
              Follow on
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <div className="drone-footage-icons-container1">
              <a
                href="https://www.instagram.com/myclefurball/"
                target="_blank"
                rel="noreferrer noopener"
                className="drone-footage-link5"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="drone-footage-icon11"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/michael.furman.961"
                target="_blank"
                rel="noreferrer noopener"
                className="drone-footage-link6"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="drone-footage-icon13"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="drone-footage-link7"
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="drone-footage-icon15"
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

export default DroneFootage
