import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import "./App.css";
import octocat from "./img/Octocat.png";

const projectList = [
  {
    id: 1,
    title: "Foundation Project",
    description:
      "Decluttering, purging, moving, or just selling the things you don’t want is a stressful process. Organize.me makes purging and selling things online more accessible for everyone.",
    imageURL:
      "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/64342049_945913729089798_7992108284364455936_o.jpg?_nc_cat=1&_nc_sid=09cbfe&_nc_oc=AQnTexsUxW8sP45N9GQMfINjd-UULSncq8z39B86AzFpnEixn036WBbPSEo3stTpceU&_nc_ht=scontent-ort2-1.xx&oh=8e410967176137cbd83936ec1a478adf&oe=5F130D26",
    checked: "false",
  },
  // {
  //   id: 2,
  //   title: "High Fidelity Landing Page Mockup",
  //   description:
  //     "Built a high fidelity HTML/CSS landing page from mockup with UI accuracy and using CSS development best practices.",
  //   imageURL: "https://picsum.photos/800/400",
  //   checked: "false",
  // },
  // {
  //   id: 3,
  //   title: "Collaboration Project",
  //   description:
  //     "Harmonize takes the power of word of mouth communication to better engage communities within the context of their own community.",
  //   imageURL: "https://picsum.photos/600/300",
  //   checked: "false",
  // },
  // {
  //   id: 4,
  //   title: "Mock Landing Page Project",
  //   description:
  //     "Created a responsive lo-fi design of a landing page for Kenzie Academy.",
  //   imageURL: "https://picsum.photos/1200/600",
  //   checked: "false",
  // },
];

function App() {
  const [isChecked, setIsChecked] = useState(false);
  const toggleButton = () => {
    setIsChecked(!isChecked);
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
        marginTop: "2rem",
      }}
    >
      {" "}
      {projectList.map((project) => (
        <>
          <Card style={{ width: "25rem", marginBottom: "1rem" }}>
            <CardContent>
              <CardActionArea style={{}}>
                <Typography variant="h4">{project.title}</Typography>
                <CardMedia>
                  {" "}
                  <img
                    className="card-image"
                    style={{
                      width: "400px",
                      height: "200px",
                      objectFit: "cover",
                      imageOrientation: "center",
                    }}
                    src={project.imageURL}
                    alt="project"
                  />
                  {isChecked && (
                    <div className="overlay">
                      <Typography variant="h5" className="link-text">
                        Open on Github
                      </Typography>
                      <img src={octocat} alt="" className="github-logo" />
                    </div>
                  )}
                </CardMedia>
                <Typography variant="body2" color="textSecondary" component="p">
                  {project.description}
                </Typography>
                <CardActions>
                  <Button size="small" onClick={toggleButton}>
                    Learn More
                  </Button>
                </CardActions>
              </CardActionArea>
            </CardContent>
          </Card>
        </>
      ))}
      ;
    </div>
  );
}

export default App;
