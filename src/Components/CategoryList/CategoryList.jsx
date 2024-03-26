import useDonationData from "../../Hooks/useDonationData";
import CardItem from "../Card/CardItem";



const CategoryList = () => {

    // eslint-disable-next-line no-unused-vars
    const { data, loading } = useDonationData()
    // console.log(data)
    return (
        <div className="grid grid-cols-4 mt-12 gap-8">
          {
            data.map(item=> <CardItem key={item.id} item={item}></CardItem>)
          } 
        </div>
    );
};

export default CategoryList;