export default `
// The passed in 'Oni' object is an instance of the Plugin API
const activate = Oni => {
  // Create a new status bar item using oni's api
  const gitHubRepoItem = Oni.statusBar.createItem(1, gitHubRepo)

  // We use react and export it as a dependency for plugins to use
  const React = Oni.dependencies.React

  const setGitHubRepo = () => {
      const openGitHubRepoCommand = () => {
          Oni.commands.executeCommand("browser.openUrl", "https://github.com/onivim/oni")
      }

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
`;
