import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const LandingContainer = (props) => (
  <div>
  <div className="welcome">
    <h2>Your Own Personal Hype Train!</h2>
    <h3 className="app-description">
    ChooChoo is a pro-social, empathetic engagement app 
    based on the science of the relationship between generosity 
    and happiness, and seeks to foster a cycle of positive community engagement 
    and corresponding charitable donations.
    </h3>
    </div>
  <div className="callout large primary">
    <div className="media-object stack-for-small">
      <div className="media-object-section">
        <h4 text-center>What? Why? How?</h4>
        <p>
          ChooChoo is platform where folks can send out their 
          own personal hype train of public praise and superlatives 
          to members of their community, and where their positive 
          engagement is then correspondingly rewarded via charitable 
          donations in the sender’s name. Good players in the community 
          receive a text notification when someone has sent them an accolade, 
          along with a link to the donation page of the corresponding 
          charity selected by the nominator from our good player’s shortlist. 
          Once our charitable samaritan has made good on their pledge, 
          they submit a screenshot of their donation to their own profile, 
          which will then dynamically update their cumulative donation total 
          in correspondence with their pledged donation amount. 
        </p>
      </div>
    </div>
  </div>
  <div className="grid-container science">
    <h3 className="text-center">Believe the Hype: The Science Behind ChooChoo</h3>
    <div className="grid-x grid-margin-x medium-up-4 large-up-4">
      <div className="cell">
        <div className="card">
          <div className="card-section">
            <h4>Study 1</h4>
            <p>
              Summary, Citation, Link
            </p>
          </div>
        </div>
      </div>
      <div className="cell">
        <div className="card">
          <div className="card-section">
            <h4>Study 2</h4>
            <p>
              Summary, Citation, Link
            </p>
          </div>
        </div>
      </div>
      <div className="cell">
        <div className="card">
          <div className="card-section">
            <h4>Study 3</h4>
            <p>
              Summary, Citation, Link
            </p>
          </div>
        </div>
      </div>
      <div className="cell">
        <div className="card">
          <div className="card-section">
            <h4>Study 4</h4>
            <p>
              Summary, Citation, Link
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="callout large primary">
    <div className="media-object stack-for-small">
      <div className="media-object-section">
        <h4 text-center>Lets Get Started!</h4>
        <p>
          "Description text here"
        </p>
      </div>
    </div>
  </div>
</div>
)

export default LandingContainer