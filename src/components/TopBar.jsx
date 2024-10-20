import React from 'react';
import { Phone, Mail, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar-content">
        <div className="topbar-left">
          <div className="topbar-item">
            <Phone size={14} className="topbar-icon" />
            <span className="topbar-text">(225) 555-0118</span>
          </div>
          <div className="topbar-item">
            <Mail size={14} className="topbar-icon" />
            <span className="topbar-text">michelle.rivera@example.com</span>
          </div>
        </div>
        <div className="topbar-center">
          <span className="topbar-text">Follow Us and get a chance to win 80% off</span>
        </div>
        <div className="topbar-right">
          <span className="topbar-text">Follow Us:</span>
          <div className="social-icons">
            <Instagram size={14} className="social-icon" />
            <Youtube size={14} className="social-icon" />
            <Facebook size={14} className="social-icon" />
            <Twitter size={14} className="social-icon" />
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;