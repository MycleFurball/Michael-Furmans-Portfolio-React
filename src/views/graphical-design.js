import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import PlaceCard from '../components/place-card'
import './graphical-design.css'

const GraphicalDesign = (props) => {
  return (
    <div className="graphical-design-container">
      <Helmet>
        <title>Graphical-Design - Michael Furman's Portfolio</title>
        <meta
          property="og:title"
          content="Graphical-Design - Michael Furman's Portfolio"
        />
      </Helmet>
      <div className="graphical-design-top-container">
        <nav data-role="Header" className="graphical-design-navbar">
          <Link to="/" className="graphical-design-navlink">
            <h1 className="graphical-design-logo">Home</h1>
          </Link>
          <div className="graphical-design-right-side">
            <div className="graphical-design-links-container">
              <Link to="/" className="graphical-design-navlink1">
                Home
              </Link>
              <Link to="/about-me" className="graphical-design-navlink2">
                About
              </Link>
              <Link to="/videos" className="graphical-design-navlink3">
                Videos
              </Link>
            </div>
            <SolidButton
              button="Contact"
              className="graphical-design-contact"
            ></SolidButton>
          </div>
          <div data-role="BurgerMenu" className="graphical-design-burger-menu">
            <svg
              viewBox="0 0 1024 1024"
              className="graphical-design-burger-menu1"
            >
              <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="graphical-design-mobile-menu">
            <div className="graphical-design-nav">
              <div className="graphical-design-top">
                <h1>Travel</h1>
                <div
                  data-role="CloseMobileMenu"
                  className="graphical-design-close-menu"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="graphical-design-icon03"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="graphical-design-right-side1">
                <div className="graphical-design-links-container1">
                  <span className="graphical-design-text">Home</span>
                  <span className="graphical-design-text01">About</span>
                  <span className="graphical-design-text02">Tour Packages</span>
                  <span>Contact</span>
                </div>
                <SolidButton button="Explore places"></SolidButton>
              </div>
            </div>
            <div className="graphical-design-follow-container">
              <span className="graphical-design-text04">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="graphical-design-icons-container">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="graphical-design-link"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="graphical-design-icon05"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="graphical-design-link1"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="graphical-design-icon07"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="graphical-design-link2"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="graphical-design-icon09"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="graphical-design-hero">
          <div className="graphical-design-content-container">
            <div className="graphical-design-container1">
              <h1 className="graphical-design-text05">Graphical Design</h1>
            </div>
          </div>
        </div>
      </div>
      <div id="main-section" className="graphical-design-main">
        <h1 className="graphical-design-text06">Important Projects</h1>
        <div className="graphical-design-cards-container">
          <PlaceCard
            city="Primary Designs"
            description="Primary website designs, both with premade templates, as well as forming from scratch"
            className="graphical-design-component1"
          ></PlaceCard>
          <PlaceCard
            city="Website Design"
            image="https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxXZWJzaXRlJTIwZGVzaWdufGVufDB8fHx8MTcxNzUyNDI3NXww&amp;ixlib=rb-4.0.3&amp;w=300"
            description="Michael has designed websites both for work purposes as well as for friend's portfolios "
            className="graphical-design-component2"
          ></PlaceCard>
          <PlaceCard
            city="Others"
            image="https://images.unsplash.com/photo-1608699565424-597c238383c2?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1N3x8Z3JhcGhpYyUyMGRlc2lnbnxlbnwwfHx8fDE3MTc1MjQxNDl8MA&amp;ixlib=rb-4.0.3&amp;w=300"
            description="Extra projects involving graphical designs "
            className="graphical-design-component3"
          ></PlaceCard>
        </div>
      </div>
      <div className="graphical-design-footer">
        <div className="graphical-design-menu">
          <h1>Home</h1>
          <div className="graphical-design-links-container2">
            <div className="graphical-design-container2">
              <span className="graphical-design-text07">Drone Footage</span>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="graphical-design-link3"
              >
                Personal Projects
              </a>
              <span className="graphical-design-text08">Special deals</span>
              <Link to="/videos" className="graphical-design-link4">
                Video Projects
              </Link>
            </div>
            <div className="graphical-design-container3">
              <Link to="/about-me" className="graphical-design-navlink4">
                About Michael
              </Link>
              <Link
                to="/under-construction"
                className="graphical-design-navlink5"
              >
                FAQ
              </Link>
              <Link
                to="/under-construction"
                className="graphical-design-navlink6"
              >
                Adventures
              </Link>
              <Link to="/about-me" className="graphical-design-navlink7">
                Contact
              </Link>
            </div>
          </div>
          <div className="graphical-design-follow-container1">
            <span className="graphical-design-text09">
              Follow on
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <div className="graphical-design-icons-container1">
              <a
                href="https://www.instagram.com/myclefurball/"
                target="_blank"
                rel="noreferrer noopener"
                className="graphical-design-link5"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="graphical-design-icon11"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/michael.furman.961"
                target="_blank"
                rel="noreferrer noopener"
                className="graphical-design-link6"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="graphical-design-icon13"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="graphical-design-link7"
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="graphical-design-icon15"
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

export default GraphicalDesign
