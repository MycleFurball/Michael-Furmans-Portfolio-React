import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import PlaceCard from '../components/place-card'
import './espn-directing.css'

const ESPNDirecting = (props) => {
  return (
    <div className="espn-directing-container">
      <Helmet>
        <title>ESPN-Directing - Michael Furman's Portfolio</title>
        <meta
          property="og:title"
          content="ESPN-Directing - Michael Furman's Portfolio"
        />
      </Helmet>
      <div className="espn-directing-top-container">
        <nav data-role="Header" className="espn-directing-navbar">
          <Link to="/" className="espn-directing-navlink">
            <h1 className="espn-directing-logo">Home</h1>
          </Link>
          <div className="espn-directing-right-side">
            <div className="espn-directing-links-container">
              <Link to="/" className="espn-directing-navlink1">
                Home
              </Link>
              <Link to="/about-me" className="espn-directing-navlink2">
                About
              </Link>
              <Link to="/videos" className="espn-directing-navlink3">
                Videos
              </Link>
            </div>
            <SolidButton
              button="Contact"
              className="espn-directing-contact"
            ></SolidButton>
          </div>
          <div data-role="BurgerMenu" className="espn-directing-burger-menu">
            <svg
              viewBox="0 0 1024 1024"
              className="espn-directing-burger-menu1"
            >
              <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="espn-directing-mobile-menu">
            <div className="espn-directing-nav">
              <div className="espn-directing-top">
                <h1>Travel</h1>
                <div
                  data-role="CloseMobileMenu"
                  className="espn-directing-close-menu"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="espn-directing-icon03"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="espn-directing-right-side1">
                <div className="espn-directing-links-container1">
                  <span className="espn-directing-text">Home</span>
                  <span className="espn-directing-text01">About</span>
                  <span className="espn-directing-text02">Tour Packages</span>
                  <span>Contact</span>
                </div>
                <SolidButton button="Explore places"></SolidButton>
              </div>
            </div>
            <div className="espn-directing-follow-container">
              <span className="espn-directing-text04">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="espn-directing-icons-container">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="espn-directing-link"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="espn-directing-icon05"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="espn-directing-link1"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="espn-directing-icon07"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="espn-directing-link2"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="espn-directing-icon09"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="espn-directing-hero">
          <div className="espn-directing-content-container">
            <div className="espn-directing-container1"></div>
            <h1 className="espn-directing-text05">ESPN Experience</h1>
          </div>
        </div>
      </div>
      <div id="main-section" className="espn-directing-main">
        <h1 className="espn-directing-text06">Important Roles</h1>
        <div className="espn-directing-cards-container">
          <PlaceCard
            city="Replay Operations &amp; Field Graphics"
            image="/ESPN Pictures/20211120_113557-300h.jpg"
            description="Controlled the replay operations from all the camera shots "
            className="espn-directing-component1"
          ></PlaceCard>
          <PlaceCard
            city="Technical Direction "
            image="https://bloximages.newyork1.vip.townnews.com/roanoke.com/content/tncms/assets/v3/editorial/3/42/34212525-8bae-5795-abac-039953c4dc97/5c86945229884.image.jpg?resize=1200%2C635"
            description="Directed crews of camera operators, replay managers and graphic effect teams wielding smooth transitions for productions. Coordination management with Disney's ESPN headquarters for maintaining the quality broadcasts"
            className="espn-directing-component2"
          ></PlaceCard>
          <PlaceCard
            city="Camera Operations"
            image="/ESPN Pictures/xxx_4153_45023099-300h.webp"
            description="Managed camera positions from on the field interviews and close ups to high hero and full action shots"
            className="espn-directing-component3"
          ></PlaceCard>
        </div>
      </div>
      <div className="espn-directing-footer">
        <div className="espn-directing-menu">
          <h1>Home</h1>
          <div className="espn-directing-links-container2">
            <div className="espn-directing-container2">
              <span className="espn-directing-text07">Drone Footage</span>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="espn-directing-link3"
              >
                Personal Projects
              </a>
              <span className="espn-directing-text08">Special deals</span>
              <Link to="/videos" className="espn-directing-link4">
                Video Projects
              </Link>
            </div>
            <div className="espn-directing-container3">
              <Link to="/about-me" className="espn-directing-navlink4">
                About Michael
              </Link>
              <Link
                to="/under-construction"
                className="espn-directing-navlink5"
              >
                FAQ
              </Link>
              <Link
                to="/under-construction"
                className="espn-directing-navlink6"
              >
                Adventures
              </Link>
              <Link to="/about-me" className="espn-directing-navlink7">
                Contact
              </Link>
            </div>
          </div>
          <div className="espn-directing-follow-container1">
            <span className="espn-directing-text09">
              Follow on
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <div className="espn-directing-icons-container1">
              <a
                href="https://www.instagram.com/myclefurball/"
                target="_blank"
                rel="noreferrer noopener"
                className="espn-directing-link5"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="espn-directing-icon11"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/michael.furman.961"
                target="_blank"
                rel="noreferrer noopener"
                className="espn-directing-link6"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="espn-directing-icon13"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="espn-directing-link7"
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="espn-directing-icon15"
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

export default ESPNDirecting
