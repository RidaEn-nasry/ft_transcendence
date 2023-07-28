# ft_transcendence
This project is about creating a multiplayer real-time ping-Pong game webapp with friends, invites, chat and many more.

![pingpong](https://github.com/RidaEn-nasry/ft_transcendence/assets/65143740/49000809-bce7-435e-9e4d-c45f6f51fb04)

# Overview
Users can play Pong with others in a nice user interface, a chat, and real-time multiplayer online games!

- Backend is written in NestJS & typescript.
- PostgreSQL is used as a database.
- The website is single-page application.
- The website is compatible with the latest stable up-to-date version of Google Chrome and firefox.
- Everything can to be launched by a single call to: docker-compose up --build


# Security concerns
 a few security concerns that we have taken into consideration: 
 
- All passwords stored in the database are hashed beforehand.
- The website is protected against SQL injections.
- Ther is a server-side validation for forms and any user input.

# User Account
The user can login using the OAuth system of 42 intranet.
- The user is  able to choose a unique name that will be displayed on the website.
- The user is able to upload an avatar. If the user doesn’t upload an avatar, a default one is set.
- The user is able to enable two-factor authentication. For instance, Google Authenticator.
- The user is able to add other users as friends and see their current status (online, offline, in a game, and so forth).
- Stats (such as: wins and losses, ladder level, achievements, and so forth) is displayed on the user profile.
- Each user has a Match History including 1v1 games, ladder... Anyone who is logged in should be able to consult it.

# Chat

- The user can create channels (chat rooms) that can be either public, or private, or protected by a password.
- The user can send direct messages to other users.
- The user can block other users. This way, they will see no more messages from the account they blocked.
- The user who has created a new channel is automatically set as the channel owner until they leave it.
	- The channel owner can set a password required to access the channel, change it, and also remove it.
	- The channel owner is a channel administrator. They can set other users as administrators.
◦ The administrators of a channel can ban or mute users for a limited time.
- The user can invite other users to play a Pong game through the chat interface.
- The user can access other players profiles through the chat interface.

# Game
The main purpose of this website is to play Pong versus other players and show everyone how good you are!
- Therefore, users can play a live Pong game versus another player directly on the website.
- There's a matchmaking system: the user can join a queue until they get automatically matched with someone else.
- The game is faithful to the original Pong (1972).
- The game is responsive!

# Data Base

- [The data-base diagram](https://drawsql.app/teams/ft-transcendence-1/diagrams/ft-transcendence)

# Contributers

- [Mohamed SAOUAB](https://github.com/msaouab)
	- [intra](https://profile.intra.42.fr/users/msaouab)
	- [linkedin](https://www.linkedin.com/in/msaouab/)
- [Ilyass QESSAM](https://github.com/iqessam)
	- [intra](https://profile.intra.42.fr/users/iqessam)
	- [linkedin](https://www.linkedin.com/in/ilyassqessam/)
- [Ismail Choukri](https://github.com/ichoukri)
	- [intra](https://profile.intra.42.fr/users/ichoukri)
- [Rida En-nasry](https://github.com/RidaEn-nasry)
	- [intra](https://profile.intra.42.fr/users/ren-nasr)
	- [linkedin](https://www.linkedin.com/in/rida-ennasry/)
- [Mohamed Behhar](https://github.com/MohamedBehhar)
	- [intra](https://profile.intra.42.fr/users/mbehhar)
	- [linkedin](https://www.linkedin.com/in/mohamed-behhar-332025155/)

# Technology used
<img src="https://img.shields.io/badge/NestJS-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
<img src="https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white" />
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />
<img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" />
<img src="https://img.shields.io/badge/-Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" />
<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />

