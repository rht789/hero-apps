import React from "react";
import { Link } from "react-router";
import { FaAppStore, FaGoogle, FaWindows, FaApple } from "react-icons/fa";
import { MdSecurity, MdSupport, MdDeveloperMode } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <nav>
          <h6 className="footer-title flex items-center gap-2">
            <FaAppStore /> Discover Apps
          </h6>
          <Link to="/apps" className="link link-hover">
            Popular Apps
          </Link>
          <Link to="/apps" className="link link-hover">
            New Releases
          </Link>
          <Link to="/apps" className="link link-hover">
            Categories
          </Link>
          <a className="link link-hover">Top Rated</a>
        </nav>
        <nav>
          <h6 className="footer-title flex items-center gap-2">
            <MdDeveloperMode /> Developers
          </h6>
          <a className="link link-hover">Submit Your App</a>
          <a className="link link-hover">Developer Console</a>
          <a className="link link-hover">API Documentation</a>
          <a className="link link-hover">Publishing Guidelines</a>
        </nav>
        <nav>
          <h6 className="footer-title flex items-center gap-2">
            <MdSupport /> Support
          </h6>
          <a className="link link-hover">Help Center</a>
          <a className="link link-hover">Contact Support</a>
          <Link to="/installation" className="link link-hover">
            Installation Guide
          </Link>
          <a className="link link-hover">Community Forum</a>
        </nav>
        <nav>
          <h6 className="footer-title flex items-center gap-2">
            <MdSecurity /> Legal & Security
          </h6>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Security Center</a>
          <a className="link link-hover">Report Issues</a>
        </nav>
      </footer>

      <footer className="footer footer-center bg-base-300 text-base-content p-4">
        <aside className="grid-flow-col gap-4">
          <p className="flex items-center gap-2">
            Available on:
            <FaGoogle className="text-green-500" title="Google Play Store" />
            <FaAppStore className="text-blue-600" title="Apple App Store" />
          </p>
        </aside>
        <aside>
          <p>Copyright © 2025 - Hero.io App Market. All rights reserved.</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
