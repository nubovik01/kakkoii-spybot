# kakkoii-spybot

A very simple bot for covertly forwarding messages from one account to another account, chat
or channel. Useful if you are sitting on other account but need to save something quickly,
or if you just don't want to save something to your device (AKA "Saved Messages" #2).

## install node (on macos/windows)

1. download node.js: https://nodejs.org/en
2. restart your pc or reopen vsc & terminal with admin rights

## install node (on arch linux)

```bash
sudo pacman -S --needed base-devel git
git clone https://aur.archlinux.org/nvm.git ~/nvm
cd ~/nvm
makepkg -si
```

## install node (on ubuntu)

```bash
sudo apt update
sudo apt install curl
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
source ~/.profile
nvm install node
```

## environment variables

rename `.env.example` to `.env` and fill in the variables

you can get your/channel/chat id use https://t.me/usinfobot

## install dependencies

```bash
npm i
```

## usage

```bash
node .
```