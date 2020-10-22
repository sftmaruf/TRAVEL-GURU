import { firebaseConfig } from "./firebaseConfig.config";
import "firebase/auth";
import * as firebase from "firebase/app";
import { signOutLocalClean } from "../localStorageMechanism/localStorageMechanism";
import { signOutSessionClean } from "../sessionStorageMechanism/SessionStorageMechanism";


firebase.initializeApp(firebaseConfig);
const googleProvider = new firebase.auth.GoogleAuthProvider();
const faceebookProvider = new firebase.auth.FacebookAuthProvider();


export const googleSignIn = () => {
    return firebase.auth().signInWithPopup(googleProvider)
        .then(result => {
            const { uid, displayName, email, photoURL } = result.user;
            return newUser(uid, displayName, email, photoURL);
        })
        .catch(error => {
            return error.message;
        });
}

export const facebookSignIn = () => {
    return firebase.auth().signInWithPopup(faceebookProvider)
        .then(result =>  {
            const { uid, displayName, email, photoURL } = result.user;
            return newUser(uid, displayName, email, photoURL);
        }).catch(function (error) {
            alert(error.code);
        });

}

export const signUpEmail = (email, password, name) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(result => {
            updateInformation(name);
            verificationMail();
            alert("User created successfully");
        })
        .catch(error => {
            alert(error.message);
        });
}

export const signOut = () => {
    firebase.auth().signOut().then(function () {
        signOutLocalClean();
        signOutSessionClean();
        alert("Signout Successful");
        document.location.reload();
    }).catch(function (error) {
        alert(error.code);
    });

}

export const signInEmail = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(result => {
            const { uid, displayName, email, photoURL, emailVerified } = result.user;
            return newUser(uid, displayName, email, photoURL, emailVerified);
        })
        .catch(function (error) {
            return error.code;
        });
}

const updateInformation = (name) => {

    const user = firebase.auth().currentUser;

    user.updateProfile({
        displayName: name
    }).then(res => {
    }).catch(error => {
        alert(error.code);
    });
}

const verificationMail = () => {
    var user = firebase.auth().currentUser;

    user.sendEmailVerification()
        .then(result => {
        }).catch(function (error) {
        });
}

export const forgotPassword = () => {
    const email = prompt("Enter your email address");
    if (/\S+@\S+.\S+/.test(email)) {
        var auth = firebase.auth();

        auth.sendPasswordResetEmail(email).then(function () {
            alert('Mail sent successfully');
        }).catch(function (error) {
        });
    } else {
        alert('Please enter a valid email address');
    }
}

const newUser = (uid, displayName, email, photoURL, emailVerified) => {

    const newUser = {
        uid: uid,
        name: displayName,
        email: email,
        photoURL: photoURL,
        emailVerified: emailVerified
    }

    return newUser;
}








