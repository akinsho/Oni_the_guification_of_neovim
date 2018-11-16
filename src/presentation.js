// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Layout,
  Fill,
  Image,
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Notes
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// import team pics
import bryan from "./images/bryan.png";
import ryan from "./images/ryan.png";
import manuel from "./images/manuel.jpg";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "#03A9FC",
    secondary: "white",
    tertiary: "#1F2022",
    quartenary: "#CECECE"
  },
  {
    primary: "Fira Code",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]}>
          <Heading size={1} fit caps lineHeight={1}>
            Oni: The GUI-fication of Neovim
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={6}>
            Akin Sowemimo
          </Text>
          <Notes>
            <p>
              {`Introduce myself the project, explain that I'm a collaborator. Shout out
                to oni's awesome maintainer, collaborators and community.`}
            </p>
          </Notes>
        </Slide>
        <Slide>
          <p>Hi 👋🏾</p>
          <p>Software Developer @Monzo</p>
          <p>Twitter -> @Akin_So</p>
        </Slide>
        <Slide textColor="tertiary">
          <Heading size={6}>The Team</Heading>
          <Layout>
            <Fill>
              <figure style={{ display: "inline-block" }}>
                <Image height="200px" width="250" src={bryan} />
                <figcaption>Bryan</figcaption>
              </figure>
              <figure style={{ display: "inline-block" }}>
                <Image height="200px" width="250" src={ryan} />
                <figcaption>Ryan</figcaption>
              </figure>
              <figure style={{ display: "inline-block" }}>
                <Image height="200px" width="250" src={manuel} />
                <figcaption>Manuel</figcaption>
              </figure>
              <figure style={{ display: "inline-block" }}>
                <figcaption>Tal</figcaption>
              </figure>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={6}>Talking Points</Heading>
          <List>
            <ListItem>What is Oni?</ListItem>
            <ListItem>Who is Oni for?</ListItem>
            <ListItem>Oni's Architecture</ListItem>
            <ListItem>Where are we now?</ListItem>
            <ListItem>The Future of Oni</ListItem>
          </List>
          <Notes>
            <p>Brief overview of what we are going to be talking about</p>
          </Notes>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={6}>What is Oni?</Heading>
          <Text margin="10px  0" size={6} textAlign="left">
            Oni is a Graphical User Interface(GUI) for Neovim.
          </Text>
          <Text margin="20px 0 0" size={6} textAlign="left">
            It allows users to have all the power of modal editing without the
            limitations of a terminal UI
          </Text>
          <Notes>
            <p>
              Discuss modal editing in brief (its vim conf so don't need to sell
              this too hard). However vim has classically been bound to the
              terminal although with the advent of neovim which can be embedded
              inside other programs
            </p>
          </Notes>
        </Slide>
        <Slide>
          <Text margin="10px 0 0" size={6} textAlign="left">
            But Oni does more than that. Oni allows Neovim to have features of
            an IDE such as integration with language servers, more advanced
            syntax highlighting
          </Text>
          <Notes>
            <p>
              Its now possible to create an IDE with neovim at its core that
              provides the power and speed of modal editing combined with the
              nicieites and utilties of a GUI IDE.{" "}
            </p>
            <p>
              A key difference between Oni and alternatives like vscode or
              sublime with a vim plugin is that at its core Oni is just vim,
              that means it uses your vim config with all your carefully crafted
              mappings and scripts and you can use all of your plugins as normal
            </p>
          </Notes>
        </Slide>
        <Slide>
          <Heading size={6}>Who is Oni for?</Heading>
          <Text margin="10px 0 0" size={6} textAlign="left">
            Oni - aims to expand on the core vim experience by providing
            additional features and an enhanced GUI we try to ensure that as
            many features as possible can be toggled or configured.
          </Text>
          <Notes>
            This isn't to say that we purposely exclude any users however there
            are likely vim users who rely on vim's minimalism and portablility
            and a such having to download an app with a gui shell will not
            provide the right experience.
          </Notes>
        </Slide>
        <Slide transition={["fade"]}>
          <Text margin="10px 0 0" size={6} textAlign="left">
            The aim is also to lessen the amount of time and effort that goes
            into setting up vim (or at least of the visual aspects of setting up
            vim). We see oni as being a good choice for vim users who want the
            features of an IDE, or for new users who are curious about trying a
            fully fledged modal editor
          </Text>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={6}>Oni's Architecture</Heading>
          <Text margin="10px 0 0" size={6} textAlign="left">
            Oni is an electron app, written with React, Typescript
            commnunication with Neovim via the msgpack API.
          </Text>
          <Notes>
            Describe the advantages (well supported, cross-platform) and
            disadvantages (i.e. memory consumption, performance bottleneck) of
            Electron
          </Notes>
        </Slide>
        <Slide>
          <Heading size={6}>Where are we now?</Heading>
          <Layout>
            <Fill>
              <Text size={6} textAlign="left">
                Some of Oni's most recently implemented features include -
              </Text>
              <List>
                <ListItem size={6}>
                  Improved Syntax highlighting - based on textmate
                </ListItem>
                <ListItem size={6}>
                  File explorer - which prioritises navigation via the keyboard
                  using, vim like mappings
                </ListItem>
                <ListItem size={6}>
                  VCS Integration - currently only Git is supported but the
                  framework exists to add more vcs
                </ListItem>
                <ListItem size={6}>
                  Achievements - This functionality is aimed at getting new
                  users interested in learning to use vim
                </ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <Heading size={5}>Where are we going?</Heading>
          <Text margin="10px 0 0" size={6} textAlign="left">
            Performance has always been one of the major advantages of using
            vim, it has always had a very quick startup time and not been too
            memory intensive. We feel that whilst electron and typescript have
            provided us the advantages of the ecosystem the tradeoff re.
            peformance might be too great. So...
          </Text>
        </Slide>
        <Slide>
          <Text>
            We are prototyping Oni V2 - which will use a highly performant
            Reasonml based desktop application framework we are developing
            called Revery. This will eliminate the need to ship a chromium
            browser with the app.
          </Text>
        </Slide>
      </Deck>
    );
  }
}
