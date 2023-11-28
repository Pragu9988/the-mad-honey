import {
  CrossIcon,
  FacebookIcon,
  InstagramIcon,
  X,
  YoutubeIcon,
} from "lucide-react";
import React from "react";

type TProps = {
  handleRemoveAnnouncement: () => void;
};

const AnnouncementBar = ({ handleRemoveAnnouncement }: TProps) => {
  return (
    <div
      id="section-announcement-bar"
      className="header-section section-announcement-bar"
    >
      <div className="announcement-bar bg-accent-500 py-2 text-white">
        <div className="container container__max mx-auto">
          <div className="grid grid-cols-6 items-center justify-between">
            <div className="announcement-bar__left hidden md:block col-span-1">
              <div className="social-links flex items-center gap-2 text-sm font-medium">
                <span className="follow-text uppercase"> Follow US</span>
                <ul className="social-links__list flex items-center gap-2">
                  <li>
                    <a
                      aria-label="Facebook"
                      className="facebook-link"
                      target="_blank"
                      rel="noopener"
                      href="https://www.facebook.com/aminu.life"
                    >
                      <FacebookIcon size={14} strokeWidth={1.5} />
                    </a>
                  </li>
                  <li>
                    <a
                      aria-label="Instagram"
                      className="instagram-link"
                      target="_blank"
                      rel="noopener"
                      href="https://www.instagram.com/aminu.life/?igshid=37u75edqcu7y"
                    >
                      <InstagramIcon size={14} strokeWidth={1.5} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="announcement-bar__middle col-span-6 md:col-span-4 text-center">
              <div className="announcement-bar__announcements">
                <div className="announcement">
                  <div className="announcement__text">
                    <p>
                      <strong>Free Shipping </strong>anywhere in Nepal
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="announcement-bar__right col-span-1 items-end">
              <X
                className="ml-auto cursor-pointer"
                size={16}
                onClick={handleRemoveAnnouncement}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
