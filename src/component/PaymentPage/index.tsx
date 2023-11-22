import { Button, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
const menu = require("../../assests/images/menuOption.png");
const suitesPrice = require("../../assests/images/suitesPrice.png");

const Payment = () => {
  return (
    <div className="mt-14 flex flex-col">
      <div className="p-5">
        <Typography fontSize={30} variant="h4" className="p-5">
          The Village of Arbour Trails offers our full range of retirement
          living options just across Stone Road from the University of Guelph.
          It shares a unique proximity to its neighbours in The Village by the
          Arboretum, whose residents are regular visitors.
        </Typography>

        <Typography fontSize={22} className="p-5">
          Integration with the surrounding community is a core value at Schlegel
          Villages, and Arbour Trails offers a fine example of this integration
          in action It's not uncommon at all to see outside community groups
          running meetings or hosting events in the Village's common spaces, and
          it's always wonderfu to see neighbours coming together for events
          outside on the beautiful Village grounds.
        </Typography>
        <Divider />
        <div className="flex justify-evenly">
          <div className="flex flex-col justify-center items-center my-5">
            <Typography fontSize={30} variant="h3" className="py-10">
              Suites & Pricing
            </Typography>
            <img
              src={suitesPrice}
              alt="senior living hub"
              width={"500px"}
              height={"500px"}
            />
            <div className="flex items-center mt-3">
              <div className="border rounded-lg bg-white py-3 px-10">
                <Typography>$50</Typography>
              </div>
              <Button variant="contained" className="ms-4">
                Book a Tour
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center my-5">
            <Typography fontSize={30} variant="h3" className="py-10">
              Suites & Pricing
            </Typography>
            <img
              src={suitesPrice}
              alt="senior living hub"
              width={"500px"}
              height={"500px"}
            />
            <div className="flex items-center mt-3">
              <div className="border rounded-lg bg-white py-3 px-10">
                <Typography>$50</Typography>
              </div>
              <Button variant="contained" className="ms-4">
                Book a Tour
              </Button>
            </div>
          </div>
        </div>
        <Divider />
        <div className="flex flex-col justify-center items-center my-5">
          <Typography fontSize={30} variant="h3" className="py-10">
            Menu
          </Typography>
          <img
            src={menu}
            alt="senior living hub"
            width={"1100px"}
            height={"1600px"}
          />
        </div>
      </div>
    </div>
  );
};
export default Payment;
