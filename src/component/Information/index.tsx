import { Typography } from "@mui/material";
const firstImage = require("../../assests/images/firstImage.png");
const secondImage = require("../../assests/images/02.png");
const thirdImage = require("../../assests/images/03.png");
const ans = require("../../assests/images/ans.png");
const nidhi = require("../../assests/images/nidhi.png");
const anju = require("../../assests/images/anju.png");

type TownerType = {
  name: string;
  image: any;
};

const data: TownerType[] = [
  { name: "Ans", image: ans },
  { name: "Nidhi", image: nidhi },
  { name: "Anju", image: anju },
];
const Information = () => {
  return (
    <div>
      <img src={firstImage} className="shadow-2xl" width={"100%"} alt="Senior living hub" />
      <div className="flex">
        <img
          src={secondImage}
          className="rounded shadow-2xl"
          width={"50%"}
          height={"40%"}
          alt="Senior living hub"
        />
        <Typography fontSize={35} className="p-20 font-bold">
          We want to hire the best people, provide the best training and
          education, and support them with the best leadership.
        </Typography>
      </div>

      <div className="flex">
        <Typography fontSize={35} className="p-20 font-bold">
          Relationships are at the heart of Village life, and our team takes the
          time to know each resident so everyone can make the most out of each
          and every day.
        </Typography>
        <img
          src={thirdImage}
          className="rounded shadow-2xl"
          width={"50%"}
          height={"40%"}
          alt="Senior living hub"
        />
      </div>
      <div className="flex justify-evenly m-10">
        {data.map((item: TownerType) => (
          <div className="flex flex-col items-center">
            <img
              src={item.image}
              className="rounded-full shadow-2xl shadow-stone-700"
              width={"50%"}
              alt="Senior living hub"
            />
            <Typography className="p-5 font-bold" fontSize={25} variant="h2">
              {item.name}
            </Typography>
            <Typography  className="font-bold">
              CEO
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;
