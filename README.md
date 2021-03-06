# Essentialism studies 

This study uses https://github.com/nyu-cdsc/toku to run the experiment. See the .readme for how to install the application on your computer for the first time. 

## For lab members who are running the study on computers where the study has already been installed:

### Updating the game before running it:
For this, you will need to be connected to the internet. 

1) Locate the folder titled `essentialism` on the lab computer. This is likely installed on the Desktop. Open the folder using VS Code. You can possibly do this by right clicking on the folder (there might be an option that says "Open with Code"). If that option is not available, open VS Code, click "File" (on the top left corner), and then click "Open Folder". Find the `essentialism` folder.

2) Open up a terminal. You can do this by clicking "Terminal" and then "New Terminal" on the top menu, or by clicking `CTRL` + `SHIFT` + `` ` ``. 

3) Type `git pull` into the terminal and press "Enter". This ensures you have the latest version of the study you are running. Close VS code and follow the steps below to run the game. 

### For computers that have Visual Studio (VS) Code: 
1) Locate the folder titled `essentialism` on the lab computer. This is likely installed on the Desktop. Inside that folder, there will be a folder for the specific essentialism study you are running. 

 - Cross-sectional studies in China, find the folder called `essentialism_toku`. 
 - Cross-sectional studies in the US, find the folder called `essentialism_cmom`.
 - Timepoint 1 in the longitudinal studies in the US, find the folder called `essentialism_preK_T1`.
 - Timepoint 2 in the longitudinal studies in the US, find the folder called `essentialism_preK_T2`.

2) Open the folder for your specific studying with VS Code. You can possibly do this by right clicking on the folder (there might be an option that says "Open with Code"). If that option is not available, open VS Code, click "File" (on the top left corner), and then click "Open Folder". Find the folder for your study and open it. 

3) Open up a terminal. You can do this by clicking "Terminal" and then "New Terminal" on the top menu, or by clicking `CTRL` + `SHIFT` + `` ` ``. 
3b) If study has never been ran on this computer before, type `npm install` into the terminal. This might take a moment. 

4) Type `npm start` into the terminal. This starts the game. This might take a moment. Wait for the terminal to tell you that the app has been "compiled successfully."

5) Open up an internet browser (Firefox or Chrome tend to work best), and type `localhost:4200` into the URL. 

### For computers that don't have VS Code installed:
The steps are quite similar as above. You'll be opening the terminal directly and entering a few extra commands. 

2) Get inside the folder containing the app. E.g., if the app is located on your desktop, type `cd Desktop/essentialism/essentialism_toku`

Follow steps 4 - 6 described above. 
