import React from 'react'

import { DateTimePrimitive } from '@teleporthq/react-components'
import { Helmet } from 'react-helmet'

import SolidButton1 from '../components/solid-button1'
import ListItem from '../components/list-item'
import './old-base.css'

const OldBase = (props) => {
  return (
    <div className="old-base-container">
      <Helmet>
        <title>Old-Base - Michael Furman's Portfolio</title>
        <meta
          property="og:title"
          content="Old-Base - Michael Furman's Portfolio"
        />
      </Helmet>
      <div className="old-base-hero"></div>
      <nav data-role="Header" className="old-base-navbar">
        <h1 className="old-base-logo">Home</h1>
        <div className="old-base-right-side">
          <div className="old-base-links-container">
            <span className="old-base-text">Home</span>
            <span className="old-base-text01">About</span>
            <span className="old-base-text02">Videos</span>
          </div>
          <SolidButton1
            button="Contact"
            className="old-base-contact"
          ></SolidButton1>
        </div>
        <div data-role="BurgerMenu" className="old-base-burger-menu">
          <svg viewBox="0 0 1024 1024" className="old-base-burger-menu1">
            <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="old-base-mobile-menu">
          <div className="old-base-nav">
            <div className="old-base-top">
              <h1>Travel</h1>
              <div data-role="CloseMobileMenu" className="old-base-close-menu">
                <svg viewBox="0 0 1024 1024" className="old-base-icon03">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="old-base-right-side1">
              <div className="old-base-links-container1">
                <span className="old-base-text03">Home</span>
                <span className="old-base-text04">About</span>
                <span className="old-base-text05">Tour Packages</span>
                <span>Contact</span>
              </div>
              <SolidButton1 button="Explore places"></SolidButton1>
            </div>
          </div>
          <div className="old-base-follow-container">
            <span className="old-base-text07">
              <span>
                <span>
                  Follow us on
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
            <div className="old-base-icons-container">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="old-base-icon05"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="old-base-icon07"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="old-base-icon09"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
            </div>
          </div>
        </div>
      </nav>
      <div className="old-base-container01">
        <h2 className="old-base-text14 HeadingTwo">Videos</h2>
        <span className="old-base-text15">
          We’re constantly trying to express ourselves and actualize our dreams.
          Don&apos;t stop.
        </span>
      </div>
      <section className="old-base-contaier">
        <div className="old-base-container02">
          <video
            loop="true"
            muted="true"
            poster="https://images.unsplash.com/photo-1509902961216-05a66d19a512?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE5fHxkcm9uZSUyMGZvb3RhZ2V8ZW58MHx8fHwxNzEzNzk3MjExfDA&amp;ixlib=rb-4.0.3&amp;w=500"
            autoPlay="true"
            playsInline="true"
            className="old-base-video"
          ></video>
          <div className="old-base-container03">
            <ListItem></ListItem>
            <ListItem
              title="2. Performance Analyze"
              description="Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich insights from easy-to-use reports."
            ></ListItem>
            <ListItem
              title="3. Social Conversions"
              description="Track actions taken on your website that originated from social, and understand the impact on your bottom line."
            ></ListItem>
          </div>
        </div>
        <span className="old-base-text16">
          <br></br>
          <span>wevhsdvhvsodfh op</span>
          <br></br>
          <span>jopsdifj</span>
          <br></br>
        </span>
        <span>
          <DateTimePrimitive
            date="Mon Apr 22 2024 10:35:26 GMT-0400 (Eastern Daylight Time)"
            format="DD/MM/YYYY"
          ></DateTimePrimitive>
        </span>
        <div className="old-base-container04">
          <div className="old-base-container05">
            <ListItem
              title="2. Work With Any Team"
              description="Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich insights from easy-to-use reports."
            ></ListItem>
            <ListItem
              title="1. Always in Sync"
              description="No matter where you are, Trello stays in sync across all of your devices."
            ></ListItem>
            <ListItem
              title="3. A Productivity Platform"
              description="Integrate the apps your team already uses directly into your workflow."
            ></ListItem>
          </div>
          <video
            src="https://www.youtube.com/watch?v=pWv2b_B2Rco&amp;t=2s"
            loop="true"
            muted="true"
            poster="https://images.unsplash.com/photo-1600888703875-a7c4eab1d992?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDh8fGRyb25lJTIwZm9vdGFnZXxlbnwwfHx8fDE3MTM3OTcyMTF8MA&amp;ixlib=rb-4.0.3&amp;w=700"
            autoPlay="true"
            playsInline="true"
            className="old-base-video1"
          ></video>
        </div>
        <span className="old-base-text22">
          <span>wevhsdvhvsodfh op</span>
          <br></br>
          <span>jopsdifj</span>
          <br></br>
        </span>
        <div className="old-base-container06">
          <video
            src="https://www.youtube.com/watch?v=pWv2b_B2Rco&amp;t=2s"
            loop="true"
            muted="true"
            poster="https://images.unsplash.com/photo-1465447142348-e9952c393450?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI2fHxkcm9uZSUyMGZvb3RhZ2V8ZW58MHx8fHwxNzEzNzk3MjQwfDA&amp;ixlib=rb-4.0.3&amp;w=500"
            autoPlay="true"
            playsInline="true"
            className="old-base-video2"
          ></video>
          <div className="old-base-container07">
            <ListItem></ListItem>
            <ListItem
              title="2. Performance Analyze"
              description="Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich insights from easy-to-use reports."
            ></ListItem>
            <ListItem
              title="3. Social Conversions"
              description="Track actions taken on your website that originated from social, and understand the impact on your bottom line."
            ></ListItem>
          </div>
        </div>
        <span className="old-base-text27">
          <br></br>
          <span>wevhsdvhvsodfh op</span>
          <br></br>
          <span>jopsdifj</span>
          <br></br>
        </span>
        <div className="old-base-container08">
          <div className="old-base-container09">
            <ListItem
              title="2. Work With Any Team"
              description="Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich insights from easy-to-use reports."
            ></ListItem>
            <ListItem
              title="1. Always in Sync"
              description="No matter where you are, Trello stays in sync across all of your devices."
            ></ListItem>
            <ListItem
              title="3. A Productivity Platform"
              description="Integrate the apps your team already uses directly into your workflow."
            ></ListItem>
          </div>
          <video
            src="https://www.youtube.com/watch?v=pWv2b_B2Rco&amp;t=2s"
            loop="true"
            muted="true"
            poster="https://images.unsplash.com/photo-1509902961216-05a66d19a512?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE5fHxkcm9uZSUyMGZvb3RhZ2V8ZW58MHx8fHwxNzEzNzk3MjExfDA&amp;ixlib=rb-4.0.3&amp;w=500"
            autoPlay="true"
            playsInline="true"
            className="old-base-video3"
          ></video>
        </div>
      </section>
      <div className="old-base-footer">
        <div className="old-base-menu">
          <h1>Home</h1>
          <div className="old-base-links-container2">
            <div className="old-base-container10">
              <span className="old-base-text33">Drone Footage</span>
              <span className="old-base-text34">Personal Projects</span>
              <span className="old-base-text35">Special deals</span>
              <span className="old-base-link">Video Projects</span>
            </div>
            <div className="old-base-container11">
              <span className="old-base-text36">About Michael</span>
              <span className="old-base-text37">FAQ</span>
              <span className="old-base-text38">Adventures</span>
              <span className="old-base-text39">Contact</span>
            </div>
          </div>
          <div className="old-base-follow-container1">
            <span className="old-base-text40">
              <span>
                <span>
                  Follow on
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
            <div className="old-base-icons-container1">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="old-base-icon11"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="old-base-icon13"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="old-base-icon15"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OldBase
