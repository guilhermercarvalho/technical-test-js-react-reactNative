#!/usr/bin/env zsh

# Install antigen
curl -L git.io/antigen > $HOME/.antigen.zsh

# Update zshrc
sed -i 's/antigen.zsh/.antigen.zsh/' $HOME/.antigen.zsh

# zsh-completion
git clone https://github.com/zsh-users/zsh-completions ${ZSH_CUSTOM:=~/.oh-my-zsh/custom}/plugins/zsh-completions

# add plugins
sed -i 's/^plugins=.*/plugins=(git sudo zsh-completions zsh_reload)\nautoload -U compinit \&\& compinit/' $HOME/.zshrc

# remove default theme
sed -i 's/^ZSH_THEME="codespaces"$/#ZSH_THEME="codespaces"/' $HOME/.zshrc

# append to zshrc
cat << EOF >> $HOME/.zshrc

# Load Antigen
source $HOME/.antigen.zsh

# Load oh-my-zsh library.
antigen use oh-my-zsh

# Load bundles from external repos.
antigen bundle zsh-users/zsh-autosuggestions
antigen bundle zsh-users/zsh-syntax-highlighting
antigen bundle chrisands/zsh-yarn-completions

antigen theme denysdovhan/spaceship-prompt

# Tell Antigen that you're done.
antigen apply
EOF

source $HOME/.zshrc

# NodeJS
npm install -g eslint npm-check serve
