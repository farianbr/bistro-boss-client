import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuList from "../Shared/MenuList/MenuList";
import Button from "../../Components/Button/Button";


const PopularMenu = () => {

    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch("menu.json")
        .then(res => res.json())
        .then(data => setMenu(data.filter(item => item.category === "popular")))
    },[])

    return (
        <section>
            <SectionTitle
            subHeading="Check it out"
            heading="Popular Menu"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-6 my-16">
                {menu.map(item => <MenuList
                key={item._id}
                item={item}
                ></MenuList>)}
            </div>
            <Button
            name="view full menu"
            ></Button>
        </section>
    );
};

export default PopularMenu;