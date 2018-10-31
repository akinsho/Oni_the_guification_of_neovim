// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Notes
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE"
  },
  {
    primary: "Montserrat",
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
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Oni: The GUI-fication of Neovim
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={6}>
            Akin Sowemimo
          </Text>
          <Notes>
            <p>
              {`Introduce myself the project, explain that I'm a collaborator. Shout out
                            to oni's awesome maintainer, collaborators and community.`}
            </p>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Talking Points
          </Heading>
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
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            What is Oni?
          </Heading>
          <Text
            margin="10px 0 0"
            size={6}
            textColor="secondary"
            textAlign="left"
          >
            Oni is a GUI (Graphical User Interface) for Neovim, which aims to
            provide users with all the power of modal editing without the
            limitations of a terminal UI.
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
          <Text
            margin="10px 0 0"
            size={6}
            textColor="secondary"
            textAlign="left"
          >
            Further Oni aims to provide Neovim with the features of an IDE such
            as integration with language servers, more advanced syntax
            highlighting
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
          <Heading>Who is Oni for?</Heading>
          <Text>
            Oni - aims to expand on the core vim experience by providing
            additional features and an enhanced GUI we try to ensure that as
            many features as possible can be toggled or configured. The aim is
            also to lessen the amount of time and effort that goes into setting
            up vim (or at least of the visual aspects of setting up vim). We see
            oni as being a good choice for vim users who want the features of an
            IDE, or for new users who are curious about trying a fully fledged
            modal editor
          </Text>
          <Notes>
            This isn't to say that we purposely exclude any users however there
            are likely vim users who rely on vim's minimalism and portablility
            and a such having to download an app with a gui shell will not
            provide the right experience.
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading>Oni's Architecture</Heading>
          <Text>
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
          <Heading>Where are we now?</Heading>
          <Text>
            Some of Oni's most recently implemented features include -
          </Text>
          <List>
            <ListItem>
              Improved Syntax highlighting - based on textmate
            </ListItem>
            <ListItem>
              File explorer - which prioritises navigation via the keyboard
              using, vim like mappings
            </ListItem>
            <ListItem>
              VCS Integration - currently only Git is supported but the
              framework exists to add more vcs
            </ListItem>
            <ListItem>
              Achievements - This functionality is aimed at getting new users
              interested in learning to use vim
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading>Where are we going?</Heading>
          <Text>
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
            Reasonml based desktop application framework we are developing called Revery. This
            will eliminate the need to ship a chromium browser with the app.
          </Text>
        </Slide>
      </Deck>
    );
  }
}
