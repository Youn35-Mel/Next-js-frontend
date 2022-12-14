import { useRouter } from "next/router";

import React from "react";

const EventPage = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <div>EventPage slug</div>
      <h3>{router.query.slug}</h3>
    </div>
  );
};

export default EventPage;
