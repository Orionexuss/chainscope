"use server";

import { signIn } from "@/auth";

export async function handleGoogleSignIn() {
  await signIn("google");
}


export async function handleDiscordSignIn() {
  await signIn("discord");
}


export async function handleGithubSignIn() {
  await signIn("github");
}
