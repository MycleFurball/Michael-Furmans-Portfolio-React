import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import PlaceCard from '../components/place-card'
import './home.css'

const HOME = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Michael Furman's Portfolio</title>
        <meta property="og:title" content="Michael Furman's Portfolio" />
      </Helmet>
      <div className="home-top-container">
        <nav data-role="Header" className="home-navbar">
          <Link to="/" className="home-navlink">
            <h1 className="home-logo">Home</h1>
          </Link>
          <div className="home-right-side">
            <div className="home-links-container">
              <Link to="/" className="home-navlink01">
                Home
              </Link>
              <Link to="/about-me" className="home-navlink02">
                About
              </Link>
              <Link to="/other-projects" className="home-navlink03">
                Videos
              </Link>
            </div>
            <Link to="/about-me" className="home-navlink04">
              <SolidButton
                button="Contact"
                className="home-contact"
              ></SolidButton>
            </Link>
          </div>
          <div data-role="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-burger-menu1">
              <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-nav">
              <div className="home-top">
                <h1>Travel</h1>
                <div data-role="CloseMobileMenu" className="home-close-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon03">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="home-right-side1">
                <div className="home-links-container1">
                  <span className="home-text">Home</span>
                  <span className="home-text01">About</span>
                  <span className="home-text02">Tour Packages</span>
                  <span>Contact</span>
                </div>
                <a href="#main-section" className="home-link">
                  <SolidButton button="Explore places"></SolidButton>
                </a>
              </div>
            </div>
            <div className="home-follow-container">
              <span className="home-text04">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="home-icons-container">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link1"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon05"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link2"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="home-icon07"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link3"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon09"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="home-hero">
          <h1 className="home-text05 Heading">Michael Furman</h1>
          <div className="home-content-container">
            <h2 className="home-subheading Subheading">
              Communication Designer
            </h2>
            <span className="home-text06">
              <span>Videographer, Editor, Graphic Designer</span>
              <br></br>
              <span>Multimedia Communications Specialist </span>
            </span>
            <a
              href="https://www.youtube.com/watch?v=pWv2b_B2Rco"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link4"
            >
              <SolidButton
                button="Highlight Reel"
                className="home-highlight-reel"
              ></SolidButton>
            </a>
          </div>
        </div>
      </div>
      <div id="main-section" className="home-main">
        <h1 className="home-text10">Career Highlights</h1>
        <span className="home-text11">
          Videos, Projects, Designs &amp; More
        </span>
        <div className="home-cards-container">
          <Link to="/drone-footage" className="home-navlink05">
            <PlaceCard
              city="Remote Drone Piloting"
              image="https://assets.bucketlistly.blog/sites/5adf778b6eabcc00190b75b1/content_entry5adf77af6eabcc00190b75b6/60e133bc326f51000b44a5ac/files/dji-mini-2-review-best-travel-drone-main-image-hd-op.jpg"
              description="Licenced FAA remote drone pilot certified. Available to record and sell drone footage from personal and company drones"
              className="home-component1"
            ></PlaceCard>
          </Link>
          <Link to="/wood-tv8" className="home-navlink06">
            <PlaceCard
              city="WOODTV8"
              image="https://www.woodtv.com/wp-content/uploads/sites/51/2020/04/WOOD-Monitor-Graphic.jpg?w=1280"
              description="Recorded and livestreamed local news stories; filming and editing interviews,  live reporters, emergency stories, and studio packages."
              className="home-component2"
            ></PlaceCard>
          </Link>
          <Link to="/graphical-design" className="home-navlink07">
            <PlaceCard
              city="Graphical Design"
              image="https://media.istockphoto.com/id/1411682102/photo/3d-abstract-colorful-background-suitable-for-magazine-covers-banners-and-brochures-3d-render.webp?b=1&amp;s=170667a&amp;w=0&amp;k=20&amp;c=uIf4qSqwxGV8aObX-1fWAx7FEQ0bs7MNUYxWPmFIwK8="
              className="home-component3"
            ></PlaceCard>
          </Link>
          <Link to="/marketing-social-media" className="home-navlink08">
            <PlaceCard
              city="Marketing &amp; Social Media"
              image="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600"
              description="Designed and planned company rebranding, website designs, graphics, and creating video advertisements."
              className="home-component4"
            ></PlaceCard>
          </Link>
          <Link to="/under-construction" className="home-navlink09">
            <PlaceCard
              city="ESPN Technical Director"
              image="https://bloximages.newyork1.vip.townnews.com/roanoke.com/content/tncms/assets/v3/editorial/3/42/34212525-8bae-5795-abac-039953c4dc97/5c86945229884.image.jpg?resize=1200%2C635"
              description="Directed crews of camera operators, replay managers and graphic effect teams wielding smooth transitions for productions. Coordination management with Disney's ESPN headquarters for maintaining the quality broadcasts."
              className="home-component5"
            ></PlaceCard>
          </Link>
          <Link to="/other-projects" className="home-navlink10">
            <PlaceCard
              city="Other Projects"
              image="https://michael.furman.dev/public/playground_assets/iokds%20nafi-300h.jpg"
              description="Increased IOKDS's social media presence by developing Instagram and Twitter pages. Edited and filmed interviews, performances, &amp; events to post."
              rootClassName="place-card-root-class-name"
              className="home-component6"
            ></PlaceCard>
          </Link>
        </div>
      </div>
      <div className="home-footer">
        <div className="home-menu">
          <h1>Home</h1>
          <div className="home-links-container2">
            <div className="home-container1">
              <Link to="/drone-footage" className="home-navlink11">
                Drone Footage
              </Link>
              <Link to="/other-projects" className="home-navlink12">
                Personal Projects
              </Link>
              <Link to="/under-construction" className="home-navlink13">
                Special deals
              </Link>
              <Link to="/under-construction" className="home-link5">
                Video Projects
              </Link>
            </div>
            <div className="home-container2">
              <Link to="/about-me" className="home-navlink14">
                About Michael
              </Link>
              <Link to="/under-construction" className="home-navlink15">
                FAQ
              </Link>
              <Link to="/under-construction" className="home-navlink16">
                Adventures
              </Link>
              <Link to="/about-me" className="home-navlink17">
                Contact
              </Link>
            </div>
          </div>
          <div className="home-follow-container1">
            <span className="home-text12">
              Follow on
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <div className="home-icons-container1">
              <a
                href="https://www.instagram.com/myclefurball/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link6"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon11"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/michael.furman.961"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link7"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="home-icon13"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link8"
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon15"
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

export default HOME
