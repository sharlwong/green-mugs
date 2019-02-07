# green-mugs

## How to install and set up the code

### 1. Make sure you have the following installed on your laptop:
- Everything inside this video tutorial for React Native/Expo: https://www.youtube.com/watch?v=RO6csdbmb4Q
- Sublime Text 3
- Node.js
- Git
- iTerm2 (if you’re on Macbook)

### 2. Make sure you have the Expo app installed on your phone. It’s available for both Android and Apple.

### 3. Go to https://github.com/sharlwong/green-mugs
- Click on the green button “Clone or Download”
- Copy the URL, which should be “https://github.com/sharlwong/green-mugs.git”

### 4. Open your iTerm (if you’re on Mac) or Git Bash (if you’re on Windows).
- Type `cd Desktop`
- Type `git clone https://github.com/sharlwong/green-mugs.git`
- You should see the green-mugs folder appear on Desktop.

### 5. Run the green-mugs code on the computer + phone
- Type `cd green-mugs`
- Type `npm start` and you will:
- See a QR code appear
- Observe the line `Expo DevTools is running at http://localhost:19002` (Please check this is the URL appearing on your computer)
- Copy `http://localhost:19002 <or whatever the URL is>` and open it in your laptop’s browser

If you have an Android phone, open your Expo app and use the `Scan QR Code` function to scan the QR code. Make sure your Android phone and laptop are connected on the same Wi-Fi network.

If you have an iPhone, do the following steps instead:
- Click on `Tunnel`
- Click on `Send link with email/SMS` and make sure that you enter either your iPhone’s phone number (with a +65 in front) or the email that can be accessed on your iPhone
- Click on the `exp://...` link that appears in the email or sms. It should automatically open your Expo app.
- Make sure your iPhone and laptop are connected on the same Wi-Fi network.

### 6. Check that the phone is rendering the green-mugs project

### 7. Open the code on Sublime 3

If you’re on MacBook:
Open Sublime 3 > Click `Open` > Go to Desktop > Select the `green-mugs` folder > Click `Open` button. You should be able to see the entire code folder opened in Sublime.

If you’re on Windows:
Open Sublime 3 > Click `Open Folder`  > Go to Desktop > Select the `green-mugs` folder > Click `Open` button. You should be able to see the entire code folder opened in Sublime.


## Useful references during development

### React Native Styling Cheatsheet

https://github.com/vhpoet/react-native-styling-cheat-sheet

### Scan Screen

`BarCodeScanner` and `Permissions` libraries from Expo was used to build the functionality of scanning a QR code.

Read here for more details on how we implemented the modal that pops up after QR code is scanned:
https://reactnativecode.com/react-native-modal-ios-android/

### Navigation Menu

The `react-navigation` library was used to build the navigation bar.

We adapted our implementation of the drawer navigation menu from this tutorial:
https://shift.infinite.red/react-navigation-drawer-tutorial-a802fc3ee6dc

We adapted our implemention of the hamburger menu button from this Github thread:
https://github.com/react-navigation/react-navigation/issues/1122

### Fonts

Custom fonts: 
`Abeezee` - https://fonts.google.com/specimen/ABeeZee?selection.family=ABeeZee
`Roboto` - https://fonts.google.com/specimen/Roboto

Installing custom fonts:
https://docs.expo.io/versions/latest/guides/using-custom-fonts/

Use `Font.loadAsync` function to install custom font:
https://github.com/GeekyAnts/NativeBase/issues/1466

### Dynamically Set the Green Wallet Amount

We used react-native's `AsyncStorage` library to persist and store the wallet amount:

https://medium.com/building-with-react-native/what-is-asyncstorage-in-react-native-and-how-you-to-use-it-with-app-state-manager-1x09-b8c636ce5f6e

https://pusher.com/tutorials/persisting-data-react-native

We referred to this thread to figure out how to pass params into a specific screen:

https://github.com/react-navigation/react-navigation/issues/3787

