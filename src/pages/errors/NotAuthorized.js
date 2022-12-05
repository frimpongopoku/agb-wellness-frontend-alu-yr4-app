import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import PageSkeleton from "../../components/PageSkeleton";
import PageTitle from "../../components/PageTitle";

function NotAuthorized() {
  const navigateTo = useNavigate();
  return (
    <PageSkeleton>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <PageTitle
          title="401 ERROR"
          subtitle="Sorry, please sign in to continue..."
        />

        <Button
          onClick={() => navigateTo("/login")}
          accent
          style={{ width: "auto", marginTop: 20 }}
        >
          SIGN IN
        </Button>
      </div>
    </PageSkeleton>
  );
}

export default NotAuthorized;
