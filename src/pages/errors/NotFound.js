import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import PageSkeleton from "../../components/PageSkeleton";
import PageTitle from "../../components/PageTitle";

function NotFound() {
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
          title="404 ERROR"
          subtitle="Sorry, the page could not be found"
        />

        <Button
          onClick={() => navigateTo("/staff")}
          accent
          style={{ width: "auto", marginTop: 20 }}
        >
          GO BACK
        </Button>
      </div>
    </PageSkeleton>
  );
}

export default NotFound;
