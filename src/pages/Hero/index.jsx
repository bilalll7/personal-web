import React from "react";
import image from "../../assets/img/profil1.png";
import {
  FaSpotify,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaArrowRight,
} from "react-icons/fa";
import Type from "../../components/Type";

function index() {
  return (
    <>
      <div class="hero">
        <div class="hero-top">
          <img src={image} alt="all1" />
        </div>
        <div class="hero-mid">
          <h1 class="hero-name">Albilal Bintang Iskandar</h1>
          <p class="hero-skills">
            <Type />
          </p>
          <a href="https://bilalll7.github.io/about/" class="hero-btn">
            About Me
            <FaArrowRight />
          </a>
        </div>
        <div class="hero-bottom">
          <a href="https://github.com/bilalll7" id="github">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/albilal-bintang-iskandar-a5250a292/"
            id="linkedin"
          >
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/albilalbintang" id="instagram">
            <FaInstagram />
          </a>
          <a
            href="https://open.spotify.com/user/31exv4prsil6xn2w4r52dontn66m?si=30a8a5a3457b404d"
            id="spotify"
          >
            <FaSpotify />
          </a>
        </div>
      </div>
    </>
  );
}

export default index;
