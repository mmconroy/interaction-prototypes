import React, { useState } from "react";
import "./App.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import image from "./img/profile.jpeg";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { render } from "@testing-library/react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpenCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        width: "100vw",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        style={{
          maxWidth: "345px",
        }}
      >
        <CardContent>
          <Typography variant="h3">About Me </Typography>
          <CardMedia>
            <img
              src={image}
              alt="Profile Image"
              className="profile-img"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <ExpandMoreIcon
              className="icon"
              style={{
                position: "relative",
                marginTop: "8px",
                width: "36px",
                height: "36px",
                left: "17rem",
                top: "1rem",
                transform: "translateY(-50%) rotate(180deg)",
              }}
              onClick={toggleOpenCard}
            ></ExpandMoreIcon>
          </CardMedia>
          {isOpen && (
            <Typography
              variant="body1"
              className="expanded-text"
              style={{
                padding: "0 8px",
                transition: "all 0.2s ease",
                backgroundColor: "white",
              }}
            >
              I was born and raised a{" "}
              <a href="https://en.wikipedia.org/wiki/Hoosier" target="_blank">
                Hoosier
              </a>
              *. I've always taken that as a compliment. Like most
              midwesterners, I want to work hard and keep those I care about
              happy and healthy. This doesn't make me particularly neat or
              special but it is the ideal I strive for. How I became a UX
              Engineer is the result of years of following my ideals but never
              really taking my own passions into account. Technology, and
              especially how we interact with it, has always been something I've
              loved. I have been afforded a lot of privilege by just being here.
              And while I am incredibly lucky to be in that position, I also
              have an obligation to use my privilege for good and for others.
              That obligation follows me as a designer. Being a designer who
              also codes allows me to be a part of the entire user experience. I
              firmly believe that using human-centered design is the only way to
              create products for everyone. In my spare time, I enjoy biking,
              reading, volunteering, practicing yoga, Crystal Palace Football
              Club, and trying new craft beers.
            </Typography>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
