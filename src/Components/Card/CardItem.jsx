/* eslint-disable react/prop-types */
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const CardItem = ({ item }) => {
  // console.log(item);
  const {
    id,
    picture,
    title,
    category,
    category_bg,
    card_bg,
    text_button_bg
  } = item;
  return (
    <Link to={`/donation-details/${id}`}>
      <Card style={{ backgroundColor: card_bg }} className="mt-6 p-5">
        <CardHeader color="blue-gray" className="relative h-56">
          <img src={picture} alt="card-image" />
        </CardHeader>
        <CardBody>
          <Button
            size="sm"
            style={{ backgroundColor: category_bg, color: text_button_bg }}
            className="mb-4"
          >
            {category}
          </Button>
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-2"
            style={{ color: text_button_bg }}
          >
            {title}
          </Typography>
        </CardBody>
      </Card>
    </Link>
  );
};

export default CardItem;
