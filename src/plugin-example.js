// The passed in 'Oni' object is an instance of the Plugin API
export default`
const activate = Oni => {
  // Create a new status bar item using oni's api
  const gitHubRepoItem = Oni.statusBar.createItem(1, gitHubRepo)

  // We use react and export it as a dependency for plugins to use
  const React = Oni.dependencies.React

  // Create a command a user can call from the command palette
  const openGitHubRepoCommand = () => {
    Oni.commands.executeCommand("browser.openUrl", "https://github.com/onivim/oni")
  }

  const setGitHubRepo = () => {
    const gitHubIcon = Oni.ui.createIcon({
      name: "github",
      size: Oni.ui.iconSize.Default,
    })

    const element = React.createElement("div", { onClick: openGitHubRepoCommand }, gitHubIcon)
    gitHubRepoItem.setContents(element)
  }

  setGitHubRepo()
  gitHubRepoItem.show()
};

module.exports = {
  activate
};
`
