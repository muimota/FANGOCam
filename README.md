# FANGØ CAM

In 2018 Google launched a google photos service that promised to make life easier for the user. The service would consist of a program installed by default on all android devices, with versions for IOS that made all photos taken with it to be uploaded for free to their cloud would make them easier to share and save. What they did not say in such a clear way is that those images were going to be used to train their recognition AI and improve their services.

At the same time Amazon would launch Amazon Photos, a service with similar features that would serve to train its Amazon Rekognition service used by a number of U.S. government agencies and police departments, including U.S. Immigration and Customs Enforcement (I.C.E).

FANGØCam is a mobile camera application whose main feature is that the captured images by user are obfuscated making them unrecognizable and with no value to Big Tech as they cannot be used to train their recognition systems. This obfuscation process would be reversible so the user would still be able to access the photos by deobfuscating them.

FANGØCam proposes to continue the line of work initiated with FANGØ (2020) as a weapon of defense against surveillance capitalism. If FANGØ was a device that obfuscated our behavior in the network by generating artificial interactions that hinder the extraction of value. FANGØcam aims to prevent the extraction of value from our image gallery and to parasitize the archives and infrastructures of these companies.

## Objectives

to make a photography app that takes encrypted photos an app that decrypts them

The exhibition space will show how the app works by making aesthetic explorations of image processing.

## References

http://meiac.es/netescopio/algoritmia/e-algoritmia.html  
https://www.theverge.com/2020/11/11/21559930/google-train-ai-photos-image-labelling-app-android-update  
http://manovich.net/index.php/projects/automating-aesthetics-artificial-intelligence-and-image-culture  
https://www.youtube.com/watch?v=oLTNtvIHJ7M  
https://www.captchatweet.com/

# CODE

This code is based in [google photos examples](https://github.com/googlesamples/google-photos)

**WARNING:** The code contained within this software is experimental and has not undergone rigorous testing. Use at Your Own Risk: The author and contributors of this software make no warranties, express or implied, regarding the fitness for a particular purpose, the accuracy, completeness, or reliability of the code.

# INSTALLATION

## API tokens

Rename **config.default.js** to **config.js** with all the tokens filled

## Run Local

First install all the dependencies`npm install`  
Run de app `node app.js`

## Docker

Create image `docker build -t fangocam .`  
Run image `docker run -it -p 8080:8080 fangocam:latest`
