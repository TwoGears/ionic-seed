## Ionic starter template

### Install
  - Clone: `git clone https://github.com/TwoGears/ionic-seed.git`
  - Rename the new `ionic-seed` folder to whatever you want: `mv ionic-seed <APPNAME>`
  - Unlink the project from this repo: `cd APPNAME && rm -rf .git`
  - Set it to your git repo: `git init && git remote add origin <link_to_origin>`
  - Run the setup script: `npm run setup`
  - Use search and replace tool to rename the app (the current name is going to be APPNAME)
  - `ionic serve`

### How to use
  - Follow [John Papa's angular style guide](https://github.com/johnpapa/angular-styleguide)
  - Only work on files in SRC. Don't touch anything in WWW
  - *Note*: deleting or renaming a folder in `app/components` or `scss` will break the watch tasks in gulp
