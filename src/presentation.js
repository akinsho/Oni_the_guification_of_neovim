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
    Notes,
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
        quartenary: "#CECECE",
    },
    {
        primary: "Montserrat",
        secondary: "Helvetica",
    },
);

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
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
                        <ListItem>Oni's Architecture</ListItem>
                        <ListItem>Who is Oni for?</ListItem>
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
                    <Text margin="10px 0 0" size={6} textColor="secondary" textAlign="left">
                        Oni is a GUI (Graphical User Interface) for Neovim, which aims to provide
                        users with all the power of modal editing without the limitations of a
                        terminal UI.
                    </Text>
                    <Notes>
                        <p>
                            Discuss modal editing in brief (its vim conf so don't need to sell this
                            too hard). However vim has classically been bound to the terminal
                            although with the advent of neovim which can be embedded inside other
                            programs
                        </p>
                    </Notes>
                </Slide>
                <Slide>
                    <Text margin="10px 0 0" size={6} textColor="secondary" textAlign="left">
                        Further Oni aims to provide Neovim with the features of an IDE such as
                        integration with language servers, more advanced syntax highlighting
                    </Text>
                    <Notes>
                        <p>
                            Its now possible to create an IDE with neovim at its core that provides
                            the power and speed of modal editing combined with the nicieites and
                            utilties of a GUI IDE.{" "}
                        </p>
                        <p>
                            A key difference between Oni and alternatives like vscode or sublime
                            with a vim plugin is that at its core Oni is just vim, that means it
                            uses your vim config with all your carefully crafted mappings and
                            scripts and you can use all of your plugins as normal
                        </p>
                    </Notes>
                </Slide>
                <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
                    <BlockQuote>
                        <Quote>Example Quote</Quote>
                        <Cite>Author</Cite>
                    </BlockQuote>
                </Slide>
            </Deck>
        );
    }
}
