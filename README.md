# payload-character-sheet

This project was created using create-payload-app using the blank template.

This project is meant to use Payload CMS to provide a database (using Mongo), API, and admin UI, and authentication/user role system for managing characters, campagins, and more for various TTRPGs (tabletop role playing games).

# The Real Purpose

I wanted to be able to support any and many frontends for different types of character sheets and campaigns and such, so this is meant to build one unified API for all of them.
This way, I or anywone can use the API to build a frontend in whatever manner they like!

I plan to use Svelte to build the 5e character sheet, and potentially the Kids on Brooms character sheet in the future.

# Things to Do

In no particular order...
- [ ] Add Advanced 5e Character sheet support
- [ ] Figure out sign up
- [ ] Work on more granular and fine tuned access control
- [ ] Develop 5e frontend
- [ ] Develop KoB frontend
- [ ] Make and expose API methods for common operations such as taking damage/healing, leveling up, etc. that do the required calculatinos for you.
- [ ] Figure out how to get this up and running on Railway (not sure why it's not working but I keep getting a 503 error).

## How to Use

`npm run dev` will start up your application and reload on any changes.
