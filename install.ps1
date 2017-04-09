if (Test-Path 'install.lock') { return }
ni install.lock -Type file -Force | Out-Null

# Install chocolatey
iwr https://chocolatey.org/install.ps1 -UseBasicParsing | iex

# Install yarn
cinst yarn

# Install Gulp
yarn global add gulp-cli
yarn global add gulp

$env:Path += ";%localappdata%\Yarn\config\global\node_modules\.bin"
[Environment]::SetEnvironmentVariable("Path", $env:Path, [EnvironmentVariableTarget]::User)
