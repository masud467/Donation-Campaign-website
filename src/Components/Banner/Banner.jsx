import { Button, Input, Typography } from "@material-tailwind/react";
import React from "react";

const Banner = () => {
  const [email, setEmail] = React.useState("");
  const onChange = ({ target }) => setEmail(target.value);

  return (
    <div className="h-[450px] relative border-2 border-red-700 flex flex-col justify-center items-center">
        <div className="absolute inset-0 bg-[url('/images/Health.png')] bg-cover bg-no-repeat bg-center opacity-10">

        </div>
      <Typography className="mb-5" variant="h2">I Grow By Helping People In Need</Typography>

      <div className="relative flex w-full max-w-[24rem]">
        <Input
          type="email"
          label="Search here"
          value={email}
          onChange={onChange}
          className="pr-20"
          containerProps={{
            className: "min-w-0",
          }}
        />
        <Button
          size="sm"
          color='red'
          disabled={!email}
          className="!absolute right-1 top-1 rounded"
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default Banner;
