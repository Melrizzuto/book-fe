import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter className="bg-light text-center text-white">
      <MDBContainer className="p-4 pb-0">
        <section className="mb-4">
          {/* FACEBOOK-ICON */}
          <MDBBtn
            floating
            className="m-1"
            style={{
              backgroundColor: "#3b5998",
              width: "40px",
              height: "40px",
            }}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>
          {/* TWITTER-ICON */}
          <MDBBtn
            floating
            className="m-1"
            style={{
              backgroundColor: "#55acee",
              width: "40px",
              height: "40px",
            }}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="twitter" />
          </MDBBtn>
          {/* GOOGLE-ICON */}
          <MDBBtn
            floating
            className="m-1"
            style={{
              backgroundColor: "#dd4b39",
              width: "40px",
              height: "40px",
            }}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="google" />
          </MDBBtn>
          {/* INSTAGRAM */}
          <MDBBtn
            floating
            className="m-1"
            style={{
              backgroundColor: "#ac2bac",
              width: "40px",
              height: "40px",
            }}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="instagram" />
          </MDBBtn>
          {/*LINKEDIN-ICON */}
          <MDBBtn
            floating
            className="m-1"
            style={{
              backgroundColor: "#0082ca",
              width: "40px",
              height: "40px",
            }}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>
          {/* GITHUB */}
          <MDBBtn
            floating
            className="m-1"
            style={{
              backgroundColor: "#333333",
              width: "40px",
              height: "40px",
            }}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="github" />
          </MDBBtn>
        </section>
      </MDBContainer>
      {/* COPYRIGHT DIV */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        Webapp
      </div>
    </MDBFooter>
  );
}
