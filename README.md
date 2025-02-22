# kakkoii-spybot

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![puregram](https://img.shields.io/badge/puregram-2693d8?style=for-the-badge)

A very simple bot for secretly forwarding messages from one account
to another account, chat or channel. Sometimes it is useful.

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

you can get token of bot here: https://t.me/botfather

## install dependencies

```bash
npm i
```

## usage

```bash
node .
```
