import Link from "next/link";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  return (
    <div className="container">
      <div className="card hero">
        <p className="text-display-1 hero-title">
          Let’s start authenticating <br /> with KindeAuth
        </p>
        <p className="text-body-1 hero-tagline">Configure your app</p>

        <Link
          href="https://kinde.com/docs/sdks/nextjs-sdk"
          target="_blank"
          rel="noreferrer"
          className="btn btn-light btn-big"
        >
          Go to docs
        </Link>
        <LoginLink>Sign in</LoginLink>

        <RegisterLink>Sign up</RegisterLink>
      </div>
    </div>
  );
}
