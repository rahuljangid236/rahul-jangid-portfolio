import Link from "next/link";
import React from "react";

async function Footer() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/footer`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch Footer data");
  }
  const { footerPersonalData } = await res.json();

  console.log("data", footerPersonalData);
  return (
    <footer className="clean-footer crev">
      <div className="container pb-40 pt-40 ontop">
        <div className="row justify-content-between">
          <div className="col-lg-2">
            <div className="logo icon-img-100 md-mb80">
              <img src="/assets/imgs/logo-light.png" alt="" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Contact</h6>
              <h6 className="p-color fw-400">
                {footerPersonalData?.address?.city},{" "}
                {footerPersonalData?.address?.state} , <br />
                {footerPersonalData?.address?.country},{" "}
                {footerPersonalData?.address?.pincode}
              </h6>
              <h6 className="mt-30 mb-15">
                <a href="#0">{footerPersonalData?.email}</a>
              </h6>
              <a href="#0" className="underline">
                <span className="fz-22 main-color">
                  {footerPersonalData?.phone}
                </span>
              </a>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Useful Links</h6>
              <ul className="rest fz-14 opacity-7">
                <li className="mb-15">
                  <a href="/about">About</a>
                </li>
                <li className="mb-15">
                  <a href="/services">Services</a>
                </li>
                <li className="mb-15">
                  <a href="/portfolio">Portfolio</a>
                </li>
                <li className="mb-15">
                  <a href="/blog">Blog</a>
                </li>
                <li className="mb-15">
                  <a href="/FAQ">FAQ</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="column subscribe-minimal">
              <h6 className="sub-title mb-30">Newsletter</h6>
              <div className="form-group mb-40">
                <input type="text" name="subscrib" placeholder="Your Email" />
                <button>
                  <span className="ti-location-arrow"></span>
                </button>
              </div>
              <ul className="rest social-icon d-flex align-items-center">
                <li className=" cursor-pointer">
                  <a
                    href={footerPersonalData?.socialLinks?.facebook}
                    target="_blank"
                    className=""
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className=" cursor-pointer ml-10">
                  <a href="#0" className="hover-anim">
                    <i class="fa-brands fa-github"></i>
                  </a>
                </li>
                <li className=" cursor-pointer ml-10">
                  <a
                    href={footerPersonalData?.socialLinks?.linkedIn}
                    target="_blank"
                    className="hover-anim"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li className=" cursor-pointer ml-10">
                  <a
                    href={footerPersonalData?.socialLinks?.instagram}
                    target="_blank"
                    className="hover-anim"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-30 pb-30 mt-80 bord-thin-top">
          <div className="text-center">
            <p className="fz-14">
              © 2025{" "}
              <span className="underline main-color">
                <a href="#" target="_blank">
                  Rahul Jangid
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="circle-blur">
        <img src="/assets/imgs/patterns/blur1.png" alt="" />
      </div>
    </footer>
  );
}

export default Footer;
