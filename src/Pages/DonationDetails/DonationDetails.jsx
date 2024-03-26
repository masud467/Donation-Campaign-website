import { useParams } from "react-router-dom";
import useDonationData from "../../Hooks/useDonationData";
import { useEffect, useState } from "react";

import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";

const DonationDetails = () => {
  const [singleData, setSingleData] = useState({});
  const { id } = useParams();
  // eslint-disable-next-line no-unused-vars
  const { data, loading } = useDonationData();
  // const idInt = parseInt(id)
  console.log(id, singleData);

  useEffect(() => {
    if(data){
      const singleData = data.find((item) => item.id == id);
    console.log(singleData);
    setSingleData(singleData);
    }
  }, [data, id]);

  const {
    picture,
    title,
    text_button_bg,
    description,
    price
} = singleData || {}
  return (
    <Card className=" w-full max-w-7xl mx-auto  overflow-hidden mt-20">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 relative"
      >
        <img className="w-full h-[650px] rounded-md"
          src={picture}
          alt="ui/ux review check"
        />
        <div className="h-28 bg-black bg-opacity-40 absolute bottom-0 w-full pl-10">
        <Button style={{backgroundColor:text_button_bg}} className="mt-8 capitalize text-xl" size="lg" >Donate ${price}</Button>
        </div>
      </CardHeader>
      <CardBody>
        <Typography variant="h2" color="blue-gray">
          {title}
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal">
          {description}
        </Typography>
      </CardBody>
      
    </Card>
  );
};

export default DonationDetails;
