# How To Help Out!
1. Check if you have node and npm installed with ```node -v``` and then ```npm -v```
2. If you don't, head to npmjs.com(https://www.npmjs.com) to get them
3. Fork the repository
4. Clone your fork to your computer with ```git clone <insert-repo-url>``` (this will create the project directory, so make sure you have it where you want it!)
5. Then run ```git remote add upstream <insert-repo-url>```
6. Next, create a branch for the changes you want to make, using ```git checkout -b <branch-name>``` (make sure the name indicates the nature of the changes you are making)
7. Run ```npm install --save-dev electron```
8. Then run ```npm install jquery```
9. You are finished with setup! You should now be able to do ```npm start``` to start the application!
10. Now you can make your changes, adding them with ```git add <files>``` and then committing with ```git commit -m "<Your-commit-message-here>"```
11. When you are finished, do ```git pull -rebase upstream master``` This will make sure your changes and any other changes made while you were working on your project are in sync.
12. Finally, do ```git push origin <branch-name>```
12. Now, navigate to your fork's page on github, and click on the notification to create a pull request. Fill out the form and you are finished!
