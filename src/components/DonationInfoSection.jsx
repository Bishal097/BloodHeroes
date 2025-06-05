import React from 'react';
import { Link } from 'react-router-dom';
import image9 from '../assets/images/image9.jpg';// ✅ Correct relative import

const DonationInfoSection = () => {
  return (
    <div className="row" style={{ paddingTop: '4px' }}>
      <div className="row text-center">
        <div className="col-md-12 typeHeading">
          <h1 className="learnAbout">Learn About Donation</h1>
        </div>
        <br /><br />

        {/* Donation Image and Description */}
        <div
          className="wow col-sm-6 rotateInDownRight text-center animated"
          style={{
            visibility: 'visible',
            animationDuration: '1000ms',
            animationName: 'rotateInDownRight',
          }}
        >
          <picture>
            <img
              src={image9} // ✅ Use the imported image
              alt="One Donation Can Save Up to Three Lives"
              height="400"
            />
          </picture>
          <blockquote>
            <p style={{ fontFamily: 'oswald' }}>
              After donating blood, the body works to replenish the blood loss. This
              stimulates the production of new blood cells and in turn, helps in
              maintaining good health.
            </p>
          </blockquote>

          <button
            onClick={() => (window.location = '/login')}
            className="btn btn-danger svcNearBy hvr-sweep-to-right"
          >
            <i className="fa fa-tint"></i>&nbsp; Donate Now
          </button>
          <br /><br />
        </div>

        {/* Compatible Blood Type Donors Table */}
        <div className="col-sm-6" align="center" style={{ fontSize: '1.5rem' }}>
          <table className="table table-responsive">
            <tbody>
              <tr>
                <th colSpan="3" style={{ color: 'white', backgroundColor: '#1976D2' }}>
                  Compatible Blood Type Donors
                </th>
              </tr>
              <tr>
                <td><b>Blood Type</b></td>
                <td><b>Donate Blood To</b></td>
                <td><b>Receive Blood From</b></td>
              </tr>
              <tr><td><b style={{ color: '#961e1b' }}>A+</b></td><td>A+ AB+</td><td>A+ A- O+ O-</td></tr>
              <tr><td><b style={{ color: '#961e1b' }}>O+</b></td><td>O+ A+ B+ AB+</td><td>O+ O-</td></tr>
              <tr><td><b style={{ color: '#961e1b' }}>B+</b></td><td>B+ AB+</td><td>B+ B- O+ O-</td></tr>
              <tr><td><b style={{ color: '#961e1b' }}>AB+</b></td><td>AB+</td><td>Everyone</td></tr>
              <tr><td><b style={{ color: '#961e1b' }}>A-</b></td><td>A+ A- AB+ AB-</td><td>A- O-</td></tr>
              <tr><td><b style={{ color: '#961e1b' }}>O-</b></td><td>Everyone</td><td>O-</td></tr>
              <tr><td><b style={{ color: '#961e1b' }}>B-</b></td><td>B+ B- AB+ AB-</td><td>B- O-</td></tr>
              <tr><td><b style={{ color: '#961e1b' }}>AB-</b></td><td>AB+ AB-</td><td>AB- A- B- O-</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DonationInfoSection;
