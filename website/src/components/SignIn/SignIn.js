import React, { useEffect, useState } from 'react';

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import clsx from "clsx";
import styles from "./SignIn.module.css";


export default function SignInScreen() {

    const {
        siteConfig: {
            customFields: { firebaseConfig },
        },
    } = useDocusaurusContext();

    firebase.initializeApp(firebaseConfig);

    // Configure FirebaseUI.
    const uiConfig = {
        // Popup signin flow rather than redirect flow.
        signInFlow: 'popup',
        // We will display Google and Email as auth providers.
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
            // Avoid redirects after sign-in.
            signInSuccessWithAuthResult: () => false,
        },
    };

    const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

    // Listen to the Firebase Auth state and set the local state.
    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
            setIsSignedIn(!!user);
        });
        return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
    }, []);

    function verifyEmail() {
        !firebase.auth().currentUser.emailVerified && firebase.auth().currentUser.sendEmailVerification()
            .then(() => {
                notify("Email sent. Please check your inbox.");
            })
            .catch((err) => {
                console.error(err);
            });
    }
    function signOut() {
        firebase.auth().signOut()
            .then(() => {
                notify("Signed out successfully");
            })
            .catch((err) => {
                console.error(err);
            });
    }
    function resetPassword() {
        firebase.auth().sendPasswordResetEmail(prompt("Your Email:"))
            .then(() => {
                // Email sent.
                notify("Password reset email sent! Please check your inbox.");
            })
            .catch((err) => {
                // An error happened.
                console.error(err);
            });
    }
    function changeEmail() {
        const newEmail = prompt("Enter new email");
        firebase.auth().currentUser.updateEmail(newEmail)
            .then(() => {
                // Email updated.
                notify("Email updated successfully!");
            })
            .catch((err) => {
                if (err.code === "auth/requires-recent-login") {
                    let conformation =
                        confirm(
                            "You need to reauthenticate before deleting your account. \n so kindly sign in again"
                        ) && confirm("Click yes to sign out and sign in again");
                    if (conformation) {
                        signOut();
                    }
                } else {
                    console.error(err);
                }
            });
    }
    function changeUsername() {
        const displayName = prompt("Enter new username");
        firebase.auth().currentUser.updateProfile({ displayName })
            .then(() => {
                // Username updated.
                notify("Username updated successfully!");
            })
            .catch((err) => {
                if (err.code === "auth/requires-recent-login") {
                    let conformation =
                        confirm(
                            "You need to reauthenticate before deleting your account. \n so kindly sign in again"
                        ) && confirm("Click yes to sign out and sign in again");
                    if (conformation) {
                        signOut();
                    }
                } else {
                    console.error(err);
                }
            });
    }
    function deleteAccount() {
        let confirmation =
            confirm("Are you sure you want to delete your account?") &&
            prompt(`Please type "${firebase.auth().currentUser.email}" without quotes to confirm`) ===
            firebase.auth().currentUser.email;
        if (confirmation) {
            firebase.auth().currentUser.delete()
                .then(() => {
                    notify("Account deleted successfully.");
                })
                .catch((err) => {
                    if (err.code === "auth/requires-recent-login") {
                        let conformation =
                            confirm(
                                "You need to reauthenticate before deleting your account \n so kindly sign in again"
                            ) && confirm("Click yes to sign out to sign in again");
                        if (conformation) {
                            signOut();
                        }
                    } else {
                        console.error(err);
                    }
                });
        }
    }

    // will be implemented later
    function notify(message) {
        alert(message);
    }

    if (!isSignedIn) {
        return (
            <>
                <h2>Please sign-in:</h2>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </>
        );
    }
    return (
        <div className={clsx(styles.profile)}>
            <h2>Welcome {firebase.auth().currentUser.displayName}!</h2>
            <img src={firebase.auth().currentUser.photoURL || `https://avatars.dicebear.com/api/jdenticon/${firebase.auth().currentUser.displayName}.svg`} alt="Profile" className={clsx(styles.profileImage)} />
            <p className={clsx(styles.profileEmail, firebase.auth().currentUser.emailVerified ? styles.verified : styles.notVerified)}>
                {firebase.auth().currentUser.email}
                <span className={clsx(styles.indicator)} onMouseDown={verifyEmail}></span>
            </p>
            <div className={clsx(styles.profileSettings)}>
                <button className={clsx("button button--primary")} onClick={resetPassword}>Forgot Password</button>
                <button className={clsx("button button--primary")} onClick={changeEmail}>Change Email</button>
                <button className={clsx("button button--primary")} onClick={changeUsername}>Change Username</button>
                <button className={clsx("button button--primary")} onClick={signOut}>Sign out</button>
                <button className={clsx(styles.buttonDanger, "button button--primary")} onClick={deleteAccount}>Delete account</button>
            </div>
        </div>
    );
}