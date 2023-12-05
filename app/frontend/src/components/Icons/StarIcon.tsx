import React, { useState } from "react";
import { Button } from "@nextui-org/react";

export default function StarIcon() {
  const [IsFavo, setIsFavo] = useState(false);

  return (
    <Button isIconOnly className=" bg-white" onClick={() => setIsFavo(!IsFavo)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
      >
        {IsFavo ? (
          <path
            d="M10.9755 3.84549L10.5 2.38197L10.0245 3.84549L8.45287 8.68237H3.36708H1.82823L3.07318 9.58688L7.18768 12.5762L5.61608 17.4131L5.14055 18.8766L6.3855 17.9721L10.5 14.9828L14.6145 17.9721L15.8594 18.8766L15.3839 17.4131L13.8123 12.5762L17.9268 9.58688L19.1718 8.68237H17.6329H12.5471L10.9755 3.84549Z"
            fill="#FFD662"
            stroke="black"
          />
        ) : (
          <path
            d="M10.9755 3.84549L10.5 2.38197L10.0245 3.84549L8.45287 8.68237H3.36708H1.82823L3.07318 9.58688L7.18768 12.5762L5.61608 17.4131L5.14055 18.8766L6.3855 17.9721L10.5 14.9828L14.6145 17.9721L15.8594 18.8766L15.3839 17.4131L13.8123 12.5762L17.9268 9.58688L19.1718 8.68237H17.6329H12.5471L10.9755 3.84549Z"
            fill="#FFFFFF"
            stroke="black"
          />
        )}
      </svg>
    </Button>
  );
}
